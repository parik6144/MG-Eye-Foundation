"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

import { SITE } from "@/lib/site";

/** Proxied KiviHealth booking form (direct iframe; upstream blocks foreign embeds). */
export const KIVI_BOOK_EMBED =
  "/kivi-embed/iam/dr.malay.kumar.dwivedi.16735/bookslot";

interface AppointmentPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AppointmentPopup({ isOpen: externalOpen, onClose: externalClose }: AppointmentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [frameKey, setFrameKey] = useState(0);

  useEffect(() => {
    const handler = () => {
      setFrameKey((k) => k + 1);
      setIsOpen(true);
    };
    window.addEventListener("open-appointment", handler);
    return () => window.removeEventListener("open-appointment", handler);
  }, []);

  const close = useCallback(() => {
    if (externalClose) externalClose();
    setIsOpen(false);
  }, [externalClose]);

  useEffect(() => {
    if (externalOpen !== undefined) {
      if (externalOpen) setFrameKey((k) => k + 1);
      setIsOpen(externalOpen);
    }
  }, [externalOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

      <div className="relative bg-white rounded-[24px] w-full max-w-[980px] h-[min(92vh,860px)] shadow-2xl overflow-hidden animate-fade-up flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-[280px] shrink-0 flex-col justify-start gap-8 bg-[#0F172A] p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-white/[0.06] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full border border-[#1F8A9A]/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-[#1F8A9A] text-[11px] font-semibold tracking-[0.15em] uppercase">Quick Booking</span>
            <h3 className="text-2xl lg:text-[28px] font-bold text-white mt-3 leading-tight">
              Book your eye visit
            </h3>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Use the form on the right. Pick a date and time.
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

            <p className="text-slate-500 text-xs mt-8">Powered by kivihealth.com</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-0 relative bg-white">
          <button
            type="button"
            onClick={close}
            className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/95 border border-[#e2e8f0] shadow flex items-center justify-center text-[#64748b] hover:bg-[#F1F5F9]"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex-1 min-h-0 relative">
            <iframe
              key={frameKey}
              id="MainPopupIframe"
              title="Book appointment form"
              src={KIVI_BOOK_EMBED}
              className="absolute inset-0 w-full h-full border-0 bg-white"
              allow="payment *"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
