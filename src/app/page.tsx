"use client";

import Link from "next/link";
import { useCallback } from "react";
import { Eye, Stethoscope, Shield, Heart, ArrowRight, CalendarDays } from "lucide-react";
import { SITE, COPY, STATS, SERVICES, IMPACT, CARE_STEPS, WHY_FAMILIES } from "@/lib/site";
import { DOCTORS } from "@/lib/doctors";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DoctorProfileCard from "@/components/DoctorProfileCard";

const FEATURES = [
  { icon: Eye, label: "Cataract" },
  { icon: Stethoscope, label: "Retina" },
  { icon: Heart, label: "Pediatric Eye Care" },
  { icon: Shield, label: "Squint" },
];

export default function HomePage() {
  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  }, []);

  const heroCopy = (mobile: boolean) => (
    <div className={mobile ? "text-center" : "max-w-xl animate-fade-up"}>
      <h1 className={`${mobile ? "text-[1.85rem] leading-tight" : "text-[2.8rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08]"} font-extrabold text-[#0F172A]`}>
        Better Vision,{" "}
        <span className="text-[#1118E8]">Better Tomorrow</span>
      </h1>
      <p className={`text-[#374151] leading-relaxed font-medium ${mobile ? "text-sm mt-3 mx-auto max-w-[42ch]" : "text-[13px] sm:text-[15px] mt-4 max-w-xl"}`}>
        {COPY.intro}
      </p>
      <div className={mobile ? "grid grid-cols-2 gap-x-3 gap-y-4 mt-6 max-w-xs mx-auto" : "flex items-center gap-6 mt-6"}>
        {FEATURES.map((f, i) => (
          <div key={i} className="text-center">
            <div className={`${mobile ? "w-12 h-12" : "w-11 h-11"} rounded-full border border-[#1118E8]/30 flex items-center justify-center mx-auto mb-1.5 bg-white`}>
              <f.icon className={`${mobile ? "w-5 h-5" : "w-5 h-5"} text-[#1118E8]`} strokeWidth={1.5} />
            </div>
            <span className={`${mobile ? "text-xs" : "text-[11px]"} font-semibold text-[#1E293B] leading-tight block`}>{f.label}</span>
          </div>
        ))}
      </div>
      <div className={`mt-6 flex flex-col ${mobile ? "gap-4 items-center" : "sm:flex-row sm:items-start gap-4"}`}>
        <div className={mobile ? "w-full" : ""}>
          <button
            onClick={openAppointment}
            className={`bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full shadow-lg shadow-[#1118E8]/25 transition-all flex items-center justify-center gap-2 ${mobile ? "w-full px-5 py-3.5 text-sm" : "px-8 py-3.5 text-base"}`}
          >
            <CalendarDays className="w-5 h-5" /> {COPY.cta}
          </button>
          <p className="text-[#64748B] text-xs mt-1.5">{COPY.ctaNote}</p>
        </div>
        <div className={mobile ? "" : "sm:border-l sm:border-[#CBD5E1] sm:pl-5"}>
          <p className="text-[11px] text-[#64748B] leading-snug max-w-[22ch] sm:max-w-none">
            For immediate assistance, please call
          </p>
          <a href={SITE.phoneHref} className="text-[#FF0808] font-bold text-base hover:underline">{SITE.phoneDisplay}</a>
          <p className="text-[#94A3B8] text-xs mt-1">(Monday–Saturday, 10:00 a.m.–6:00 p.m.)</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white pt-14 sm:pt-20 lg:pt-[88px]">
        <div className="relative overflow-hidden">
          <img src="/mg_eye_banner_4.png" alt="MG Eye Foundation" className="w-full h-auto max-h-[240px] lg:max-h-none object-cover object-center block" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />

          <div className="hidden lg:block absolute inset-0 pb-[70px]">
            <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="relative z-[2] max-w-xl h-full flex flex-col justify-center animate-fade-up">
                <h1 className="text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.08] font-extrabold text-[#0F172A]">
                  Better Vision,{" "}
                  <span className="text-[#1118E8]">Better Tomorrow</span>
                </h1>
                <div className="flex items-center gap-6 mt-6">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="text-center">
                      <div className="w-11 h-11 rounded-full border border-[#1118E8]/30 flex items-center justify-center mx-auto mb-1.5 bg-white">
                        <f.icon className="w-5 h-5 text-[#1118E8]" strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-semibold text-[#1E293B] leading-tight block">{f.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div>
                    <button
                      onClick={openAppointment}
                      className="bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full shadow-lg shadow-[#1118E8]/25 transition-all inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
                    >
                      <CalendarDays className="w-5 h-5" /> {COPY.cta}
                    </button>
                    <p className="text-[#64748B] text-xs mt-1.5">{COPY.ctaNote}</p>
                  </div>
                  <div className="sm:border-l sm:border-[#CBD5E1] sm:pl-5">
                    <p className="text-[11px] text-[#64748B] leading-snug">For immediate assistance, please call</p>
                    <a href={SITE.phoneHref} className="text-[#FF0808] font-bold text-base hover:underline">{SITE.phoneDisplay}</a>
                    <p className="text-[#94A3B8] text-xs mt-1">(Monday–Saturday, 10:00 a.m.–6:00 p.m.)</p>
                  </div>
                </div>
              </div>

              <aside
                className="absolute right-[10%] top-1/2 z-[1] w-[min(500px,38%)] max-w-[500px] -translate-y-[30%] rounded-[24px] border border-white/30 bg-white/20 p-8 text-[#0F172A] text-lg font-semibold leading-relaxed shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8px]"
              >
                {COPY.intro}
              </aside>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-0 left-0 w-full pointer-events-none h-[70px] overflow-hidden z-[1]">
            <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full h-full" fill="none">
              <path d="M1440 70 C1200 45, 900 18, 600 8 C300 0, 100 20, 0 12 L0 70 Z" fill="#1118E8" opacity="0.92" />
              <path d="M1440 70 C1250 50, 1000 25, 700 18 C400 12, 150 30, 0 24 L0 70 Z" fill="#FF741F" opacity="0.88" />
              <path d="M1440 70 C1300 58, 1050 38, 800 32 C550 26, 200 40, 0 36 L0 70 Z" fill="#FF0808" opacity="0.82" />
            </svg>
          </div>
        </div>
        <div className="lg:hidden px-4 pt-5 pb-7">
          {heroCopy(true)}
        </div>
      </section>

      <section className="bg-[#1118E8] py-4 sm:py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left lg:border-l lg:border-white/20 lg:pl-6 first:lg:border-0 first:lg:pl-0">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{s.num}</div>
                <div className="text-white/70 text-[10px] sm:text-[11px] mt-0.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-[22px] overflow-hidden border border-[#e2e8f0] shadow-lg shadow-[#1118E8]/[0.06]">
              <img src="/about-care.png" alt="Doctor talking with a patient at MG Eye Foundation" className="w-full h-full object-cover min-h-[220px] sm:min-h-[380px]" />
            </div>
            <div>
              <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 leading-tight">
                {COPY.aboutTitle}
              </h2>
              <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
              <p className="text-[#475569] mt-5 leading-relaxed">
                {COPY.aboutP1}
              </p>
              <p className="text-[#475569] mt-3 leading-relaxed">
                {COPY.aboutP2}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 mt-6 bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-6 py-2.5 text-sm">
                Read our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-[#0F172A] px-6 py-10 text-center sm:px-10">
            <p className="text-[#FF741F] text-xs font-semibold tracking-[0.22em] uppercase">Mission and vision</p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              Our Mission <span className="text-[#FF741F]">and Our Vision</span>
            </h2>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-5">
            <article className="relative min-h-[420px] overflow-hidden rounded-[28px]">
              <img src="/our-mission.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/55 to-black/10" />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF741F] text-sm font-bold text-white">01</span>
                  <span className="text-[#FF741F] text-xs font-semibold tracking-[0.18em] uppercase">Our Mission</span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight">
                  Our Mission
                </h3>
                <p className="mt-4 text-white/85 text-sm leading-relaxed max-w-md">
                  {COPY.mission}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {COPY.missionTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/40 px-3.5 py-1.5 text-[12px] text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white">
              <img src="/our-vision.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/25" />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1118E8] text-sm font-bold text-white">02</span>
                  <span className="text-[#1118E8] text-xs font-semibold tracking-[0.18em] uppercase">Our Vision</span>
                </div>
                <h3 className="text-[#0F172A] text-2xl sm:text-3xl font-extrabold leading-tight">
                  Our Vision
                </h3>
                <p className="mt-4 text-[#475569] text-sm leading-relaxed max-w-md">
                  {COPY.vision}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {COPY.visionTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#cbd5e1] bg-white/70 px-3.5 py-1.5 text-[12px] text-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-16 sm:py-20">
        <img src="/why-families.png" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/92 to-[#0F172A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Why Families Choose Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Families Choose Us
            </h2>
            <p className="mt-4 text-white/75 text-sm sm:text-base leading-relaxed">
              {COPY.whyIntro}
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {WHY_FAMILIES.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[22px] bg-white">
                <img src={card.image} alt={card.alt} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#FF741F] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {card.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-[#0F172A] leading-snug">{card.title}</h3>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#F4F7FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#FF0808] text-sm font-semibold tracking-wide uppercase">Patient Education</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3 leading-tight">
              Patient Education
            </h2>
            <p className="text-[#475569] mt-4 leading-relaxed">
              {COPY.patientEdu}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              <img src="/patient-edu/feel.png" alt="What you feel" className="h-24 sm:h-32 w-full object-cover" />
              <p className="text-center text-[11px] sm:text-xs font-semibold text-[#0F172A] py-2">Symptoms</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              <img src="/patient-edu/inside.png" alt="Underlying condition of the eye" className="h-24 sm:h-32 w-full object-cover" />
              <p className="text-center text-[11px] sm:text-xs font-semibold text-[#0F172A] py-2">Underlying condition</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              <img src="/patient-edu/fix.png" alt="Recommended course of treatment" className="h-24 sm:h-32 w-full object-cover" />
              <p className="text-center text-[11px] sm:text-xs font-semibold text-[#0F172A] py-2">Recommended treatment</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {CARE_STEPS.map((step) => (
              <article key={step.n} className="overflow-hidden rounded-[22px] bg-white border border-[#e2e8f0] shadow-sm shadow-[#1118E8]/[0.04]">
                <div className="relative h-40">
                  <img src={step.image} alt="" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 text-3xl font-extrabold text-white drop-shadow">{step.n}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#0F172A]">{step.title}</h3>
                  <p className="text-[#64748b] text-sm mt-3 leading-relaxed">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-6 py-2.5 text-sm">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-20 bg-[#0F172A]">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#1118E8]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#FF741F]/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-[#FF0808]/20 blur-2xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Our doctors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
              Our Doctors
            </h2>
            <p className="text-white/75 mt-3 leading-relaxed">
              {COPY.doctorsIntro}
            </p>
          </div>
          <div className="space-y-8">
            {DOCTORS.map((d, i) => (
              <DoctorProfileCard
                key={d.name}
                doctor={d}
                showFullProfileLink
                accent={i === 0 ? "blue" : "orange"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">Our Services</h2>
            <p className="text-[#475569] mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              {COPY.servicesIntro}
            </p>
            <div className="w-12 h-1 bg-[#1118E8] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article key={s.slug} className="group bg-white rounded-[20px] overflow-hidden border border-[#e2e8f0] hover:shadow-lg hover:shadow-[#1118E8]/[0.08] transition-all">
                <img src={s.image} alt={s.title} className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="p-5">
                  <h3 className="font-extrabold text-lg text-[#0F172A]">{s.title}</h3>
                  <p className="text-sm text-[#475569] mt-3 leading-relaxed"><span className="font-semibold text-[#1118E8]">Condition: </span>{s.what}</p>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed"><span className="font-semibold text-[#FF741F]">Common Symptoms: </span>{s.feel}</p>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed"><span className="font-semibold text-[#0F172A]">Our Approach: </span>{s.do}</p>
                  <Link href={`/services/${s.slug}`} className="mt-4 inline-flex text-sm font-bold text-[#1118E8] hover:underline">
                    View more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Before and after</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">See how cataract can make vision clear</h2>
            <div className="w-12 h-1 bg-[#1118E8] mx-auto mt-4 rounded-full" />
          </div>
          <BeforeAfterSlider beforeSrc="/vision-before.webp" afterSrc="/vision-after.webp" />
        </div>
      </section>

      <section className="w-full bg-[#0F172A]">
        <div className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
          <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Our work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Our Work</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {IMPACT.map((item, i) => (
            <div
              key={item.label}
              className={`px-4 sm:px-8 lg:px-10 py-8 sm:py-10 ${i < IMPACT.length - 1 ? "lg:border-r border-white/10" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r border-white/10" : ""} border-b lg:border-b-0 border-white/10`}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF741F]">{item.num}</div>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
