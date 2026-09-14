import Link from "next/link";
import { Check } from "lucide-react";
import { SERVICE_HUB } from "@/lib/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function ServicesPage() {
  return (
    <div className="bg-[#E7F4F1] min-h-screen pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[42%] hidden lg:block">
          <img
            src="/service-photos/cornea.png"
            alt=""
            className="h-full w-full object-cover object-[center_20%] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#E7F4F1]/20 to-[#E7F4F1]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 lg:pb-10">
          <PageBreadcrumb items={[{ label: "Services" }]} />
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#1F8A9A] tracking-tight">Services</h1>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
          {SERVICE_HUB.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-[24px] bg-white border border-[#D5E6EA] shadow-[0_8px_28px_rgba(31,138,154,0.08)] px-6 sm:px-8 py-8 min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F8A9A]/50 hover:shadow-[0_18px_44px_rgba(31,138,154,0.2)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[#1F8A9A]/0 opacity-0 group-hover:bg-[#1F8A9A]/8 group-hover:opacity-100 transition-all duration-300" />
              <h2 className="relative flex items-center gap-4 text-xl sm:text-2xl font-extrabold text-[#0E4A56] group-hover:text-[#16707E] transition-colors">
                <span className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-[#E7F3F5] ring-1 ring-[#1F8A9A]/20 p-2">
                  <img src={s.icon} alt="" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </span>
                <span>{s.title}</span>
              </h2>
              <ul className="relative mt-5 space-y-2.5 max-w-[88%]">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#475569] leading-snug">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A9A]" strokeWidth={2.6} />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
