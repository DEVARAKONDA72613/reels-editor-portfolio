import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { ACCOUNTS_DATA } from '../data/reels';

export const Accounts = () => {
  return (
    <section id="accounts" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Accounts</div>
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
          Editors, strategists, and pacing specialists.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {ACCOUNTS_DATA.map((account) => (
          <article key={account.id} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{account.handle}</div>
                <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-[-0.04em] text-white">{account.title}</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                {account.metrics}
              </div>
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{account.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {account.samples.map((sample) => (
                <div key={sample.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img src={sample.poster} alt={sample.title} className="h-28 w-full object-cover" />
                  <div className="flex items-center justify-between gap-3 p-3">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">{sample.id}</div>
                      <div className="mt-1 font-display text-sm font-black uppercase text-white">{sample.title}</div>
                    </div>
                    <Play size={12} className="text-zinc-500" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">{account.deliverables}</div>
              <a href={account.link} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 hover:text-white">
                Visit account
                <ArrowUpRight size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
