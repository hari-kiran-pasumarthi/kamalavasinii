"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "A Personal Experience",
    text:
      "Every consultation is centred around understanding your story before recommending the perfect jewellery, silk saree or gemstone.",
  },
  {
    title: "Crafted With Care",
    text:
      "Each creation is designed with attention to detail, blending timeless Indian craftsmanship with contemporary elegance.",
  },
  {
    title: "Luxury That Lasts",
    text:
      "From bespoke bridal collections to treasured heirlooms, every piece is created to be cherished for generations.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-[#FFF8F2] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#B8860B] text-sm">
            OUR PROMISE
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif text-[#5A1422]">
            Crafted With
            <span className="italic bg-gradient-to-r from-[#B8860B] to-[#E6C15A] bg-clip-text text-transparent">
              {" "}
              Passion
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-[#6B5A4F] leading-8">
            Every creation reflects our commitment to craftsmanship,
            authenticity and timeless elegance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition-all border border-[#EFE1CC]"
            >
              <Quote
                className="text-[#D4AF37]"
                size={42}
                strokeWidth={1.5}
              />

              <h3 className="mt-8 text-2xl font-serif text-[#5A1422]">
                {item.title}
              </h3>

              <p className="mt-6 text-[#6B5A4F] leading-8">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h3 className="font-serif text-4xl text-[#5A1422]">
            Your Story Deserves Something Timeless.
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-[#6B5A4F] leading-8">
            Whether you're celebrating a wedding, a milestone, or creating
            a family heirloom, we're here to craft something uniquely yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
