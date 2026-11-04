import { createTransport } from "nodemailer";
import { SITE } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">MG Eye Foundation</p>
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

function plainRows(fields: { label: string; value: string }[]) {
  return fields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");
}

const MGEF_SMTP = {
  user: "mgef.appointment@gmail.com",
  pass: "lonfmwwmyvzlqmsp",
};

function mailAuth() {
  const user = process.env.MAIL_USERNAME?.trim();
  const pass = process.env.MAIL_PASSWORD?.replace(/^['"]|['"]$/g, "").replace(/\s+/g, "");
  // Only mgef.appointment is allowed — ignore any other MAIL_USERNAME on the server.
  if (user && pass && user.toLowerCase() === MGEF_SMTP.user) {
    return { user, pass };
  }
  return { ...MGEF_SMTP };
}

function getTransporter() {
  const auth = mailAuth();
  if (!auth) throw new Error("Mail is not set on the server. Please set MAIL_USERNAME and MAIL_PASSWORD.");

  return createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.MAIL_PORT || 587),
    secure: false,
    requireTLS: true,
    connectionTimeout: 12000,
    greetingTimeout: 12000,
    socketTimeout: 20000,
    tls: { rejectUnauthorized: false },
    auth,
  });
}

/** Lead inbox — appointment & contact admin mails only */
function adminList() {
  return "mgef.appointment@gmail.com";
}

const fromHeader = () => {
  const auth = mailAuth();
  return `"${process.env.MAIL_FROM_NAME || "MG Eye Foundation"}" <${auth.user}>`;
};

export async function sendAppointmentMails(data: {
  name: string;
  phone: string;
  age: string;
  sex: string;
  date: string;
  time: string;
}) {
  const transporter = getTransporter();
  const fields = [
    { label: "Name", value: data.name },
    { label: "Phone", value: data.phone },
    { label: "Age", value: data.age },
    { label: "Sex", value: data.sex },
    { label: "Date", value: data.date },
    { label: "Time", value: data.time },
  ];
  const details = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows(fields)}</table>`;

  const info = await transporter.sendMail({
    from: fromHeader(),
    to: adminList(),
    replyTo: "mgef.appointment@gmail.com",
    subject: `MG Eye lead — appointment — ${data.name}`,
    text: `New appointment request\n\n${plainRows(fields)}\n\nPlease call to confirm the time.`,
    html: wrapEmail(
      "New appointment request",
      `<p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">A patient asked for an eye visit from the website booking form.</p>
       <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">Please call them to confirm the time.</p>
       ${details}`
    ),
  });

  if (!info.accepted?.length) {
    throw new Error(`Mail was not accepted for ${adminList()}. ${info.response || ""}`);
  }
}

export async function sendContactMails(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  const transporter = getTransporter();
  const fields = [
    { label: "Name", value: data.name },
    { label: "Phone", value: data.phone },
    { label: "Email", value: data.email },
    { label: "Message", value: data.message },
  ];
  const details = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows(fields)}</table>`;

  const adminInfo = await transporter.sendMail({
    from: fromHeader(),
    to: adminList(),
    replyTo: data.email,
    subject: `MG Eye lead — contact — ${data.name}`,
    text: `New contact message\n\n${plainRows(fields)}`,
    html: wrapEmail(
      "New message from the Contact page",
      `<p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">Someone sent a message from the website Contact form.</p>
       ${details}`
    ),
  });

  if (!adminInfo.accepted?.length) {
    throw new Error(`Mail was not accepted for ${adminList()}. ${adminInfo.response || ""}`);
  }

  await transporter.sendMail({
    from: fromHeader(),
    to: data.email,
    subject: "We got your message — MG Eye Foundation",
    text: `Thank you, ${data.name}. We got your message. We will call or write back on a working day. For an urgent eye problem, call ${SITE.phoneDisplay}.\n\n${plainRows(fields)}`,
    html: wrapEmail(
      `Thank you, ${data.name}`,
      `<p style="margin:0 0 12px;color:#475569;font-size:15px;line-height:1.6;">We got your message. We will call or write back on a working day.</p>
       <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.6;">For an urgent eye problem, call ${escapeHtml(SITE.phoneDisplay)}.</p>
       ${details}`
    ),
  });
}
