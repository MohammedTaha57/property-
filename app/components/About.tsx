"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="luxury-section px-6 py-32"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-[#9c6b3f] uppercase tracking-[0.35em] text-sm mb-5">
            About Elite Havens
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8 text-[#2d241f]">
            Real estate designed for modern luxury living.
          </h2>

          <p className="text-[#5f5147] text-lg leading-relaxed mb-10">
            We create premium property experiences for buyers who expect elegance,
            comfort, and exceptional architecture in every detail.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-semibold text-[#2d241f]">
                120+
              </h3>

              <p className="text-[#7b6d61] mt-2">
                Properties
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#2d241f]">
                18+
              </h3>

              <p className="text-[#7b6d61] mt-2">
                Cities
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#2d241f]">
                10K+
              </h3>

              <p className="text-[#7b6d61] mt-2">
                Clients
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#c9a66b]/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
            alt="Luxury Interior"
            className="relative z-10 h-[650px] w-full rounded-[2.5rem] object-cover shadow-2xl"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}