import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);
    if (!finePointer) return undefined;

    const handleMove = () => setEnabled(true);
    window.addEventListener("mousemove", handleMove, { once: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 rounded-full bg-white/45"
      animate={{ x: x - 3, y: y - 3 }}
      transition={{ type: "spring", damping: 32, stiffness: 420, mass: 0.25 }}
    />
  );
};
