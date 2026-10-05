import React from 'react';

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">About</div>
          <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">
            MANOJ S N
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base font-light leading-relaxed text-zinc-300 sm:text-lg">
            I am Manoj S N, a specialized short-form video editor based in [Your Location]. I focus on the intersection of rhythm, sound design, and retention-based editing for Instagram Reels.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="font-display text-2xl font-black text-white">7 yrs</div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Editing craft</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="font-display text-2xl font-black text-white">30+</div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Brands served</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="font-display text-2xl font-black text-white">24/7</div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Creative flow</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-52 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.20),_rgba(255,255,255,0.05)_30%,_transparent_70%),linear-gradient(135deg,#1e1b4b,#0f172a_40%,#111827)]" />
            <div className="flex flex-col gap-4">
              <div className="h-24 rounded-[1.5rem] bg-[linear-gradient(135deg,#1f2937,#0f172a)]" />
              <div className="h-24 rounded-[1.5rem] bg-[linear-gradient(135deg,#111827,#050816)]" />
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Workflow</div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
              <li>• Hook-first cut planning and storyboard rhythm maps.</li>
              <li>• Audio cue balancing for pace, tension, and emotional payoff.</li>
              <li>• Motion design overlays and clean finishing passes for premium look.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
