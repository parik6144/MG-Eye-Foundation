import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { STATS, SITE, COPY } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";
import ClinicVideo from "@/components/ClinicVideo";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = { title: "About Us | MG Eye Foundation" };

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <img
          src="/clinic/maingate.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E4A56]/90 via-[#0F172A]/70 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-white/80 text-[11px] font-semibold tracking-[0.22em] uppercase">About us</p>
          <h1 className="mt-2 max-w-xl text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            MG Eye Foundation
          </h1>
          <p className="mt-4 max-w-lg text-slate-200 leading-relaxed">
            An eye hospital in Bara Gamharia, Jamshedpur. Two doctors. Scan and treatment in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookVisitButton label="Book an appointment" />
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#D5E6EA] bg-[#F4F8F9] p-4 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-[#1F8A9A]">{s.num}</div>
              <div className="mt-1 text-xs text-[#64748b] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/clinic/reception.jpg"
            alt="Reception at MG Eye Foundation"
            className="h-64 sm:h-80 w-full object-cover rounded-[24px]"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">{COPY.aboutTitle}</h2>
            <div className="w-12 h-1 bg-[#1F8A9A] mt-3 rounded-full" />
            <p className="text-[#475569] leading-relaxed mt-5">{COPY.aboutP1}</p>
            <p className="text-[#475569] leading-relaxed mt-3">{COPY.aboutP2}</p>
            <Link href="/doctors" className="inline-flex mt-6 text-sm font-bold text-[#1F8A9A] hover:text-[#16707E]">
              Meet our doctors →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">Our hospital</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A]">We are in Bara Gamharia</h2>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Come from Adityapur, Jamshedpur or Saraikela-Kharsawan. You check in at reception. Then the doctor sees you. Eye scans and surgery happen in this same hospital. We are open Monday to Saturday, 10 a.m. to 6 p.m. Sunday is closed.
              </p>
            </div>
            <ClinicVideo src="/clinic/mgeyefoundation.mp4" poster="/clinic/maingate.webp" />
          </div>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { src: "/clinic/maingate.webp", label: "Main gate" },
              { src: "/clinic/reception.jpg", label: "Reception" },
              { src: "/clinic/center.webp", label: "Inside the hospital" },
              { src: "/clinic/pateints.webp", label: "Patients" },
            ].map((p) => (
              <figure key={p.label} className="overflow-hidden rounded-[18px] bg-white border border-[#e2e8f0]">
                <img src={p.src} alt={p.label} className="h-36 sm:h-44 w-full object-cover" />
                <figcaption className="px-3 py-2.5 text-sm font-semibold text-[#0F172A]">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white">Mission and vision</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="rounded-[24px] overflow-hidden bg-white">
              <img src="/about-mission.png" alt="Doctor explaining an eye scan" className="h-48 w-full object-cover" />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-[#0F172A]">Our mission</h3>
                <p className="mt-3 text-[#475569] leading-relaxed">{COPY.mission}</p>
              </div>
            </article>
            <article className="rounded-[24px] overflow-hidden bg-white">
              <img src="/about-vision.png" alt="Families coming to the hospital" className="h-48 w-full object-cover" />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-[#0F172A]">Our vision</h3>
                <p className="mt-3 text-[#475569] leading-relaxed">{COPY.vision}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <TestimonialsSection force />

      <section className="py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">Come to this hospital</h2>
          <p className="mt-3 text-[#475569] leading-relaxed">{COPY.serviceArea}</p>
          <p className="mt-3 text-sm text-[#64748b]">
            {SITE.hours} {SITE.sunday}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BookVisitButton label="Book an appointment" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D5E6EA] bg-white px-7 py-3.5 text-sm font-bold text-[#0E4A56] hover:border-[#1F8A9A]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
