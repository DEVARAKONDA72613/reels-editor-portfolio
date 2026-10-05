import React from 'react';
import { VinylRecord } from '../components/VinylRecord';
import { useTheme } from '../context/ThemeContext';

export const ReelArchive = ({ reels }) => {
  const { activeReel, setActiveReel } = useTheme();
  const currentReel = activeReel || reels[0] || {};

  return (
    <section id="work" className="mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-12 px-6 py-20 md:px-12">
      <div className="flex flex-1 flex-col gap-8">
        <h2 className="font-mono text-sm uppercase tracking-[0.28em] text-zinc-500">02 // REEL ARCHIVE</h2>
        <VinylRecord
          reels={reels}
          activeReelIndex={reels.findIndex((reel) => reel.id === currentReel?.id) || 0}
          onTrackChange={(index) => setActiveReel(reels[index])}
          onSelectTrack={(reel) => setActiveReel(reel)}
        />
      </div>

      <div className="w-full max-w-md border-l border-zinc-900 pl-6 md:pl-12">
        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">ACTIVE REEL</div>
          <div className="font-display text-3xl font-black uppercase tracking-[-0.04em] text-white">
            {currentReel.title}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">{currentReel.account}</div>
          <p className="max-w-sm text-base leading-7 text-zinc-400">{currentReel.concept}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {currentReel.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
