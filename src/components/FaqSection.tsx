"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site";

const HIDE_ON = ["/", "/contact", "/privacy", "/terms", "/testimonials", "/doctors"];

export default function FaqSection() {
  const pathname = usePathname();
  const [open, setOpen] = useState(0);

  if (HIDE_ON.includes(pathname)) return null;

  return (
    <section className="w-full bg-[#1E293B]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full border-t border-white/10">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="w-full border-b border-white/10">
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 py-5 text-left"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-white text-base sm:text-lg leading-snug">
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#1F8A9A] transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? (
                <p className="w-full px-4 sm:px-8 lg:px-12 pb-6 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  {f.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
