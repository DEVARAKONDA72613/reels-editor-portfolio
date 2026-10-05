import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import manojImage from "../assets/images/manoj.jpg";

export const Intro = () => {
  const { setCursorText } = useTheme();

  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-8 pt-28 md:px-12 md:pb-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid min-h-[78vh] gap-12 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:gap-16">
          {/* LEFT / TITLE */}
          <div className="flex min-w-0 flex-col justify-between">
            <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.28em] text-zinc-600">
              <span className="text-zinc-400">00</span>
              <span>/</span>
              <span>INTRO</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
            </div>

            <div className="mt-auto pb-4">
              <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-500">
                INSTAGRAM REELS EDITOR / SHORT-FORM VIDEO
              </div>

              {/* Headline stays entirely inside the left column */}
              <h1 className="w-full max-w-[720px] overflow-hidden font-display text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.07em] text-white sm:text-[12vw] lg:text-[6.1vw] xl:text-[6vw]">
                <span className="block whitespace-nowrap">STOP</span>
                <span className="block whitespace-nowrap">THE</span>
                <span className="block whitespace-nowrap">SCROLL.</span>
              </h1>

              <div className="mt-8 max-w-[720px] border-t border-white/10 pt-5">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
                    Manoj S N builds short-form edits around rhythm, sound and
                    visual storytelling — made for creators who want their
                    footage to feel intentional.
                  </p>

                  <a
                    href="#work"
                    className="group inline-flex shrink-0 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300"
                    onMouseEnter={() => setCursorText("WORK")}
                    onMouseLeave={() => setCursorText("")}
                  >
                    Explore work

                    <span className="flex h-8 w-8 items-center justify-center border border-white/15 transition group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={12} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT / PORTRAIT */}
          <div className="relative flex min-h-[430px] min-w-0 items-end justify-end lg:min-h-0">
            <div className="pointer-events-none absolute inset-0 hidden border border-white/5 lg:block" />

            <div className="pointer-events-none absolute left-6 top-6 hidden font-mono text-[7px] uppercase tracking-[0.25em] text-zinc-700 lg:block">
              SUBJECT / 001
            </div>

            <div
              className="relative z-10 h-[48vh] max-h-[620px] min-h-[370px] w-full overflow-hidden border border-white/10 bg-[#151311] sm:h-[52vh] lg:w-[82%]"
              onMouseEnter={() => setCursorText("MANOJ")}
              onMouseLeave={() => setCursorText("")}
            >
              <img
                src={manojImage}
                alt="Manoj S N"
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                    MANOJ S N
                  </div>

                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-white/60">
                    @drifter.cuts
                  </div>
                </div>

                <ArrowDownRight size={16} className="text-white/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom technical line */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[7px] uppercase tracking-[0.24em] text-zinc-700">
          <span>DRIFTER.CUTS / EST. 2023</span>

          <span className="hidden sm:block">
            SHORT-FORM / VISUAL STORYTELLING
          </span>

          <span>SCROLL TO ENTER</span>
        </div>
      </div>
    </section>
  );
};
