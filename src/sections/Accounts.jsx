import React from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { ACCOUNTS_DATA } from "../data/reels";

export const Accounts = () => {
  return (
    <section
      id="accounts"
      className="mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="border-t border-white/10 pt-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/30">
              03
            </div>

            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-6xl">
              Account
            </h2>
          </div>

          <a
            href="https://www.instagram.com/drifter.cuts/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white md:flex"
          >
            @drifter.cuts
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      {ACCOUNTS_DATA.map((account) => {
        const samples = Array.isArray(account.samples) ? account.samples : [];

        return (
          <article
            key={account.id}
            className="mt-10 min-w-0 overflow-hidden border border-white/10 bg-white/[0.015]"
          >
            <div className="grid min-w-0 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="min-w-0 border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
                <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                  <Instagram size={13} />
                  INSTAGRAM ACCOUNT
                </div>

                <h3 className="mt-5 break-words font-display text-3xl font-black uppercase tracking-[-0.05em] text-white">
                  {account.handle}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
                  {account.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
                    {account.metrics}
                  </span>

                  <span className="border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
                    {String(samples.length).padStart(2, "0")} REELS
                  </span>
                </div>

                <a
                  href={account.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-white/10 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/55 transition hover:border-white/25 hover:text-white"
                >
                  Visit Instagram
                  <ArrowUpRight size={11} />
                </a>
              </div>

              <div className="min-w-0 p-5 md:p-7">
                <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                  SELECTED REELS
                </div>

                <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3">
                  {samples.map((sample) => (
                    <a
                      key={sample.id}
                      href={`https://vimeo.com/${sample.vimeoId}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch ${sample.title} on Vimeo`}
                      className="group relative min-w-0 overflow-hidden border border-white/10 bg-black"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(160deg, ${sample.accentColor}55, #111 72%)`,
                        }}
                      />

                      <div className="relative aspect-[9/16]">
                        {sample.poster && (
                          <img
                            src={sample.poster}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                            loading="lazy"
                          />
                        )}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 min-w-0 p-3">
                        <div className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                          {sample.id}
                        </div>

                        <div className="mt-1 line-clamp-2 break-words font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-white/85">
                          {sample.title}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
