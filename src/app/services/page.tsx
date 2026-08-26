"use client";

import { useCallback } from "react";
import Link from "next/link";
import { SERVICES, SITE, COPY } from "@/lib/site";

export default function ServicesPage() {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Services</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3">Our Services</h1>
          <div className="w-12 h-1 bg-[#1118E8] mx-auto mt-4 rounded-full" />
          <p className="text-[#475569] mt-5 max-w-2xl mx-auto leading-relaxed">
            {COPY.servicesIntro}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="rounded-[20px] overflow-hidden border border-[#e2e8f0] bg-white hover:shadow-lg hover:shadow-[#1118E8]/[0.06] transition-all">
              <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-extrabold text-[#0F172A]">{s.title}</h2>
                <p className="text-sm text-[#475569] mt-3 leading-relaxed"><span className="font-semibold text-[#1118E8]">Condition: </span>{s.what}</p>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed"><span className="font-semibold text-[#FF741F]">Common Symptoms: </span>{s.feel}</p>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed"><span className="font-semibold text-[#0F172A]">Our Approach: </span>{s.do}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button onClick={book} className="inline-flex bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-5 py-2.5 text-sm">
                    Book this care
                  </button>
                  <Link href={`/services/${s.slug}`} className="text-sm font-bold text-[#1118E8] hover:underline">
                    View more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-6 py-2.5 text-sm">
            Call {SITE.phoneDisplay}
          </a>
          <p className="text-sm text-[#64748b] mt-3">{SITE.hours}</p>
        </div>
      </div>
    </div>
  );
}
