"use client";

import { usePathname } from "next/navigation";

const HIDE_ON = ["/contact", "/privacy", "/terms"];

export default function PmjaySection() {
  const pathname = usePathname();
  if (HIDE_ON.includes(pathname)) return null;

  return (
    <section className="bg-[#FFFDF8] border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 sm:py-10">
          <img
            src="/pmjayimages.jpg"
            alt="Ayushman Bharat PM-JAY"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <p className="text-[#FF741F] text-xs font-semibold tracking-[0.18em] uppercase">
              Ayushman Bharat · PM-JAY
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug">
              Pradhan Mantri Jan Arogya Yojana
            </h2>
            <p className="mt-3 text-[#334155] text-sm sm:text-base leading-relaxed">
              This hospital is listed under PM-JAY. You can come here for eye care.
            </p>
            <p className="mt-2 text-[#64748b] text-sm leading-relaxed">
              In other words: we are on the PM-JAY list. Cashless is{" "}
              <span className="text-[#0F172A] font-semibold">not available right now</span>. Please ask at the desk before you get admitted.
            </p>
          </div>
          <img
            src="/mantri-img.webp"
            alt=""
            className="hidden md:block h-40 lg:h-52 w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
