"use client";

import Link from "next/link";
import { useCallback } from "react";
import { UserSearch, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { COPY, SERVICES, STATS } from "@/lib/site";
import { DOCTORS } from "@/lib/doctors";
import { SERVICE_MARKS, SERVICE_SHORT, ServicesTitleMark } from "@/components/ServiceIcons";
import DoctorProfileCard from "@/components/DoctorProfileCard";

const STAT_TONE = [
  "bg-[#E7F3F5] text-[#0E4A56]",
  "bg-[#FFF6EC] text-[#9A4A12]",
  "bg-[#F0F7F4] text-[#166534]",
  "bg-[#EEF2FF] text-[#3730A3]",
];

export default function HomePage() {
  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  }, []);

  return (
    <div className="bg-[#F4F8F9]">
      <section className="bg-white">
        <img
          src="/2new_mg_eye_banner.png"
          alt="M G EYE Foundation hospital entrance"
          className="w-full h-auto block"
        />
      </section>

      <section className="bg-[#F4F8F9] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-[0_18px_50px_rgba(31,138,154,0.12)] border border-[#D5E6EA] grid md:grid-cols-3 overflow-hidden">
          <Link
            href="/doctors"
            className="flex items-start gap-4 p-6 sm:p-7 hover:bg-[#E7F3F5] transition-colors md:border-r border-[#e2e8f0]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F3F5] text-[#1F8A9A]">
              <UserSearch className="w-6 h-6" strokeWidth={1.6} />
            </span>
            <span>
              <span className="block font-extrabold text-[#0F172A]">Find a Doctor</span>
              <span className="block text-sm text-[#64748b] mt-1 leading-snug">Meet our doctors.</span>
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex items-start gap-4 p-6 sm:p-7 hover:bg-[#FFF6EC] transition-colors md:border-r border-[#e2e8f0] border-t md:border-t-0"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF6EC] text-[#C2410C]">
              <MapPin className="w-6 h-6" strokeWidth={1.6} />
            </span>
            <span>
              <span className="block font-extrabold text-[#0F172A]">Locate Us</span>
              <span className="block text-sm text-[#64748b] mt-1 leading-snug">Bara Gamharia, Jamshedpur.</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={openAppointment}
            className="flex items-start gap-4 p-6 sm:p-7 text-left bg-[#1F8A9A] hover:bg-[#16707E] transition-colors border-t md:border-t-0"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
              <CalendarDays className="w-6 h-6" strokeWidth={1.6} />
            </span>
            <span>
              <span className="block font-extrabold text-white">Book an Appointment</span>
              <span className="block text-sm text-white/80 mt-1 leading-snug">{COPY.ctaNote}</span>
            </span>
          </button>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E4A56] leading-tight">{COPY.headline}</h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#1F8A9A]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1F8A9A]" />
            <span className="h-px w-10 bg-[#1F8A9A]/30" />
          </div>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <div key={s.label} className={`rounded-2xl px-3 py-4 ${STAT_TONE[i]}`}>
                <p className="text-xl sm:text-2xl font-extrabold">{s.num}</p>
                <p className="mt-1 text-[11px] sm:text-xs leading-snug opacity-80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F4F8F9]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0E4A56]">Services</h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="w-20 sm:w-28 border-t-2 border-dotted border-[#1F8A9A]" />
              <ServicesTitleMark />
              <span className="w-20 sm:w-28 border-t-2 border-dotted border-[#1F8A9A]" />
            </div>
          </div>

          <div className="mt-12 flex flex-nowrap items-stretch justify-start lg:justify-center gap-3 overflow-x-auto pb-2">
            {SERVICES.map((s) => {
              const Mark = SERVICE_MARKS[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group shrink-0 w-[138px] sm:w-[148px] lg:flex-1 lg:w-auto lg:min-w-0 lg:max-w-[168px] rounded-[18px] bg-white px-2.5 py-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(31,138,154,0.18)] hover:-translate-y-1.5 border border-white hover:border-[#1F8A9A]/25 transition-all"
                >
                  <span className="mx-auto flex items-center justify-center text-[#1F8A9A]">
                    {Mark ? Mark() : null}
                  </span>
                  <span className="mx-auto mt-3 mb-3 block h-[3px] w-10 rounded-full bg-[#1F8A9A]" />
                  <span className="block text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase text-[#1F8A9A] leading-snug">
                    {SERVICE_SHORT[s.slug] ?? s.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E4A56]">Meet Our Doctors</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#1F8A9A]/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#1F8A9A]" />
              <span className="h-px w-8 bg-[#1F8A9A]/30" />
            </div>
          </div>
          <div className="mt-12 space-y-10">
            {DOCTORS.map((d) => (
              <DoctorProfileCard key={d.name} doctor={d} useShortName />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F4F8F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-6 relative overflow-hidden rounded-[28px] min-h-[280px] sm:min-h-[360px]">
              <img
                src="/home-about-clinic.png"
                alt="Eye check at M G EYE Foundation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0E4A56]/35 via-transparent to-[#1F8A9A]/20" />
            </div>
            <div className="lg:col-span-6 rounded-[28px] bg-white border border-[#D5E6EA] p-7 sm:p-10 flex flex-col justify-center shadow-[0_12px_32px_rgba(31,138,154,0.08)]">
              <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">About us</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0E4A56]">{COPY.aboutTitle}</h2>
              <div className="mt-4 h-px w-14 bg-gradient-to-r from-[#E8B4BC] to-[#1F8A9A]" />
              <p className="mt-6 text-[#475569] leading-relaxed">{COPY.aboutP1}</p>
              <p className="mt-4 text-[#475569] leading-relaxed">{COPY.aboutP2}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 self-start rounded-full bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold px-7 py-3 text-sm"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
