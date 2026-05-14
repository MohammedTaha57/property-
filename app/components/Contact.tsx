"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("inquiries").insert([formData]);

    if (!error) {
      setSuccess("Inquiry sent successfully!");
      setFormData({ name: "", email: "", property: "", message: "" });
    }

    setLoading(false);
  };

  const inputStyle =
    "w-full rounded-2xl border border-[#d7c6af] bg-[#fffaf3] px-5 py-4 text-[#2d241f] placeholder:text-[#9b8a78] outline-none transition focus:border-[#9c6b3f]";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="luxury-section relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c9a66b]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9c6b3f]">
            Contact Us
          </p>

          <h2 className="mb-8 text-5xl font-semibold leading-tight text-[#2d241f] md:text-6xl">
            Let’s find your dream property together.
          </h2>

          <p className="text-lg leading-relaxed text-[#5f5147]">
            Connect with our luxury real estate team for premium villas,
            penthouses, and modern investment opportunities.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="relative rounded-[2.5rem] border border-[#d7c6af] bg-[#f8efe3]/90 p-10 shadow-[0_20px_80px_rgba(45,36,31,0.10)] backdrop-blur-2xl"
        >
          <div className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <input
              type="text"
              name="property"
              placeholder="Property Interest"
              value={formData.property}
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputStyle} resize-none`}
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-2xl bg-[#2d241f] py-4 font-medium text-white transition hover:bg-[#4a3a2f] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Inquiry →"}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-medium text-green-700"
              >
                {success}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}