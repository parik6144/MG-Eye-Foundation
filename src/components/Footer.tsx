import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { SITE, SERVICES, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-md shadow-black/20">
              <img src="/mg_logo.png" alt="MG Eye Foundation" className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-lg font-extrabold tracking-tight">MG Eye Foundation</p>
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              Eye hospital in Bara Gamharia. Cataract, retina, glaucoma, child eyes and squint. We explain in simple words.
            </p>
            {/* <p className="text-slate-500 text-xs mt-3">Tamaso Ma Jyotirgamaya</p> */}
          </div>

          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#FF741F] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[#FF741F] transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#FF741F]" />
                {SITE.address}, {SITE.city}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-[#FF741F]" />
                <a href={SITE.phoneHref} className="hover:text-white font-semibold text-white">{SITE.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-[#FF741F]" />
                <a href={SITE.emailHref} className="hover:text-white">{SITE.email}</a>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#FF741F]" />
                <span>{SITE.hours}<br />{SITE.sunday}</span>
              </p>
              {/* <p className="text-[#FF741F] text-xs">Cashless is not available now.</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} MG Eye Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-slate-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-xs transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[3px] bg-gradient-to-r from-[#1118E8] via-[#FF741F] to-[#FF0808]" />
    </footer>
  );
}
