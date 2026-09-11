"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Eye,
  Home,
  Users,
  Stethoscope,
  Layers,
  Building2,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState, useCallback } from "react";
import { NAV, SITE, COPY, SERVICE_HUB } from "@/lib/site";

const TEAL = "#1F8A9A";
const TEAL_DEEP = "#0E4A56";

const NAV_ICONS = {
  "/": Home,
  "/about": Users,
  "/doctors": Stethoscope,
  "/services": Layers,
  "/facilities": Building2,
  "/testimonials": MessageSquare,
  "/contact": Phone,
} as const;

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
    <header className="sticky top-0 z-[80]">
      <div className="text-white text-[12px] sm:text-[13px]" style={{ backgroundColor: TEAL }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between gap-3">
          <p className="truncate font-medium tracking-wide flex-1 min-w-0 pr-2 inline-flex items-center gap-2">
            <Eye className="w-4 h-4 shrink-0" strokeWidth={1.8} />
            <span className="truncate">{COPY.tagline}</span>
          </p>
          <div className="flex items-center gap-3 shrink-0">
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
            <a
              href={SITE.phoneHref}
              className="hidden md:inline-flex items-center gap-1.5 pl-3 ml-1 border-l border-white/30 font-semibold whitespace-nowrap hover:opacity-90"
            >
              Emergency: {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-[#D5E6EA] bg-gradient-to-r from-white via-[#F7FBFD] to-[#EAF6F8]">
        <img
          src="/home-hero-eye.png"
          alt=""
          className="pointer-events-none absolute right-0 top-0 hidden sm:block h-full w-[38%] object-cover object-[center_35%] opacity-45 [mask-image:linear-gradient(90deg,transparent,black_28%)]"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 sm:py-3.5">
            <Link href="/" className="flex items-center gap-3 min-w-0 shrink-0">
              <img src="/mg_logo.png" alt={SITE.name} className="h-14 sm:h-[72px] w-auto object-contain" />
              <span className="block text-[17px] sm:text-[1.55rem] font-extrabold leading-tight tracking-tight" style={{ color: TEAL }}>
                {SITE.name}
              </span>
            </Link>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={openAppointment}
                className="hidden sm:inline-flex items-center gap-3 rounded-full pl-2 pr-2 py-1.5 text-left text-white hover:opacity-95 transition-opacity"
                style={{ backgroundColor: TEAL_DEEP }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Clock className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="pr-1">
                  <span className="block text-sm font-bold leading-tight">Book an Appointment</span>
                  <span className="block text-[11px] text-white/75 leading-tight mt-0.5">Your vision, our priority.</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 mr-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <button
                className="lg:hidden text-[#0F172A] p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-1 py-2.5">
          {NAV.map((item, i) => {
            const active = isActive(pathname, item.href);
            const Icon = NAV_ICONS[item.href];
            return (
              <span key={item.href} className="flex items-center">
                {i > 0 && <span className="mx-1.5 h-5 w-px bg-[#D5E6EA]" />}
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                    active ? "font-semibold text-white" : "text-[#475569] hover:bg-[#E7F3F5] hover:text-[#0E4A56]"
                  }`}
                  style={active ? { backgroundColor: TEAL } : undefined}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {item.label}
                </Link>
              </span>
            );
          })}
        </nav>
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
                      {SERVICE_HUB.map((s) => (
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
