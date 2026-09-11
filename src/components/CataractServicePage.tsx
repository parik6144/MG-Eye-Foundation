import Link from "next/link";
import {
  Sun,
  Moon,
  Eye,
  Sparkles,
  CircleDot,
  Contrast,
  MapPin,
  Phone,
  Mail,
  Clock,
  Hourglass,
  Cigarette,
  Scale,
  Droplets,
  ShieldAlert,
  Radiation,
  Activity,
} from "lucide-react";
import { SITE, COPY, SERVICE_HUB } from "@/lib/site";
import BookVisitButton from "@/components/BookVisitButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const CAUSES = [
  {
    title: "Old age",
    body: "Lens proteins change slowly over decades. The lens yellows and stiffens, so light no longer passes as a clear image. This is the most common cause of cataract.",
  },
  {
    title: "Smoking",
    body: "Tobacco smoke increases oxidative stress inside the lens. Long-term smoking is linked to earlier and denser cataract.",
  },
  {
    title: "Obesity",
    body: "Metabolic strain associated with obesity can alter the chemistry of the lens and raise the chance of cataract forming earlier than expected.",
  },
  {
    title: "Diabetes",
    body: "High blood sugar changes the water balance and metabolism of the lens. People with diabetes often develop cataract younger, and it may progress faster.",
  },
  {
    title: "Trauma",
    body: "A blow, penetrating injury or previous surgery can damage lens fibres. A traumatic cataract may appear soon after injury or years later.",
  },
  {
    title: "Radiation therapy",
    body: "Ionising radiation to the head or eye can injure lens cells. Cataract may follow after a delay of months to years.",
  },
  {
    title: "Inflammation of internal eye structures",
    body: "Uveitis and other internal inflammation disturb the lens environment. Repeated inflammation is a recognised cause of cataract, including in younger patients.",
  },
];

const CAUSE_ICONS = [Hourglass, Cigarette, Scale, Droplets, ShieldAlert, Radiation, Activity];

const SYMPTOMS = [
  {
    icon: Contrast,
    text: "Hazy or blurred vision",
    body: "Objects look foggy or out of focus, as if seen through a dirty window. Reading, faces and road signs become harder to resolve.",
  },
  {
    icon: Moon,
    text: "Difficulty seeing at night",
    body: "Vision falls in low light. Driving after dusk feels unsafe because contrast is reduced and the pupil opens onto a cloudy lens.",
  },
  {
    icon: Sparkles,
    text: "Faded or yellowed colors",
    body: "The lens acts like a yellow filter. Whites look cream, and colours lose their true strength until the cataract is removed.",
  },
  {
    icon: Sun,
    text: "Increased sensitivity to glare",
    body: "Bright sunlight, headlights or indoor lamps cause discomfort. Scatter inside the cloudy lens makes light feel harsh.",
  },
  {
    icon: CircleDot,
    text: "Double vision in one eye",
    body: "A single object may appear doubled when the other eye is covered. This comes from irregular refraction within the cataract, not from a squint.",
  },
  {
    icon: Eye,
    text: "Halos around lights",
    body: "Rings or starbursts appear around lamps and oncoming headlights, especially at night, because light is diffracted by the opaque lens.",
  },
];

const SERVICES_BLOCKS = [
  {
    n: "01",
    title: "Phacoemulsification with Foldable IOL",
    body: "A small corneal incision of 2.8 mm is done. Then the cataract is removed by ultrasonic phacoemulsification probe, and the IOL is implanted.",
  },
  {
    n: "02",
    title: "Multifocal IOL",
    body: "Multifocal intraocular lenses are implanted to correct both far and near vision without spectacles. A small percentage of patients may need small power occasionally.",
  },
  {
    n: "03",
    title: "Micro-Coaxial Phaco Surgery",
    body: "This technique reduces the incision to less than 2.2 mm. Irrigation, aspiration and phacoemulsification are performed with instruments used in standard coaxial small-incision cataract surgery. Patients may have quicker wound healing, smaller surgically induced astigmatism, better postoperative visual sharpness, lower risk of infection, and more stable corneal biomechanics.",
  },
  {
    n: "04",
    title: "Premium Cataract Surgery Options",
    body: "These options enable vision for distance, intermediate and near tasks without blurred zones.",
    chips: ["Mono-vision", "Toric IOLs", "Aspheric IOLs", "Multifocal IOLs"],
  },
];

const FAQS: { q: string; a: string; list?: string[] }[] = [
  {
    q: "What are the three types of cataracts?",
    a: "There are three primary types:",
    list: ["Nuclear sclerotic", "Cortical cataracts", "Posterior sub-capsular"],
  },
  {
    q: "Can cataracts be cured?",
    a: "Cataracts cannot be reversed with medications or non-surgical methods. The only definitive cure for cataracts is surgical intervention.",
  },
  {
    q: "How is a cataract removed?",
    a: "The clouded lens is removed during surgery, and a clear artificial lens is usually implanted in its place, barring some cases where the artificial lens may not be used.",
  },
  {
    q: "How can you prevent cataracts from worsening?",
    a: "Protect your eyes from UV rays with sunglasses, eat a healthy diet rich in antioxidants, avoid smoking, limit alcohol intake, and manage chronic conditions like diabetes. Regular eye exams are also crucial for monitoring eye health.",
  },
  {
    q: "What are the advantages of phacoemulsification?",
    a: "Phacoemulsification is preferred for these reasons:",
    list: [
      "No hospitalization",
      "Quick surgery",
      "Smaller incision",
      "Lesser complications and easy visual rehabilitation",
      "No restriction on routine activities",
    ],
  },
  {
    q: "How does multifocal IOL work?",
    a: "These lenses are designed to provide the ability to see objects at different distances without glasses. The lens substance distributes light to different distances, allowing the eye to focus on different ranges for better vision.",
  },
  {
    q: "Can I wear my reading glasses with multifocal lenses?",
    a: "Multifocal intraocular lenses are designed to provide clear vision at near, intermediate and far distances and can eliminate the need for additional reading glasses.",
  },
  {
    q: "Which method is best for cataract surgery?",
    a: "The best method is generally phacoemulsification because of its minimal invasiveness, quick recovery time, and high success rate. The choice may vary based on individual patient needs and the surgeon’s recommendation.",
  },
];

export default function CataractServicePage() {
  const others = SERVICE_HUB.filter((x) => x.slug !== "cataract");

  return (
    <div className="bg-[#E7F4F1]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E4A56] via-[#16707E] to-[#1F8A9A] text-white">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-[#E8B4BC]/20 blur-2xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageBreadcrumb
            tone="dark"
            items={[{ href: "/services", label: "Services" }, { label: "Cataract Services" }]}
          />
          <div className="mt-6 grid lg:grid-cols-[1fr_minmax(0,320px)] gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/70">Cataract treatment</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">Cataract Services</h1>
              <p className="mt-5 text-white/90 leading-relaxed max-w-2xl">
                We aim to provide our patients with the best treatment for cataracts at {SITE.name}, Bara Gamharia,
                Jamshedpur. Our cataract surgeons, DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI, continually enhance
                their expertise through professional development, remaining at the forefront of current techniques in
                cataract surgery.
              </p>
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
              src="/service-photos/cataract.png"
              alt="Cataract care at M G Eye Foundation"
              className="hidden lg:block h-64 w-full object-cover rounded-[28px] border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[28px] bg-white border border-[#D5E6EA] p-7 sm:p-10 shadow-[0_12px_32px_rgba(31,138,154,0.08)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">What is Cataract?</h2>
          <p className="mt-4 text-[#334155] leading-relaxed text-[15px] sm:text-base max-w-4xl">
            Cataract is clouding of the natural lens of the eye, which can lead to a gradual decline in vision. This
            condition is prevalent among older adults, but it can also affect younger individuals due to various
            factors. Understanding cataracts and their impact on vision is essential for effective management and
            treatment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">Why it develops</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">Causes</h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md sm:text-right">
            More than one factor can act together. Age is the most frequent; the rest explain cataract in younger eyes.
          </p>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAUSES.map((item, i) => {
            const Icon = CAUSE_ICONS[i];
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">How it feels</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">Symptoms</h2>
          </div>
          <p className="text-sm text-[#64748b] max-w-md sm:text-right">
            Symptoms build slowly. Many people first notice night driving or a change in colour, not pain.
          </p>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYMPTOMS.map(({ icon: Icon, text, body }, i) => (
            <article
              key={text}
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
                  <h3 className="font-extrabold text-[#0E4A56] leading-snug">{text}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-[28px] bg-[#0E4A56] text-white p-7 sm:p-10 overflow-hidden relative">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#1F8A9A]/40 blur-2xl" />
          <h2 className="relative text-2xl sm:text-3xl font-extrabold">Treatment</h2>
          <p className="relative mt-4 text-white/90 leading-relaxed max-w-4xl">
            For effective cataract treatment, surgery is often recommended. Phacoemulsification is a leading surgical
            method where ultrasound waves are used to break up the cloudy lens. The fragments are then gently removed,
            and a clear, artificial lens is implanted. This advanced technique ensures minimal invasiveness and promotes
            quick recovery, making it a preferred choice for cataract surgery.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">Cataract Services Provided by Us</h2>
        <div className="mt-7 grid lg:grid-cols-2 gap-5">
          {SERVICES_BLOCKS.map((b) => (
            <article
              key={b.title}
              className="rounded-[24px] bg-white border border-[#D5E6EA] p-6 sm:p-7 shadow-[0_8px_24px_rgba(31,138,154,0.06)]"
            >
              <p className="text-[#1F8A9A] text-sm font-extrabold tracking-widest">{b.n}</p>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.2em] uppercase">Cataract FAQs</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0E4A56]">Questions patients ask</h2>
          </div>
        </div>
        <div className="mt-7 grid lg:grid-cols-2 gap-4">
          {FAQS.map((f, i) => (
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
            <h2 className="text-2xl font-extrabold text-[#0E4A56]">Visit M G Eye Foundation</h2>
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
              <BookVisitButton label="Book cataract consultation" />
            </div>
          </div>
          <div className="bg-[#1F8A9A] text-white p-7 sm:p-10 flex flex-col justify-center">
            <p className="text-white/70 text-[11px] font-semibold tracking-[0.18em] uppercase">Surgeons</p>
            <p className="mt-3 text-lg font-extrabold leading-snug">DR KUMAR SAKET</p>
            <p className="text-white/80 text-sm">Cataract, medical retina and trauma specialist</p>
            <p className="mt-4 text-lg font-extrabold leading-snug">DR MALAY KUMAR DWIVEDI</p>
            <p className="text-white/80 text-sm">Pediatric Ophthalmologist, Cataract and Squint specialist</p>
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
