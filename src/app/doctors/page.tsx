"use client";

import { useCallback } from "react";
import { DOCTORS } from "@/lib/doctors";
import { SITE, COPY } from "@/lib/site";
import DoctorProfileCard from "@/components/DoctorProfileCard";

export default function DoctorsPage() {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);

  return (
    <div className="pt-28 pb-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Our doctors</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3 leading-tight">
            Our Doctors
          </h1>
          <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
          <p className="text-[#475569] mt-5 leading-relaxed">
            {COPY.doctorsIntro}
          </p>
        </div>
        <div className="space-y-10">
          {DOCTORS.map((d) => (
            <div key={d.name}>
              <DoctorProfileCard doctor={d} />
              <div className="mt-4 rounded-[22px] bg-white border border-[#e2e8f0] px-6 py-5">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#94A3B8]">Where he has worked before</p>
                <ul className="mt-3 grid sm:grid-cols-3 gap-2 text-sm text-[#475569]">
                  {d.highlights.map((h) => (
                    <li key={h}>{h.replace("Ex. ", "")}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-[#64748b] mb-3">{SITE.hours}. {SITE.sunday}</p>
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-6 py-2.5 text-sm">
            Call {SITE.phoneDisplay}
          </a>
        </div>
        <div className="text-center mt-6">
          <button onClick={book} className="bg-[#FF741F] hover:bg-[#E5660F] text-white font-bold rounded-full px-8 py-3">
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
}
