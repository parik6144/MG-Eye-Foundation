"use client";

import { useCallback } from "react";

export default function BookVisitButton({ label = "Schedule a Consultation" }: { label?: string }) {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);
  return (
    <button
      type="button"
      onClick={book}
      className="inline-flex bg-[#1F8A9A] hover:bg-[#16707E] text-white font-bold rounded-full px-7 py-3.5 text-sm"
    >
      {label}
    </button>
  );
}
