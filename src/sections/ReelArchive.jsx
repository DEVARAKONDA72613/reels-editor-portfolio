import React from "react";
import { VinylRecord } from "../components/VinylRecord";
import { useTheme } from "../context/ThemeContext";

export const ReelArchive = ({ reels = [] }) => {
  const { activeReel, isViewerOpen, selectReel } = useTheme();

  const openReel = (reel) => {
    selectReel(reel);
  };

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-28 md:px-12"
    >
      <div className="border-t border-white/10 pt-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/30">
              02
            </div>

            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
              Selected Work
            </h2>
          </div>

          <div className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 md:block">
            06 REELS / VIDEO SHOWCASE
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
        {reels.map((reel, index) => (
          <VinylRecord
            key={reel.id}
            reel={reel}
            index={index}
            total={reels.length}
            isActive={isViewerOpen && activeReel?.id === reel.id}
            onSelect={openReel}
          />
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
        <span>CLICK A RECORD TO PLAY</span>
        <span>
          {String(reels.length).padStart(2, "0")} /{" "}
          {String(reels.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};
