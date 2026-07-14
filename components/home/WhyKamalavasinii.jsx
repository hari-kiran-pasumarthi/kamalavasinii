"use client";

import { motion } from "framer-motion";
import {
  Award,
  Gem,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Master Craftsmanship",
    description:
      "Every jewellery piece and silk saree is handcrafted by experienced artisans, preserving generations of Indian heritage.",
  },
  {
    icon: Gem,
    title: "Authentic Materials",
    description:
      "Certified gemstones, premium gold, authentic South Indian silks and carefully selected materials ensure uncompromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Every purchase is backed by quality assurance, certification and honest pricing for complete peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Consultation",
    description:
      "From bridal jewellery to customised heirloom creations, we guide you personally through every step of your journey.",
  },
];

export default function WhyKamalavasinii() {
  return (
    <section className="bg-[#FDF7EF] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#B8860B] text-sm">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-serif text-[#5A1422]">
            Why
            <span className="italic bg-gradient-to-r from-[#B8860B] to-[#E6C15A] bg-clip-text text-transparent">
              {" "}Kamalavasinii
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-[#6C5A4D] leading-8">
            Luxury is more than beautiful products. It is trust,
            craftsmanship, heritage and a memorable experience that lasts
            for generations.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#EFE1CC]"
              >

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B8860B] to-[#E6C15A] flex items-center justify-center text-white shadow-md">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-serif text-[#5A1422]">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-[#6B5A4F]">

                  {feature.description}

                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#B8860B] via-[#D6AF36] to-[#E6C15A] rounded-[32px] px-10 py-14 text-white shadow-xl">

            <h3 className="font-serif text-4xl">
              "Where Heritage Meets Timeless Luxury"
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Every creation at Kamalavasinii is designed to become a
              cherished part of your family's story.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
