"use client";

import Link from "next/link";
import { useCallback } from "react";
import { UserSearch, MapPin, CalendarDays, ArrowRight, Users, User, Eye, UserRound } from "lucide-react";
import { COPY, SERVICE_HUB, STATS } from "@/lib/site";
import { DOCTORS } from "@/lib/doctors";
import DoctorProfileCard from "@/components/DoctorProfileCard";

const STAT_CARD = [
  { wrap: "bg-[#E7F7FA]", iconWrap: "bg-[#D4EEF2] text-[#1F8A9A]", num: "text-[#0E4A56]", Icon: Users },
  { wrap: "bg-[#E7F7FA]", iconWrap: "bg-[#D4EEF2] text-[#16707E]", num: "text-[#0E4A56]", Icon: User },
  { wrap: "bg-[#E7F7FA]", iconWrap: "bg-[#D4EEF2] text-[#1F8A9A]", num: "text-[#0E4A56]", Icon: Eye },
  { wrap: "bg-[#E7F7FA]", iconWrap: "bg-[#D4EEF2] text-[#16707E]", num: "text-[#0E4A56]", Icon: UserRound },
] as const;

export default function HomePage() {
  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  }, []);

  return (
    <div className="bg-[#F4F8F9]">
      <section className="bg-white">
        <img
          src="/2new_mg_eye_banner.png"
          alt="M G Eye Foundation hospital entrance"
          className="w-full h-auto block"
        />
      </section>

      <section id="home-intro" className="bg-white">
        <div className="px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10">
          <div className="grid md:grid-cols-3 overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(31,138,154,0.12)] border border-[#E4EEF2]">
            <Link
              href="/doctors"
              className="group flex items-center gap-4 px-5 sm:px-7 py-5 hover:bg-[#F7FBFD] transition-colors md:border-r border-[#E8F0F3]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F7FA] text-[#1F8A9A]">
                <UserSearch className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-extrabold text-[#0F172A]">Find a Doctor</span>
                <span className="block text-sm text-[#64748b] mt-1 leading-snug">Meet our experienced eye specialists.</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-[#94A3B8] group-hover:text-[#1F8A9A]" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-4 px-5 sm:px-7 py-5 hover:bg-[#F7FBFD] transition-colors md:border-r border-[#E8F0F3] border-t md:border-t-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F7FA] text-[#1F8A9A]">
                <MapPin className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-extrabold text-[#0F172A]">Locate Us</span>
                <span className="block text-sm text-[#64748b] mt-1 leading-snug">Bara Gamharia, Jamshedpur.</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-[#94A3B8] group-hover:text-[#1F8A9A]" />
            </Link>
            <button
              type="button"
              onClick={openAppointment}
              className="group flex items-center gap-4 px-5 sm:px-7 py-5 text-left bg-[#16707E] hover:bg-[#0E4A56] transition-colors border-t md:border-t-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <CalendarDays className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-extrabold text-white">Book an Appointment</span>
                <span className="block text-sm text-white/80 mt-1 leading-snug">{COPY.ctaNote}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-white/90" />
            </button>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-14 sm:pb-16">
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1F8A9A]/35" />
              <p className="text-[#1F8A9A] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                Care for your eyes
              </p>
              <span className="h-px w-10 bg-[#1F8A9A]/35" />
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight max-w-3xl mx-auto">
              Comprehensive and Advanced Eye Care Hospital
            </h1>

          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STATS.map((s, i) => {
              const tone = STAT_CARD[i];
              const Icon = tone.Icon;
              return (
                <div
                  key={s.label}
                  className={`rounded-[26px] px-4 py-7 sm:py-8 text-center shadow-[0_12px_28px_rgba(15,23,42,0.06)] ${tone.wrap}`}
                >
                  <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${tone.iconWrap}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <p className={`mt-4 text-2xl sm:text-[1.7rem] font-extrabold ${tone.num}`}>{s.num}</p>
                  <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-snug">{s.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-center">
            <span className="h-px w-16 sm:w-24 bg-[#1F8A9A]/25" />
            <Eye className="h-5 w-5 text-[#1F8A9A]" strokeWidth={1.6} />
            <span className="h-px w-16 sm:w-24 bg-[#1F8A9A]/25" />
          </div>
          <p className="mt-3 text-center text-sm sm:text-base text-[#64748b]">
             Trusted by thousands for quality eye care, advanced technology and compassionate treatment.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 sm:w-16 bg-[#0E4A56]/25" />
              <p className="text-[#64748b] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                Complete eye care under one roof
              </p>
              <span className="h-px w-10 sm:w-16 bg-[#0E4A56]/25" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#0E4A56] leading-tight">
              Our <span className="text-[#16707E]">Eye Care</span> Services
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {SERVICE_HUB.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex flex-col items-center text-center rounded-2xl bg-white border border-[#E6EEF1] px-2.5 py-3 sm:px-3 sm:py-4 shadow-[0_6px_16px_rgba(14,74,86,0.05)] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(14,74,86,0.10)] transition-all duration-300"
              >
                <span className="flex h-16 w-16 sm:h-20 sm:w-20 mx-auto items-center justify-center rounded-2xl bg-white border-2 border-[#1F8A9A] shadow-[0_8px_18px_rgba(31,138,154,0.28)] p-1.5">
                  <img src={s.icon} alt="" className="h-full w-full object-contain" />
                </span>
                <h3 className="mt-2.5 text-[13px] sm:text-sm font-extrabold text-[#0E4A56] leading-snug line-clamp-2">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight">
              Meet Our <span className="text-[#1F8A9A]">Doctors</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1F8A9A]/35" />
              <Eye className="h-5 w-5 text-[#1F8A9A]" strokeWidth={1.6} />
              <span className="h-px w-10 bg-[#1F8A9A]/35" />
            </div>
          </div>
          <div className="mt-10 space-y-8">
            {DOCTORS.map((d) => (
              <DoctorProfileCard key={d.name} doctor={d} useShortName showFullProfileLink />
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
                alt="Eye check at M G Eye Foundation"
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
