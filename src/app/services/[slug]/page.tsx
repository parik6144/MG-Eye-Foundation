import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CataractServicePage from "@/components/CataractServicePage";
import ClinicalServicePage from "@/components/ClinicalServicePage";
import { getClinicalPage } from "@/lib/clinicalServicePages";
import { SITE, SERVICE_HUB, allServices, getService } from "@/lib/site";
import { getServiceClinical } from "@/lib/serviceContent";
import BookVisitButton from "@/components/BookVisitButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = SERVICE_HUB.find((x) => x.slug === slug);
  const s = getService(slug);
  const title = hub?.title ?? s?.title;
  if (!title) return { title: "Service | M G Eye Foundation" };
  return { title: `${title} | M G Eye Foundation` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "cataract") return <CataractServicePage />;

  const custom = getClinicalPage(slug);
  if (custom) return <ClinicalServicePage page={custom} />;

  const s = getService(slug);
  const c = getServiceClinical(slug);
  if (!s || !c) notFound();

  const others = SERVICE_HUB.filter((x) => x.slug !== s.slug);
  const name = SERVICE_HUB.find((x) => x.slug === s.slug)?.title ?? s.title;

  return (
    <div className="bg-[#F4F8F9] pb-0">
      <section className="bg-gradient-to-br from-[#0E4A56] via-[#16707E] to-[#1F8A9A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageBreadcrumb
            tone="dark"
            items={[{ href: "/services", label: "Services" }, { label: name }]}
          />
          <div className="mt-6 grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 items-start">
            <img
              src={s.image}
              alt={name}
              className="w-full h-52 sm:h-64 object-cover rounded-[22px] border border-white/20 shadow-lg"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{name}</h1>
              <p className="mt-4 text-white/90 leading-relaxed text-[15px] sm:text-base">{c.overview}</p>
              <p className="mt-4 text-sm font-semibold text-white">{s.doctor}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookVisitButton label="Book an appointment" />
                <a href={SITE.phoneHref} className="inline-flex items-center font-bold text-white px-2 py-3 text-sm">
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-[22px] bg-white border border-[#D5E6EA] p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-[#0E4A56]">Causes</h2>
            <ul className="mt-4 space-y-2.5">
              {c.causes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-[#334155] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F8A9A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[22px] bg-white border border-[#D5E6EA] p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-[#0E4A56]">Symptoms</h2>
            <ul className="mt-4 space-y-2.5">
              {c.symptoms.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-[#334155] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2410C]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-[22px] bg-white border border-[#D5E6EA] p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold text-[#0E4A56]">Treatment</h2>
          <p className="mt-4 text-[#334155] leading-relaxed text-[15px] sm:text-base">{c.treatment}</p>
          <p className="mt-5 text-sm text-[#0E4A56] leading-relaxed border-l-4 border-[#1F8A9A] pl-4">{c.scope}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">What we provide</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {c.procedures.map((p) => (
            <article key={p.title} className="rounded-[20px] bg-white border border-[#D5E6EA] p-5 sm:p-6">
              <h3 className="font-extrabold text-[#0E4A56]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
        {c.types ? (
          <div className="mt-8">
            <h3 className="text-lg font-extrabold text-[#0E4A56]">Clinical types</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.types.map((t) => (
                <li key={t} className="rounded-full bg-[#E7F3F5] text-[#0E4A56] text-sm font-semibold px-4 py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-extrabold text-[#0E4A56]">Questions we are asked</h2>
        <div className="mt-5 space-y-3">
          {c.faqs.map((f) => (
            <details key={f.q} className="group rounded-[18px] bg-white border border-[#D5E6EA] px-5 py-4">
              <summary className="cursor-pointer font-bold text-[#0E4A56] list-none flex justify-between gap-3">
                {f.q}
                <span className="text-[#1F8A9A] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#64748b]">
          {SITE.hours} {SITE.sunday} · Call {SITE.phoneDisplay}
        </p>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0E4A56] mb-5">Other services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="rounded-2xl border border-[#D5E6EA] px-4 py-4 font-bold text-[#0E4A56] hover:border-[#1F8A9A] hover:bg-[#F4F8F9]"
              >
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
