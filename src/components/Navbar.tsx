"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Facebook, Instagram, ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import { NAV, SITE, COPY, SERVICES } from "@/lib/site";

const TEAL = "#1F8A9A";
const TEAL_DEEP = "#16707E";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.07 6.48 2.07 11.98c0 1.76.46 3.48 1.34 5L2 22l5.17-1.36a9.93 9.93 0 0 0 4.87 1.24h.01c5.49 0 9.97-4.48 9.97-9.98 0-2.67-1.04-5.18-2.97-7zM12.05 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.07.8.82-2.99-.2-.31a8.2 8.2 0 0 1-1.26-4.34c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.16-8.28 8.16zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.10-.23-.17-.48-.29z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const openAppointment = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
    setMobileOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="text-white text-[12px] sm:text-[13px]" style={{ backgroundColor: TEAL }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between gap-3">
          <p className="truncate font-medium tracking-wide flex-1 min-w-0 pr-2">{COPY.tagline}</p>
          <div className="flex items-center gap-3 shrink-0 text-white">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:opacity-80" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:opacity-80" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="hover:opacity-80" aria-label="WhatsApp">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a href={SITE.emailHref} className="hover:opacity-80" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href={SITE.phoneHref} className="hover:opacity-80" aria-label="Call">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 border-b-2"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #fcfdfd)",
          borderColor: TEAL,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2.5">
            <Link href="/" className="flex items-center gap-3 min-w-0 shrink-0">
              <img src="/mg_logo.png" alt="MG Eye Foundation" className="h-16 sm:h-20 w-auto object-contain" />
              <span className="block text-[17px] sm:text-[1.4rem] font-extrabold leading-tight tracking-tight" style={{ color: TEAL }}>
                {SITE.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 min-w-0 flex-1 justify-end">
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                if (item.href === "/services") {
                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        href="/services"
                        className={`inline-flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                          active ? "font-semibold text-white" : "hover:bg-[#E7F3F5]"
                        }`}
                        style={active ? { backgroundColor: TEAL_DEEP, color: "#ffffff" } : { color: TEAL_DEEP }}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                      </Link>
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute right-0 top-full z-50 pt-2 transition-opacity">
                        <ul className="min-w-[250px] overflow-hidden rounded-2xl border border-[#D5E6EA] bg-white py-1.5 shadow-[0_16px_40px_rgba(14,74,86,0.14)]">
                          <li>
                            <Link
                              href="/services"
                              className={`block px-4 py-2.5 text-[13px] font-semibold ${
                                pathname === "/services" ? "bg-[#E7F3F5] text-[#0E4A56]" : "text-[#0E4A56] hover:bg-[#F4F8F9]"
                              }`}
                            >
                              All services
                            </Link>
                          </li>
                          {SERVICES.map((s) => {
                            const href = `/services/${s.slug}`;
                            const on = pathname === href;
                            return (
                              <li key={s.slug}>
                                <Link
                                  href={href}
                                  className={`block px-4 py-2.5 text-[13px] ${
                                    on ? "bg-[#E7F3F5] font-semibold text-[#0E4A56]" : "text-[#334155] hover:bg-[#F4F8F9]"
                                  }`}
                                >
                                  {s.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                      active ? "font-semibold text-white" : "hover:bg-[#E7F3F5]"
                    }`}
                    style={active ? { backgroundColor: TEAL_DEEP, color: "#ffffff" } : { color: TEAL_DEEP }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={openAppointment}
                className="ml-2 shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TEAL }}
              >
                Book an Appointment
              </button>
            </nav>

            <button
              className="lg:hidden text-[#0F172A] p-2 shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <a href={SITE.phoneHref} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold" style={{ color: TEAL }}>
              <Phone className="w-4 h-4" /> Call {SITE.phoneDisplay}
            </a>
            {NAV.map((item) => {
              if (item.href === "/services") {
                return (
                  <div key={item.href} className="px-1">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3.5 text-[15px] rounded-xl transition-colors ${
                        isActive(pathname, item.href) ? "font-semibold" : "text-[#475569]"
                      }`}
                      style={isActive(pathname, item.href) ? { color: TEAL, backgroundColor: "#E7F3F5" } : undefined}
                    >
                      {item.label}
                    </Link>
                    <ul className="ml-3 mb-1 border-l-2 border-[#1F8A9A]/30">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-4 py-2.5 text-[14px] rounded-lg ${
                              pathname === `/services/${s.slug}`
                                ? "font-semibold text-[#0E4A56] bg-[#E7F3F5]"
                                : "text-[#475569]"
                            }`}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3.5 text-[15px] rounded-xl transition-colors ${
                  isActive(pathname, item.href) ? "font-semibold" : "text-[#475569]"
                }`}
                style={isActive(pathname, item.href) ? { color: TEAL, backgroundColor: "#E7F3F5" } : undefined}
              >
                {item.label}
              </Link>
              );
            })}
            <div className="px-4 pt-3 pb-2">
              <button
                onClick={openAppointment}
                className="w-full text-white font-semibold rounded-full py-3.5 text-[15px]"
                style={{ backgroundColor: TEAL }}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
