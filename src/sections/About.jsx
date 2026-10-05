import React from "react";
import manojImage from "../assets/images/manoj.jpg";

const tools = [
  {
    name: "Adobe Premiere Pro",
    shortName: "PREMIERE PRO",
    source: "ADOBE",
    logo:
      "https://main--cc--adobecom.aem.live/cc-shared/assets/img/product-icons/svg/premiere-pro.svg",
  },
  {
    name: "Adobe After Effects",
    shortName: "AFTER EFFECTS",
    source: "ADOBE",
    logo:
      "https://main--cc--adobecom.aem.live/cc-shared/assets/img/product-icons/svg/after-effects-40.svg",
  },
  {
    name: "DaVinci Resolve",
    shortName: "DAVINCI RESOLVE",
    source: "BLACKMAGIC DESIGN",
    logo:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@16.33.0/icons/davinciresolve.svg",
  },
  {
    name: "CapCut",
    shortName: "CAPCUT",
    source: "CAPCUT",
    logo: "/capcut-seeklogo-2.svg",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="border-t border-white/10 pt-8">
        <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/30">
          05
        </div>

        <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-6xl">
          About
        </h2>
      </div>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_1.2fr_0.8fr]">
        {/* Image */}
        <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
          <img
            src={manojImage}
            alt="Manoj S N"
            className="aspect-[4/5] h-full w-full object-cover grayscale"
          />
        </div>

        {/* About text */}
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            A LITTLE ABOUT ME
          </div>

          <p className="mt-6 text-sm leading-7 text-white/50 md:text-base">
            I’m Manoj S N, a short-form video editor focused on Instagram
            Reels. My work sits where pacing, sound design, transitions and
            visual storytelling meet.
          </p>

          <p className="mt-5 text-sm leading-7 text-white/40 md:text-base">
            I’ve been editing for around 3 years and completed an internship
            at SayCheezz.in, gaining practical experience through real editing
            workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-6">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                EXPERIENCE
              </div>
              <div className="mt-2 font-display text-xl font-black text-white">
                03 YRS
              </div>
            </div>

            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                INTERNSHIP
              </div>
              <div className="mt-2 font-display text-xl font-black text-white">
                SAYCHEEZZ
              </div>
            </div>

            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                FOCUS
              </div>
              <div className="mt-2 font-display text-xl font-black text-white">
                REELS
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="min-w-0">
          <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            TOOLS
          </div>

          <div className="divide-y divide-white/10">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex min-w-0 items-center gap-4 py-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className={`max-h-10 max-w-10 object-contain ${
                      tool.name === "DaVinci Resolve"
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                </div>

                <div className="min-w-0">
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">
                    {tool.shortName}
                  </div>

                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                    {tool.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
        SHORT-FORM VIDEO / ALWAYS CURIOUS
      </div>
    </section>
  );
};
