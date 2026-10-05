import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { EDITING_STYLES, REELS } from "../data/reels";

export const EditingStyle = () => {
  const { selectReel } = useTheme();

  return (
    <section
      id="style"
      className="overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-[1440px] min-w-0 border-t border-white/10 pt-7">
        <div className="mb-10 flex min-w-0 items-end justify-between gap-8">
          <div className="min-w-0">
            <div className="font-mono text-[8px] uppercase tracking-[0.26em] text-zinc-600">
              04
            </div>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl">
              Editing style
            </h2>
          </div>

          <div className="hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-700 sm:block">
            RHYTHM / SOUND / COLOR
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {EDITING_STYLES.map((card, index) => {
            const reel = REELS[index];
            const accent = reel?.accentColor || "#D56A32";

            return (
              <article
                key={card.num}
                className="group relative min-h-[400px] min-w-0 overflow-hidden border border-white/10 bg-[#151412] sm:min-h-[430px]"
              >
                {reel?.poster && (
                  <img
                    src={reel.poster}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
                  />
                )}

                {!reel?.poster && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(160deg, ${accent}44 0%, #11110f 52%, #080807 100%)`,
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="relative flex h-full min-w-0 flex-col justify-between p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-300">
                      {card.num}
                    </span>
                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                      {card.label}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="break-words font-display text-4xl font-black uppercase tracking-[-0.05em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-[250px] text-sm leading-6 text-zinc-300/70">
                      {card.desc}
                    </p>

                    {reel && (
                      <button
                        type="button"
                        onClick={() => selectReel(reel)}
                        className="mt-6 inline-flex max-w-full items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/75 transition group-hover:text-white"
                      >
                        <span className="truncate">Open related reel</span>
                        <ArrowUpRight size={11} className="shrink-0" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
