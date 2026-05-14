"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 600], [0, 120]);
  const yImage = useTransform(scrollY, [0, 600], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <motion.section
      id="home"
      onMouseMove={handleMouseMove}
      style={{ opacity }}
      className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#2d241f]"
    >
      <motion.div
        animate={{
          x: mousePosition.x - 260,
          y: mousePosition.y - 260,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 0.5,
        }}
        className="pointer-events-none absolute z-[2] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,166,107,0.55),rgba(156,107,63,0.28),transparent_70%)] blur-2xl mix-blend-multiply"
      />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e8]/95 via-[#f6f1e8]/78 to-[#2d241f]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f6f1e8] via-transparent to-transparent" />

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-28 h-80 w-80 rounded-full bg-[#c9a66b]/25 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#fffaf3]/35 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-32 lg:grid-cols-2">
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-6 inline-flex rounded-full border border-[#b89d7a]/70 bg-[#fffaf3]/70 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#9c6b3f] backdrop-blur-xl">
            Signature Luxury Estates
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-[#2d241f] md:text-8xl lg:text-9xl">
            Live where elegance feels effortless.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5f5147] md:text-xl">
            Discover rare villas, penthouses, and private residences designed
            for refined living, quiet comfort, and unforgettable first
            impressions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              href="#properties"
              className="bg-[#2d241f] px-8 py-4 text-center font-medium text-white hover:bg-[#4a3a2f]"
            >
              Explore Collection
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="border border-[#b89d7a] bg-[#fffaf3]/50 px-8 py-4 text-center font-medium text-[#2d241f] backdrop-blur-xl hover:bg-[#fffaf3]"
            >
              Schedule Private Tour
            </MagneticButton>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5">
            {[
              ["₹4.8Cr+", "Starting Price"],
              ["120+", "Luxury Homes"],
              ["18", "Prime Cities"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#d7c6af] bg-[#fffaf3]/55 p-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-semibold text-[#2d241f]">
                  {value}
                </h3>
                <p className="mt-1 text-sm text-[#7b6d61]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, x: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -left-10 top-16 rounded-3xl border border-[#dccab2] bg-[#fffaf3]/70 p-5 shadow-xl backdrop-blur-xl">
            <p className="text-sm text-[#7b6d61]">
              Private Listings
            </p>

            <h3 className="mt-1 text-3xl font-semibold text-[#2d241f]">
              120+
            </h3>
          </div>

          <div className="absolute -right-8 bottom-24 z-20 rounded-3xl border border-[#dccab2] bg-[#2d241f]/80 p-5 shadow-xl backdrop-blur-xl">
            <p className="text-sm text-[#f4dfc2]">
              Verified Luxury
            </p>

            <h3 className="mt-1 text-3xl font-semibold text-white">
              100%
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] border border-[#dccab2] bg-[#fffaf3]/55 p-3 shadow-[0_30px_100px_rgba(45,36,31,0.18)] backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
              alt="Luxury property interior"
              className="h-[650px] w-full rounded-[2.4rem] object-cover"
            />

            <div className="absolute inset-3 rounded-[2.4rem] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] border border-white/20 bg-[#f6f1e8]/75 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#9c6b3f]">
                Featured Residence
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-[#2d241f]">
                Modern Glass Villa
              </h3>

              <p className="mt-2 text-[#5f5147]">
                Private pool · 5 bedrooms · Skyline view · Smart interiors
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}