import Link from "next/link";
import { SITE } from "@/lib/site";

type Crumb = { href?: string; label: string };

export default function PageBreadcrumb({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-white/70" : "text-[#64748b]";
  const link = tone === "dark" ? "hover:text-white" : "hover:text-[#1F8A9A]";
  const current = tone === "dark" ? "text-white" : "text-[#0E4A56]";

  return (
    <p className={`text-sm ${muted}`}>
      <Link href="/" className={link}>
        {SITE.name}
      </Link>
      {items.map((item) => (
        <span key={item.label}>
          <span className="mx-1.5">/</span>
          {item.href ? (
            <Link href={item.href} className={link}>
              {item.label}
            </Link>
          ) : (
            <span className={current}>{item.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}
