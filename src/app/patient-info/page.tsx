"use client";

import { useCallback } from "react";
import { CARE_STEPS, COPY } from "@/lib/site";

const STEPS = [
  { title: "Before your visit", items: ["Bring old reports and glasses", "List of medicines", "PM-JAY or Rajyakarmi card, if you have one", "Come 15 minutes early"] },
  { title: "During your visit", items: ["First register, then full eye check", "Scan if needed (photo of the eye)", "We explain in simple words"] },
  { title: "After your visit", items: ["Put drops as told", "Keep the next date", "Call in working hours if anything feels wrong"] },
];

export default function PatientInfoPage() {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);

  return (
    <div className="pt-6 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#1F8A9A] text-sm font-semibold tracking-wide uppercase">Patient Resources</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3">Patient Resources</h1>
          <div className="w-12 h-1 bg-[#1F8A9A] mx-auto mt-4 rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            {COPY.patientEdu}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {CARE_STEPS.map((step) => (
            <article key={step.n} className="overflow-hidden rounded-[22px] bg-[#F4F7FF] border border-[#e2e8f0]">
              <img src={step.image} alt="" className="h-36 w-full object-cover" />
              <div className="p-6">
                <span className="text-3xl font-extrabold text-[#1F8A9A]/25">{step.n}</span>
                <h3 className="text-lg font-extrabold text-[#0F172A] mt-2">{step.title}</h3>
                <p className="text-[#64748b] text-sm mt-2 leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((s, i) => (
            <div key={s.title} className="bg-[#F1F5F9] rounded-[22px] p-7 border border-[#e2e8f0]">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold mb-4">{i + 1}</div>
              <h2 className="font-bold text-[#0F172A] mb-4">{s.title}</h2>
              <ul className="space-y-2 text-sm text-[#475569]">
                {s.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={book} className="bg-[#F97316] hover:bg-[#16707E] text-white font-bold rounded-full px-8 py-3">Schedule a Consultation</button>
        </div>
      </div>
    </div>
  );
}
