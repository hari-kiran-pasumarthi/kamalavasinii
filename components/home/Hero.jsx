"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    title: "SWARNA JEWELLERY",
    href: "/swarna",
    bgColor: "bg-[#FBF3EB]",
    type: "swarna",
  },
  {
    title: "SILKS SAREES",
    href: "/silks",
    bgColor: "bg-[#EFF5F0]",
    type: "silks",
  },
  {
    title: "GEMSTONES RATNA MANDIRA",
    href: "/gemstones",
    bgColor: "bg-[#F5F0F8]",
    type: "gemstones",
  },
  {
    title: "CLAY JEWELLERY",
    href: "/clay",
    bgColor: "bg-[#FBF3EB]",
    type: "clay",
  },
  {
    title: "COUTURE COSTUMES",
    href: "/couture",
    bgColor: "bg-[#F0F5F3]",
    type: "couture",
  },
  {
    title: "HERITAGE OUR LEGACY",
    href: "/heritage",
    bgColor: "bg-[#FBF3EB]",
    type: "heritage",
  },
];

export default function Hero() {
  const [logoError, setLogoError] = useState(false);
  const [bgError, setBgError] = useState(false);
  const [necklaceError, setNecklaceError] = useState(false);
  const [earringsError, setEarringsError] = useState(false);
  const [gemstonesError, setGemstonesError] = useState(false);

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatSoft = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatReverse = {
    animate: {
      y: [0, 6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full bg-[#FDF7EF] text-[#5B341E] overflow-hidden pt-2 pb-10">
      {/* -------------------------------------------------------------
          BACKGROUND & WATERCOLOR WASHES (NO BROKEN IMAGE BOXES)
      ------------------------------------------------------------- */}
      {!bgError && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/hero/hero-bg.webp"
            alt=""
            fill
            priority
            onError={() => setBgError(true)}
            className="object-cover opacity-15 mix-blend-multiply"
          />
        </div>
      )}

      {/* Soft Ambient Radial Wash Effects (Matching Reference Background) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-radial from-[#E6C15A]/14 via-[#FBF0DB]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#F7E1D2]/35 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#E8F0E9]/35 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Golden Flying Birds Vector (Top Right Center) */}
      <div className="absolute top-12 right-[28%] pointer-events-none z-10 hidden lg:block opacity-50">
        <motion.svg
          animate={{ x: [0, 10, 0], y: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-8 text-[#C3935B] fill-current"
          viewBox="0 0 100 40"
        >
          <path d="M0 20 Q 25 5, 50 20 Q 75 5, 100 20 Q 75 10, 50 25 Q 25 10, 0 20 Z" />
          <path d="M40 10 Q 55 0, 70 10 Q 85 0, 100 10 Q 85 5, 70 15 Q 55 5, 40 10 Z" transform="scale(0.65) translate(35, -5)" />
        </motion.svg>
      </div>

      {/* -------------------------------------------------------------
          MAIN 3-COLUMN HERO CONTENT
      ------------------------------------------------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-center min-h-[68vh] py-2">
          
          {/* =========================================================
              LEFT COLUMN: SOUTH INDIAN BRIDE PORTRAIT (SEAMLESS BLEND)
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-end justify-center lg:justify-start order-2 lg:order-1 min-h-[400px] sm:min-h-[480px] lg:min-h-[560px]">
            {/* Jharokha / Temple Arch Vector Outline */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none -z-10 opacity-30">
              <svg className="w-[320px] sm:w-[380px] h-[460px] text-[#C3935B]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M20 280 V100 C20 40, 100 20, 100 20 C100 20, 180 40, 180 100 V280" />
                <path d="M32 280 V105 C32 48, 100 30, 100 30 C100 30, 168 48, 168 105 V280" />
                <circle cx="100" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Botanical Plant Leaves Accent (Bottom Left) */}
            <div className="absolute bottom-2 left-0 w-24 h-32 pointer-events-none opacity-45 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M20 110 Q 40 70, 20 20 M20 70 Q 0 50, -10 60 M20 50 Q 50 30, 40 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* South Indian Woman Image (mix-blend-multiply eliminates any card rectangle!) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] lg:max-w-none h-[420px] sm:h-[500px] lg:h-[580px] flex items-end justify-center lg:-ml-6 z-10"
            >
              <Image
                src="/images/hero/hero-woman.png"
                alt="South Indian Bride in Silk Saree holding Lotus"
                fill
                priority
                className="object-contain object-bottom mix-blend-multiply drop-shadow-[0_15px_25px_rgba(91,52,30,0.12)]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </motion.div>
          </div>

          {/* =========================================================
              CENTER COLUMN: BRAND LOGO, TYPOGRAPHY & BUTTONS
          ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 flex flex-col items-center justify-center text-center px-2 sm:px-4 z-20 order-1 lg:order-2 space-y-3 sm:space-y-3.5"
          >
            {/* Lotus Line Art Emblem */}
            <motion.div variants={fadeInUp} className="relative w-14 h-14 sm:w-16 sm:h-16 mb-0.5 flex items-center justify-center">
              {!logoError ? (
                <Image
                  src="/images/logo.png"
                  alt="Kamalavasinii Logo"
                  fill
                  priority
                  onError={() => setLogoError(true)}
                  className="object-contain"
                />
              ) : (
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                  <path d="M50 15 C60 35, 80 45, 90 60 C75 75, 55 80, 50 90 C45 80, 25 75, 10 60 C20 45, 40 35, 50 15 Z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="55" r="8" fill="#C3935B" />
                </svg>
              )}
            </motion.div>

            {/* Main Brand Title */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.24em] text-[#5B242A] uppercase leading-none">
                KAMALAVASINII
              </h1>
              
              {/* Swarna & Silks Subtitle with Flanked Ornaments */}
              <div className="flex items-center justify-center gap-2 pt-1 text-[#C3935B]">
                <span className="text-xs">~</span>
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
                  SWARNA & SILKS
                </span>
                <span className="text-xs">~</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="font-serif text-base sm:text-lg text-[#5B341E] italic font-normal"
            >
              Where Heritage Becomes Luxury
            </motion.p>

            {/* Golden Diamond Line Divider */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 my-0.5">
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#C3935B]" />
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/40" />
            </motion.div>

            {/* Description Paragraph */}
            <motion.div variants={fadeInUp} className="space-y-1 max-w-md text-[#5B341E]/85">
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light">
                Exclusive Customised Jewellery in Gold, Silver, Clay, Wood, Brass & Bronze.
              </p>
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light">
                All Types of GI Tagged Sarees of South India and Exquisite Gemstones.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
            >
              <Link href="/swarna" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#D9757A] hover:bg-[#C86368] text-white font-serif text-xs uppercase tracking-[0.18em] font-normal shadow-md shadow-[#D9757A]/25 transition-all duration-300"
                >
                  EXPLORE SWARNA
                </motion.button>
              </Link>

              <Link href="/silks" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#C3935B] text-[#5B341E] hover:bg-[#FBF3EB] font-serif text-xs uppercase tracking-[0.18em] font-normal transition-all duration-300"
                >
                  DISCOVER SILKS
                </motion.button>
              </Link>
            </motion.div>

            {/* Pagination Dots (Matching Reference) */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9757A]" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: SAREES, JEWELLERY & GEMSTONES COMPOSITION
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[400px] sm:min-h-[460px] lg:min-h-[540px] order-3">
            {/* Botanical Leaf Top Right Background */}
            <div className="absolute top-0 right-2 w-24 h-30 pointer-events-none opacity-40 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M80 10 Q 60 50, 80 110 M80 30 Q 50 10, 40 20 M80 50 Q 100 30, 110 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Surrounding Products Cluster Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none h-[400px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
              
              {/* 1. Saree Stack (Centerpiece Base) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute top-6 right-0 sm:right-2 w-[270px] sm:w-[320px] lg:w-[340px] h-[230px] sm:h-[270px] lg:h-[290px] z-10 drop-shadow-[0_18px_25px_rgba(0,0,0,0.14)]"
              >
                <Image
                  src="/images/hero/hero-sarees.png"
                  alt="Stacked Silk Sarees"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </motion.div>

              {/* 2. Gold Temple Necklace (Overlaid Over Sarees) */}
              <motion.div
                variants={floatReverse}
                animate="animate"
                className="absolute top-20 left-0 sm:left-2 w-[180px] sm:w-[220px] lg:w-[240px] h-[170px] sm:h-[200px] lg:h-[220px] z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
              >
                {!necklaceError ? (
                  <Image
                    src="/images/hero/necklace.png"
                    alt="Temple Gold Necklace"
                    fill
                    onError={() => setNecklaceError(true)}
                    className="object-contain"
                    sizes="(max-width: 1024px) 80vw, 25vw"
                  />
                ) : (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#E6C15A]">
                    <path d="M20 30 Q 50 80, 80 30" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="65" r="8" fill="#D9757A" />
                  </svg>
                )}
              </motion.div>

              {/* 3. Temple Earrings (Next to Necklace) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute bottom-20 left-[48%] w-18 sm:w-22 lg:w-24 h-18 sm:h-22 lg:h-24 z-30 drop-shadow-md"
              >
                {!earringsError ? (
                  <Image
                    src="/images/hero/earrings.png"
                    alt="Temple Gold Jhumka Earrings"
                    fill
                    onError={() => setEarringsError(true)}
                    className="object-contain"
                  />
                ) : (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#E6C15A]">
                    <circle cx="50" cy="30" r="12" fill="currentColor" />
                    <path d="M35 45 L65 45 L50 75 Z" fill="#C3935B" />
                  </svg>
                )}
              </motion.div>

              {/* 4. Gemstones (Bottom Center) */}
              <motion.div
                variants={floatReverse}
                animate="animate"
                className="absolute bottom-6 left-[38%] w-20 sm:w-26 lg:w-28 h-14 sm:h-18 lg:h-20 z-30 drop-shadow-md"
              >
                {!gemstonesError ? (
                  <Image
                    src="/images/hero/gemstones.png"
                    alt="Precious Gemstones"
                    fill
                    onError={() => setGemstonesError(true)}
                    className="object-contain"
                  />
                ) : (
                  <svg viewBox="0 0 100 60" fill="none" className="w-full h-full">
                    <polygon points="20,30 35,15 50,30 35,50" fill="#2E8B57" />
                    <polygon points="50,45 65,30 80,45 65,60" fill="#D9757A" />
                  </svg>
                )}
              </motion.div>

              {/* 5. Gold Floral Bangle Vector (Bottom Right) */}
              <motion.div
                animate={{ rotate: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-2 sm:right-6 w-24 sm:w-28 lg:w-32 h-20 sm:h-24 lg:h-28 z-25 drop-shadow-lg"
              >
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                  <ellipse cx="50" cy="45" rx="40" ry="22" fill="#E6C15A" opacity="0.9" stroke="#C3935B" strokeWidth="2" />
                  <ellipse cx="50" cy="45" rx="32" ry="16" fill="#FDF7EF" />
                  <circle cx="50" cy="23" r="9" fill="#E6C15A" />
                  <circle cx="50" cy="23" r="5" fill="#D9757A" />
                  <circle cx="28" cy="30" r="6" fill="#E6C15A" />
                  <circle cx="72" cy="30" r="6" fill="#E6C15A" />
                </svg>
              </motion.div>

              {/* 6. Pink Lotus Flower Vector Accent (Bottom Right of Sarees) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute bottom-16 right-0 w-12 h-12 z-30 pointer-events-none"
              >
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M50 15 C62 35, 82 45, 92 60 C77 75, 57 80, 50 90 C43 80, 23 75, 8 60 C18 45, 38 35, 50 15 Z" fill="#F4A6AC" opacity="0.9" />
                  <path d="M50 25 C58 40, 72 48, 80 60 C68 72, 54 75, 50 82 C46 75, 32 72, 20 60 C28 48, 42 40, 50 25 Z" fill="#D9757A" />
                </svg>
              </motion.div>

            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            CATEGORY CARDS SECTION (MATCHING REFERENCE EXACTLY)
        ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full pt-8 lg:pt-10 border-t border-[#C3935B]/20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.href} className="group">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`${cat.bgColor} rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-between min-h-[160px] sm:min-h-[180px] shadow-sm hover:shadow-md transition-all duration-300 border border-black/5`}
                >
                  {/* Category Vector Graphic */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative my-auto">
                    {cat.type === "swarna" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                        <path d="M20 30 Q 50 80, 80 30" stroke="currentColor" strokeWidth="3" fill="none" />
                        <path d="M30 40 Q 50 75, 70 40" stroke="#E6C15A" strokeWidth="2" fill="none" />
                        <circle cx="50" cy="65" r="7" fill="#D9757A" />
                        <circle cx="35" cy="52" r="5" fill="#E6C15A" />
                        <circle cx="65" cy="52" r="5" fill="#E6C15A" />
                      </svg>
                    )}

                    {cat.type === "silks" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M30 20 L70 20 L80 80 L20 80 Z" fill="#D9757A" opacity="0.85" />
                        <path d="M40 20 L80 80 L60 80 L30 20 Z" fill="#E6C15A" opacity="0.9" />
                      </svg>
                    )}

                    {cat.type === "gemstones" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <polygon points="30,40 45,25 60,40 45,65" fill="#2E8B57" />
                        <polygon points="50,60 65,45 80,60 65,80" fill="#D9757A" />
                        <polygon points="20,70 32,58 44,70 32,82" fill="#4169E1" />
                      </svg>
                    )}

                    {cat.type === "clay" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#B85D3B]">
                        <circle cx="35" cy="35" r="9" stroke="currentColor" strokeWidth="2" fill="#E89F71" />
                        <circle cx="35" cy="55" r="13" fill="currentColor" />
                        <circle cx="65" cy="35" r="9" stroke="currentColor" strokeWidth="2" fill="#E89F71" />
                        <circle cx="65" cy="55" r="13" fill="currentColor" />
                      </svg>
                    )}

                    {cat.type === "couture" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M42 20 L58 20 L54 40 L46 40 Z" fill="#4A6B53" />
                        <path d="M46 40 L20 85 L80 85 L54 40 Z" fill="#E89F71" opacity="0.9" />
                      </svg>
                    )}

                    {cat.type === "heritage" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                        <path d="M50 15 L75 40 H25 Z" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="30" y="40" width="40" height="45" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M42 85 V60 H58 V85" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </div>

                  {/* Titles */}
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm text-[#5B341E] font-medium tracking-wide uppercase leading-tight line-clamp-2">
                      {cat.title}
                    </h3>
                    <p className="font-serif text-[11px] sm:text-xs text-[#C3935B] font-light mt-1 flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Explore &rarr;
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
