"use client";

import { useCallback, useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { SITE, COPY } from "@/lib/site";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5908957717247!2d86.10057549999999!3d22.817618100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5848c06a167%3A0x2cdbf23713a6129!2sM%20G%20Eye%20Foundation!5e0!3m2!1sen!2sin!4v1787430071311!5m2!1sen!2sin";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const openAppointment = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-6 pb-16 bg-[#0F172A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F8A9A]/40 via-transparent to-[#1F8A9A]/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#1F8A9A] text-sm font-semibold tracking-[0.18em] uppercase">Contact</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-2xl">
            MG Eye Foundation
          </h1>
          <div className="w-12 h-1 bg-[#1F8A9A] mt-5 rounded-full" />
          <p className="mt-5 text-slate-300 text-lg max-w-xl leading-relaxed">
            Plot No. 121, Durga Puja Maidan, Near Vani Vidya Mandir School, Bara Gamharia, Jamshedpur, Jharkhand
          </p>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href={SITE.phoneHref} className="rounded-[22px] bg-white border border-[#e2e8f0] p-6 shadow-lg shadow-[#1F8A9A]/5 hover:border-[#1F8A9A]/30 transition-colors">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F8A9A] text-white">
              <Phone className="w-5 h-5" />
            </span>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1F8A9A]">Telephone</p>
            <p className="mt-1 font-extrabold text-[#0F172A] text-lg">{SITE.phoneDisplay}</p>
            <p className="mt-1 text-sm text-[#64748b]">Tap to call</p>
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="rounded-[22px] bg-white border border-[#e2e8f0] p-6 shadow-lg shadow-[#1F8A9A]/5 hover:border-[#25d366]/40 transition-colors">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white">
              <MessageCircle className="w-5 h-5" />
            </span>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1F8A9A]">WhatsApp</p>
            <p className="mt-1 font-extrabold text-[#0F172A] text-lg">Chat with us</p>
            <p className="mt-1 text-sm text-[#64748b]">Send a photo or a question</p>
          </a>
          <a href={SITE.emailHref} className="rounded-[22px] bg-white border border-[#e2e8f0] p-6 shadow-lg shadow-[#1F8A9A]/5 hover:border-[#1F8A9A]/30 transition-colors">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F8A9A] text-white">
              <Mail className="w-5 h-5" />
            </span>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1F8A9A]">Electronic Mail</p>
            <p className="mt-1 font-extrabold text-[#0F172A] text-sm break-all">{SITE.email}</p>
            <p className="mt-1 text-sm text-[#64748b]">We reply on working days</p>
          </a>
          <div className="rounded-[22px] bg-white border border-[#e2e8f0] p-6 shadow-lg shadow-[#1F8A9A]/5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white">
              <Clock className="w-5 h-5" />
            </span>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1F8A9A]">Hours of Operation</p>
            <p className="mt-1 font-extrabold text-[#0F172A]">{SITE.hours}</p>
            <p className="mt-1 text-sm text-[#64748b]">{SITE.sunday}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">Contact Information</h2>
            <div className="w-12 h-1 bg-[#1F8A9A] mt-4 rounded-full" />
            <p className="mt-6 flex items-start gap-3 text-[#475569] text-lg leading-relaxed">
              <MapPin className="w-6 h-6 text-[#1F8A9A] shrink-0 mt-1" />
              {SITE.address}, {SITE.city}
            </p>
            <p className="mt-4 text-[#64748b] leading-relaxed">
              <span className="font-semibold text-[#0F172A]">Service Area. </span>
              {COPY.serviceArea}
            </p>
            <p className="mt-6 text-sm bg-[#FFF7ED] border border-[#FFEDD5] text-[#9A3412] rounded-2xl p-4 leading-relaxed">
              {COPY.pmjay}
            </p>
            <p className="mt-4 text-sm bg-[#F0FDF4] border border-[#BBF7D0] text-[#14532D] rounded-2xl p-4 leading-relaxed">
              {COPY.rajyakarmi}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full px-7 py-3.5 text-sm">
                <Phone className="w-4 h-4" /> Call now
              </a>
              <button onClick={openAppointment} className="inline-flex items-center justify-center bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full px-7 py-3.5 text-sm">
                Schedule a Consultation
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#F7F9FC] border border-[#e2e8f0] p-7 sm:p-9">
            {formSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-12 h-12 text-[#1F8A9A] mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-[#0F172A]">Message sent</h3>
                <p className="mt-2 text-[#64748b]">A thanks mail is on the way. We will call you back on a working day.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true);
                  setError("");
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(form),
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok) {
                      setError(data.error || `Mail failed (${res.status})`);
                      return;
                    }
                    setFormSubmitted(true);
                  } catch (err) {
                    setError(err instanceof Error ? err.message : "Network error. Mail did not send.");
                  } finally {
                    setSending(false);
                  }
                }}
              >
                <h2 className="text-2xl font-extrabold text-[#0F172A]">Send a message</h2>
                <p className="text-sm text-[#64748b]">Write your name, phone and email. Tell us what is wrong with the eye.</p>
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#e2e8f0] bg-white outline-none focus:border-[#1F8A9A]"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#e2e8f0] bg-white outline-none focus:border-[#1F8A9A]"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#e2e8f0] bg-white outline-none focus:border-[#1F8A9A]"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[#e2e8f0] bg-white outline-none focus:border-[#1F8A9A] resize-none"
                />
                {error ? <p className="text-sm text-[#FF0808] bg-red-50 border border-red-100 rounded-xl px-3 py-2 break-all">{error}</p> : null}
                <button type="submit" disabled={sending} className="w-full bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full py-4 text-sm disabled:opacity-60">
                  <Send className="w-4 h-4 mr-2 inline" />
                  {sending ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Hospital on the map</h2>
          <p className="text-[#64748b] mt-1 mb-4">MG Eye Foundation, Bara Gamharia. Full map below.</p>
        </div>
        <iframe
          title="MG Eye Foundation on Google Maps"
          src={MAP_SRC}
          className="block w-full h-[420px] sm:h-[500px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </div>
  );
}
