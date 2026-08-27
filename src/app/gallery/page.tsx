"use client";

import { useState } from "react";

const ITEMS = [
  { label: "Hospital", img: "/mg_eye_banner.png" },
  { label: "Cataract care", img: "/MG_Eye_Cataract_Service_Image.png" },
  { label: "Retina clinic", img: "/MG_Eye_Retina_Service_Image.png" },
  { label: "Pediatric clinic", img: "/MG_Eye_Pediatric_Service_Image.png" },
  { label: "Facilities", img: "/banner_1.png" },
  { label: "Community screening", img: "/banner_2.png" },
  { label: "Outreach", img: "/banner_3.png" },
  { label: "Campus", img: "/banner_hero.png" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const cats = ["All", ...Array.from(new Set(ITEMS.map((i) => i.label)))];
  const shown = active === "All" ? ITEMS : ITEMS.filter((i) => i.label === active);

  return (
    <div className="pt-6 pb-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#F97316] text-sm font-semibold tracking-wide uppercase">Our Space</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mt-3">Gallery</h1>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium ${active === cat ? "bg-[#2563EB] text-white" : "bg-white text-[#475569] border border-[#e2e8f0]"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {shown.map((item) => (
            <div key={item.label} className="rounded-[18px] overflow-hidden bg-white border border-[#e2e8f0]">
              <img src={item.img} alt={item.label} className="h-44 w-full object-cover" />
              <p className="p-4 text-sm font-bold text-[#0F172A]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
