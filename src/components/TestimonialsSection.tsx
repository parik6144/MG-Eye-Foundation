"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, TESTIMONIAL_RATING } from "@/lib/testimonials";

const SHOW_ON = ["/", "/about"];
const PER_SLIDE = 2;
const AVATAR = ["#EA4335", "#4285F4", "#34A853", "#FBBC05", "#A142F4", "#FF6D01", "#46BDC6", "#F538A0", "#1A73E8", "#188038"];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.6-11.3-8.4l-6.5 5C9.6 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.8-6.6 7.3l.1.1 6.3 5.3C36.9 41.5 44 36 44 24c0-1.3-.1-2.7-.4-3.5z" />
    </svg>
  );
}

function Stars({ size = 22 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} className="text-[#FBBC04]" fill="currentColor">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function initials(name: string) {
  const parts = name.replace(/^Capt\s+/i, "").split(" ").filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

const SLIDES = Array.from({ length: Math.ceil(TESTIMONIALS.length / PER_SLIDE) }, (_, i) =>
  TESTIMONIALS.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE)
);

export default function TestimonialsSection() {
  const pathname = usePathname();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setPage((p) => (p + 1) % SLIDES.length), 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  if (!SHOW_ON.includes(pathname)) return null;

  const prev = () => setPage((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setPage((p) => (p + 1) % SLIDES.length);

  return (
    <section className="bg-[#F8F9FA] border-t border-[#dadce0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-medium text-[#5f6368]">What patients say</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#202124]">Reviews</h2>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <GoogleG className="h-10 w-10 sm:h-14 sm:w-14" />
              <div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-4xl sm:text-6xl font-medium leading-none text-[#202124]">{TESTIMONIAL_RATING}</span>
                  <Stars size={22} />
                </div>
                <p className="text-sm sm:text-base text-[#5f6368] mt-2">{TESTIMONIALS.length} reviews · 5 stars each</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={prev} className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white border border-[#dadce0] shadow-sm flex items-center justify-center hover:bg-[#f1f3f4]" aria-label="Previous reviews">
              <ChevronLeft className="h-6 w-6 text-[#202124]" />
            </button>
            <button type="button" onClick={next} className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white border border-[#dadce0] shadow-sm flex items-center justify-center hover:bg-[#f1f3f4]" aria-label="Next reviews">
              <ChevronRight className="h-6 w-6 text-[#202124]" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${page * 100}%)` }}>
            {SLIDES.map((pair, si) => (
              <div key={si} className="w-full shrink-0 grid md:grid-cols-2 gap-4 sm:gap-6 px-0.5">
                {pair.map((t) => {
                  const i = TESTIMONIALS.findIndex((x) => x.name === t.name);
                  return (
                    <article
                      key={t.name}
                      className="rounded-3xl bg-white border border-[#dadce0] p-5 sm:p-10 min-h-0 md:min-h-[380px] shadow-[0_1px_2px_rgba(60,64,67,.3),0_2px_6px_2px_rgba(60,64,67,.15)]"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span
                          className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full text-white text-base font-semibold"
                          style={{ background: AVATAR[i % AVATAR.length] }}
                        >
                          {initials(t.name)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-lg sm:text-2xl font-medium text-[#202124] leading-tight">{t.name}</p>
                          <p className="text-xs sm:text-sm text-[#5f6368] mt-1">5.0/5.0</p>
                          <div className="mt-1">
                            <Stars size={20} />
                          </div>
                        </div>
                        <GoogleG className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
                      </div>
                      <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed text-[#3c4043]">“{t.text}”</p>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${i === page ? "w-8 bg-[#4285F4]" : "w-2.5 bg-[#dadce0]"}`}
              aria-label={`Review set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
