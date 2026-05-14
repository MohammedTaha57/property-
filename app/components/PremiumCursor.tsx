"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function PremiumCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 32,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 32,
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
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-11 w-11 overflow-hidden rounded-full border border-white/70 bg-white/20 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-6px_-6px_14px_rgba(156,107,63,0.22),0_10px_30px_rgba(45,36,31,0.22)] backdrop-blur-[1px] backdrop-saturate-200"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className="absolute inset-0 scale-125 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),transparent_18%),radial-gradient(circle_at_75%_75%,rgba(201,166,107,0.28),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.45),rgba(255,255,255,0.08))]" />

        <div className="absolute inset-[6px] rounded-full border border-white/45 bg-white/10 backdrop-blur-[0.5px]" />

        <div className="absolute left-2.5 top-2 h-2.5 w-2.5 rounded-full bg-white/95 blur-[0.5px]" />

        <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-[#c9a66b]/30 blur-sm" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-16 w-16 rounded-full border border-[#c9a66b]/25"
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