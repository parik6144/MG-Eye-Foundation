import type { Metadata } from "next";
import { EQUIPMENT, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Facilities | MG Eye Foundation" };

export default function FacilitiesPage() {
  return (
    <div className="pt-6 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[#1F8A9A] text-sm font-semibold tracking-[0.18em] uppercase">Our machines</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3 leading-tight">
            Diagnostic equipment
          </h1>
          <div className="w-12 h-1 bg-[#1F8A9A] mt-4 rounded-full" />
          <p className="text-[#475569] mt-5 text-lg leading-relaxed">
            All diagnostic scans are performed on the day of consultation. The following instruments support cataract, retina, glaucoma and related care. You sit for the scan; the doctor reviews the picture the same day.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {EQUIPMENT.map((eq, i) => (
            <article key={eq.name} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover rounded-[28px] border border-[#e2e8f0]"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F8A9A] text-white font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[#1F8A9A] text-xs font-semibold tracking-[0.18em] uppercase">{eq.use}</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">{eq.name}</h2>
                <div className="mt-8 space-y-5">
                  <p className="text-[#475569] text-lg leading-relaxed">
                    <span className="block text-[#1F8A9A] text-sm font-semibold mb-1">What it is</span>
                    {eq.what}
                  </p>
                  <p className="text-[#475569] text-lg leading-relaxed">
                    <span className="block text-[#1F8A9A] text-sm font-semibold mb-1">What you feel</span>
                    {eq.feel}
                  </p>
                  <p className="text-[#475569] text-lg leading-relaxed">
                    <span className="block text-[#0F172A] text-sm font-semibold mb-1">What we do with it</span>
                    {eq.do}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[28px] bg-[#F7F9FC] border border-[#e2e8f0] px-8 py-10 text-center">
          <p className="text-xl font-extrabold text-[#0F172A]">Need a scan or an eye check?</p>
          <p className="text-[#475569] mt-2">{SITE.hours}. {SITE.hoursNote}</p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full px-8 py-3 text-sm"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
