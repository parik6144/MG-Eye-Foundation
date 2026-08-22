"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function ClinicVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    void el.play();
    setPlaying(true);
  };

  return (
    <div className="rounded-[24px] border-8 border-[#0F172A] bg-[#0F172A] overflow-hidden shadow-lg">
      <div className="relative aspect-video bg-black">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          playsInline
          controls={playing}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing ? (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/25"
            aria-label="Play video"
          >
            <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF741F] text-white shadow-lg shadow-[#FF741F]/40">
              <Play className="h-7 w-7 ml-1" fill="currentColor" />
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
