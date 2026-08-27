import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testimonials | MG Eye Foundation" };

export default function TestimonialsPage() {
  return (
    <div className="pt-6 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#1F8A9A] text-sm font-semibold tracking-[0.18em] uppercase">Testimonials</span>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#0E4A56] leading-tight">
          Testimonials
        </h1>
        <div className="w-12 h-1 bg-[#1F8A9A] mt-4 rounded-full" />
        <p className="mt-5 text-[#475569] leading-relaxed max-w-3xl">
          Patients share their experience at MEERA GAYATRI EYE FOUNDATION.
        </p>
      </div>
    </div>
  );
}
