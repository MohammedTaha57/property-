"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function LensCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 40,
  });

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 40,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-white/80 bg-white/20 shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(156,107,63,0.2),0_8px_24px_rgba(45,36,31,0.18)] backdrop-blur-md"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className="absolute inset-[5px] rounded-full border border-white/35" />
        <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/95 blur-[0.5px]" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-20 w-20 rounded-full bg-[#c9a66b]/10 blur-2xl"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}