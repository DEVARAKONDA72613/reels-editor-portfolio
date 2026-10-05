import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 pt-20 md:px-12">
      <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02)_30%,_transparent_70%)] p-8 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Contact</div>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
              Ready to turn your next concept into a reel people finish.
            </h2>
          </div>

          <a
            href="mailto:hello@editorname.com"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-5 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
          >
            hello@editorname.com
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <Mail size={14} />
              Reach out
            </div>
            <div className="mt-4 text-lg text-zinc-200">For brand campaigns, creator partnerships, and launch edits.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <MapPin size={14} />
              Based in
            </div>
            <div className="mt-4 text-lg text-zinc-200">Available worldwide, with remote editing support and fast turnarounds.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
