"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-1/2 top-5 z-50 w-[95%] max-w-7xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-[#cbb79c]/40 bg-[#f6f1e8]/75 px-6 py-4 shadow-[0_8px_30px_rgba(45,36,31,0.08)] backdrop-blur-2xl">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-semibold tracking-tight text-[#2d241f]"
        >
          Elite Havens
        </motion.h1>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="group relative rounded-full px-5 py-2 text-sm font-medium text-[#5f5147]"
            >
              <span className="relative z-10 transition group-hover:text-[#2d241f]">
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full bg-[#d8c2a8]/40 opacity-0 transition group-hover:opacity-100" />
            </motion.a>
          ))}
        </nav>

        <MagneticButton
          href="#contact"
          className="bg-[#2d241f] px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#46372e]"
        >
          Book Visit
        </MagneticButton>
      </div>
    </motion.header>
  );
}