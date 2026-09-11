"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site";

const HIDE_ON = ["/contact", "/privacy", "/terms", "/testimonials", "/doctors"];

function FaqColumn({
  items,
  startIndex,
  open,
  onToggle,
}: {
  items: readonly { q: string; a: string }[];
  startIndex: number;
  open: number;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, local) => {
        const i = startIndex + local;
        const isOpen = open === i;
        return (
          <article
            key={f.q}
            className={`rounded-xl border bg-white transition-shadow ${
              isOpen
                ? "border-[#1F8A9A]/40 shadow-[0_8px_20px_rgba(31,138,154,0.1)]"
                : "border-[#D5E6EA] hover:border-[#1F8A9A]/30"
            }`}
          >
            <button
              type="button"
              className="w-full flex items-start gap-2.5 px-3.5 py-2.5 text-left"
              onClick={() => onToggle(i)}
              aria-expanded={isOpen}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F3F5] text-[#1F8A9A] text-[10px] font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[13px] sm:text-sm font-semibold text-[#0E4A56] leading-snug">
                {f.q}
              </span>
              <ChevronDown
                className={`mt-0.5 w-4 h-4 shrink-0 text-[#1F8A9A] transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="px-3.5 pb-3 pl-[3.25rem] text-[12px] sm:text-[13px] text-[#475569] leading-relaxed">
                {f.a}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export default function FaqSection() {
  const pathname = usePathname();
  const [open, setOpen] = useState(0);

  if (HIDE_ON.includes(pathname) || pathname.startsWith("/services")) return null;

  const mid = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, mid);
  const right = FAQS.slice(mid);

  return (
    <section className="w-full bg-[#E7F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">FAQs</p>
        <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0E4A56]">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-3 md:gap-4 items-start">
          <FaqColumn
            items={left}
            startIndex={0}
            open={open}
            onToggle={(i) => setOpen(open === i ? -1 : i)}
          />
          <FaqColumn
            items={right}
            startIndex={mid}
            open={open}
            onToggle={(i) => setOpen(open === i ? -1 : i)}
          />
        </div>
      </div>
    </section>
  );
}
