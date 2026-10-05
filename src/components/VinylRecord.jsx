import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VinylRecord = ({
  reel,
  index,
  total = 0,
  isActive = false,
  onSelect,
}) => {
  if (!reel) return null;

  return (
    <motion.button
      type="button"
      layoutId={`vinyl-${reel.id}`}
      onClick={() => onSelect?.(reel)}
      whileHover={{ y: -8, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block w-full text-left"
      aria-label={`Play ${reel.title}`}
    >
      <div className="relative aspect-square">
        {/* Soft light behind the record */}
        <div
          className="pointer-events-none absolute inset-[15%] rounded-full blur-[45px] opacity-0 transition duration-500 group-hover:opacity-20"
          style={{ backgroundColor: reel.accentColor }}
        />

        {/* Record */}
        <div
          className="absolute inset-[8%] rounded-full border border-white/10 bg-[#090909] shadow-[0_24px_50px_rgba(0,0,0,0.55)] transition duration-500 group-hover:border-white/20"
          style={{
            boxShadow: isActive
              ? `0 0 45px ${reel.accentColor}18, 0 24px 50px rgba(0,0,0,0.55)`
              : undefined,
          }}
        >
          {/* Grooves */}
          <div className="absolute inset-[5%] rounded-full border border-white/[0.045]" />
          <div className="absolute inset-[10%] rounded-full border border-white/[0.04]" />
          <div className="absolute inset-[16%] rounded-full border border-white/[0.035]" />
          <div className="absolute inset-[22%] rounded-full border border-white/[0.04]" />
          <div className="absolute inset-[28%] rounded-full border border-white/[0.03]" />
          <div className="absolute inset-[34%] rounded-full border border-white/[0.035]" />
          <div className="vinyl-groove absolute inset-0 rounded-full" />

          {/* Label */}
          <div
            className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center transition duration-500 group-hover:scale-105"
            style={{
              background: `radial-gradient(circle, ${reel.accentColor}32, #151515 70%)`,
              borderColor: `${reel.accentColor}80`,
            }}
          >
            <div className="h-4 w-4 rounded-full border border-white/20 bg-black/70" />

            <span className="mt-2 font-mono text-[7px] uppercase tracking-[0.22em] text-white/35">
              SIDE A
            </span>

            <span className="mt-1 max-w-[72px] truncate px-1 font-mono text-[7px] font-bold uppercase tracking-[0.12em] text-white">
              {reel.id} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Index */}
        <div className="absolute left-0 top-2 font-mono text-[9px] tracking-[0.2em] text-white/25">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Play mark */}
        <div
          className="absolute bottom-[9%] right-[8%] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/65 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100"
          style={{
            borderColor: `${reel.accentColor}55`,
          }}
        >
          <Play size={13} className="translate-x-[1px]" />
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
            {reel.account}
          </div>

          <div className="mt-2 font-display text-lg font-black uppercase leading-none tracking-[-0.04em] text-white">
            {reel.title}
          </div>
        </div>

        <span
          className="font-mono text-[8px] uppercase tracking-[0.18em]"
          style={{ color: reel.accentColor }}
        >
          PLAY ↗
        </span>
      </div>
    </motion.button>
  );
};
