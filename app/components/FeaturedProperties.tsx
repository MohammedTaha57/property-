"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const properties = [
  {
    title: "Modern Glass Villa",
    location: "Bangalore, India",
    price: "₹4.8 Cr",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  },
  {
    title: "Skyline Penthouse",
    location: "Dubai, UAE",
    price: "₹12 Cr",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Luxury Urban Residence",
    location: "Mumbai, India",
    price: "₹7.5 Cr",
    type: "Residence",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  },
  {
    title: "Palm View Estate",
    location: "Goa, India",
    price: "₹6.2 Cr",
    type: "Beach House",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
  {
    title: "Royal Courtyard Mansion",
    location: "Hyderabad, India",
    price: "₹9.4 Cr",
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  },
  {
    title: "Serene Lake Villa",
    location: "Udaipur, India",
    price: "₹8.1 Cr",
    type: "Lake Villa",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
];

export default function FeaturedProperties() {
  return (
    <motion.section
      id="properties"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="luxury-section relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#c9a66b]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#e2d2bd]/30 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-20 text-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9c6b3f]">
            Featured Properties
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-[#2d241f] md:text-6xl">
            Curated luxury spaces crafted for elevated living
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 80, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#dccab2] bg-[#fffaf3]/75 shadow-[0_25px_80px_rgba(45,36,31,0.08)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={property.image}
                  alt={property.title}
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm text-white backdrop-blur-xl">
                  {property.type}
                </div>

                <div className="absolute right-6 top-6 rounded-full border border-[#f4dfc2]/30 bg-[#2d241f]/60 px-5 py-2 text-sm text-[#f4dfc2] backdrop-blur-xl">
                  Verified
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#f4dfc2]">
                    {property.location}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {property.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-6 flex items-center justify-between rounded-3xl border border-[#dccab2] bg-[#f6f1e8]/80 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9c6b3f]">
                      Starting Price
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-[#2d241f]">
                      {property.price}
                    </p>
                  </div>

                  <div className="rounded-full bg-[#2d241f] px-4 py-2 text-xs text-[#f4dfc2]">
                    Premium
                  </div>
                </div>

                <p className="leading-relaxed text-[#5f5147]">
                  Experience sophisticated architecture, premium interiors,
                  panoramic views, and modern smart living.
                </p>

                <MagneticButton
                  href="#contact"
                  className="mt-8 bg-[#2d241f] px-7 py-4 text-sm font-medium text-white hover:bg-[#46372e]"
                >
                  View Property
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}