import { NextResponse } from "next/server";
import { sendAppointmentMails } from "@/lib/mail";
import { mailFailResponse } from "@/lib/mail-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const age = String(body.age || "").trim();
    const sex = String(body.sex || "").trim();
    const date = String(body.date || "").trim();
    const time = String(body.time || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !age || !sex || !date || !time) {
      return NextResponse.json({ ok: false, error: "Please fill name, phone, age, sex, date and time." }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please write a valid email, or leave it blank." }, { status: 400 });
    }

    await sendAppointmentMails({ name, phone, email, age, sex, date, time, message });
    return NextResponse.json({ ok: true, message: "Mail sent. Please check your inbox." });
  } catch (error) {
    return NextResponse.json(mailFailResponse(error), { status: 500 });
  }
}
