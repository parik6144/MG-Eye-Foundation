"use client";

import { useCallback } from "react";

export default function BookVisitButton({ label = "Book a visit" }: { label?: string }) {
  const book = useCallback(() => window.dispatchEvent(new CustomEvent("open-appointment")), []);
  return (
    <button
      type="button"
      onClick={book}
      className="inline-flex bg-[#1118E8] hover:bg-[#0d12b8] text-white font-bold rounded-full px-7 py-3.5 text-sm"
    >
      {label}
    </button>
  );
}
