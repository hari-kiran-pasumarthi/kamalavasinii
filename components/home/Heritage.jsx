"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Heritage() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#FFF9F3] to-[#FDF7EF]">

      {/* Decorative Background */}

      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src="/images/heritage/heritage.webp"
                alt="Kamalavasinii Heritage"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            </div>

            {/* Floating Badge */}

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-8 border border-[#EFE1CC]"
            >
              <h3 className="font-serif text-5xl text-[#B8860B]">
                25+
              </h3>

              <p className="mt-2 text-[#6B5A4F] leading-7">
                Years of
                <br />
                Craftsmanship
              </p>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[0.45em] text-[#B8860B] text-sm">

              OUR HERITAGE

            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-serif leading-tight text-[#5A1422]">

              Every Creation

              <span className="block italic bg-gradient-to-r from-[#B8860B] to-[#E7C86C] bg-clip-text text-transparent">

                Tells A Story

              </span>

            </h2>

            <p className="mt-10 text-lg leading-9 text-[#6B5A4F]">

              Kamalavasinii celebrates India's timeless traditions through
              handcrafted jewellery, authentic silk sarees, certified
              gemstones and bespoke creations designed to become treasured
              family heirlooms.

            </p>

            <p className="mt-8 text-lg leading-9 text-[#6B5A4F]">

              Every design is inspired by heritage while embracing modern
              elegance, ensuring each customer receives something uniquely
              personal and beautifully crafted.

            </p>

            {/* Feature Grid */}

            <div className="grid grid-cols-2 gap-8 mt-14">

              <div>

                <h3 className="text-4xl font-serif text-[#B8860B]">

                  500+

                </h3>

                <p className="mt-2 text-[#6B5A4F]">

                  Luxury Designs

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-serif text-[#B8860B]">

                  100%

                </h3>

                <p className="mt-2 text-[#6B5A4F]">

                  Authentic Materials

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-serif text-[#B8860B]">

                  25+

                </h3>

                <p className="mt-2 text-[#6B5A4F]">

                  Years Experience

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-serif text-[#B8860B]">

                  10K+

                </h3>

                <p className="mt-2 text-[#6B5A4F]">

                  Happy Families

                </p>

              </div>

            </div>

            {/* Button */}

            <div className="mt-16">

              <Link
                href="/heritage"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D8B24B] text-white font-medium shadow-xl hover:scale-105 transition"
              >

                Discover Our Story

                <ArrowRight size={18} />

              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
