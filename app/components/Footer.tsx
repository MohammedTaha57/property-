"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#efe7db] px-6 py-20">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c9a66b]/15 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#d8c4aa]/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="rounded-[2.5rem] border border-[#dccab2] bg-[#fffaf3]/70 p-12 shadow-[0_25px_80px_rgba(45,36,31,0.06)] backdrop-blur-xl"
        >

          <div className="grid gap-14 md:grid-cols-3">

            <div>
              <h2 className="text-4xl font-semibold text-[#2d241f]">
                Elite Havens
              </h2>

              <p className="mt-5 max-w-sm leading-relaxed text-[#5f5147]">
                Premium real estate experiences crafted with elegance,
                comfort, and modern luxury living.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold text-[#2d241f]">
                Quick Links
              </h3>

              <div className="space-y-4 text-[#5f5147]">

                <a
                  href="#home"
                  className="block transition hover:text-[#9c6b3f]"
                >
                  Home
                </a>

                <a
                  href="#properties"
                  className="block transition hover:text-[#9c6b3f]"
                >
                  Properties
                </a>

                <a
                  href="#about"
                  className="block transition hover:text-[#9c6b3f]"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="block transition hover:text-[#9c6b3f]"
                >
                  Contact
                </a>

              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold text-[#2d241f]">
                Contact
              </h3>

              <div className="space-y-4 text-[#5f5147]">

                <p>Bangalore, India</p>

                <p>contact@elitehavens.com</p>

                <p>+91 98765 43210</p>

              </div>
            </div>

          </div>

          <div className="mt-14 border-t border-[#dccab2] pt-8 text-center text-[#7b6d61]">
            © 2026 Elite Havens. Crafted for luxury living.
          </div>

        </motion.div>

      </div>
    </footer>
  );
}