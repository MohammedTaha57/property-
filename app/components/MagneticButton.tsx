"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export default function MagneticButton({
  children,
  className = "",
  href,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set((mouseX - rect.width / 2) * 0.55);
    y.set((mouseY - rect.height / 2) * 0.55);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full transition ${className}`}
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-[#c9a66b] transition-transform duration-500 group-hover:scale-150" />

      <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_35px_rgba(156,107,63,0.45)] transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2 transition group-hover:text-[#2d241f]">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.a>
  );
}