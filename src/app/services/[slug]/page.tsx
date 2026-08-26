import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SITE, COPY, getService } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";

type Props = { params: Promise<{ slug: string }> };

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
    <div className="pt-28 pb-0 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <Link href="/services" className="text-sm font-semibold text-[#1118E8] hover:underline">
          ← All eye care
        </Link>
        <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
          <img src={s.image} alt={s.title} className="w-full h-[280px] sm:h-[420px] object-cover rounded-[28px] border border-[#e2e8f0]" />
          <div>
            <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Our Services</span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">{s.title}</h1>
            <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
            <p className="mt-5 text-lg text-[#475569] leading-relaxed">{s.what}</p>
            <p className="mt-4 text-[#0F172A] font-semibold">{s.doctor}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookVisitButton />
              <a href={SITE.phoneHref} className="inline-flex items-center font-bold text-[#1118E8] px-2 py-3 text-sm">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <article className="rounded-[24px] bg-white border border-[#e2e8f0] p-8">
              <p className="text-[#1118E8] text-sm font-semibold">Condition</p>
              <p className="mt-3 text-lg text-[#0F172A] leading-relaxed">{s.what}</p>
            </article>
            <article className="rounded-[24px] bg-white border border-[#e2e8f0] p-8">
              <p className="text-[#FF741F] text-sm font-semibold">Common Symptoms</p>
              <p className="mt-3 text-lg text-[#0F172A] leading-relaxed">{s.feel}</p>
            </article>
            <article className="rounded-[24px] bg-white border border-[#e2e8f0] p-8">
              <p className="text-[#0F172A] text-sm font-semibold">Our Approach</p>
              <p className="mt-3 text-lg text-[#0F172A] leading-relaxed">{s.do}</p>
            </article>
          </div>

          <article className="mt-12 rounded-[24px] bg-white border border-[#e2e8f0] p-8">
            <h2 className="text-2xl font-extrabold text-[#0F172A]">What we offer</h2>
            <p className="mt-2 text-sm text-[#64748b]">Care available at this hospital for this condition.</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {s.offers.map((item) => (
                <li key={item} className="flex gap-3 text-[#475569] leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF741F]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <article className="rounded-[24px] bg-white border border-[#e2e8f0] p-8">
              <h2 className="text-2xl font-extrabold text-[#0F172A]">Signs to watch</h2>
              <p className="mt-2 text-sm text-[#64748b]">These are common. Only a check can confirm the condition.</p>
              <ul className="mt-5 space-y-3">
                {s.signs.map((item) => (
                  <li key={item} className="flex gap-3 text-[#475569] leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1118E8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[24px] bg-white border border-[#e2e8f0] p-8">
              <h2 className="text-2xl font-extrabold text-[#0F172A]">When to come</h2>
              <p className="mt-4 text-lg text-[#475569] leading-relaxed">{s.when}</p>
              <p className="mt-6 text-sm text-[#0F172A] leading-relaxed font-medium">{SITE.hours}. {SITE.sunday}</p>
            </article>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Understanding this condition</h2>
            <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
            {s.story.map((p) => (
              <p key={p} className="mt-5 text-lg text-[#475569] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">What happens when you come</h2>
            <ol className="mt-8 grid sm:grid-cols-2 gap-5">
              {s.steps.map((step, i) => (
                <li key={step} className="rounded-[22px] bg-white border border-[#e2e8f0] p-6 flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1118E8] text-white font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#475569] leading-relaxed pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 rounded-[24px] border border-[#FFEDD5] bg-[#FFF7ED] p-8">
            <h2 className="text-xl font-extrabold text-[#0F172A]">Cost, PM-JAY and Rajyakarmi</h2>
            <p className="mt-3 text-[#475569] leading-relaxed">{COPY.pmjay}</p>
            <p className="mt-3 text-[#475569] leading-relaxed">{COPY.rajyakarmi}</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">Other eye care</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#1118E8]/40 transition-colors"
              >
                <img src={o.image} alt="" className="h-36 w-full object-cover" />
                <div className="p-4">
                  <p className="font-bold text-[#0F172A]">{o.title}</p>
                  <p className="text-sm text-[#1118E8] mt-1">View more</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
