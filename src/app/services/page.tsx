import Link from "next/link";
import { Check } from "lucide-react";
import { SERVICE_HUB } from "@/lib/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

function EyeMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-[88px] w-[88px] text-[#1F8A9A]/15" fill="currentColor" aria-hidden>
      <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="60" cy="60" rx="38" ry="22" />
      <circle cx="60" cy="60" r="14" fill="#fff" />
      <circle cx="60" cy="60" r="7" />
    </svg>
  );
}

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
              className="group relative rounded-[22px] bg-white/80 hover:bg-white border border-white shadow-[0_8px_28px_rgba(31,138,154,0.08)] px-6 sm:px-8 py-7 min-h-[220px] transition-shadow hover:shadow-[0_14px_36px_rgba(31,138,154,0.14)]"
            >
              <span className="pointer-events-none absolute right-4 bottom-4 sm:right-6 sm:bottom-6">
                <EyeMark />
              </span>
              <h2 className="relative flex items-center gap-3 text-lg sm:text-xl font-bold text-[#1F8A9A]">
                <span className="h-7 w-[3px] rounded-full bg-[#1F8A9A]" />
                {s.title}
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
