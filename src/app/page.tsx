"use client";

import Link from "next/link";
import { useCallback } from "react";
import {
  UserSearch,
  MapPin,
  CalendarDays,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SITE, COPY, SERVICES } from "@/lib/site";
import { DOCTORS } from "@/lib/doctors";
import { SERVICE_MARKS, SERVICE_SHORT, ServicesTitleMark } from "@/components/ServiceIcons";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5908957717247!2d86.10057549999999!3d22.817618100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5848c06a167%3A0x2cdbf23713a6129!2sM%20G%20Eye%20Foundation!5e0!3m2!1sen!2sin!4v1787430071311!5m2!1sen!2sin";

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">{kicker}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0E4A56]">{title}</h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-[#1F8A9A]/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#1F8A9A]" />
        <span className="h-px w-8 bg-[#1F8A9A]/30" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  }, []);

  return (
    <div className="bg-[#F4F8F9]">
      <section className="relative w-full bg-white">
        <img
          src="/mg_eye_banner.png"
          alt="MG Eye Foundation hospital entrance"
          className="w-full h-auto object-contain block"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 pb-4">
          <div className="rounded-3xl bg-white shadow-[0_18px_50px_rgba(31,138,154,0.12)] border border-[#D5E6EA] grid md:grid-cols-3 overflow-hidden">
            <Link
              href="/doctors"
              className="flex items-start gap-4 p-6 sm:p-7 hover:bg-[#F4F8F9] transition-colors md:border-r border-[#e2e8f0]"
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
              className="flex items-start gap-4 p-6 sm:p-7 hover:bg-[#F4F8F9] transition-colors md:border-r border-[#e2e8f0] border-t md:border-t-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F3F5] text-[#1F8A9A]">
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
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">{COPY.subhead}</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight">
            {COPY.headline}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#1F8A9A]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1F8A9A]" />
            <span className="h-px w-10 bg-[#1F8A9A]/30" />
          </div>
          <p className="mt-6 text-[#475569] leading-relaxed">{COPY.intro}</p>
          <p className="mt-4 text-[#475569] leading-relaxed">{COPY.introLead}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F4F8F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0E4A56]">Services</h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="w-20 sm:w-28 border-t-2 border-dotted border-[#1F8A9A]" />
              <ServicesTitleMark />
              <span className="w-20 sm:w-28 border-t-2 border-dotted border-[#1F8A9A]" />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5 sm:gap-6">
            {SERVICES.map((s) => {
              const Mark = SERVICE_MARKS[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group w-[calc(50%-10px)] sm:w-[200px] lg:w-[210px] rounded-[18px] bg-white px-4 py-8 text-center shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(31,138,154,0.18)] hover:-translate-y-1.5 border border-white hover:border-[#1F8A9A]/25 transition-all"
                >
                  <span className="mx-auto flex items-center justify-center text-[#1F8A9A]">
                    {Mark ? Mark() : null}
                  </span>
                  <span className="mx-auto mt-4 mb-4 block h-[3px] w-14 rounded-full bg-[#1F8A9A]" />
                  <span className="block text-[13px] sm:text-[14px] font-bold tracking-[0.12em] uppercase text-[#1F8A9A] leading-snug">
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
          <SectionHead kicker="Meet our team" title="Meet Our Doctors" />
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {DOCTORS.map((d) => (
              <Link
                key={d.name}
                href="/doctors"
                className="group w-full max-w-[300px] rounded-3xl bg-[#F4F8F9] border border-[#D5E6EA] p-8 text-center hover:bg-white hover:shadow-[0_16px_40px_rgba(31,138,154,0.12)] hover:-translate-y-1 transition-all"
              >
                <span className="mx-auto block h-40 w-40 rounded-full overflow-hidden border-[6px] border-white shadow-[0_8px_24px_rgba(15,23,42,0.10)] bg-white">
                  <img src={d.photo} alt={d.name} className="h-full w-full object-cover object-top" />
                </span>
                <span className="mt-5 block font-extrabold text-[#0E4A56] group-hover:text-[#1F8A9A]">{d.name}</span>
                <span className="mt-1 block text-sm text-[#64748b] leading-snug">{d.englishFocus}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F4F8F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead kicker="About us" title={COPY.aboutTitle} />
          <div className="mt-10 rounded-3xl bg-white border border-[#e2e8f0] p-8 sm:p-10 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <p className="text-[#475569] leading-relaxed">{COPY.aboutP1}</p>
            <p className="mt-4 text-[#475569] leading-relaxed">{COPY.aboutP2}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-[#1F8A9A] hover:text-[#16707E]"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead kicker="Location" title="Location" />
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#e2e8f0] bg-[#F4F8F9] shadow-[0_8px_24px_rgba(15,23,42,0.04)] grid lg:grid-cols-2">
            <iframe
              title="MG Eye Foundation on Google Maps"
              src={MAP_SRC}
              className="block w-full h-[300px] lg:h-full min-h-[320px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-extrabold text-[#0E4A56]">{SITE.name}</h3>
              <p className="mt-4 text-[#475569] leading-relaxed">
                {SITE.address}, {SITE.city}
              </p>
              <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-2 font-bold text-[#1F8A9A] hover:underline">
                <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
              </a>
              <p className="mt-3 inline-flex items-start gap-2 text-sm text-[#64748b]">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {SITE.hours}
                  <br />
                  {SITE.sunday}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
