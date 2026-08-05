"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatSoft = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatReverse = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full bg-[#FDF7EF] text-[#5B341E] overflow-hidden pt-4 pb-12">
      {/* -------------------------------------------------------------
          BACKGROUND TEXTURE & SOFT WATERCOLOR WASHES
      ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/backgrounds/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-20 mix-blend-multiply"
        />
      </div>

      {/* Radial Gold & Soft Warm Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-radial from-[#E6C15A]/14 via-[#F5E6CA]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#F5E1D2]/40 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#E8F0E9]/40 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Botanical Header Accent Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-20 pointer-events-none z-10 opacity-30">
        <Image
          src="/images/decorations/botanical-header.png"
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Floating Golden Flying Birds Vector */}
      <div className="absolute top-16 right-[28%] pointer-events-none z-10 hidden lg:block opacity-60">
        <motion.svg
          animate={{ x: [0, 15, 0], y: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-10 text-[#C3935B]/40 fill-current"
          viewBox="0 0 100 40"
        >
          <path d="M0 20 Q 25 5, 50 20 Q 75 5, 100 20 Q 75 10, 50 25 Q 25 10, 0 20 Z" />
          <path d="M40 10 Q 55 0, 70 10 Q 85 0, 100 10 Q 85 5, 70 15 Q 55 5, 40 10 Z" transform="scale(0.6) translate(30, -10)" />
        </motion.svg>
      </div>

      {/* -------------------------------------------------------------
          MAIN 3-COLUMN HERO CONTENT
      ------------------------------------------------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-center min-h-[72vh] py-4">
          
          {/* =========================================================
              LEFT COLUMN: SOUTH INDIAN BRIDE PORTRAIT & ARCH LINE ART
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-end justify-center lg:justify-start order-2 lg:order-1 min-h-[420px] sm:min-h-[500px] lg:min-h-[580px]">
            {/* Jharokha / Temple Arch Line Art Background */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none -z-10 opacity-25">
              <svg className="w-[340px] sm:w-[420px] h-[480px] text-[#C3935B]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M20 280 V100 C20 40, 100 20, 100 20 C100 20, 180 40, 180 100 V280" />
                <path d="M30 280 V105 C30 50, 100 32, 100 32 C100 32, 170 50, 170 105 V280" />
                <path d="M100 10 Q100 20 100 32" strokeWidth="1.2" />
                <circle cx="100" cy="10" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Botanical Plant Leaves Bottom Left Accent */}
            <div className="absolute bottom-2 left-0 w-28 h-36 pointer-events-none opacity-40 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M20 110 Q 40 70, 20 20 M20 70 Q 0 50, -10 60 M20 50 Q 50 30, 40 10 M20 30 Q -10 10, 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* South Indian Woman Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] lg:max-w-none h-[440px] sm:h-[530px] lg:h-[600px] flex items-end justify-center lg:-ml-6 z-10"
            >
              <Image
                src="/images/hero/hero-woman.png"
                alt="South Indian Bride in Silk Saree and Gold Jewellery holding Lotus"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(91,52,30,0.18)]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </motion.div>

            {/* Floating Petal near Woman */}
            <motion.div
              variants={floatSoft}
              animate="animate"
              className="absolute top-12 left-6 w-10 h-10 pointer-events-none z-20 opacity-80"
            >
              <Image
                src="/images/decorations/lotus-petals.png"
                alt=""
                width={40}
                height={40}
                className="object-contain"
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
            className="lg:col-span-4 flex flex-col items-center justify-center text-center px-2 sm:px-4 z-20 order-1 lg:order-2 space-y-3.5 sm:space-y-4"
          >
            {/* Lotus Line Art Logo */}
            <motion.div variants={fadeInUp} className="relative w-16 h-16 sm:w-20 sm:h-20 mb-0.5">
              <Image
                src="/images/icons/logo.png"
                alt="Kamalavasinii Lotus Emblem"
                fill
                priority
                className="object-contain drop-shadow-sm"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.22em] text-[#5B242A] uppercase leading-none">
                KAMALAVASINII
              </h1>
              
              {/* Swarna & Silks Flanked Tagline */}
              <div className="flex items-center justify-center gap-2 pt-1 text-[#C3935B]">
                <svg className="w-5 h-2 fill-current opacity-70" viewBox="0 0 30 10">
                  <path d="M0 5 Q 15 0, 30 5 Q 15 10, 0 5 Z" />
                </svg>
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
                  SWARNA & SILKS
                </span>
                <svg className="w-5 h-2 fill-current opacity-70" viewBox="0 0 30 10">
                  <path d="M0 5 Q 15 0, 30 5 Q 15 10, 0 5 Z" />
                </svg>
              </div>
            </motion.div>

            {/* Tagline "Where Heritage Becomes Luxury" */}
            <motion.p
              variants={fadeInUp}
              className="font-serif text-base sm:text-lg lg:text-xl text-[#5B341E] italic font-normal"
            >
              Where Heritage Becomes Luxury
            </motion.p>

            {/* Central Lotus Flourish Line */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 my-0.5">
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/50" />
              <svg className="w-5 h-5 text-[#C3935B] fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M12 3 C10 7, 6 9, 2 12 C6 15, 10 17, 12 21 C14 17, 18 15, 22 12 C18 9, 14 7, 12 3 Z" />
              </svg>
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/50" />
            </motion.div>

            {/* Supporting Description */}
            <motion.div variants={fadeInUp} className="space-y-1 max-w-md text-[#5B341E]/85">
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light">
                Exclusive Customised Jewellery in Gold, Silver, Clay, Wood, Brass & Bronze.
              </p>
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light">
                All Types of GI Tagged Sarees of South India and Exquisite Gemstones.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
            >
              <Link href="/swarna" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#D9757A] hover:bg-[#C86368] text-white font-serif text-xs uppercase tracking-[0.18em] font-normal shadow-md shadow-[#D9757A]/25 transition-all duration-300"
                >
                  EXPLORE SWARNA
                </motion.button>
              </Link>

              <Link href="/silks" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#C3935B] text-[#5B341E] hover:bg-[#FBF3EB] font-serif text-xs uppercase tracking-[0.18em] font-normal transition-all duration-300"
                >
                  DISCOVER SILKS
                </motion.button>
              </Link>
            </motion.div>

            {/* Carousel Pagination Dots */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9757A]" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/30" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/30" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/30" />
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: SAREES, JEWELLERY & GEMSTONES COMPOSITION
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] order-3">
            {/* Botanical Leaf Top Right Background */}
            <div className="absolute top-0 right-4 w-28 h-32 pointer-events-none opacity-50 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M80 10 Q 60 50, 80 110 M80 30 Q 50 10, 40 20 M80 50 Q 100 30, 110 40 M80 70 Q 40 60, 50 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Product Composition Cluster */}
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
              
              {/* 1. Saree Stack (Center Right Base) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute top-8 right-0 sm:right-2 w-[270px] sm:w-[320px] lg:w-[350px] h-[240px] sm:h-[280px] lg:h-[300px] z-10 drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src="/images/hero/hero-sarees.png"
                  alt="Folded Silk Sarees Stack - Pink, Green, Gold, Purple"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </motion.div>

              {/* 2. Temple Necklace (Draped Over Front Left of Sarees) */}
              <motion.div
                variants={floatReverse}
                animate="animate"
                className="absolute top-24 left-0 sm:left-2 w-[190px] sm:w-[230px] lg:w-[250px] h-[180px] sm:h-[210px] lg:h-[230px] z-20 drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
              >
                <Image
                  src="/images/jewellery/necklace.png"
                  alt="Temple Gold Necklace"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 80vw, 25vw"
                />
              </motion.div>

              {/* 3. Temple Earrings (Next to Necklace) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute bottom-20 left-[48%] w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 z-30 drop-shadow-md"
              >
                <Image
                  src="/images/jewellery/earrings.png"
                  alt="Temple Gold Jhumka Earrings"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 4. Gemstones Scattered Near Bottom Center */}
              <motion.div
                variants={floatReverse}
                animate="animate"
                className="absolute bottom-6 left-[38%] w-24 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-22 z-30 drop-shadow-md"
              >
                <Image
                  src="/images/gemstones/gemstones.png"
                  alt="Emerald, Ruby and Sapphire Gemstones"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 5. Gold Floral Bangle / Kada (Bottom Right) */}
              <motion.div
                animate={{ rotate: [0, 4, 0], y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-2 sm:right-6 w-24 sm:w-28 lg:w-32 h-20 sm:h-24 lg:h-28 z-25 drop-shadow-lg"
              >
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                  <ellipse cx="50" cy="45" rx="40" ry="22" fill="#E6C15A" opacity="0.9" stroke="#C3935B" strokeWidth="2" />
                  <ellipse cx="50" cy="45" rx="32" ry="16" fill="#FDF7EF" />
                  <circle cx="50" cy="23" r="10" fill="#E6C15A" />
                  <circle cx="50" cy="23" r="6" fill="#D9757A" />
                  <circle cx="28" cy="30" r="7" fill="#E6C15A" />
                  <circle cx="72" cy="30" r="7" fill="#E6C15A" />
                </svg>
              </motion.div>

              {/* 6. Lotus Flower Accent (Bottom Right of Sarees) */}
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="absolute bottom-16 right-0 w-12 h-12 z-30 pointer-events-none"
              >
                <Image
                  src="/images/decorations/lotus-petals.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </motion.div>

            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            CATEGORY CARDS ROW (Matching Reference Design)
        ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full pt-8 lg:pt-10 border-t border-[#C3935B]/20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.href} className="group">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`${cat.bgColor} rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-between min-h-[160px] sm:min-h-[180px] shadow-sm hover:shadow-md transition-all duration-300 border border-black/5`}
                >
                  {/* Category SVG Vector Illustration */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative my-auto">
                    {cat.type === "swarna" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                        <path d="M20 30 Q 50 80, 80 30" stroke="currentColor" strokeWidth="3" fill="none" />
                        <path d="M30 40 Q 50 75, 70 40" stroke="#E6C15A" strokeWidth="2" fill="none" />
                        <circle cx="50" cy="65" r="7" fill="#D9757A" />
                        <circle cx="35" cy="52" r="5" fill="#E6C15A" />
                        <circle cx="65" cy="52" r="5" fill="#E6C15A" />
                        <circle cx="82" cy="28" r="4" fill="#C3935B" />
                      </svg>
                    )}

                    {cat.type === "silks" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M30 20 L70 20 L80 80 L20 80 Z" fill="#D9757A" opacity="0.85" />
                        <path d="M40 20 L80 80 L60 80 L30 20 Z" fill="#E6C15A" opacity="0.9" />
                        <path d="M30 20 Q 50 35, 70 20" stroke="#C3935B" strokeWidth="2" />
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
                        <circle cx="35" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="#E89F71" />
                        <circle cx="35" cy="55" r="14" fill="currentColor" />
                        <circle cx="65" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="#E89F71" />
                        <circle cx="65" cy="55" r="14" fill="currentColor" />
                        <path d="M20 75 Q 50 95, 80 75" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}

                    {cat.type === "couture" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M42 20 L58 20 L54 40 L46 40 Z" fill="#4A6B53" />
                        <path d="M46 40 L20 85 L80 85 L54 40 Z" fill="#E89F71" opacity="0.9" />
                        <path d="M35 85 L50 40 L65 85" stroke="#E6C15A" strokeWidth="2" />
                      </svg>
                    )}

                    {cat.type === "heritage" && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                        <path d="M50 15 L75 40 H25 Z" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="30" y="40" width="40" height="45" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M42 85 V60 H58 V85" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="50" cy="10" r="3" fill="currentColor" />
                      </svg>
                    )}
                  </div>

                  {/* Card Titles & Links */}
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
