"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Baby,
  BookOpen,
  CalendarDays,
  Droplet,
  Droplets,
  Eye,
  Heart,
  ScanEye,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { DOCTORS } from "@/lib/doctors";

type Doctor = (typeof DOCTORS)[number];

function formatExLine(line: string) {
  const rest = line.replace(/^Ex\.?\s+/i, "");
  if (rest.startsWith("Visiting")) return `Ex-${rest}`;
  if (rest.startsWith("HOD")) return `Ex- ${rest}`;
  if (rest.startsWith("Fellow")) return `Ex-${rest}`;
  return `Ex-${rest}`;
}

function expertiseIcon(label: string): LucideIcon {
  const t = label.toLowerCase();
  if (t.includes("diabetic")) return Droplets;
  if (t.includes("trauma") || t.includes("injury")) return Shield;
  if (t.includes("dry") || t.includes("tear") || t.includes("allerg") || t.includes("infection")) return Droplet;
  if (t.includes("cataract")) return ScanEye;
  if (t.includes("comprehensive") || t.includes("ophthalmic care")) return Stethoscope;
  if (t.includes("child") || t.includes("paediatric") || t.includes("pediatric") || t.includes("rop") || t.includes("congenital"))
    return Baby;
  if (t.includes("lazy") || t.includes("amblyopia") || t.includes("learning") || t.includes("school")) return BookOpen;
  if (t.includes("squint") || t.includes("strabismus") || t.includes("ptosis") || t.includes("eyelid") || t.includes("movement"))
    return Eye;
  if (t.includes("developmental")) return Heart;
  return Eye;
}

export default function DoctorProfileCard({
  doctor,
  showFullProfileLink = false,
  useShortName = false,
}: {
  doctor: Doctor;
  showFullProfileLink?: boolean;
  accent?: "blue" | "orange";
  useShortName?: boolean;
}) {
  const book = () => window.dispatchEvent(new CustomEvent("open-appointment"));
  const expertise = useShortName ? doctor.expertise.slice(0, 8) : doctor.expertise;
  const years = doctor.stats[0];

  return (
    <article
      id={useShortName ? undefined : doctor.slug}
      className="relative overflow-hidden scroll-mt-28 rounded-[32px] border border-[#E4EEF2] bg-white p-4 sm:p-6 lg:p-7 shadow-[0_18px_50px_rgba(31,138,154,0.10)]"
    >
      <div className="relative flex flex-col lg:flex-row gap-5 lg:gap-7 items-start">
        <div className="relative mx-auto lg:mx-0 h-64 w-52 sm:h-80 sm:w-64 shrink-0 overflow-hidden rounded-[26px] shadow-[0_12px_28px_rgba(14,74,86,0.18)]">
          <img src={doctor.photo} alt={doctor.name} className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>

        <div className="min-w-0 flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-[1.85rem] font-extrabold text-[#0E4A56] leading-tight tracking-tight">
                {doctor.name}
              </h3>
              {doctor.showQual ? (
                <p className="mt-1 text-[#64748b] text-sm font-medium">{doctor.qual}</p>
              ) : null}
              <p className="mt-1 text-[#1F8A9A] text-sm sm:text-[15px] italic">{doctor.englishFocus}</p>
              <ul className="mt-3 space-y-1 text-[13px] sm:text-sm text-[#475569] leading-snug">
                {doctor.highlights.map((h) => (
                  <li key={h}>{formatExLine(h)}</li>
                ))}
              </ul>
            </div>

            {years ? (
              <div className="shrink-0 flex items-center gap-3 sm:flex-col sm:items-center sm:text-center sm:min-w-[120px]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F6F8] text-[#1F8A9A] ring-8 ring-[#E7F6F8]/60">
                  <Users className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#1F8A9A] leading-none">{years.value}</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
                    Years of experience
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-3">
            {expertise.map((item) => {
              const Icon = expertiseIcon(item);
              return (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#334155]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7F6F8] text-[#1F8A9A]">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              );
            })}
          </ul>

          {!useShortName ? (
            <>
              <p className="mt-5 text-[#475569] text-[15px] leading-relaxed">{doctor.bio}</p>
              {doctor.extraBio.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-[#475569] text-[15px] leading-relaxed">
                  {p}
                </p>
              ))}
              {doctor.quote ? (
                <blockquote className="mt-5 border-l-4 border-[#1F8A9A] pl-4 text-[#0F172A] italic text-[15px] leading-relaxed">
                  “{doctor.quote}”
                </blockquote>
              ) : null}
            </>
          ) : null}

          {doctor.showMemberships ? (
            <ul className="mt-4 space-y-1.5 text-sm text-[#475569]">
              {doctor.memberships.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          ) : null}

          {!useShortName ? (
            <div className="mt-5 grid grid-cols-4 gap-2 max-w-lg">
              {doctor.treats.map((t) => (
                <figure key={t.title} className="relative aspect-square overflow-hidden rounded-xl">
                  <img src={t.image} alt={t.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[#0F172A]/40" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-1.5">
                    <span className="block text-white text-[11px] font-extrabold leading-tight">{t.title}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={book}
              className="inline-flex items-center gap-2 rounded-full bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold px-5 py-2.5 text-sm shadow-md shadow-[#1F8A9A]/20"
            >
              <CalendarDays className="h-4 w-4" strokeWidth={2} />
              Book an Appointment
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
            {showFullProfileLink ? (
              <Link
                href={`/doctors#${doctor.slug}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1F8A9A] bg-white px-5 py-2.5 text-sm font-bold text-[#1F8A9A] hover:bg-[#E7F6F8]"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
