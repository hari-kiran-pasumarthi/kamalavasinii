"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#FDF7EF]">

      {/* Background */}

      <Image
        src="/images/hero/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Gold Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF7EF] via-[#FDF7EF]/90 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-12 flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <Image
              src="/images/logo.png"
              alt="Kamalavasinii"
              width={180}
              height={180}
              priority
            />

            <p className="uppercase tracking-[0.45em] text-[#B8860B] mt-8 text-sm">

              SWARNA • SILKS • GEMSTONES

            </p>

            <h1 className="font-serif text-6xl lg:text-8xl leading-none text-[#5A1422] mt-6">

              Timeless

              <span className="block italic bg-gradient-to-r from-[#B8860B] to-[#F0D27A] bg-clip-text text-transparent">

                Luxury

              </span>

            </h1>

            <p className="mt-10 text-lg leading-9 text-[#6C5A4D] max-w-xl">

              Discover handcrafted jewellery,
              authentic South Indian silk sarees,
              precious gemstones and bespoke creations
              designed to celebrate every milestone of life.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/jewellery"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D6AF36] text-white font-medium flex items-center gap-2 shadow-xl hover:scale-105 transition"
              >

                Explore Jewellery

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-[#B8860B] text-[#6B1E28] hover:bg-[#B8860B] hover:text-white transition"
              >

                Book Consultation

              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Gold Glow */}

            <div className="absolute w-[520px] h-[520px] rounded-full bg-[#E6C15A]/20 blur-[120px]" />

            <Image
              src="/images/hero/hero-model.webp"
              alt="Luxury Jewellery"
              width={650}
              height={900}
              priority
              className="relative z-10 object-contain"
            />

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >

        <div className="w-[2px] h-16 bg-[#B8860B]" />

      </motion.div>

    </section>
  );
}
