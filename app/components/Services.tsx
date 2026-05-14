"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, MapPinned } from "lucide-react";
import MagneticButton from "./MagneticButton";

const services = [
  {
    icon: Building2,
    title: "Premium Properties",
    description:
      "Carefully selected luxury apartments, villas, and penthouses across prime locations.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Investment",
    description:
      "Verified legal documentation and secure property investment opportunities.",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Properties located in the most desirable and rapidly growing urban areas.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="luxury-section relative overflow-hidden px-6 py-32"
    >
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#c9a66b]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-20 text-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9c6b3f]">
            Our Services
          </p>

          <h2 className="text-5xl font-semibold text-[#2d241f] md:text-6xl">
            Exceptional real estate experience
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -14, scale: 1.02 }}
                className="rounded-[2rem] border border-[#d7c6af] bg-[#fffaf3]/80 p-10 shadow-[0_20px_70px_rgba(45,36,31,0.08)] backdrop-blur-xl"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-[#efe0cc] p-4">
                  <Icon className="h-8 w-8 text-[#9c6b3f]" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#2d241f]">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-[#5f5147]">
                  {service.description}
                </p>

                <MagneticButton
                  href="#contact"
                  className="mt-8 border border-[#b89d7a] px-6 py-3 text-sm font-medium text-[#2d241f] hover:bg-[#efe0cc]"
                >
                  Learn More
                </MagneticButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}