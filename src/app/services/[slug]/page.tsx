import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SITE, getService } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";

type Props = { params: Promise<{ slug: string }> };

const STEP_TONE = [
  { wrap: "bg-[#E7F3F5] border-[#B7D9E0]", num: "bg-[#1F8A9A]", title: "text-[#0E4A56]" },
  { wrap: "bg-[#FFF6EC] border-[#F3D5B5]", num: "bg-[#C2410C]", title: "text-[#9A4A12]" },
  { wrap: "bg-[#F0F7F4] border-[#B7DCC8]", num: "bg-[#166534]", title: "text-[#166534]" },
  { wrap: "bg-[#EEF2FF] border-[#C7D2FE]", num: "bg-[#3730A3]", title: "text-[#3730A3]" },
] as const;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service | MG Eye Foundation" };
  return { title: `${s.title} | MG Eye Foundation` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <div className="bg-[#F4F8F9] pb-0">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <Link href="/services" className="text-sm font-semibold text-[#1F8A9A] hover:underline">
          ← All eye care
        </Link>
        <div className="mt-5 grid lg:grid-cols-[minmax(0,280px)_1fr] xl:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
          <img
            src={s.image}
            alt={s.title}
            className="w-full max-w-[280px] mx-auto lg:mx-0 h-48 sm:h-52 object-cover rounded-[22px] border border-[#D5E6EA]"
          />
          <div>
            <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.22em] uppercase">Our services</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0E4A56] leading-tight">{s.title}</h1>
            <p className="mt-4 text-[#475569] leading-relaxed">{s.what}</p>
            <p className="mt-3 text-[#475569] leading-relaxed">{s.feel}</p>
            <p className="mt-3 text-[#475569] leading-relaxed">{s.do}</p>
            <p className="mt-3 text-[#334155] leading-relaxed">{s.when}</p>
            <p className="mt-3 text-sm font-semibold text-[#0E4A56]">{s.doctor}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookVisitButton label="Book an appointment" />
              <a href={SITE.phoneHref} className="inline-flex items-center font-bold text-[#1F8A9A] px-2 py-3 text-sm">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid md:grid-cols-3 gap-4">
          <figure className="overflow-hidden rounded-[20px] border border-[#B7D9E0] bg-[#E7F3F5]">
            <img src={s.image} alt="" className="h-32 w-full object-cover" />
            <figcaption className="p-4">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0E4A56]">What it is</p>
              <p className="mt-2 text-sm text-[#334155] leading-relaxed">{s.what}</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[20px] border border-[#F3D5B5] bg-[#FFF6EC]">
            <img src={s.feelImage} alt="" className="h-32 w-full object-cover" />
            <figcaption className="p-4">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#9A4A12]">How it feels</p>
              <p className="mt-2 text-sm text-[#334155] leading-relaxed">{s.who}</p>
              <p className="mt-2 text-sm text-[#334155] leading-relaxed">{s.feel}</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[20px] border border-[#B7DCC8] bg-[#F0F7F4]">
            <img src={s.doImage} alt="" className="h-32 w-full object-cover" />
            <figcaption className="p-4">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#166534]">What we do</p>
              <p className="mt-2 text-sm text-[#334155] leading-relaxed">{s.do}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">How a visit works</h2>
        <p className="mt-2 text-[#64748b]">Four steps, with a photo for each step.</p>
        <ol className="mt-6 space-y-4">
          {s.steps.map((step, i) => {
            const tone = STEP_TONE[i % STEP_TONE.length];
            const extra =
              i === 3
                ? "Come back on the day we give you. We check the eye and tell you what to do next."
                : s.story[i];
            return (
              <li
                key={step}
                className={`flex flex-col sm:flex-row gap-0 overflow-hidden rounded-[20px] border ${tone.wrap}`}
              >
                <img
                  src={s.stepImages[i]}
                  alt=""
                  className="h-36 sm:h-40 sm:w-52 shrink-0 object-cover"
                />
                <div className="p-5 sm:p-6 flex gap-4 items-start">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tone.num} text-white text-sm font-bold`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className={`font-extrabold leading-snug ${tone.title}`}>{step}</p>
                    <p className="mt-2 text-sm text-[#334155] leading-relaxed">{extra}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-sm text-[#64748b]">
          We tell you the cost first. Cashless is not available now. {SITE.hours} {SITE.sunday}
        </p>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0E4A56] mb-5">Other eye care</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#D5E6EA] hover:border-[#1F8A9A] transition-colors"
              >
                <img src={o.image} alt={o.title} className="h-32 w-full object-cover" />
                <div className="p-3">
                  <p className="font-bold text-[#0E4A56] group-hover:text-[#1F8A9A]">{o.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
