import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';
import { REELS_DATA } from '../data/reels';
import { useTheme } from '../context/ThemeContext';
import { VimeoPlayer } from './VimeoPlayer';

export const ReelViewer = () => {
  const { activeReel, isViewerOpen, closeViewer, setCursorText, selectReel } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !activeReel) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [activeReel]);

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === ' ') {
        event.preventDefault();
        togglePlay();
      }
      if (event.key === 'ArrowRight') navigateReel(1);
      if (event.key === 'ArrowLeft') navigateReel(-1);
      if (event.key === 'm' || event.key === 'M') setIsMuted((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen, activeReel]);

  if (!activeReel) return null;

  const currentIndex = REELS_DATA.findIndex((reel) => reel.id === activeReel.id);

  const navigateReel = (direction) => {
    const nextIndex = (currentIndex + direction + REELS_DATA.length) % REELS_DATA.length;
    selectReel(REELS_DATA[nextIndex]);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  return (
    <AnimatePresence>
      {isViewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl md:p-8"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20 blur-[130px]"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${activeReel.accentColor} 0%, transparent 60%)`
            }}
          />

          <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="font-bold text-white">REEL {activeReel.id} / 0{REELS_DATA.length}</span>
              <span className="hidden text-zinc-600 sm:inline-block">|</span>
              <span className="hidden text-zinc-300 sm:inline-block">{activeReel.category}</span>
            </div>

            <button
              onClick={closeViewer}
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-zinc-200 transition-all hover:border-white"
              onMouseEnter={() => setCursorText('CLOSE')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>ESC</span>
              <X size={14} />
            </button>
          </div>

          <div className="relative flex h-[80vh] max-h-[720px] w-full max-w-[370px] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            {typeof activeReel.video === 'string' && activeReel.video.includes('vimeo.com') ? (
              <div className="absolute inset-0">
                <VimeoPlayer url={activeReel.video} isVisible={isViewerOpen} onReady={() => setIsPlaying(true)} />
              </div>
            ) : (
              <video
                ref={videoRef}
                src={activeReel.video}
                poster={activeReel.poster}
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <div className="pointer-events-none relative z-10 flex items-start justify-between bg-gradient-to-b from-black/80 via-transparent to-transparent p-4">
              <div>
                <span
                  className="rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: `${activeReel.accentColor}44`, color: '#fff' }}
                >
                  {activeReel.account}
                </span>
                <h3 className="mt-1 font-display text-base font-extrabold text-white">{activeReel.title}</h3>
              </div>
            </div>

            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md text-white">
                  <Play size={28} className="translate-x-0.5" />
                </div>
              </div>
            )}

            <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {activeReel.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded border border-white/5 bg-white/10 px-2 py-0.5 font-mono text-[9px] text-zinc-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full transition-all duration-100"
                  style={{ width: `${progress}%`, backgroundColor: activeReel.accentColor }}
                />
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 transition-colors hover:text-white"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <button
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="p-2 transition-colors hover:text-white"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>

                <span className="text-[10px] text-zinc-400">{activeReel.duration}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-4 font-mono text-xs sm:flex">
            <button
              onClick={() => navigateReel(-1)}
              className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300 transition-colors hover:border-zinc-500"
              onMouseEnter={() => setCursorText('PREV')}
              onMouseLeave={() => setCursorText('')}
            >
              <ChevronLeft size={16} />
              <span>PREV TRACK</span>
            </button>

            <button
              onClick={() => navigateReel(1)}
              className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300 transition-colors hover:border-zinc-500"
              onMouseEnter={() => setCursorText('NEXT')}
              onMouseLeave={() => setCursorText('')}
            >
              <span>NEXT TRACK</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
