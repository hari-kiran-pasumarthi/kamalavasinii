"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

function Hero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <LotusMotif className="absolute left-[-60px] top-10 w-[280px]" opacity={0.07} />
        <LotusMotif className="absolute right-[-40px] top-20 w-[240px]" opacity={0.07} />
      </div>

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        
        {/* HERO LOGO: Scaled Up 3x (Size 260) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-8 w-full"
        >
          <LotusLogo size={260} />
        </motion.div>

        <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
          <span className="h-px w-12 bg-[#B8860B]" />
          <span className="tracking-[0.4em] uppercase text-[11px] font-medium">
            Our Heritage
          </span>
          <span className="h-px w-12 bg-[#B8860B]" />
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
            className="btn-primary-gradient px-9 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center font-medium"
          >
            EXPLORE HERITAGE
          </a>

          <Link
            href="/contact"
            className="btn-outline-gold px-9 py-4 rounded-full tracking-[0.2em] text-[12px] inline-block text-center font-medium"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}

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
          
          {/* CTA LOGO: Scaled Up (Size 220) */}
          <div className="flex justify-center items-center mb-6">
            <LotusLogo size={220} />
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/heritage" />
      <Hero />
      <HeritageCTA />
      <SiteFooter />
    </main>
  );
}
