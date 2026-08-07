"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="py-20 md:py-28 cream-bg paper-texture px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Container with Floating Badge */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative w-full aspect-[4/5] min-h-[420px] sm:min-h-[500px] rounded-[36px] overflow-hidden shadow-2xl border border-[#E9DAC5] bg-[#F7EFE5]">
            <Image
              src="/images/heritage.png"
              alt="Kamalavasinii Heritage Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient Overlay for visual warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Badge: 25+ Years of Craftsmanship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-[24px] p-5 sm:p-6 shadow-[0_15px_35px_-10px_rgba(90,20,34,0.18)] border border-[#E9DAC5] max-w-[210px] z-10"
          >
            <span className="font-serif text-3xl sm:text-4xl font-bold gold-text block leading-none">
              25+
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#5A3A3F] font-serif font-medium mt-2 block leading-snug">
              Years of Craftsmanship
            </span>
          </motion.div>
        </div>

        {/* Right Column: Story & Statistics */}
        <div className="lg:pl-6 mt-6 lg:mt-0">
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.35em] text-[11px] font-medium">
              Our Story
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl maroon-text leading-tight">
            Every Piece <span className="italic gold-text">Tells A Story</span>
          </h2>

          <p className="mt-8 text-[#5A3A3F] leading-8 text-base md:text-lg">
            Kamalavasinii celebrates India's timeless traditions through handcrafted
            jewellery, authentic silk sarees, certified gemstones and bespoke creations
            designed to become treasured family heirlooms.
          </p>

          <p className="mt-6 text-[#5A3A3F] leading-8 text-base">
            Every design is inspired by heritage while embracing modern elegance,
            ensuring each customer receives something uniquely personal and beautifully crafted.
          </p>

          {/* Key Statistics Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#E8D8C2] pt-8">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl gold-text font-semibold">
                500+
              </h3>
              <p className="mt-1 text-sm text-[#5A3A3F] font-medium">
                Luxury Designs
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl gold-text font-semibold">
                100%
              </h3>
              <p className="mt-1 text-sm text-[#5A3A3F] font-medium">
                Authentic Materials
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl gold-text font-semibold">
                25+
              </h3>
              <p className="mt-1 text-sm text-[#5A3A3F] font-medium">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl gold-text font-semibold">
                10K+
              </h3>
              <p className="mt-1 text-sm text-[#5A3A3F] font-medium">
                Happy Families
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
