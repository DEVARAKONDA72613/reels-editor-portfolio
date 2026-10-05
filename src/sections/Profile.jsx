import React from 'react';

export const Profile = () => {
  return (
    <section id="profile" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Profile</div>
          <h2 className="mt-5 max-w-md font-display text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
            Built for creators who need motion, clarity, and retention.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Editing system</div>
            <div className="mt-4 font-display text-xl font-black uppercase text-white">Beat aware</div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Pacing decisions matched to the song and the hook, not just the footage.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Creative direction</div>
            <div className="mt-4 font-display text-xl font-black uppercase text-white">Brand-first</div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Every cut changes intention, tone, and momentum to build a recognizable visual rhythm.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Performance</div>
            <div className="mt-4 font-display text-xl font-black uppercase text-white">Retention loop</div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">I optimize the first 3 seconds, pattern interrupts, and pacing arcs to maximize watch-through.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
