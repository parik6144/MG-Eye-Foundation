import type { Metadata } from "next";
import Link from "next/link";
import { STATS, IMPACT, SITE } from "@/lib/site";
import ClinicVideo from "@/components/ClinicVideo";

export const metadata: Metadata = { title: "About Us | MG Eye Foundation" };

const CLINIC = {
  video: "/clinic/mgeyefoundation.mp4",
  gate: "/clinic/maingate.webp",
  reception: "/clinic/reception.jpg",
  center: "/clinic/center.webp",
  patients: "/clinic/pateints.webp",
} as const;

export default function AboutPage() {
  return (
    <div className="pt-28 pb-0 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">About Us</span>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
          MG Eye Foundation
        </h1>
        <p className="mt-3 text-[#475569] text-base max-w-2xl leading-relaxed">
          An eye hospital in Bara Gamharia. Families also come from Adityapur, Jamshedpur and Saraikela-Kharsawan. We scan. We treat. We explain in simple words.
        </p>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-3">
              <img src={CLINIC.gate} alt="Main gate of MG Eye Foundation" className="h-52 sm:h-64 w-full object-cover rounded-[22px]" />
              <img src={CLINIC.reception} alt="Reception" className="h-52 sm:h-64 w-full object-cover rounded-[22px] mt-8" />
            </div>
            <div>
              <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Our story</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 leading-tight">
                15+ years of eye care in this area
              </h2>
              <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
              <p className="text-[#475569] leading-relaxed mt-5">
                MG Eye Foundation is at {SITE.address}, {SITE.city}. We treat cataract, retina, glaucoma, cornea, dry eye, child eye problems, squint and eye injuries. Scans, laser, injection and surgery happen in the same hospital.
              </p>
              <p className="text-[#475569] leading-relaxed mt-3">
                Child eye checks and squint care are here every working day. We are listed under PM-JAY. Cashless is not available now.
              </p>
              <blockquote className="mt-6 border-l-4 border-[#1118E8] pl-4">
                <p className="text-xl font-extrabold text-[#1118E8]">Tamaso Ma Jyotirgamaya</p>
                <p className="text-[#64748b] text-sm mt-1">From darkness, lead me to light.</p>
              </blockquote>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <ClinicVideo src={CLINIC.video} poster={CLINIC.gate} />
              <p className="mt-3 text-sm text-[#64748b]">A short look at our hospital. Tap the play sign.</p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">See the hospital</h3>
              <p className="mt-3 text-[#475569] leading-relaxed">
                This video shows our gate and campus in Bara Gamharia. Come from Adityapur, Jamshedpur or Saraikela-Kharsawan. The scan and the treatment happen in this same place.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-[18px] border border-[#e2e8f0] bg-[#F7F9FC] p-5 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1118E8]">{s.num}</div>
                <div className="text-xs text-[#64748b] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase text-center">Mission and vision</p>
          <h2 className="mt-3 text-center text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            Scan. Treat. Explain. <span className="text-[#FF741F]">All in one hospital.</span>
          </h2>
          <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto leading-relaxed">
            In other words: you do not need to go far. The scan, the talk and the treatment happen here.
          </p>

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <article className="rounded-[28px] overflow-hidden bg-white">
              <img src="/about-mission.png" alt="Doctor explaining an eye scan" className="h-64 w-full object-cover" />
              <div className="p-8 sm:p-10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF741F] text-white font-bold">01</span>
                <p className="mt-4 text-[#FF741F] text-xs font-semibold tracking-[0.18em] uppercase">Our Mission</p>
                <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
                  We treat the problem. We explain it first.
                </h3>
                <p className="mt-5 text-[#475569] text-base leading-relaxed">
                  Our work is cataract surgery, retina injection and laser, glaucoma care, eye injuries, child eye checks and squint surgery.
                </p>
                <p className="mt-3 text-[#475569] text-base leading-relaxed">
                  We do the scan here. Then we sit with you. We tell you the name of the problem, which part of the eye it is, and what we will do next. We use simple words. Hindi or English, the way you speak at home.
                </p>
                <p className="mt-3 text-[#475569] text-base leading-relaxed">
                  We tell you the cost before treatment. Cashless is not available now. After surgery we see you again, so healing stays safe.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Scan on the same day", "7 types of eye care", "We see you after surgery"].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#e2e8f0] px-3.5 py-1.5 text-xs text-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-[28px] overflow-hidden bg-white border border-[#e2e8f0]">
              <img src="/about-vision.png" alt="Families coming to the hospital" className="h-64 w-full object-cover" />
              <div className="p-8 sm:p-10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1118E8] text-white font-bold">02</span>
                <p className="mt-4 text-[#1118E8] text-xs font-semibold tracking-[0.18em] uppercase">Our Vision</p>
                <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
                  An eye hospital near home that people come back to
                </h3>
                <p className="mt-5 text-[#475569] text-base leading-relaxed">
                  For 15 years we have treated more than 75,000 people. We want families in Gamharia, Adityapur, Jamshedpur and Saraikela-Kharsawan to get good eye care close to home.
                </p>
                <p className="mt-3 text-[#475569] text-base leading-relaxed">
                  A child with squint should not wait for a far-away hospital. A worker hurt in Adityapur should get help quickly. That is why we stay at Plot 121, Bara Gamharia.
                </p>
                <p className="mt-3 text-[#475569] text-base leading-relaxed">
                  Open Monday to Saturday, 10 AM to 6 PM. Sunday is closed. If the eye problem is urgent, call us in working hours.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["75,000+ patients", "Child eye checks every day", "Help for eye injuries"].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#e2e8f0] px-3.5 py-1.5 text-xs text-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">The areas we serve</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 leading-tight">
            Not only Gamharia. This hospital is for the whole belt.
          </h2>
          <p className="text-[#475569] mt-4 max-w-3xl leading-relaxed">
            The hospital stands in Bara Gamharia. People also come from Adityapur, Jamshedpur and Saraikela-Kharsawan. You do not need to go to a far city for many eye problems.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <article className="rounded-[22px] border border-[#e2e8f0] p-7 bg-[#F7F9FC]">
              <h3 className="text-xl font-extrabold text-[#1118E8]">Bara Gamharia</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                This is where the hospital is. Plot 121, near Vani Vidya Mandir School. Neighbours can walk in for an eye check, a scan, or surgery. This is the base for all our work.
              </p>
            </article>
            <article className="rounded-[22px] border border-[#e2e8f0] p-7 bg-white">
              <h3 className="text-xl font-extrabold text-[#FF741F]">Adityapur</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Adityapur has many factories. Eye injuries at work need quick help. We treat those injuries here. Families from Adityapur also come for cataract, retina and child eye checks. You do not have to lose a full day in a far hospital.
              </p>
            </article>
            <article className="rounded-[22px] border border-[#e2e8f0] p-7 bg-white">
              <h3 className="text-xl font-extrabold text-[#FF0808]">Jamshedpur</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Jamshedpur is a big city. Many people still want a hospital that explains the cost first and talks in simple words. We see patients from Sakchi, Bistupur and other parts of Jamshedpur for cataract, glaucoma, retina and squint.
              </p>
            </article>
            <article className="rounded-[22px] border border-[#e2e8f0] p-7 bg-[#F7F9FC]">
              <h3 className="text-xl font-extrabold text-[#0F172A]">Saraikela-Kharsawan</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Saraikela-Kharsawan is our district. Towns and villages around here need an eye hospital they can reach. Parents bring children for squint. Elders come for cataract. We want this whole district to have eye care nearby, not only in a far city.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#FF741F] text-sm font-semibold tracking-wide uppercase">Our hospital</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">Come and see the place</h2>
            <p className="text-[#475569] mt-3 text-sm">Main gate, reception, waiting area and our patients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: CLINIC.gate, label: "Main gate" },
              { src: CLINIC.reception, label: "Reception" },
              { src: CLINIC.center, label: "Inside the hospital" },
              { src: CLINIC.patients, label: "Patients" },
            ].map((p) => (
              <figure key={p.label} className="overflow-hidden rounded-[22px] bg-white border border-[#e2e8f0]">
                <img src={p.src} alt={p.label} className="h-48 w-full object-cover" />
                <figcaption className="p-4 text-sm font-semibold text-[#0F172A]">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0F172A]">
        <div className="w-full px-4 sm:px-8 lg:px-12 py-10">
          <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Our work</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">What we have done in this area</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {IMPACT.map((item, i) => (
            <div
              key={item.label}
              className={`px-4 sm:px-8 py-8 ${i < IMPACT.length - 1 ? "lg:border-r border-white/10" : ""} border-b lg:border-b-0 border-white/10`}
            >
              <div className="text-4xl font-extrabold text-[#FF741F]">{item.num}</div>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#475569] mb-5">{SITE.address}, {SITE.city}</p>
          <Link
            href="/contact"
            className="inline-flex bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-8 py-3 text-sm"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
