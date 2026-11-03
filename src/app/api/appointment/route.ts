import { NextResponse } from "next/server";
import { sendAppointmentMails } from "@/lib/mail";
import { mailFailResponse } from "@/lib/mail-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const age = String(body.age || "").trim();
    const sex = String(body.sex || "").trim();
    const date = String(body.date || "").trim();
    const time = String(body.time || "").trim();

    if (!name || !phone || !age || !sex || !date || !time) {
      return NextResponse.json({ ok: false, error: "Please fill name, phone, age, sex, date and time." }, { status: 400 });
    }

    await sendAppointmentMails({ name, phone, age, sex, date, time });
    return NextResponse.json({ ok: true, message: "Request sent." });
  } catch (error) {
    return NextResponse.json(mailFailResponse(error), { status: 500 });
  }
}
