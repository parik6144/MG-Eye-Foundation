import { createTransport } from "nodemailer";
import path from "path";
import { SITE } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function logoCid() {
  return {
    filename: "mg_logo.png",
    path: path.join(process.cwd(), "public", "mg_logo.png"),
    cid: "mgelogo",
  };
}

function wrapEmail(title: string, inner: string) {
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0F172A;padding:22px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;border-radius:12px;padding:10px 16px;">
                <img src="cid:mgelogo" alt="MG Eye Foundation" width="140" style="display:block;height:auto;max-width:140px;" />
              </div>
              <p style="margin:14px 0 0;color:#ffffff;font-size:18px;font-weight:700;">MG Eye Foundation</p>
              <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">Eye hospital, Bara Gamharia</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#0F172A;">${escapeHtml(title)}</h1>
              ${inner}
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px;background:#F8FAFC;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;line-height:1.6;">
              ${escapeHtml(SITE.address)}, ${escapeHtml(SITE.city)}<br />
              Phone: ${escapeHtml(SITE.phoneDisplay)} · ${escapeHtml(SITE.email)}<br />
              ${escapeHtml(SITE.hours)} · ${escapeHtml(SITE.sunday)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function rows(fields: { label: string; value: string }[]) {
  return fields
    .map(
      (f) => `<tr>
        <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(f.label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0F172A;font-size:14px;font-weight:600;">${escapeHtml(f.value || "—")}</td>
      </tr>`
    )
    .join("");
}

function getTransporter() {
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD?.replace(/^['"]|['"]$/g, "").replace(/\s+/g, "");
  if (!user || !pass) throw new Error("Mail is not set on the server.");

  return createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.MAIL_PORT || 587),
    secure: false,
    requireTLS: true,
    tls: { rejectUnauthorized: false },
    auth: { user, pass },
  });
}

function adminList() {
  const extra = process.env.MAIL_ADMIN || "";
  const list = extra
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  const unique = Array.from(new Set([SITE.email, "parikachevier2013@gmail.com", ...list]));
  return unique.join(",");
}

const fromHeader = () =>
  `"${process.env.MAIL_FROM_NAME || "MG Eye Foundation"}" <${process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USERNAME}>`;

export async function sendAppointmentMails(data: {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  message: string;
}) {
  const transporter = getTransporter();
  const details = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows([
    { label: "Name", value: data.name },
    { label: "Phone", value: data.phone },
    { label: "Email", value: data.email },
    { label: "Date", value: data.date },
    { label: "Time", value: data.time },
    { label: "Message", value: data.message },
  ])}</table>`;

  await transporter.sendMail({
    from: fromHeader(),
    to: adminList(),
    replyTo: data.email,
    subject: `New visit request — ${data.name}`,
    html: wrapEmail(
      "New visit request",
      `<p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">Someone asked for an eye visit from the website.</p>${details}`
    ),
    attachments: [logoCid()],
  });

  await transporter.sendMail({
    from: fromHeader(),
    to: data.email,
    subject: "We got your visit request — MG Eye Foundation",
    html: wrapEmail(
      `Thank you, ${data.name}`,
      `<p style="margin:0 0 12px;color:#475569;font-size:15px;line-height:1.6;">We got your request to book an eye visit. This is not the final booking yet. Our desk will call you to confirm the time.</p>
       <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">If you need us sooner, call ${escapeHtml(SITE.phoneDisplay)}.</p>
       ${details}`
    ),
    attachments: [logoCid()],
  });
}

export async function sendContactMails(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  const transporter = getTransporter();
  const details = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows([
    { label: "Name", value: data.name },
    { label: "Phone", value: data.phone },
    { label: "Email", value: data.email },
    { label: "Message", value: data.message },
  ])}</table>`;

  await transporter.sendMail({
    from: fromHeader(),
    to: adminList(),
    replyTo: data.email,
    subject: `New website message — ${data.name}`,
    html: wrapEmail(
      "New message from the website",
      `<p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">Someone sent a message from the Contact page.</p>${details}`
    ),
    attachments: [logoCid()],
  });

  await transporter.sendMail({
    from: fromHeader(),
    to: data.email,
    subject: "We got your message — MG Eye Foundation",
    html: wrapEmail(
      `Thank you, ${data.name}`,
      `<p style="margin:0 0 12px;color:#475569;font-size:15px;line-height:1.6;">We got your message. We will call or write back on a working day.</p>
       <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">For an urgent eye problem, call ${escapeHtml(SITE.phoneDisplay)}.</p>
       ${details}`
    ),
    attachments: [logoCid()],
  });
}
