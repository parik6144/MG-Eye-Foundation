import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Hourglass,
  ShieldAlert,
  Activity,
  Droplets,
  Sun,
  Moon,
  Eye,
  Sparkles,
  CircleDot,
  Contrast,
  Syringe,
  Scan,
  Stethoscope,
  Baby,
  Glasses,
  Pill,
  ScanEye,
  FlaskConical,
  HeartPulse,
  AlertTriangle,
} from "lucide-react";
import { SITE, COPY, SERVICE_HUB } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";
import type { ClinicalPage } from "@/lib/clinicalServicePages";

const CAUSE_ICONS: LucideIcon[] = [
  Hourglass,
  ShieldAlert,
  Activity,
  Droplets,
  Syringe,
  Scan,
  Stethoscope,
  HeartPulse,
  AlertTriangle,
  FlaskConical,
];

const SYMPTOM_ICONS: LucideIcon[] = [
  Contrast,
  Moon,
  Sparkles,
  Sun,
  CircleDot,
  Eye,
  ScanEye,
  Baby,
  Glasses,
  Pill,
];

export default function ClinicalServicePage({ page }: { page: ClinicalPage }) {
  const others = SERVICE_HUB.filter((x) => x.slug !== page.slug);

  return (
    <div className="bg-[#E7F4F1]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E4A56] via-[#16707E] to-[#1F8A9A] text-white">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-[#E8B4BC]/20 blur-2xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-1.5">/</span>
            {page.breadcrumb}
          </p>
          <div className="mt-6 grid lg:grid-cols-[1fr_minmax(0,320px)] gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/70">{page.kicker}</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">{page.title}</h1>
              <p className="mt-5 text-white/90 leading-relaxed max-w-2xl">{page.hero}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookVisitButton label="Book an appointment" />
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 text-sm font-bold hover:bg-white/10"
                >
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <img
              src={page.image}
              alt={page.imageAlt}
              className="hidden lg:block h-64 w-full object-cover rounded-[28px] border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[28px] bg-white border border-[#D5E6EA] p-7 sm:p-10 shadow-[0_12px_32px_rgba(31,138,154,0.08)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.whatTitle}</h2>
          <p className="mt-4 text-[#334155] leading-relaxed text-[15px] sm:text-base max-w-4xl">{page.whatBody}</p>
        </div>
      </section>

      {page.causes.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">{page.causesKicker}</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.causesTitle}</h2>
            </div>
            {page.causesIntro ? (
              <p className="text-sm text-[#64748b] max-w-md sm:text-right">{page.causesIntro}</p>
            ) : null}
          </div>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.causes.map((item, i) => {
              const Icon = CAUSE_ICONS[i % CAUSE_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[24px] bg-white border border-[#D5E6EA] p-6 hover:border-[#1F8A9A]/35 hover:shadow-[0_14px_32px_rgba(31,138,154,0.12)] transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F3F5] text-[#1F8A9A]">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <span className="text-[11px] font-extrabold tracking-widest text-[#1F8A9A]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-[#0E4A56]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {page.symptoms.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">{page.symptomsKicker}</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.symptomsTitle}</h2>
            </div>
            {page.symptomsIntro ? (
              <p className="text-sm text-[#64748b] max-w-md sm:text-right">{page.symptomsIntro}</p>
            ) : null}
          </div>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.symptoms.map((item, i) => {
              const Icon = SYMPTOM_ICONS[i % SYMPTOM_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] bg-white border border-[#D5E6EA] p-6 hover:-translate-y-0.5 hover:border-[#C2410C]/25 hover:shadow-[0_14px_32px_rgba(194,65,12,0.08)] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF6EC] text-[#C2410C]">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-[11px] font-extrabold tracking-widest text-[#C2410C]">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-extrabold text-[#0E4A56] leading-snug">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#475569] leading-relaxed">{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {page.treatment ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-[28px] bg-[#0E4A56] text-white p-7 sm:p-10 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#1F8A9A]/40 blur-2xl" />
            <h2 className="relative text-2xl sm:text-3xl font-extrabold">Treatment</h2>
            <p className="relative mt-4 text-white/90 leading-relaxed max-w-4xl">{page.treatment}</p>
          </div>
        </section>
      ) : null}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.servicesTitle}</h2>
        <div className="mt-7 grid lg:grid-cols-2 gap-5">
          {page.services.map((b, i) => (
            <article
              key={b.title}
              className="rounded-[24px] bg-white border border-[#D5E6EA] p-6 sm:p-7 shadow-[0_8px_24px_rgba(31,138,154,0.06)]"
            >
              <p className="text-[#1F8A9A] text-sm font-extrabold tracking-widest">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-lg font-extrabold text-[#0E4A56]">{b.title}</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">{b.body}</p>
              {b.chips ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-gradient-to-r from-[#E7F3F5] to-[#FFF6EC] text-[#0E4A56] text-xs font-bold px-3 py-1.5 border border-[#D5E6EA]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {page.machines && page.machines.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">On-site equipment</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.machinesTitle}</h2>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.machines.map((m) => (
              <article key={m.title} className="rounded-[24px] bg-white border border-[#D5E6EA] p-6">
                <h3 className="font-extrabold text-[#0E4A56]">{m.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{m.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {page.extraTitle && page.extraItems && page.extraItems.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">{page.extraTitle}</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {page.extraItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white border border-[#D5E6EA] px-5 py-4 text-sm font-semibold text-[#0E4A56]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className="h-8" />
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">{page.faqKicker}</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">Questions patients ask</h2>
        <div className="mt-7 grid lg:grid-cols-2 gap-4">
          {page.faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-[22px] bg-white border border-[#D5E6EA] open:border-[#1F8A9A]/40 open:shadow-[0_10px_28px_rgba(31,138,154,0.12)] px-5 py-4"
            >
              <summary className="cursor-pointer list-none flex gap-3 items-start">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7F3F5] text-[#1F8A9A] text-xs font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold text-[#0E4A56] leading-snug pt-1">{f.q}</span>
              </summary>
              <div className="mt-3 ml-11 text-sm text-[#475569] leading-relaxed">
                <p>{f.a}</p>
                {f.list ? (
                  <ul className="mt-2 space-y-1">
                    {f.list.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F8A9A] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[28px] bg-white border border-[#D5E6EA] overflow-hidden grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold text-[#0E4A56]">Visit M G EYE Foundation</h2>
            <p className="mt-4 text-[#475569] leading-relaxed">{COPY.mission}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#334155]">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#1F8A9A] shrink-0" />
                {SITE.address}, {SITE.city}
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[#1F8A9A] shrink-0" />
                <a href={SITE.phoneHref} className="font-semibold text-[#0E4A56] hover:text-[#1F8A9A]">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-[#1F8A9A] shrink-0" />
                <a href={SITE.emailHref} className="hover:text-[#1F8A9A]">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-[#1F8A9A] shrink-0" />
                {SITE.hours}. {SITE.sunday}
              </li>
            </ul>
            <div className="mt-7">
              <BookVisitButton label={page.bookLabel} />
            </div>
          </div>
          <div className="bg-[#1F8A9A] text-white p-7 sm:p-10 flex flex-col justify-center">
            <p className="text-white/70 text-[11px] font-semibold tracking-[0.18em] uppercase">Doctors</p>
            {page.surgeons.map((d) => (
              <div key={d.name} className="mt-4 first:mt-3">
                <p className="text-lg font-extrabold leading-snug">{d.name}</p>
                <p className="text-white/80 text-sm">{d.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-[#0E4A56] mb-4">Other services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="rounded-2xl bg-white border border-[#D5E6EA] px-4 py-3 text-sm font-bold text-[#0E4A56] hover:border-[#1F8A9A]"
            >
              {o.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
