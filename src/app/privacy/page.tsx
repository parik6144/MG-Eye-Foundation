import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy | MG Eye Foundation" };

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#FF741F] text-sm font-semibold tracking-[0.18em] uppercase">Legal</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3">Privacy Policy</h1>
        <div className="w-12 h-1 bg-[#1118E8] mt-4 rounded-full" />
        <p className="text-[#64748b] mt-4 text-sm">Last update: 23 August 2026</p>

        <div className="mt-10 space-y-8 text-[#475569] leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Who we are</h2>
            <p className="mt-2">
              This website is for MG Eye Foundation. Address: {SITE.address}, {SITE.city}. Phone: {SITE.phoneDisplay}. Email: {SITE.email}.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">What we collect</h2>
            <p className="mt-2">If you book a visit or send a message, we may take your name, phone, email and what you wrote about your eye.</p>
            <p className="mt-2">If you call or use WhatsApp, we see the number you use to reach us.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">How we use it</h2>
            <p className="mt-2">We use this to call you back, fix a visit time, and give eye care. We do not sell your details to other companies.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Who can see it</h2>
            <p className="mt-2">Hospital staff who need it for your care may see it. The law may ask us to share records. We then follow the law.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">This website</h2>
            <p className="mt-2">The site may use basic cookies so pages load well. We do not use your form data for ads.</p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Ask us</h2>
            <p className="mt-2">
              If you want us to change or delete a message you sent on the website, email {SITE.email} or call {SITE.phoneDisplay}. Medical records in the hospital follow hospital rules and the law.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
