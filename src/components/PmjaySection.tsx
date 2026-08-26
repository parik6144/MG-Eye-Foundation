"use client";

import { usePathname } from "next/navigation";
import { COPY } from "@/lib/site";

const HIDE_ON = ["/contact", "/privacy", "/terms"];

const SCHEMES = [
  {
    kicker: "Ayushman Bharat · PM-JAY",
    title: "Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PMJAY)",
    body: COPY.pmjay,
    image: "/pmjayimages.jpg",
    alt: "Ayushman Bharat PM-JAY",
  },
  {
    kicker: "Jharkhand · SEHIS",
    title: "Rajyakarmi Swasthya Bima Yojana",
    body: COPY.rajyakarmi,
    image: "/rajyakarmi.png",
    alt: "Rajyakarmi Swasthya Bima Yojana, Jharkhand",
  },
] as const;

export default function PmjaySection() {
  const pathname = usePathname();
  if (HIDE_ON.includes(pathname)) return null;

  return (
    <section className="bg-[#FFFDF8] border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <p className="text-[#FF741F] text-xs font-semibold tracking-[0.18em] uppercase text-center">
          Insurance and schemes
        </p>
        <h2 className="mt-2 text-center text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
          Schemes we are associated with
        </h2>
        <p className="mt-3 text-center text-[#64748b] text-sm max-w-2xl mx-auto leading-relaxed">
          Bring your card and papers. The front desk will explain what is needed before admission. Cashless facilities are not currently available.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {SCHEMES.map((s) => (
            <article key={s.title} className="rounded-[24px] bg-white border border-[#e2e8f0] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
              <img src={s.image} alt={s.alt} className="h-28 sm:h-32 w-auto max-w-[220px] object-contain shrink-0" />
              <div className="text-center sm:text-left">
                <p className="text-[#FF741F] text-[11px] font-semibold tracking-[0.16em] uppercase">{s.kicker}</p>
                <h3 className="mt-2 text-xl font-extrabold text-[#0F172A] leading-snug">{s.title}</h3>
                <p className="mt-3 text-[#334155] text-sm leading-relaxed">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
