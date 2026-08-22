import { NextResponse } from "next/server";
import { sendContactMails } from "@/lib/mail";
import { mailFailResponse } from "@/lib/mail-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ ok: false, error: "Please fill name, phone, email and message." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please write a valid email." }, { status: 400 });
    }

    await sendContactMails({ name, phone, email, message });
    return NextResponse.json({ ok: true, message: "Mail sent. Please check your inbox." });
  } catch (error) {
    return NextResponse.json(mailFailResponse(error), { status: 500 });
  }
}
