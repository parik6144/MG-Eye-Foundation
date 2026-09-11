import type { Metadata } from "next";
import { EQUIPMENT, SITE } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export const metadata: Metadata = { title: "Facilities | M G Eye Foundation" };

export default function FacilitiesPage() {
  return (
    <div className="bg-white pb-0">
      <section className="bg-[#F4F8F9] border-b border-[#D5E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageBreadcrumb items={[{ label: "Facilities" }]} />
          <p className="mt-4 text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">Facilities</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight tracking-tight">
            Our machines
          </h1>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-[#E8B4BC] to-[#1F8A9A]" />
          <p className="mt-5 max-w-2xl text-[#475569] leading-relaxed">
            Diagnostic scans are done on the day of the visit. The doctor reviews the picture the same day.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-16 sm:space-y-24">
          {EQUIPMENT.map((eq, i) => (
            <article key={eq.name} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-contain bg-[#F4F8F9] rounded-[28px] border border-[#D5E6EA]"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <h2 className="text-2xl sm:text-[2rem] font-extrabold text-[#0E4A56] leading-tight tracking-tight">
                  {eq.name}
                </h2>
                <div className="mt-3 h-px w-14 bg-gradient-to-r from-[#E8B4BC] to-[#1F8A9A]" />
                {eq.kicker ? (
                  <p className="mt-4 text-[13px] sm:text-sm font-medium tracking-[0.04em] text-[#1F8A9A] leading-snug">
                    {eq.kicker}
                  </p>
                ) : null}
                <div className="mt-5 space-y-4">
                  {eq.body.map((p) => (
                    <p key={p.slice(0, 48)} className="text-[#475569] leading-[1.75]">
                      {p}
                    </p>
                  ))}
                </div>
                <p className="mt-6 pt-5 border-t border-[#F0E4E7] text-[15px] italic leading-relaxed text-[#6B4A52]">
                  {eq.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 rounded-[28px] bg-[#F4F8F9] border border-[#D5E6EA] px-8 py-10 text-center">
          <p className="text-xl font-extrabold text-[#0E4A56] tracking-tight">Need a scan or an eye check?</p>
          <p className="text-[#64748b] mt-2">{SITE.hours}. {SITE.hoursNote}</p>
          <div className="mt-6">
            <BookVisitButton label="Book an appointment" />
          </div>
        </div>
      </div>
    </div>
  );
}
