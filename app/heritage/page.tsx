"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Shared Gold Gradient
============================================================ */

const GoldDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`heritage-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#F6D78C" />
      <stop offset="50%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

/* ============================================================
   Heritage Illustrations
============================================================ */

const TempleIllustration = ({ id }: { id: string }) => (
  <svg viewBox="0 0 220 200" className="w-full h-full" aria-hidden>
    <GoldDefs id={id} />
    <ellipse cx="110" cy="185" rx="75" ry="10" fill="#EBD6C6" opacity=".55" />
    <g
      fill="none"
      stroke={`url(#heritage-gold-${id})`}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M40 165 H180" />
      <path d="M60 165 V80" />
      <path d="M160 165 V80" />
      <path d="M75 165 V95" />
      <path d="M145 165 V95" />
      <path d="M50 80 H170" />
      <path d="M40 60 L110 20 L180 60 Z" />
      <path d="M110 20 V5" />
      <circle cx="110" cy="5" r="2.5" fill="#C8A048" stroke="none" />
      <path d="M98 165 V115 H122 V165" />
    </g>
    {[
      [32, 28],
      [192, 35],
      [20, 150],
      [198, 158],
    ].map(([x, y], i) => (
      <path
        key={i}
        d={`M${x} ${y} l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z`}
        fill="#C8A048"
      />
    ))}
  </svg>
);

const PalaceIllustration = ({ id }: { id: string }) => (
  <svg viewBox="0 0 220 200" className="w-full h-full" aria-hidden>
    <GoldDefs id={id} />
    <ellipse cx="110" cy="182" rx="70" ry="10" fill="#EBD6C6" opacity=".55" />
    <g fill="none" stroke={`url(#heritage-gold-${id})`} strokeWidth="2">
      <rect x="55" y="60" width="110" height="105" rx="3" />
      <path d="M70 60 L70 165" />
      <path d="M150 60 L150 165" />
      <path d="M55 95 H165" />
      <path d="M82 95 V60" />
      <path d="M110 95 V60" />
      <path d="M138 95 V60" />
      <path d="M55 60 Q110 10 165 60" />
      <path d="M96 165 V122 H124 V165" />
      <circle cx="110" cy="42" r="5" />
    </g>
  </svg>
);

/* ============================================================
   Hero Section
============================================================ */

function Hero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <LotusMotif className="absolute left-[-60px] top-10 w-[280px]" opacity={0.07} />
        <LotusMotif className="absolute right-[-40px] top-20 w-[240px]" opacity={0.07} />
      </div>

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <LotusLogo size={90} />
        </motion.div>

        <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
          <span className="h-px w-10 bg-[#B8860B]" />
          <span className="tracking-[0.4em] uppercase text-[11px] font-medium">
            Our Heritage
          </span>
          <span className="h-px w-10 bg-[#B8860B]" />
        </div>

        <h1 className="mt-4 font-serif text-[44px] md:text-[70px] font-semibold maroon-text leading-none">
          A Legacy Of <span className="italic gold-text">Craftsmanship</span>
        </h1>

        <p className="mt-7 max-w-2xl mx-auto font-sans text-[16px] text-[#5a3a3f] leading-relaxed">
          Every Kamalavasinii creation is inspired by India's timeless heritage,
          where temple architecture, royal artistry and generations of craftsmanship
          come together to create jewellery with enduring meaning.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#story"
            className="btn-primary-gradient px-9 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center"
          >
            EXPLORE HERITAGE
          </a>

          <Link
            href="/contact"
            className="btn-outline-gold px-9 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Story Section
============================================================ */

function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 cream-bg paper-texture px-4 md:px-8 lg:px-10 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Badge */}
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

          {/* Action Buttons Section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D8B24B] text-white font-medium shadow-xl hover:scale-105 transition-all text-center"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>

            <a
              href="#heritage-collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#B8860B] text-[#5A1422] hover:bg-[#B8860B] hover:text-white transition-all font-medium text-center"
            >
              Discover Our Story
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ============================================================
   Heritage Collections
============================================================ */

const HERITAGE_COLLECTIONS = [
  {
    title: "Temple Traditions",
    desc: "Inspired by centuries-old temple architecture, sacred carvings and divine ornamentation.",
    bg: "card-rose",
    icon: "temple",
  },
  {
    title: "Royal Legacy",
    desc: "Designs influenced by the grandeur of Indian royal families and palace treasures.",
    bg: "card-ivory",
    icon: "palace",
  },
  {
    title: "Ancient Motifs",
    desc: "Lotus blooms, peacocks, vines and sacred geometry translated into timeless elegance.",
    bg: "card-mint",
    icon: "temple",
  },
  {
    title: "Traditional Craft",
    desc: "Every piece celebrates techniques perfected across generations of master artisans.",
    bg: "card-peach",
    icon: "palace",
  },
  {
    title: "Cultural Symbols",
    desc: "Jewellery that preserves India's artistic language through meaningful craftsmanship.",
    bg: "card-sage",
    icon: "temple",
  },
  {
    title: "Family Heirlooms",
    desc: "Designed not only for today—but to become treasured possessions for generations.",
    bg: "card-blush",
    icon: "palace",
  },
];

function HeritageCollections() {
  return (
    <section id="heritage-collections" className="cream-bg py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="tracking-[0.4em] uppercase text-[11px] font-medium">
              Inspirations
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>
          <h2 className="font-serif text-[46px] maroon-text">
            Our Heritage <span className="italic gold-text">Inspirations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HERITAGE_COLLECTIONS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className={`${item.bg} category-card rounded-[28px] p-8 text-center shadow-[0_10px_30px_-15px_rgba(107,30,40,0.15)]`}
            >
              <div className="w-full max-w-[180px] mx-auto mb-5">
                {item.icon === "temple" ? (
                  <TempleIllustration id={item.title} />
                ) : (
                  <PalaceIllustration id={item.title} />
                )}
              </div>

              <h3 className="font-serif text-[22px] font-semibold maroon-text">
                {item.title}
              </h3>

              <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#5a3a3f]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Legacy Timeline
============================================================ */

const LEGACY_TIMELINE = [
  {
    year: "1200s",
    title: "Temple Inspiration",
    desc: "The earliest influence comes from sacred temple sculptures, intricate carvings, and divine symbolism."
  },
  {
    year: "1500s",
    title: "Royal Patronage",
    desc: "Indian kingdoms elevated jewellery into symbols of prestige, craftsmanship, and artistic excellence."
  },
  {
    year: "1800s",
    title: "Master Artisans",
    desc: "Families dedicated generations to perfecting hand engraving, filigree, repoussé, and stone setting."
  },
  {
    year: "Today",
    title: "Modern Heritage",
    desc: "Traditional craftsmanship meets contemporary elegance while preserving timeless cultural identity."
  }
];

function LegacyTimeline() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-10 paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">Legacy</span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[42px] md:text-[52px] maroon-text">
            Centuries Of <span className="italic gold-text">Craftsmanship</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto font-sans text-[#5a3a3f] leading-relaxed">
            Every Kamalavasinii creation reflects generations of artistry,
            preserving India's cultural richness while embracing modern refinement.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">
            {LEGACY_TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] mx-auto flex items-center justify-center border border-[#C8A048] shadow-lg">
                  <span className="font-serif text-[#8B6A1E] font-semibold">
                    {item.year}
                  </span>
                </div>

                <div className="mt-8 rounded-[24px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 shadow-md">
                  <h3 className="font-serif text-[22px] maroon-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5a3a3f]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Heritage Consultation CTA
============================================================ */

function HeritageCTA() {
  return (
    <section id="consult" className="relative py-24 px-4 md:px-8 lg:px-10 overflow-hidden" style={{ background: "#FDF7EF" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-2xl px-8 md:px-16 py-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <LotusLogo size={60} />
          </div>

          <div className="inline-flex items-center gap-3 text-[#B8860B]">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px] font-medium">
              Heritage Consultation
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="mt-6 font-serif text-[42px] md:text-[52px] maroon-text">
            Celebrate Your <span className="italic gold-text">Heritage</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5a3a3f] leading-relaxed">
            Discover jewellery inspired by India's timeless traditions,
            thoughtfully crafted to become part of your own family legacy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/contact"
              className="btn-primary-gradient px-10 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center font-medium"
            >
              BOOK CONSULTATION
            </Link>

            <a
              href="#heritage-collections"
              className="btn-outline-gold px-10 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center font-medium"
            >
              EXPLORE COLLECTIONS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   Final Page Component
============================================================ */

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/heritage" />
      <Hero />
      <StorySection />
      <HeritageCollections />
      <LegacyTimeline />
      <HeritageCTA />
      <SiteFooter />
    </main>
  );
}
