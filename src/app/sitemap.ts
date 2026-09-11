import type { MetadataRoute } from "next";
import { SERVICE_HUB, allServices } from "@/lib/site";

const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/about",
    "/services",
    "/doctors",
    "/facilities",
    "/contact",
    "/privacy",
    "/terms",
    "/gallery",
    "/testimonials",
    "/patient-info",
    "/insurance",
    ...[...new Set([...SERVICE_HUB.map((s) => s.slug), ...allServices().map((s) => s.slug)])].map(
      (slug) => `/services/${slug}`,
    ),
  ];

  return pages.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
