function publicMailError(error: unknown) {
  if (!error || typeof error !== "object") return String(error || "Mail did not send. Please try again.");
  const e = error as { message?: string; code?: string; command?: string; response?: string; responseCode?: number };
  const raw = [e.response, e.message, e.code].filter(Boolean).join(" ").toLowerCase();

  if (raw.includes("badcredentials") || raw.includes("invalid login") || raw.includes("username and password not accepted")) {
    return "Gmail login failed. Open Google Account for mgef.appointment@gmail.com, make a new App Password, and put it in MAIL_PASSWORD in .env. Then restart the site.";
  }
  if (raw.includes("mail is not set")) {
    return "Mail is not set on the server. Add MAIL_USERNAME and MAIL_PASSWORD, then restart.";
  }

  return [e.code, e.command, e.response || e.message].filter(Boolean).join(" | ") || "Mail did not send. Please try again.";
}

export function mailFailResponse(error: unknown) {
  console.error("Mail failed", error);
  return {
    ok: false,
    error: publicMailError(error),
  };
}
