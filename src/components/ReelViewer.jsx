import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { REELS_DATA } from "../data/reels";
import { useTheme } from "../context/ThemeContext";

export const ReelViewer = () => {
  const {
    activeReel,
    isViewerOpen,
    closeViewer,
    selectReel,
    setCursorText,
  } = useTheme();

  const currentIndex = activeReel
    ? REELS_DATA.findIndex((reel) => reel.id === activeReel.id)
    : -1;

  const navigate = (direction) => {
    if (currentIndex < 0) return;

    const nextIndex =
      (currentIndex + direction + REELS_DATA.length) %
      REELS_DATA.length;

    selectReel(REELS_DATA[nextIndex]);
  };

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isViewerOpen, activeReel, currentIndex]);

  useEffect(() => {
    document.body.style.overflow = isViewerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isViewerOpen]);

  return (
    <AnimatePresence mode="wait">
      {isViewerOpen && activeReel && (
        <motion.div
          key={activeReel.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#070707]/98 backdrop-blur-xl"
        >
          {/* Ambient reel light */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10 blur-[120px]"
            style={{
              background: `radial-gradient(circle at 30% 50%, ${activeReel.accentColor}, transparent 55%)`,
            }}
          />

          {/* Header */}
          <div className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
            <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/35">
              REEL {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(REELS_DATA.length).padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={closeViewer}
              onMouseEnter={() => setCursorText("CLOSE")}
              onMouseLeave={() => setCursorText("")}
              className="flex items-center gap-3 border border-white/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/55 transition hover:border-white/25 hover:text-white"
            >
              ESC
              <X size={13} />
            </button>
          </div>

          {/* Player stage */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-110px)] max-w-[1450px] items-center px-5 pb-10 md:px-10">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              {/* Playing vinyl */}
              <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
                <motion.div
                  initial={{ scale: 0.45, rotate: -20, opacity: 0 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative aspect-square w-[min(470px,82vw)]"
                >
                  {/* Record */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 7,
                      ease: "linear",
                    }}
                    className="absolute inset-[9%] rounded-full border border-white/10 bg-[#080808] shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
                  >
                    <div className="absolute inset-[4%] rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-[9%] rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-[14%] rounded-full border border-white/[0.035]" />
                    <div className="absolute inset-[20%] rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-[26%] rounded-full border border-white/[0.03]" />
                    <div className="absolute inset-[32%] rounded-full border border-white/[0.04]" />
                    <div className="vinyl-groove absolute inset-0 rounded-full" />
                    <div className="vinyl-sheen absolute inset-0 rounded-full" />

                    <div
                      className="absolute left-1/2 top-1/2 flex h-[39%] w-[39%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center"
                      style={{
                        background: `radial-gradient(circle, ${activeReel.accentColor}38, #151515 72%)`,
                        borderColor: `${activeReel.accentColor}AA`,
                        boxShadow: `0 0 45px ${activeReel.accentColor}12 inset`,
                      }}
                    >
                      <div className="h-5 w-5 rounded-full border border-white/20 bg-black/80" />
                      <div className="mt-3 font-mono text-[7px] uppercase tracking-[0.25em] text-white/35">
                        SIDE A / PLAYING
                      </div>
                      <div className="mt-2 max-w-[150px] px-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                        {activeReel.title}
                      </div>
                    </div>
                  </motion.div>

                  {/* Tonearm swings onto record */}
                  <motion.div
                    initial={{ rotate: -24 }}
                    animate={{ rotate: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.75,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="pointer-events-none absolute right-[3%] top-[4%] z-30 h-[58%] w-[43%] origin-[82%_12%]"
                  >
                    <div className="absolute right-[13%] top-0 h-12 w-12 rounded-full border border-white/10 bg-[#111] shadow-xl">
                      <div className="absolute inset-3 rounded-full border border-white/10" />
                      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
                    </div>

                    <div className="absolute right-[26%] top-[10%] h-[78%] w-[3px] origin-top rotate-[34deg] rounded-full bg-gradient-to-b from-white/65 via-white/25 to-white/10" />

                    <div className="absolute bottom-[1%] left-[28%] h-10 w-6 rotate-[34deg] rounded-sm border border-white/15 bg-[#171717]">
                      <div className="absolute bottom-[-5px] left-1/2 h-2 w-[2px] -translate-x-1/2 bg-white/70" />
                    </div>
                  </motion.div>

                  {/* Playing indicator */}
                  <motion.div
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="absolute bottom-[8%] left-[8%] flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em]"
                    style={{ color: activeReel.accentColor }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    Playing
                  </motion.div>
                </motion.div>
              </div>

              {/* Vimeo side */}
              <div className="min-w-0">
                <div className="mb-5 flex items-center justify-between gap-5">
                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/30">
                      @drifter.cuts / VIDEO SHOWCASE
                    </div>

                    <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                      {activeReel.title}
                    </h2>
                  </div>
                </div>

                {/* 16:9 Vimeo frame */}
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <iframe
                      key={activeReel.vimeoId}
                      src={`${activeReel.vimeoUrl}?autoplay=1&muted=0&playsinline=1&title=0&byline=0&portrait=0&badge=0`}
                      title={activeReel.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="absolute left-1/2 top-1/2 h-full w-full border-0"
                      style={{
                        transform: "translate(-50%, -50%) scale(1.34)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Details */}
                <div className="mt-6 grid gap-5 md:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {activeReel.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                      {activeReel.concept}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/45 transition hover:border-white/25 hover:text-white"
                      aria-label="Previous reel"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate(1)}
                      className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/45 transition hover:border-white/25 hover:text-white"
                      aria-label="Next reel"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
