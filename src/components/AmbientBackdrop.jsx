import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const AmbientBackdrop = () => {
  const { activeAccent } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-15%] blur-[110px]"
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `radial-gradient(circle at 52% 20%, ${activeAccent} 0%, transparent 45%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
};
