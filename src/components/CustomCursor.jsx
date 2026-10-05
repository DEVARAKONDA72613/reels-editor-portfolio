import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const { cursorText, activeAccent } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsVisible(false);
    const handleMouse = () => setIsVisible(true);

    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('mousemove', handleMouse, { once: true });

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  if (!isVisible) return null;

  const hasText = Boolean(cursorText);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden transition-opacity duration-300">
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full"
        animate={{
          x: x - (hasText ? 42 : 6),
          y: y - (hasText ? 42 : 6),
          width: hasText ? 84 : 12,
          height: hasText ? 84 : 12,
          backgroundColor: hasText ? activeAccent || '#ffffff' : '#ffffff'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.4 }}
        style={{
          boxShadow: hasText ? `0 0 25px ${activeAccent || 'rgba(255,255,255,0.4)'}` : 'none'
        }}
      >
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none text-[10px] font-mono font-black uppercase tracking-[0.2em] text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
