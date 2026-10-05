import React from 'react';
import { EDITING_STYLES } from '../data/reels';

export const EditingStyle = () => {
  return (
    <section id="style" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Editing style</div>
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
          Why the work lands.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {EDITING_STYLES.map((style) => (
          <article key={style.num} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{style.num}</span>
              <span className="h-2.5 w-2.5 rounded-full border border-white/15 bg-zinc-700" />
            </div>
            <h3 className="mt-6 font-display text-xl font-black uppercase tracking-[-0.04em] text-white">{style.title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{style.desc}</p>
            <div className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              {style.detail}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
