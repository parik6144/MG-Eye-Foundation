"use client";

import { useRef } from "react";

export default function InteractiveEye() {
  const pupilRef = useRef<SVGGElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    const pupil = pupilRef.current;
    if (!panel || !pupil) return;
    const rect = panel.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    pupil.setAttribute("transform", `translate(${dx * 10},${dy * 10})`);
  };

  const onLeave = () => {
    pupilRef.current?.setAttribute("transform", "translate(0,0)");
  };

  return (
    <div
      ref={panelRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1F8A9A] to-[#0B1740] p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="eye-scan-line pointer-events-none absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1F8A9A] to-transparent" />
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <svg viewBox="0 0 300 220" className="w-[78%] max-w-[280px]">
          <path d="M10 110C55 40 120 8 150 8C180 8 245 40 290 110C245 180 180 212 150 212C120 212 55 180 10 110Z" fill="none" stroke="#7B93FF" strokeWidth="1.6" />
          <circle cx="150" cy="110" r="58" fill="#1F8A9A" />
          <circle cx="150" cy="110" r="58" fill="none" stroke="#0A1740" strokeWidth="1.5" />
          <g ref={pupilRef}>
            <circle cx="150" cy="110" r="24" fill="#050912" />
            <circle cx="141" cy="98" r="7" fill="#fff" opacity=".8" />
          </g>
          <circle cx="150" cy="110" r="58" fill="none" stroke="#1F8A9A" strokeWidth="1" opacity=".45" strokeDasharray="2 4" />
        </svg>
      </div>
      <div className="relative z-10 flex items-end justify-between">
        <p className="font-mono text-[11px] tracking-wide text-[#9FB3D6]">
          LIVE PUPIL TRACKING
          <span className="mt-0.5 block text-[#7B93FF]">move your cursor</span>
        </p>
        <p className="text-right font-mono text-[11px] tracking-wide text-[#9FB3D6]">
          ACCURACY
          <span className="mt-0.5 block text-2xl font-bold text-[#1F8A9A]">±0.01mm</span>
        </p>
      </div>
    </div>
  );
}
