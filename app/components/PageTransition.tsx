"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.6,
        delay: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#2d241f]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,166,107,0.28),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,250,243,0.14),transparent_30%)]" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a66b]/30"
      />

      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fffaf3]/20"
      />

      <div className="relative flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            animate={{ opacity: 1, letterSpacing: "0.45em" }}
            transition={{ duration: 1 }}
            className="mb-5 text-sm uppercase text-[#c9a66b]"
          >
            Welcome To
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl font-semibold text-[#fffaf3] md:text-8xl"
          >
            Elite Havens
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "220px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-[#c9a66b] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-sm uppercase tracking-[0.35em] text-[#efe7db]"
          >
            Luxury Real Estate Experience
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/2 h-[2px] w-72 origin-left -translate-x-1/2 bg-[#c9a66b]"
      />
    </motion.div>
  );
}