import React from 'react';
import { ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react';

const LINKS = [
  {
    label: 'Instagram',
    value: '@drifter.cuts',
    href: 'https://www.instagram.com/drifter.cuts/',
    icon: Instagram,
  },
  {
    label: 'Email',
    value: 'ooiizoro18@gmail.com',
    href: 'mailto:ooiizoro18@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '+91 8088052045',
    href: 'https://wa.me/918088052045',
    icon: MessageCircle,
  },
];

export const Contact = () => (
  <section id="contact" className="px-6 pb-10 pt-24 md:px-12">
    <div className="mx-auto max-w-[1440px] border-t border-white/10 pt-7">
      <div className="flex items-end justify-between">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.26em] text-zinc-600">06</div>
          <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl">
            Let’s work
          </h2>
        </div>
        <div className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-700 sm:block">
          STATUS / ONLINE
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden border border-white/10 bg-[#0e0e0c] p-7 md:p-12">
        <div className="absolute -right-20 -top-24 aspect-square w-[420px] rounded-full border border-white/[0.04]" />
        <div className="absolute -right-5 -top-8 aspect-square w-[260px] rounded-full border border-white/[0.04]" />

        <div className="relative z-10 max-w-4xl">
          <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">HAVE FOOTAGE?</div>
          <h3 className="mt-5 max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            Let’s turn it
            <br />
            into a reel.
          </h3>

          <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-600">
            Send the footage, the idea or just the rough direction. We’ll figure out the edit from there.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Instagram' || label === 'WhatsApp' ? '_blank' : undefined}
                rel={label === 'Instagram' || label === 'WhatsApp' ? 'noreferrer' : undefined}
                className="group flex items-center justify-between border border-white/10 bg-white/[0.02] p-4 transition hover:bg-white hover:text-black"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] opacity-50">
                    <Icon size={11} />
                    {label}
                  </div>
                  <div className="mt-2 font-mono text-[9px] tracking-[0.04em]">{value}</div>
                </div>
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 font-mono text-[7px] uppercase tracking-[0.22em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
        <span>DRIFTER.CUTS / MANOJ S N</span>
        <span>SHORT-FORM VIDEO EDITOR / 2026</span>
      </footer>
    </div>
  </section>
);
