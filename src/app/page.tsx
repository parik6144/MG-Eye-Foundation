"use client";

import Link from "next/link";
import { useCallback } from "react";
import { UserSearch, MapPin, CalendarDays, ArrowRight, Users, User, Eye, UserRound } from "lucide-react";
import { COPY, SERVICE_HUB, STATS } from "@/lib/site";
import { DOCTORS } from "@/lib/doctors";
import DoctorProfileCard from "@/components/DoctorProfileCard";

const SERVICE_CARD = {
  cataract: { wrap: "bg-[#EAF2FF]", blob: "bg-[#BFD4FF]", accent: "text-[#2563EB]", btn: "bg-[#3B82F6]" },
  cornea: { wrap: "bg-[#E7FBF3]", blob: "bg-[#B6F0D3]", accent: "text-[#059669]", btn: "bg-[#10B981]" },
  glaucoma: { wrap: "bg-[#FFF6E8]", blob: "bg-[#FFD9A3]", accent: "text-[#EA580C]", btn: "bg-[#F97316]" },
  retina: { wrap: "bg-[#FFF0F5]", blob: "bg-[#F9C2D4]", accent: "text-[#DB2777]", btn: "bg-[#EC4899]" },
  pediatric: { wrap: "bg-[#F4EEFF]", blob: "bg-[#D5C4FF]", accent: "text-[#7C3AED]", btn: "bg-[#8B5CF6]" },
  oculoplasty: { wrap: "bg-[#E6FBFF]", blob: "bg-[#B5F1F8]", accent: "text-[#0891B2]", btn: "bg-[#06B6D4]" },
  refractive: { wrap: "bg-[#FFF8E1]", blob: "bg-[#FFE7A3]", accent: "text-[#D97706]", btn: "bg-[#F59E0B]" },
  other: { wrap: "bg-[#FFF1F4]", blob: "bg-[#FBCFE8]", accent: "text-[#E11D48]", btn: "bg-[#F43F5E]" },
} as const;

const STAT_CARD = [
  { wrap: "bg-[#EAF4FF]", iconWrap: "bg-[#D7EBFF] text-[#2B7DE9]", num: "text-[#2B7DE9]", Icon: Users },
  { wrap: "bg-[#FFF1E6]", iconWrap: "bg-[#FFE0C8] text-[#E85D04]", num: "text-[#E85D04]", Icon: User },
  { wrap: "bg-[#E8F8EE]", iconWrap: "bg-[#CFF0D8] text-[#2E8B57]", num: "text-[#1B7A3D]", Icon: Eye },
  { wrap: "bg-[#F3EEFF]", iconWrap: "bg-[#E4D9FF] text-[#6D4AE8]", num: "text-[#6D28D9]", Icon: UserRound },
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
              className="group flex items-center gap-4 px-5 sm:px-7 py-5 hover:bg-[#FFF8F2] transition-colors md:border-r border-[#E8F0F3] border-t md:border-t-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1E8] text-[#EA580C]">
                <MapPin className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-extrabold text-[#0F172A]">Locate Us</span>
                <span className="block text-sm text-[#64748b] mt-1 leading-snug">Bara Gamharia, Jamshedpur.</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-[#F97316]" />
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
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight max-w-3xl mx-auto">
              Comprehensive and Advanced Eye Care Hospital
              <br />
              <span className="text-[#1F8A9A]"></span> 
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

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#1F8A9A] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
              Complete eye care under one roof
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight">
              Our <span className="text-[#1F8A9A]">Eye Care</span> Services
            </h2>
          
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SERVICE_HUB.map((s) => {
              const theme = SERVICE_CARD[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group relative overflow-hidden rounded-[28px] p-6 sm:p-7 flex flex-col ${theme.wrap} shadow-[0_10px_28px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(15,23,42,0.12)] transition-all duration-300`}
                >
                  <span className={`pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full ${theme.blob} opacity-70`} />
                  <span className={`pointer-events-none absolute -right-6 bottom-8 h-24 w-24 rounded-full ${theme.blob} opacity-40`} />
                  <img
                    src={s.icon}
                    alt=""
                    className="relative h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="relative mt-5 text-xl sm:text-[1.35rem] font-extrabold text-[#0F172A] leading-snug">
                    {s.title}
                  </h3>
                  <span className={`relative mt-5 inline-flex items-center gap-2 text-sm font-bold ${theme.accent}`}>
                    Learn More
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-white ${theme.btn} group-hover:opacity-90`}>
                      <ArrowRight className="h-4 w-4" />
                    </span>
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
