import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { REELS_DATA } from '../data/reels';
import { useTheme } from '../context/ThemeContext';

export const SelectedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCursorText, selectReel } = useTheme();

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Selected work</div>
          <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
            Performance-focused edits.
          </h2>
        </div>

        <a href="#contact" className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 md:flex">
          Book a project
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {REELS_DATA.slice(0, 4).map((reel, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={reel.id}
                className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                  isActive ? 'border-white/20 bg-white/[0.08]' : 'border-white/10 bg-white/[0.02] hover:border-white/15'
                }`}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setCursorText('OPEN');
                }}
                onMouseLeave={() => setCursorText('')}
                onClick={() => selectReel(reel)}
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-28 md:w-28">
                  <img src={reel.poster} alt={reel.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 backdrop-blur-sm">
                      <Play size={14} className="translate-x-[1px]" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{reel.id} • {reel.account}</div>
                  <div className="mt-2 font-display text-xl font-black uppercase tracking-[-0.04em] text-white">{reel.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {reel.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden text-zinc-500 md:block">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02)_30%,_transparent_70%)] p-6 shadow-2xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Featured cut</div>
          <img
            src={REELS_DATA[activeIndex].poster}
            alt={REELS_DATA[activeIndex].title}
            className="mt-5 h-[22rem] w-full rounded-2xl object-cover"
          />
          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{REELS_DATA[activeIndex].category}</div>
              <div className="mt-2 font-display text-2xl font-black uppercase tracking-[-0.04em] text-white">
                {REELS_DATA[activeIndex].title}
              </div>
            </div>
            <button
              onClick={() => selectReel(REELS_DATA[activeIndex])}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white"
            >
              Play
            </button>
          </div>
          <p className="mt-5 text-sm leading-6 text-zinc-400">{REELS_DATA[activeIndex].concept}</p>
        </div>
      </div>
    </section>
  );
};
