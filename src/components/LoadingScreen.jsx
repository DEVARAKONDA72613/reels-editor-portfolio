import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080809]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border border-white/15" />
              <motion.div
                className="absolute inset-1 rounded-full border border-white/25"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
              <div className="absolute inset-4 rounded-full bg-white" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              Initializing reel stack
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
