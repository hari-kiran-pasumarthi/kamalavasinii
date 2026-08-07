"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Hero Section with Centered & Large Scaled Logo
============================================================ */

function StoriesHero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-24 lg:py-32 px-4 md:px-8 lg:px-10">
      {/* Background Watermark Motifs */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif
          className="absolute -left-16 top-10 w-[280px] h-[280px]"
          opacity={0.06}
        />
        <LotusMotif
          className="absolute right-[-40px] top-20 w-[240px] h-[240px]"
          opacity={0.06}
        />
      </div>

      <div className="max-w-[1100px] mx-auto text-center relative z-[2]">
        
        {/* LOGO: Centered and Increased in Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-8 w-full"
        >
          <div className="transform scale-125 sm:scale-150 transition-transform duration-300">
            <LotusLogo size={130} />
          </div>
        </motion.div>

        {/* Tagline Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-[#B8860B] mb-4"
        >
          <span className="h-px w-12 bg-[#B8860B]/70" />
          <span className="tracking-[0.4em] text-[11px] sm:text-[12px] font-sans uppercase font-medium">
            Editorial Journal
          </span>
          <span className="h-px w-12 bg-[#B8860B]/70" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[38px] sm:text-[54px] lg:text-[68px] font-semibold maroon-text leading-[1.05]"
        >
          Every Jewel <span className="italic gold-text">Has A Story</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 font-sans text-[16px] sm:text-[18px] text-[#5A3A3F] max-w-2xl mx-auto leading-relaxed"
        >
          Discover stories of love, craftsmanship, heritage and timeless moments
          that make every Kamalavasinii creation truly unforgettable.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#journal"
            className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-block text-center w-full sm:w-auto"
          >
            EXPLORE STORIES
          </a>
          <a
            href="#journal"
            className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-block text-center w-full sm:w-auto"
          >
            READ JOURNAL
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================
   Journal Stories Section
============================================================ */

function JournalSection() {
  const stories = [
    {
      title: "The Art of Temple Jewellery",
      category: "Heritage & Craft",
      desc: "An in-depth look at how ancient Chola temple architecture inspires our signature gold carvings.",
      date: "May 2024",
    },
    {
      title: "Woven Dreams of Kanchipuram",
      category: "Silk Traditions",
      desc: "Behind the looms of master weavers who spend weeks creating pure zari mulberry silks.",
      date: "April 2024",
    },
    {
      title: "A Heirloom Reborn",
      category: "Bespoke Journey",
      desc: "How a family's 80-year-old ruby necklace was lovingly redesigned for a modern bridal ceremony.",
      date: "March 2024",
    },
  ];

  return (
    <section id="journal" className="py-24 cream-bg paper-texture px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Our Journal
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl maroon-text">
            Stories Beyond <span className="italic gold-text">Jewellery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#FFF9F2] rounded-[28px] p-8 border border-[#EFE1CC] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="text-[11px] uppercase tracking-widest text-[#B8860B] font-medium block mb-2">
                {item.category} · {item.date}
              </span>
              <h3 className="font-serif text-2xl maroon-text font-semibold mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#5A3A3F] text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <a
                href="/contact"
                className="text-xs uppercase tracking-widest text-[#B83453] font-semibold hover:text-[#5A1422] transition-colors"
              >
                Read Full Story →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Page Component
============================================================ */

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/stories" />
      <StoriesHero />
      <JournalSection />
      <SiteFooter />
    </main>
  );
}
