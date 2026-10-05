import React from 'react';
import { useTheme } from '../context/ThemeContext';
import manojImage from '../assets/images/manoj.jpg';

export const Intro = () => {
  const { setCursorText } = useTheme();

  return (
    <section id="intro" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-12 pt-32 md:px-12">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-6 font-mono text-xs text-zinc-500">
        <span>00 // SYSTEM INITIALIZED</span>
        <span>MANOJ S N / REELS EDITOR</span>
      </div>

      <div className="my-auto flex flex-col items-center gap-12 py-12 lg:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
            <span className="h-[1px] w-8 bg-zinc-600" />
            <span>Short-form Video Specialist</span>
          </div>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-9xl">
            MANOJ <br /> S N
          </h1>
          <p className="max-w-lg font-sans text-xl leading-relaxed text-zinc-400">
            I turn raw footage into high-retention stories built to stop the scroll.
          </p>
        </div>

        <div
          className="relative h-64 w-64 overflow-hidden rounded-2xl border border-zinc-800 grayscale transition-all duration-700 hover:grayscale-0 md:h-96 md:w-96"
          onMouseEnter={() => setCursorText('MANOJ')}
          onMouseLeave={() => setCursorText('')}
        >
          <img
            src={manojImage}
            alt="Manoj S N"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
