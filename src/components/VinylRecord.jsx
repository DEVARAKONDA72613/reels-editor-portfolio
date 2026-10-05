import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Disc, Eye, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Needle = () => (
  <div className="pointer-events-none absolute right-[-24px] top-1/2 z-40 h-1 w-12 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.4)]">
    <div className="absolute -left-1 top-[-3px] h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
  </div>
);

export const VinylRecord = ({ reels, activeReelIndex, onHoverTrack, onSelectTrack, onTrackChange }) => {
  const { setCursorText } = useTheme();
  const rotation = useMotionValue(0);
  const pointerAngle = useRef(null);
  const isDragging = useRef(false);
  const springConfig = { damping: 30, stiffness: 110, mass: 1.2 };
  const smoothRotation = useSpring(rotation, springConfig);
  const step = 360 / reels.length;

  const activeIndex = useTransform(smoothRotation, (value) => {
    const normalized = (value % 360 + 360) % 360;
    return Math.floor(normalized / step);
  });

  useEffect(() => {
    if (typeof activeReelIndex === 'number') {
      rotation.set(activeReelIndex * step);
    }
  }, [activeReelIndex, rotation, step]);

  useEffect(() => {
    if (!onTrackChange) return undefined;
    const unsubscribe = activeIndex.on('change', (value) => {
      const index = Number(value);
      if (Number.isFinite(index) && index >= 0 && index < reels.length) {
        onTrackChange(index);
      }
    });
    return () => unsubscribe();
  }, [activeIndex, onTrackChange, reels.length]);

  const currentReel = reels[activeReelIndex] || reels[0];

  const getPointerAngle = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    return Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerAngle.current = getPointerAngle(event);
    isDragging.current = true;
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current || pointerAngle.current === null) return;

    const nextAngle = getPointerAngle(event);
    let delta = nextAngle - pointerAngle.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    rotation.set(rotation.get() + delta);
    pointerAngle.current = nextAngle;
  };

  const finishPointerDrag = () => {
    isDragging.current = false;
    pointerAngle.current = null;
  };

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[580px] select-none items-center justify-center">
      <div
        className="pointer-events-none absolute inset-4 rounded-full blur-3xl opacity-30 transition-all duration-700"
        style={{ backgroundColor: currentReel.accentColor }}
      />

      <div className="relative h-[min(400px,calc(100vw-3rem))] w-[min(400px,calc(100vw-3rem))]">
        <Needle />
        <motion.div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointerDrag}
          onPointerCancel={finishPointerDrag}
          onLostPointerCapture={finishPointerDrag}
          onMouseEnter={() => setCursorText('ROTATE')}
          onMouseLeave={() => setCursorText('')}
          onClick={() => {
            if (!isDragging.current) onSelectTrack?.(currentReel);
          }}
          style={{ rotate: smoothRotation, touchAction: 'none' }}
          className="relative h-full w-full cursor-grab rounded-full border border-zinc-800 bg-black shadow-2xl active:cursor-grabbing"
        >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="absolute left-1/2 top-0 h-1/2 w-[1px] -ml-[0.5px] origin-bottom bg-zinc-800/80"
            style={{ transform: `translateX(-50%) rotate(${index * (360 / reels.length)}deg)` }}
          />
        ))}

        <div className="absolute inset-2 rounded-full border border-zinc-800/80 vinyl-grooves" />
        <div className="absolute inset-8 rounded-full border border-zinc-800/40" />
        <div className="absolute inset-16 rounded-full border border-zinc-800/60" />
        <div className="absolute inset-24 rounded-full border border-zinc-800/40" />
        <div className="absolute inset-32 rounded-full border border-zinc-800/80" />
        <div className="vinyl-sheen absolute inset-0 rounded-full" />

        <div
          className="relative z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border p-4 text-center shadow-inner md:h-52 md:w-52"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            backgroundColor: '#121216',
            borderColor: currentReel.accentColor,
            boxShadow: `inset 0 0 20px ${currentReel.accentColor}33`
          }}
        >
          <div className="mb-2 h-6 w-6 rounded-full border-2 border-zinc-700 bg-[#080809] shadow-inner" />
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-500">SIDE A • 45 RPM</span>
          <span className="mt-0.5 max-w-[140px] truncate font-display text-xs font-extrabold tracking-[0.18em] text-white md:text-sm">
            {currentReel.title}
          </span>
          <span className="mt-1 font-mono text-[10px] font-semibold tracking-[0.18em]" style={{ color: currentReel.accentColor }}>
            TRACK {currentReel.id} / 0{reels.length}
          </span>
          <span className="mt-1 text-[8px] font-mono uppercase text-zinc-600">{currentReel.account}</span>
        </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-sm transition hover:border-white/30"
          onMouseEnter={() => onHoverTrack?.(reels[(activeReelIndex - 1 + reels.length) % reels.length])}
          onMouseLeave={() => onHoverTrack?.(null)}
          onClick={() => onSelectTrack?.(reels[(activeReelIndex - 1 + reels.length) % reels.length])}
          aria-label="Previous reel"
        >
          <Disc size={18} />
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-sm transition hover:border-white/30"
          onMouseEnter={() => onHoverTrack?.(reels[(activeReelIndex + 1) % reels.length])}
          onMouseLeave={() => onHoverTrack?.(null)}
          onClick={() => onSelectTrack?.(reels[(activeReelIndex + 1) % reels.length])}
          aria-label="Next reel"
        >
          <Play size={18} className="translate-x-[1px]" />
        </button>
      </div>

      <div className="absolute bottom-16 left-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase text-zinc-300 backdrop-blur-sm">
        <Eye size={12} />
        <button onClick={() => onSelectTrack?.(currentReel)} className="hover:text-white">
          WATCH REEL
        </button>
      </div>
    </div>
  );
};