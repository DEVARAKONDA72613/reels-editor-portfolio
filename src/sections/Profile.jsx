import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TOOLS = [
  {
    name: 'Adobe Premiere Pro',
    logo: 'https://main--cc--adobecom.aem.live/cc-shared/assets/img/product-icons/svg/premiere-pro.svg',
    className: 'h-10 w-10',
  },
  {
    name: 'Adobe After Effects',
    logo: 'https://main--cc--adobecom.aem.live/cc-shared/assets/img/product-icons/svg/after-effects-40.svg',
    className: 'h-10 w-10',
  },
  {
    name: 'DaVinci Resolve',
    logo: 'https://images.blackmagicdesign.com/images/media/press-images/davinci-resolve-logo/davinci-resolve-logo-hero.jpg?_v=1621308338',
    className: 'h-10 w-10 rounded-xl',
  },
  {
    name: 'CapCut',
    logo: '/capcut-seeklogo-2.svg',
    className: 'h-10 w-10 invert',
  },
];

export const Profile = () => {
  const { setCursorText } = useTheme();

  return (
    <section id="profile" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1440px] border-y border-white/10 py-7">
        <div className="mb-10 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.26em] text-zinc-600">
          <span>01</span>
          <span>PROFILE</span>
          <span>SUBJECT.ID / MANOJ-SN</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden border border-white/10 bg-[#141310]">
            <img
              src="/manoj.jpg"
              alt="Manoj S N"
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.22em] text-white/50">
              MANOJ S N / @drifter.cuts
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-600">DOSSIER</div>
              <h2 className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white md:text-7xl">
                A reels editor built around pace, sound and clean visual storytelling.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-500">
                Three years of editing experience across short-form content, with an internship at SayCheezz.in and a workflow centered on social-first storytelling.
              </p>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">EXPERIENCE</div>
                <div className="mt-2 font-display text-2xl font-bold text-white">03 YRS</div>
              </div>
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">INTERNSHIP</div>
                <div className="mt-2 font-display text-2xl font-bold text-white">SAYCHEEZZ</div>
              </div>
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">FOCUS</div>
                <div className="mt-2 font-display text-2xl font-bold text-white">REELS</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">TOOLS I USE</div>

              <div className="flex flex-wrap items-center gap-4">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex items-center gap-2"
                    title={tool.name}
                    onMouseEnter={() => setCursorText(tool.name)}
                    onMouseLeave={() => setCursorText('')}
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.025] p-1.5 transition group-hover:border-white/25 group-hover:bg-white/[0.05]">
                      <img src={tool.logo} alt={tool.name} className={`${tool.className} object-contain`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#work"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-300 transition hover:border-white hover:text-white"
            >
              View selected work
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
