"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DOCTORS } from "@/lib/doctors";

type Doctor = (typeof DOCTORS)[number];
type Accent = "blue" | "orange";

const ACCENT: Record<Accent, {
  label: string;
  check: string;
  checkBg: string;
  btn: string;
  shadow: string;
  frame: string;
}> = {
  blue: {
    label: "text-[#1F8A9A]",
    check: "text-[#1F8A9A]",
    checkBg: "bg-[#1F8A9A]/10",
    btn: "bg-[#1F8A9A] hover:bg-[#16707E] shadow-[#1F8A9A]/25",
    shadow: "shadow-[0_18px_50px_-24px_rgba(31,138,154,0.28)]",
    frame: "border-[#1F8A9A]/35 bg-[#E7F3F5]",
  },
  orange: {
    label: "text-[#16707E]",
    check: "text-[#1F8A9A]",
    checkBg: "bg-[#1F8A9A]/10",
    btn: "bg-[#16707E] hover:bg-[#0E4A56] shadow-[#1F8A9A]/25",
    shadow: "shadow-[0_18px_50px_-24px_rgba(31,138,154,0.28)]",
    frame: "border-[#1F8A9A]/40 bg-[#E7F3F5]",
  },
};

export default function DoctorProfileCard({
  doctor,
  showFullProfileLink = false,
  accent = "blue",
}: {
  doctor: Doctor;
  showFullProfileLink?: boolean;
  accent?: Accent;
}) {
  const book = () => window.dispatchEvent(new CustomEvent("open-appointment"));
  const a = ACCENT[accent];

  return (
    <article className={`rounded-[24px] border border-[#e8edf2] bg-white p-6 sm:p-8 ${a.shadow}`}>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        <div className={`mx-auto sm:mx-0 shrink-0 rounded-2xl border-4 p-1.5 ${a.frame}`}>
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="h-56 w-44 sm:h-64 sm:w-52 rounded-xl object-cover object-top"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className={`${a.label} text-[11px] font-semibold tracking-[0.14em] uppercase`}>
            {doctor.label}
          </p>

          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl sm:text-[2rem] font-extrabold text-[#0F172A] leading-tight">
              {doctor.name}
            </h3>
            <span className="text-[#94A3B8] text-base sm:text-lg font-medium">{doctor.qual}</span>
          </div>
          <p className="mt-1 text-[#64748b] text-sm">{doctor.role}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {doctor.stats.map((s) => (
              <div key={s.label} className="min-w-[150px] rounded-xl border border-[#e2e8f0] px-4 py-3">
                <div className="text-[#0F172A] font-extrabold text-[15px] leading-tight">{s.value}</div>
                <div className="text-[10px] font-semibold tracking-wide uppercase text-[#94A3B8] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[#475569] text-[15px] leading-relaxed">{doctor.bio}</p>
          {doctor.extraBio.map((p) => (
            <p key={p.slice(0, 40)} className="mt-3 text-[#475569] text-[15px] leading-relaxed">
              {p}
            </p>
          ))}
          {doctor.quote ? (
            <blockquote className="mt-5 border-l-4 border-[#1F8A9A] pl-4 text-[#0F172A] italic text-[15px] leading-relaxed">
              “{doctor.quote}”
            </blockquote>
          ) : null}

          <p className="mt-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#94A3B8]">
            Areas of special interest
          </p>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {doctor.expertise.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.checkBg}`}>
                  <Check className={`h-3.5 w-3.5 ${a.check}`} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#94A3B8]">
            Professional qualifications
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-[#475569]">
            {doctor.memberships.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {doctor.treats.map((t) => (
              <figure key={t.title} className="relative aspect-square overflow-hidden rounded-xl">
                <img src={t.image} alt={t.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#0F172A]/40" />
                <figcaption className="absolute inset-x-0 bottom-0 p-1.5">
                  <span className="block text-white text-[11px] font-extrabold leading-tight">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={book}
              className={`${a.btn} text-white font-bold rounded-lg px-6 py-3 text-sm shadow-md`}
            >
              {doctor.bookLabel}
            </button>
            {showFullProfileLink ? (
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1 rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#1F8A9A]"
              >
                Full profile <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
