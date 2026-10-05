import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const AmbientBackdrop = () => {
  const { activeAccent } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-1000">
      <AnimatePresence>
        {activeAccent && (
          <motion.div
            key={activeAccent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-[-20%] blur-[120px]"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${activeAccent} 0%, transparent 58%)`
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
