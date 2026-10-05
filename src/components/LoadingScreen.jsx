import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080807]"
        >
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.42em] text-zinc-500">
              DRIFTER.CUTS
            </div>
            <motion.div
              className="mt-4 h-px w-32 bg-zinc-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-600">
              Loading / 00
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
