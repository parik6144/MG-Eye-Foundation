import type { ReactNode } from "react";

const TEAL = "#1F8A9A";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 72 72" className="w-[4.25rem] h-[4.25rem] sm:w-[4.75rem] sm:h-[4.75rem]" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

export function ServicesTitleMark() {
  return (
    <svg viewBox="0 0 36 22" className="w-9 h-6" fill={TEAL} aria-hidden>
      <path d="M18 2C9 2 2.5 11 2.5 11s6.5 9 15.5 9 15.5-9 15.5-9S27 2 18 2zm0 14.2A5.2 5.2 0 1 1 18 5.8a5.2 5.2 0 0 1 0 10.4z" />
      <circle cx="18" cy="11" r="2.4" fill="#fff" />
    </svg>
  );
}

export const SERVICE_MARKS: Record<string, () => ReactNode> = {
  cataract: () => (
    <Svg>
      <ellipse cx="34" cy="36" rx="22" ry="20" fill={TEAL} />
      <ellipse cx="30" cy="36" rx="11" ry="13" fill="#fff" />
      <ellipse cx="30" cy="36" rx="5" ry="7" fill={TEAL} />
      <path d="M54 32c6 2 10 6 11 12-4-1-8-2-13-2 1-4 1-7 2-10z" fill={TEAL} />
    </Svg>
  ),
  cornea: () => (
    <Svg>
      <circle cx="36" cy="36" r="22" fill={TEAL} />
      <circle cx="36" cy="36" r="14" fill="#fff" />
      <circle cx="36" cy="36" r="10" fill={TEAL} />
      <circle cx="36" cy="36" r="4.5" fill="#0F172A" />
      <circle cx="32" cy="32" r="2" fill="#fff" />
    </Svg>
  ),
  glaucoma: () => (
    <Svg>
      <circle cx="36" cy="38" r="16" fill={TEAL} />
      <circle cx="36" cy="38" r="8" fill="#fff" />
      <circle cx="36" cy="38" r="3.5" fill={TEAL} />
      <path d="M36 8v10M36 8l-4 5M36 8l4 5" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      <path d="M12 22l8 6M12 22l6-2M12 22l1 6" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 22l-8 6M60 22l-6-2M60 22l-1 6" stroke={TEAL} strokeWidth="3" strokeLinecap="round" />
    </Svg>
  ),
  retina: () => (
    <Svg>
      <path d="M14 24c0-2 16-12 22-12s22 10 22 12v20c0 10-10 18-22 18S14 54 14 44V24z" fill={TEAL} />
      <ellipse cx="36" cy="40" rx="12" ry="10" fill="#fff" />
      <circle cx="40" cy="40" r="5" fill={TEAL} />
      <path d="M58 34c6 3 10 8 10 14" stroke={TEAL} strokeWidth="4" strokeLinecap="round" />
    </Svg>
  ),
  "dry-eye": () => (
    <Svg>
      <path d="M8 40c8-16 16-22 28-22s20 6 28 22c-8 16-16 22-28 22S16 56 8 40z" fill={TEAL} />
      <circle cx="36" cy="40" r="9" fill="#fff" />
      <circle cx="36" cy="40" r="4" fill={TEAL} />
      <path d="M22 10c0 6 5 10 7 14 2-4 7-8 7-14a7 7 0 1 0-14 0z" fill={TEAL} />
      <path d="M44 8c0 5 4 8 6 11 2-3 6-6 6-11a6 6 0 1 0-12 0z" fill={TEAL} />
    </Svg>
  ),
  pediatric: () => (
    <Svg>
      <circle cx="36" cy="34" r="20" fill={TEAL} />
      <circle cx="28" cy="32" r="5" fill="#fff" />
      <circle cx="44" cy="32" r="5" fill="#fff" />
      <circle cx="28" cy="33" r="2.2" fill="#0F172A" />
      <circle cx="44" cy="33" r="2.2" fill="#0F172A" />
      <path d="M28 44c2.5 5 13.5 5 16 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="18" r="4" fill={TEAL} />
      <circle cx="54" cy="18" r="4" fill={TEAL} />
    </Svg>
  ),
  squint: () => (
    <Svg>
      <ellipse cx="24" cy="36" rx="14" ry="11" fill={TEAL} />
      <ellipse cx="48" cy="36" rx="14" ry="11" fill={TEAL} />
      <circle cx="20" cy="36" r="4.5" fill="#fff" />
      <circle cx="54" cy="36" r="4.5" fill="#fff" />
      <circle cx="19" cy="36" r="2.2" fill="#0F172A" />
      <circle cx="56" cy="36" r="2.2" fill="#0F172A" />
    </Svg>
  ),
};

export const SERVICE_SHORT: Record<string, string> = {
  cataract: "Cataract",
  glaucoma: "Glaucoma",
  retina: "Retina",
  cornea: "Cornea",
  "dry-eye": "Dry Eye",
  pediatric: "Pediatric Eye Care",
  squint: "Squint",
};
