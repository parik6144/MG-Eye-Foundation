import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Insurance & Self-Pay | MG Eye Foundation" };

export default function InsurancePage() {
  return (
    <div className="pt-6 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#1F8A9A] text-sm font-semibold tracking-[0.18em] uppercase">
          Insurance & Self-Pay
        </span>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight">
          Insurance & Self-Pay
        </h1>
        <div className="w-12 h-1 bg-[#1F8A9A] mt-4 rounded-full" />
        <p className="mt-5 text-[#475569] leading-relaxed max-w-3xl">
          Costs are told before treatment. Cashless facilities are not currently available. Patients may pay at the hospital. We are empanelled under PM-JAY and associated with Rajyakarmi (SEHIS). Kindly consult the front desk with your scheme card and papers prior to admission.
        </p>
        <p className="mt-4 text-sm text-[#64748b]">
          {SITE.hours}. {SITE.sunday}
        </p>
      </div>
    </div>
  );
}
