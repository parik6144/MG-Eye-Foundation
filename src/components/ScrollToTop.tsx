"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function jumpTop() {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = prev;
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const from = previousPath.current;
    previousPath.current = pathname;
    if (from === null || from === pathname) return;
    if (window.location.hash) return;

    jumpTop();
    const timers = [0, 50, 120, 250].map((ms) => window.setTimeout(jumpTop, ms));
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [pathname]);

  return null;
}
