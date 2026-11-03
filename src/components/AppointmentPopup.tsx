"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Calendar, Clock, Phone, CheckCircle2, ChevronDown, User } from "lucide-react";

import { SITE } from "@/lib/site";
import { swalError, swalSuccess } from "@/lib/swal";

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "5:30 PM",
];

/** Local YYYY-MM-DD for tomorrow — booking starts after today */
function minAppointmentDate() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

interface AppointmentPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AppointmentPopup({ isOpen: externalOpen, onClose: externalClose }: AppointmentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    sex: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-appointment", handler);
    return () => window.removeEventListener("open-appointment", handler);
  }, []);

  const close = useCallback(() => {
    if (externalClose) externalClose();
    setIsOpen(false);
    setSubmitted(false);
    setSending(false);
    setError("");
    setForm({ name: "", phone: "", age: "", sex: "", date: "", time: "" });
  }, [externalClose]);

  useEffect(() => {
    if (externalOpen !== undefined) setIsOpen(externalOpen);
  }, [externalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const earliest = minAppointmentDate();
    if (!form.date || form.date < earliest) {
      const msg = "Please choose a date after today.";
      setError(msg);
      setSending(false);
      await swalError("Date not allowed", msg);
      return;
    }
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.error || `Mail failed (${res.status})`;
        setError(msg);
        await swalError("Mail not sent", msg);
        return;
      }
      setSubmitted(true);
      await swalSuccess(
        "Request sent",
        "We got your booking request. Our desk will call you to confirm the time. A mail also went to the hospital."
      );
      close();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error. Mail did not send.";
      setError(msg);
      await swalError("Mail not sent", msg);
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

      <div className="relative bg-white rounded-[24px] w-full max-w-[900px] max-h-[90vh] shadow-2xl overflow-hidden animate-fade-up flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-[340px] shrink-0 flex-col justify-start gap-8 bg-[#0F172A] p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-white/[0.06] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full border border-[#1F8A9A]/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.15em] uppercase">Quick Booking</span>
            <h3 className="text-2xl lg:text-[28px] font-bold text-white mt-3 leading-tight">
              Book your eye visit
            </h3>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Fill the form. You will see if it was sent.
            </p>
          </div>

          <div className="relative z-10">
            <span className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.15em] uppercase">Call</span>
            <p className="text-white text-lg font-bold mt-1.5 leading-snug">
              {SITE.phoneDisplay}
            </p>

            <span className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.15em] uppercase mt-6 block">Hours</span>
            <p className="text-white/80 text-sm mt-1.5">
              {SITE.hours}
            </p>
            <p className="text-white/50 text-xs mt-2">{SITE.hoursNote}</p>

            <p className="text-slate-500 text-xs mt-8 italic leading-relaxed">
              &ldquo;Your Vision Is Our Mission.<br />Your Trust Is Our Strength.&rdquo;
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="px-8 lg:px-10 pt-8 lg:pt-10 pb-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.15em]">{SITE.name}</span>
                <h2 className="text-2xl lg:text-[26px] font-bold text-[#0F172A] mt-1">Schedule a Consultation</h2>
              </div>
              <button
                onClick={close}
                className="text-[#64748b] text-sm font-medium px-4 py-1.5 rounded-full border border-[#e2e8f0] hover:bg-[#F1F5F9] transition-colors shrink-0 mt-1"
              >
                Close
              </button>
            </div>
          </div>

          <div className="px-8 lg:px-10 py-5 flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">We got your request</h3>
                <p className="text-[#64748b] text-sm mt-2 text-center max-w-sm">Our desk will call you to confirm the time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Full Name <span className="text-[#FF0808]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                      <input
                        required
                        placeholder="Patient name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none placeholder:text-[#94a3b8]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Phone <span className="text-[#FF0808]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                      <input
                        required
                        type="tel"
                        placeholder="10-digit mobile"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none placeholder:text-[#94a3b8]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Age <span className="text-[#FF0808]">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      min={0}
                      max={120}
                      placeholder="Years"
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Sex <span className="text-[#FF0808]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.sex}
                        onChange={(e) => setForm({ ...form, sex: e.target.value })}
                        className="w-full px-4 pr-10 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none appearance-none"
                      >
                        <option value="">Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Preferred Date <span className="text-[#FF0808]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={minAppointmentDate()}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 block">
                      Preferred Time <span className="text-[#FF0808]">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                      <select
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#1F8A9A] focus:ring-2 focus:ring-[#1F8A9A]/15 bg-white text-sm text-[#0F172A] transition-all outline-none appearance-none"
                      >
                        <option value="">Select slot</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {error ? <p className="text-sm text-[#FF0808] bg-red-50 border border-red-100 rounded-xl px-3 py-2 break-all">{error}</p> : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full py-3.5 text-sm disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Confirm Appointment"}
                </button>

                <p className="text-center text-[#94a3b8] text-xs mt-2">
                  Or call <strong className="text-[#64748b]">{SITE.phoneDisplay}</strong>
                </p>
              </form>
            )}
          </div>
        </div>

        <button
          onClick={close}
          className="lg:hidden absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow"
        >
          <X className="w-4 h-4 text-[#0F172A]" />
        </button>
      </div>
    </div>
  );
}
