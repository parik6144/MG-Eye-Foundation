import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms and Conditions | MG Eye Foundation" };

export default function TermsPage() {
  return (
    <div className="pt-6 pb-20 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#1F8A9A] text-sm font-semibold tracking-[0.18em] uppercase">Legal</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3">Terms and Conditions</h1>
        <div className="w-12 h-1 bg-[#1F8A9A] mt-4 rounded-full" />
        <p className="text-[#64748b] mt-4 text-sm">Last update: 23 August 2026</p>

        <div className="mt-10 space-y-8 text-[#475569] leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">This website</h2>
            <p className="mt-2">
              This site tells you about MG Eye Foundation in Bara Gamharia. It helps you find the hospital, the doctors, and how to book a visit.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Not a full medical visit</h2>
            <p className="mt-2">
              Words on this website are for information. They are not a full eye check. Only a doctor in the hospital can say what is wrong with your eye and what treatment you need.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Booking</h2>
            <p className="mt-2">
              A booking request is a request. We confirm the time by phone or WhatsApp. Please come on time. If you cannot come, call us.
            </p>
            <p className="mt-2">
              Hours: {SITE.hours}. {SITE.sunday}. For urgent eye problems in working hours, call {SITE.phoneDisplay}.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Cost, PM-JAY and Rajyakarmi</h2>
            <p className="mt-2">The associated costs are communicated to patients in advance of treatment. Cashless facilities are not currently available. We are empanelled under PM-JAY and associated with Rajyakarmi Swasthya Bima Yojana (SEHIS). Kindly consult the front desk prior to admission.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Photos and names</h2>
            <p className="mt-2">Do not copy our photos, logo or doctor names for another business. Ask us first if you want to use them.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Privacy</h2>
            <p className="mt-2">
              How we keep your details is in our{" "}
              <Link href="/privacy" className="text-[#1F8A9A] font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Talk to us</h2>
            <p className="mt-2">
              {SITE.address}, {SITE.city}. Email {SITE.email}. Phone {SITE.phoneDisplay}.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
