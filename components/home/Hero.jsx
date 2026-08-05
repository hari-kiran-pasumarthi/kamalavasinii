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
  const [sareeError, setSareeError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatSoft = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full bg-[#FDF7EF] text-[#5B341E] overflow-hidden pt-4 pb-8">
      {/* -------------------------------------------------------------
          EDITORIAL BACKGROUND & SOFT WATERCOLOR WASHES
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

      {/* Radial Gold Wash Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-radial from-[#E6C15A]/14 via-[#F7E8D0]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 right-12 w-[420px] h-[420px] bg-[#F7E1D2]/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#E8F0E9]/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Golden Flying Birds Vector (Top Right Center) */}
      <div className="absolute top-10 right-[28%] pointer-events-none z-10 hidden lg:block opacity-50">
        <motion.svg
          animate={{ x: [0, 10, 0], y: [0, -4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-2 items-end min-h-[500px] lg:min-h-[540px] pb-4">
          
          {/* =========================================================
              LEFT COLUMN: SOUTH INDIAN BRIDE INSIDE ARCH
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-end justify-center min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] order-2 lg:order-1">
            {/* Soft Glow behind Arch & Bride */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#F7E8D0]/70 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Jharokha / Temple Arch Line Art */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none -z-10 opacity-30">
              <svg className="w-[320px] sm:w-[380px] lg:w-[410px] h-[450px] sm:h-[490px] lg:h-[520px] text-[#C3935B]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M20 280 V100 C20 40, 100 20, 100 20 C100 20, 180 40, 180 100 V280" />
                <path d="M32 280 V105 C32 48, 100 30, 100 30 C100 30, 168 48, 168 105 V280" />
                <circle cx="100" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Botanical Leaf Accent (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-24 h-32 pointer-events-none opacity-45 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M20 110 Q 40 70, 20 20 M20 70 Q 0 50, -10 60 M20 50 Q 50 30, 40 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* South Indian Bride Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[430px] h-[410px] sm:h-[470px] lg:h-[510px] flex items-end justify-center z-10"
            >
              <Image
                src="/images/hero/hero-woman.png"
                alt="South Indian Bride in Silk Saree holding Lotus"
                fill
                priority
                className="object-contain object-bottom mix-blend-multiply"
                sizes="(max-width:1024px) 100vw, 33vw"
              />
            </motion.div>
          </div>

          {/* =========================================================
              CENTER COLUMN: BRAND IDENTITY & TYPOGRAPHY
          ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 flex flex-col items-center justify-center text-center px-2 sm:px-4 z-20 order-1 lg:order-2 space-y-3 lg:space-y-4 my-auto pb-4"
          >
            {/* Extra-Large Grand Brand Logo */}
            <motion.div variants={fadeInUp} className="relative w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] flex items-center justify-center -my-6 sm:-my-8 lg:-my-12">
              {!logoError ? (
                <Image
                  src="/images/logo.png"
                  alt="Kamalavasinii Swarna & Silks Logo"
                  fill
                  priority
                  onError={() => setLogoError(true)}
                  className="object-contain drop-shadow-sm"
                />
              ) : (
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C3935B]">
                  <path d="M50 15 C60 35, 80 45, 90 60 C75 75, 55 80, 50 90 C45 80, 25 75, 10 60 C20 45, 40 35, 50 15 Z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="55" r="8" fill="#C3935B" />
                </svg>
              )}
            </motion.div>

            {/* Tagline "Where Heritage Becomes Luxury" */}
            <motion.p
              variants={fadeInUp}
              className="font-serif text-base sm:text-lg lg:text-xl text-[#5B341E] italic font-normal tracking-wide"
            >
              Where Heritage Becomes Luxury
            </motion.p>

            {/* Lotus Line Divider */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 my-0.5">
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/40" />
              <svg className="w-4 h-4 text-[#C3935B] fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M12 3 C10 7, 6 9, 2 12 C6 15, 10 17, 12 21 C14 17, 18 15, 22 12 C18 9, 14 7, 12 3 Z" />
              </svg>
              <div className="h-px w-10 sm:w-14 bg-[#C3935B]/40" />
            </motion.div>

            {/* Description Paragraph */}
            <motion.div variants={fadeInUp} className="space-y-1 max-w-md text-[#5B341E]/85">
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light">
                Exclusive Customised Jewellery in Gold, Silver, Clay, Wood, Brass & Bronze.
              </p>
              <p className="font-serif text-xs sm:text-sm leading-relaxed font-light opacity-90">
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
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#D9757A] hover:bg-[#C86368] text-white font-serif text-xs uppercase tracking-[0.18em] font-normal shadow-md shadow-[#D9757A]/20 transition-all duration-300"
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

            {/* Pagination Dots */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9757A]" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
              <span className="w-2 h-2 rounded-full bg-[#C3935B]/35" />
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: SAREES, JEWELLERY & GEMSTONES COMPOSITION
          ========================================================= */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] order-3">
            {/* Green Leaves Sprouting Top Right */}
            <div className="absolute top-2 right-4 w-28 h-32 pointer-events-none opacity-60 z-0">
              <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-[#4A6B53]">
                <path d="M70 15 Q 50 50, 75 110 M75 35 Q 45 15, 35 25 M75 55 Q 95 35, 105 45 M75 75 Q 35 65, 45 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Right Product Cluster */}
            <motion.div
              variants={floatSoft}
              animate="animate"
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none h-[380px] sm:h-[430px] lg:h-[470px] flex items-center justify-center"
            >
              
              {/* Main Saree Stack & Temple Jewellery Image */}
              <div className="relative w-[300px] sm:w-[350px] lg:w-[380px] h-[260px] sm:h-[300px] lg:h-[320px] z-10 drop-shadow-[0_18px_25px_rgba(0,0,0,0.14)]">
                {!sareeError ? (
                  <Image
                    src="/images/hero/hero-sarees.png"
                    alt="Silk Sarees & Temple Jewellery Collection"
                    fill
                    onError={() => setSareeError(true)}
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#FBF3EB] rounded-2xl p-4 border border-[#C3935B]/30">
                    <p className="font-serif text-xs text-[#5B341E]">Silk Sarees & Temple Jewellery</p>
                  </div>
                )}
              </div>

              {/* Gold Bangle Accent Vector (Bottom Right) */}
              <div className="absolute bottom-4 right-2 sm:right-6 w-24 sm:w-28 lg:w-32 h-20 sm:h-24 lg:h-28 z-25 drop-shadow-lg">
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                  <ellipse cx="50" cy="45" rx="40" ry="22" fill="#E6C15A" opacity="0.9" stroke="#C3935B" strokeWidth="2" />
                  <ellipse cx="50" cy="45" rx="32" ry="16" fill="#FDF7EF" />
                  <circle cx="50" cy="23" r="9" fill="#E6C15A" />
                  <circle cx="50" cy="23" r="5" fill="#D9757A" />
                  <circle cx="28" cy="30" r="6" fill="#E6C15A" />
                  <circle cx="72" cy="30" r="6" fill="#E6C15A" />
                </svg>
              </div>

              {/* Colorful Gemstones Vector Accent (Bottom Center/Left) */}
              <div className="absolute bottom-6 left-[32%] w-20 sm:w-24 h-12 sm:h-14 z-30 drop-shadow-md">
                <svg viewBox="0 0 100 40" fill="none" className="w-full h-full">
                  <polygon points="20,20 32,8 44,20 32,32" fill="#2E8B57" />
                  <polygon points="50,25 62,12 74,25 62,38" fill="#D9757A" />
                  <polygon points="80,18 90,8 100,18 90,28" fill="#4169E1" />
                </svg>
              </div>

              {/* Water-colored Pink Lotus Accent (Bottom Right of Sarees) */}
              <div className="absolute bottom-16 right-0 w-12 h-12 z-30 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
                  <path d="M50 15 C62 35, 82 45, 92 60 C77 75, 57 80, 50 90 C43 80, 23 75, 8 60 C18 45, 38 35, 50 15 Z" fill="#F4A6AC" opacity="0.9" />
                  <path d="M50 25 C58 40, 72 48, 80 60 C68 72, 54 75, 50 82 C46 75, 32 72, 20 60 C28 48, 42 40, 50 25 Z" fill="#D9757A" />
                </svg>
              </div>

            </motion.div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            CATEGORY CARDS ROW (MATCHING REFERENCE IMAGE)
        ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full pt-6 lg:pt-8 border-t border-[#C3935B]/20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={cat.href} className="group">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`${cat.bgColor} rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-between min-h-[150px] sm:min-h-[165px] shadow-sm hover:shadow-md transition-all duration-300 border border-black/5`}
                >
                  {/* Category Graphic */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center relative my-auto">
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
                    <h3 className="font-serif text-xs sm:text-sm text-[#5B341E] font-medium tracking-wide uppercase leading-tight line-clamp-1">
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
