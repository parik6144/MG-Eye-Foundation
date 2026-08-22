"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import { NAV } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
    setMobileOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 lg:h-[88px]">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 pr-2">
            <img src="/mg_logo.png" alt="MG Eye Foundation" className="h-10 sm:h-[60px] w-auto object-contain shrink-0" />
            <span className="min-w-0 text-[15px] sm:text-[1.5rem] font-extrabold text-[#1118E8] leading-tight tracking-tight">
              M G Eye Foundation
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  pathname === item.href
                    ? "text-[#2563EB] bg-[#2563EB]/[0.07] font-semibold"
                    : "text-[#475569] hover:text-[#2563EB] hover:bg-[#F1F5F9]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={openAppointment}
              className="ml-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-[14px] font-semibold rounded-full px-7 py-2.5 shadow-md shadow-[#F97316]/20 transition-all hover:shadow-lg hover:shadow-[#F97316]/30 hover:-translate-y-0.5"
            >
              BOOK APPOINTMENT
            </button>
          </div>

          <button
            className="xl:hidden text-[#0F172A] p-2 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-[#e2e8f0] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3.5 text-[15px] rounded-xl transition-colors ${
                  pathname === item.href
                    ? "text-[#2563EB] font-semibold bg-[#2563EB]/[0.07]"
                    : "text-[#475569]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-2">
              <button
                onClick={openAppointment}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-full py-3.5 text-[15px] shadow-md shadow-[#F97316]/20"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
