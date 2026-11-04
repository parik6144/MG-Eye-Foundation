import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPSTREAM = "https://kivihealth.com";
const PREFIX = "/kivi-embed";

async function proxy(req: NextRequest, pathParts: string[]) {
  const path = pathParts.join("/");
  const target = new URL(`${UPSTREAM}/${path}`);
  target.search = req.nextUrl.search;

  const headers = new Headers();
  const accept = req.headers.get("accept");
  const contentType = req.headers.get("content-type");
  const cookie = req.headers.get("cookie");
  const userAgent = req.headers.get("user-agent");
  if (accept) headers.set("accept", accept);
  if (contentType) headers.set("content-type", contentType);
  if (cookie) headers.set("cookie", cookie);
  headers.set("user-agent", userAgent || "Mozilla/5.0");
  headers.set("accept-language", req.headers.get("accept-language") || "en-IN,en;q=0.9");

  const init: RequestInit = {
    method: req.method,
    headers,
    redirect: "manual",
    cache: "no-store",
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = Buffer.from(await req.arrayBuffer());
  }

  const upstream = await fetch(target, init);
  const upstreamType = upstream.headers.get("content-type") || "";

  const outHeaders = new Headers();
  const skip = new Set([
    "content-security-policy",
    "content-security-policy-report-only",
    "x-frame-options",
    "content-encoding",
    "content-length",
    "transfer-encoding",
    "connection",
  ]);

  upstream.headers.forEach((value, key) => {
    const k = key.toLowerCase();
    if (skip.has(k)) return;
    if (k === "set-cookie") return;
    if (k === "location") {
      outHeaders.set("location", rewriteLocation(value, req));
      return;
    }
    outHeaders.set(key, value);
  });

  const rawCookies = typeof upstream.headers.getSetCookie === "function"
    ? upstream.headers.getSetCookie()
    : [];
  for (const c of rawCookies) {
    outHeaders.append("set-cookie", sanitizeCookie(c));
  }

  outHeaders.set("cache-control", "no-store");

  if (upstreamType.includes("text/html")) {
    let html = await upstream.text();
    html = rewriteHtml(html);
    outHeaders.set("content-type", "text/html; charset=utf-8");
    return new NextResponse(html, { status: upstream.status, headers: outHeaders });
  }

  if (upstreamType.includes("javascript") || upstreamType.includes("json") || upstreamType.includes("text/")) {
    let text = await upstream.text();
    if (upstreamType.includes("javascript") || upstreamType.includes("json")) {
      text = rewriteAssetText(text);
    }
    if (!outHeaders.has("content-type")) outHeaders.set("content-type", upstreamType);
    return new NextResponse(text, { status: upstream.status, headers: outHeaders });
  }

  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, { status: upstream.status, headers: outHeaders });
}

function sanitizeCookie(cookie: string) {
  return cookie
    .replace(/;\s*Domain=[^;]*/gi, "")
    .replace(/;\s*SameSite=None/gi, "; SameSite=Lax");
}

function rewriteLocation(location: string, req: NextRequest) {
  try {
    const abs = new URL(location, UPSTREAM);
    if (abs.origin === UPSTREAM || abs.hostname.endsWith("kivihealth.com")) {
      return `${PREFIX}${abs.pathname}${abs.search}${abs.hash}`;
    }
  } catch {
    /* keep */
  }
  if (location.startsWith("/") && !location.startsWith(PREFIX)) {
    return `${PREFIX}${location}`;
  }
  return location;
}

/** Modal embed: keep Book Appointment fields, hide site chrome, light polish only */
const EMBED_CSS = `
<style id="mg-eye-kivi-embed">
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #fff !important;
    overflow-x: hidden !important;
  }
  .header,
  #profilecardbook,
  footer,
  .footer,
  a[href*="For Doctors"],
  ._kivi_powered_container {
    display: none !important;
  }
  .widemargin {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 12px 14px 16px !important;
    background: #fff !important;
    box-sizing: border-box !important;
  }
  #book-appointment-wrapper {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    background: #fff !important;
    position: static !important;
    top: auto !important;
    overflow: visible !important;
    width: 100% !important;
    max-width: none !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
  }
  .cardhead {
    padding: 4px 2px 10px !important;
  }
  .cardhead .h5 {
    color: #0E4A56 !important;
    font-size: 1.15rem !important;
    font-weight: 700 !important;
    margin: 0 !important;
  }
  .cardhead-tagline {
    display: none !important;
  }
  .cardbody {
    padding: 4px 2px 8px !important;
  }
  .cardbody .form-field {
    padding: 0.4em 0 !important;
  }
  .cardbody .form-control,
  .cardbody select.form-control,
  .cardbody input.form-control {
    font-size: 14px !important;
    min-height: 40px !important;
    border-radius: 10px !important;
    border-color: #d5e0e6 !important;
  }
  .cardbody .form-control:focus,
  .cardbody select.form-control:focus {
    border-color: #1F8A9A !important;
    box-shadow: 0 0 0 2px rgba(31, 138, 154, 0.12) !important;
    outline: none !important;
  }
  .btn-slotdate.active,
  .btn-slotdate.active.visible {
    background: #1F8A9A !important;
    color: #fff !important;
    border-color: #1F8A9A !important;
  }
  .btn.btn-primary,
  button.btn-primary,
  #book-appointment-wrapper .btn-primary {
    background: #1F8A9A !important;
    border-color: #1F8A9A !important;
    border-radius: 999px !important;
  }
  .btn.btn-primary:hover,
  button.btn-primary:hover {
    background: #16707E !important;
    border-color: #16707E !important;
  }
</style>`;

function rewriteHtml(html: string) {
  let out = html;
  out = out.replace(/<base\s[^>]*>/gi, "");
  out = out.replace(/<head([^>]*)>/i, `<head$1><base href="${PREFIX}/">${EMBED_CSS}`);
  out = out.replace(/https?:\/\/(?:www\.)?kivihealth\.com/gi, PREFIX);
  // Path-absolute site routes used by their jQuery ajax (ignore //cdn protocol-relative)
  out = out.replace(/(=["'])\/(?!\/|kivi-embed\/)/g, `$1${PREFIX}/`);
  out = out.replace(/(url:\s*["'])\/(?!\/|kivi-embed\/)/g, `$1${PREFIX}/`);
  out = out.replace(/(url:\s*)\/(?!\/|kivi-embed\/)/g, `$1${PREFIX}/`);
  return out;
}

function rewriteAssetText(text: string) {
  return text
    .replace(/https?:\/\/(?:www\.)?kivihealth\.com/gi, PREFIX)
    .replace(/(["'])\/(?!\/|kivi-embed\/)/g, `$1${PREFIX}/`);
}

type Ctx = { params: Promise<{ path: string[] }> };

export async function GET(req: NextRequest, ctx: Ctx) {
  const { path } = await ctx.params;
  return proxy(req, path || []);
}

export async function POST(req: NextRequest, ctx: Ctx) {
  const { path } = await ctx.params;
  return proxy(req, path || []);
}

export async function PUT(req: NextRequest, ctx: Ctx) {
  const { path } = await ctx.params;
  return proxy(req, path || []);
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  const { path } = await ctx.params;
  return proxy(req, path || []);
}

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const { path } = await ctx.params;
  return proxy(req, path || []);
}
