"use client";

import { useCallback } from "react";
import Link from "next/link";
import { SERVICES, SITE, COPY } from "@/lib/site";
import { SERVICE_MARKS } from "@/components/ServiceIcons";

const BLOCKS = [
  { key: "what" as const, label: "What it is", box: "bg-[#E7F3F5]", tag: "text-[#0E4A56]" },
  { key: "feel" as const, label: "How it feels", box: "bg-[#FFF6EC]", tag: "text-[#9A4A12]" },
  { key: "do" as const, label: "What we do", box: "bg-[#F0F7F4]", tag: "text-[#166534]" },
];

export default function ServicesPage() {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);

  return (
    <div className="pb-20 bg-[#F4F8F9]">
      <section className="bg-gradient-to-br from-[#0E4A56] via-[#16707E] to-[#1F8A9A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="text-white/80 text-sm font-semibold tracking-[0.18em] uppercase">Services</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-3">Our Services</h1>
          <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full" />
          <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/90">
            {COPY.servicesIntro}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Mark = SERVICE_MARKS[s.slug];
            return (
              <article
                key={s.title}
                className="rounded-[24px] overflow-hidden bg-white border border-[#D5E6EA] shadow-[0_10px_28px_rgba(14,74,86,0.08)] hover:shadow-[0_16px_40px_rgba(31,138,154,0.16)] hover:-translate-y-0.5 transition-all"
              >
                <div className="relative">
                  <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E4A56]/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md text-[#1F8A9A] [&>svg]:w-10 [&>svg]:h-10">
                    {Mark ? Mark() : null}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-extrabold text-[#0E4A56]">{s.title}</h2>
                  <div className="mt-4 space-y-2.5">
                    {BLOCKS.map((b) => (
                      <div key={b.key} className={`rounded-2xl ${b.box} px-3.5 py-3`}>
                        <p className={`text-[11px] font-bold tracking-[0.14em] uppercase ${b.tag}`}>{b.label}</p>
                        <p className="mt-1 text-sm text-[#334155] leading-relaxed">{s[b.key]}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] font-bold tracking-[0.14em] uppercase text-[#1F8A9A]">What we offer</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.offers.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[#475569] leading-snug">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F8A9A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      onClick={book}
                      className="inline-flex bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full px-5 py-2.5 text-sm"
                    >
                      Book this care
                    </button>
                    <Link href={`/services/${s.slug}`} className="text-sm font-bold text-[#0E4A56] hover:text-[#1F8A9A]">
                      View more →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center bg-[#0E4A56] hover:bg-[#16707E] text-white font-bold rounded-full px-6 py-2.5 text-sm"
          >
            Call {SITE.phoneDisplay}
          </a>
          <p className="text-sm text-[#64748b] mt-3">{SITE.hours}</p>
        </div>
      </div>
    </div>
  );
}
