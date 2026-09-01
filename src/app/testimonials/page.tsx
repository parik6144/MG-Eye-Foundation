import type { Metadata } from "next";
import { TESTIMONIALS, TESTIMONIAL_RATING } from "@/lib/testimonials";
import BookVisitButton from "@/components/BookVisitButton";

export const metadata: Metadata = { title: "Testimonials | MG Eye Foundation" };

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

function Stars({ size = 16 }: { size?: number }) {
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

export default function TestimonialsPage() {
  return (
    <div className="bg-[#F4F8F9] pb-0">
      <section className="bg-gradient-to-br from-[#0E4A56] via-[#16707E] to-[#1F8A9A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-white/80 text-[11px] font-semibold tracking-[0.22em] uppercase">Testimonials</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">What people say</h1>
            <p className="mt-3 max-w-xl text-white/90 leading-relaxed">
              People write about their visit here. These are Google reviews.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#202124] w-fit">
            <GoogleG className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium leading-none">{TESTIMONIAL_RATING}</span>
                <Stars size={16} />
              </div>
              <p className="text-xs text-[#5f6368] mt-1">
                {TESTIMONIALS.length} reviews · 5 stars each
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white border border-[#D5E6EA] p-5 shadow-[0_8px_24px_rgba(14,74,86,0.06)]"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-xs font-semibold"
                  style={{ background: AVATAR[i % AVATAR.length] }}
                >
                  {initials(t.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[#0E4A56] leading-tight">{t.name}</p>
                  <p className="text-[11px] text-[#5f6368] mt-0.5">5.0/5.0</p>
                  <div className="mt-0.5">
                    <Stars size={14} />
                  </div>
                </div>
                <GoogleG className="h-5 w-5 shrink-0" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#334155]">“{t.text}”</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <BookVisitButton label="Book an appointment" />
        </div>
      </section>
    </div>
  );
}
