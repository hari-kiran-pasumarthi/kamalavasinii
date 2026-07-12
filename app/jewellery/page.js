"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   CATEGORY ILLUSTRATIONS (custom gold line-art SVG icons)
   ============================================================ */
const GOLD_GRAD_ID = (id) => `jw-gold-${id}`;

const GoldDefs = ({ id }) => (
  <defs>
    <linearGradient id={GOLD_GRAD_ID(id)} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#EAC77A" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

const CatTemple = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="temple" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("temple")})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Temple-style necklace with gopuram-like pendant */}
      <path d="M30 40 C70 130 130 130 170 40" strokeWidth="3" />
      <path d="M50 55 C80 115 120 115 150 55" />
      {/* Pendant like a temple */}
      <path d="M100 118 L82 100 L82 88 L92 88 L92 78 L108 78 L108 88 L118 88 L118 100 Z" fill={`url(#${GOLD_GRAD_ID("temple")})`} fillOpacity="0.15" />
      <path d="M100 74 L100 68" />
      <circle cx="100" cy="66" r="2" fill={`url(#${GOLD_GRAD_ID("temple")})`} />
      <circle cx="100" cy="98" r="3" fill="#7B2334" />
      {/* Small danglers */}
      {[76, 90, 100, 110, 124].map((x, i) => (
        <circle key={i} cx={x} cy={130 + Math.abs(i - 2) * 2.5} r="2.4" fill={`url(#${GOLD_GRAD_ID("temple")})`} />
      ))}
    </g>
    {[{x:18,y:22},{x:180,y:22},{x:25,y:140}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`} fill="#C8A048" opacity="0.65" />
    ))}
  </svg>
);

const CatBridal = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="bridal" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("bridal")})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Maang tikka */}
      <path d="M100 15 L100 30" />
      <path d="M92 15 L108 15 L100 5 Z" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      <circle cx="100" cy="32" r="2.5" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      {/* Choker */}
      <path d="M60 55 C80 68 120 68 140 55" strokeWidth="2.4" />
      <ellipse cx="100" cy="66" rx="5" ry="4" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      <circle cx="100" cy="66" r="1.6" fill="#7B2334" />
      {/* Long haaram */}
      <path d="M45 75 C75 130 125 130 155 75" strokeWidth="2" />
      <path d="M55 85 C80 130 120 130 145 85" />
      {/* Haaram pendant */}
      <g transform="translate(100 128)">
        <path d="M0 -10 L9 -6 L12 4 L8 12 L-8 12 L-12 4 L-9 -6 Z" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
        <circle cx="0" cy="2" r="3" fill="#7B2334" />
      </g>
      {/* Jhumkas */}
      <circle cx="45" cy="52" r="3" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      <path d="M45 55 c-6 3 -6 15 0 18 c6 -3 6 -15 0 -18 z" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      <circle cx="155" cy="52" r="3" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
      <path d="M155 55 c-6 3 -6 15 0 18 c6 -3 6 -15 0 -18 z" fill={`url(#${GOLD_GRAD_ID("bridal")})`} />
    </g>
  </svg>
);

const CatNecklace = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="neck" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("neck")})`} strokeWidth="1.8" strokeLinecap="round">
      <path d="M35 45 C65 125 135 125 165 45" strokeWidth="3" />
      <path d="M55 65 C78 115 122 115 145 65" />
      <ellipse cx="100" cy="122" rx="14" ry="10" fill={`url(#${GOLD_GRAD_ID("neck")})`} fillOpacity="0.2" />
      <ellipse cx="100" cy="122" rx="14" ry="10" />
      <circle cx="100" cy="122" r="4" fill="#4B8A5A" />
      {[80, 92, 100, 108, 120].map((x, i) => (
        <circle key={i} cx={x} cy={135 + Math.abs(i - 2) * 2} r="2.4" fill={`url(#${GOLD_GRAD_ID("neck")})`} />
      ))}
    </g>
  </svg>
);

const CatEarring = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="ear" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("ear")})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* left jhumka */}
      <circle cx="60" cy="30" r="7" fill={`url(#${GOLD_GRAD_ID("ear")})`} />
      <circle cx="60" cy="30" r="2.5" fill="#7B2334" />
      <path d="M60 38 C42 46 42 84 60 92 C78 84 78 46 60 38 Z" fill={`url(#${GOLD_GRAD_ID("ear")})`} fillOpacity="0.2" />
      <path d="M46 66 L74 66" />
      <circle cx="60" cy="74" r="3" fill="#4B8A5A" />
      {[46, 52, 58, 64, 70, 76].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 92 L${x} 102`} strokeWidth="0.9" />
          <circle cx={x} cy={106} r="2" fill={`url(#${GOLD_GRAD_ID("ear")})`} />
        </g>
      ))}
      {/* right jhumka */}
      <g transform="translate(80 0)">
        <circle cx="60" cy="30" r="7" fill={`url(#${GOLD_GRAD_ID("ear")})`} />
        <circle cx="60" cy="30" r="2.5" fill="#7B2334" />
        <path d="M60 38 C42 46 42 84 60 92 C78 84 78 46 60 38 Z" fill={`url(#${GOLD_GRAD_ID("ear")})`} fillOpacity="0.2" />
        <path d="M46 66 L74 66" />
        <circle cx="60" cy="74" r="3" fill="#4B8A5A" />
        {[46, 52, 58, 64, 70, 76].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 92 L${x} 102`} strokeWidth="0.9" />
            <circle cx={x} cy={106} r="2" fill={`url(#${GOLD_GRAD_ID("ear")})`} />
          </g>
        ))}
      </g>
    </g>
  </svg>
);

const CatBangle = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="bangle" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("bangle")})`} strokeWidth="2" strokeLinecap="round">
      <ellipse cx="100" cy="45"  rx="60" ry="14" />
      <ellipse cx="100" cy="70"  rx="60" ry="14" />
      <ellipse cx="100" cy="95"  rx="60" ry="14" />
      <ellipse cx="100" cy="120" rx="60" ry="14" />
      {/* facet dots */}
      {[{y:45,c:"#B23A48"},{y:70,c:"#4B8A5A"},{y:95,c:"#3B62A6"},{y:120,c:"#B23A48"}].map((r,i)=>(
        <circle key={i} cx="100" cy={r.y - 12} r="2.4" fill={r.c} />
      ))}
    </g>
    {[{x:18,y:20},{x:180,y:20},{x:180,y:140},{x:20,y:140}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z`} fill="#C8A048" opacity="0.6" />
    ))}
  </svg>
);

const CatRing = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" aria-hidden>
    <GoldDefs id="ring" />
    <g fill="none" stroke={`url(#${GOLD_GRAD_ID("ring")})`} strokeWidth="2.4" strokeLinecap="round">
      <ellipse cx="100" cy="100" rx="58" ry="18" />
      <ellipse cx="100" cy="100" rx="58" ry="18" strokeWidth="0.8" stroke="#8B6A1E" />
    </g>
    {/* big gem on top */}
    <g transform="translate(100 68)">
      <path d="M-14 0 L0 -18 L14 0 L8 16 L-8 16 Z" fill={`url(#${GOLD_GRAD_ID("ring")})`} stroke="#8B6A1E" strokeWidth="0.8" />
      <path d="M-8 4 L0 -10 L8 4" stroke="#F6B0B8" strokeWidth="0.9" fill="none" />
      <circle cx="0" cy="4" r="4" fill="#B23A48" />
    </g>
    {/* side stones */}
    <circle cx="60" cy="94" r="3" fill="#4B8A5A" />
    <circle cx="140" cy="94" r="3" fill="#4B8A5A" />
  </svg>
);

/* ============================================================
   MATERIAL ICONS
   ============================================================ */
const MatGold = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden>
    <GoldDefs id="matgold" />
    <g stroke={`url(#${GOLD_GRAD_ID("matgold")})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* gold bar */}
      <path d="M22 42 L78 42 L86 56 L14 56 Z" fill={`url(#${GOLD_GRAD_ID("matgold")})`} fillOpacity="0.35" />
      <path d="M22 42 L28 34 L72 34 L78 42" fill={`url(#${GOLD_GRAD_ID("matgold")})`} fillOpacity="0.6" />
      <path d="M14 56 L14 68 L86 68 L86 56" />
      <path d="M22 42 L22 68 M78 42 L78 68" />
      <text x="50" y="61" textAnchor="middle" fontSize="8" fill="#8B6A1E" fontFamily="serif">999</text>
      {/* coin */}
      <circle cx="26" cy="82" r="10" fill={`url(#${GOLD_GRAD_ID("matgold")})`} />
      <circle cx="26" cy="82" r="10" fill="none" stroke="#8B6A1E" strokeWidth="0.7" />
      <circle cx="26" cy="82" r="4.5" fill="none" stroke="#8B6A1E" strokeWidth="0.6" />
    </g>
  </svg>
);

const MatSilver = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden>
    <defs>
      <linearGradient id="mat-silver" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F2F2F5" />
        <stop offset="55%" stopColor="#B8BDC5" />
        <stop offset="100%" stopColor="#6B7280" />
      </linearGradient>
    </defs>
    <g stroke="url(#mat-silver)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 42 L78 42 L86 56 L14 56 Z" fill="url(#mat-silver)" fillOpacity="0.35" />
      <path d="M22 42 L28 34 L72 34 L78 42" fill="url(#mat-silver)" fillOpacity="0.6" />
      <path d="M14 56 L14 68 L86 68 L86 56" />
      <path d="M22 42 L22 68 M78 42 L78 68" />
      <text x="50" y="61" textAnchor="middle" fontSize="8" fill="#6B7280" fontFamily="serif">925</text>
      {/* coin */}
      <circle cx="26" cy="82" r="10" fill="url(#mat-silver)" />
      <circle cx="26" cy="82" r="10" fill="none" stroke="#6B7280" strokeWidth="0.7" />
      <circle cx="26" cy="82" r="4.5" fill="none" stroke="#6B7280" strokeWidth="0.6" />
    </g>
  </svg>
);

const MatBrass = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden>
    <defs>
      <linearGradient id="mat-brass" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E4B15A" />
        <stop offset="55%" stopColor="#B8862A" />
        <stop offset="100%" stopColor="#6D4914" />
      </linearGradient>
    </defs>
    <g stroke="url(#mat-brass)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Brass pot / diya */}
      <path d="M28 48 C28 34 72 34 72 48 L72 64 C72 78 28 78 28 64 Z" fill="url(#mat-brass)" fillOpacity="0.35" />
      <ellipse cx="50" cy="48" rx="22" ry="6" fill="url(#mat-brass)" fillOpacity="0.6" />
      <ellipse cx="50" cy="48" rx="22" ry="6" />
      <path d="M42 34 L58 34 L54 26 L46 26 Z" fill="url(#mat-brass)" fillOpacity="0.6" />
      <path d="M50 26 L50 20" />
      <path d="M46 20 C50 14 50 14 54 20 L50 24 Z" fill="#F4B84E" />
      {/* stand */}
      <path d="M32 78 L68 78 L74 86 L26 86 Z" fill="url(#mat-brass)" fillOpacity="0.55" />
    </g>
  </svg>
);

const MatClay = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden>
    <defs>
      <linearGradient id="mat-clay" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E39776" />
        <stop offset="55%" stopColor="#B85F3F" />
        <stop offset="100%" stopColor="#7A3C1F" />
      </linearGradient>
    </defs>
    <g stroke="url(#mat-clay)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* pot */}
      <path d="M26 50 C26 34 74 34 74 50 L70 78 C70 90 30 90 30 78 Z" fill="url(#mat-clay)" fillOpacity="0.4" />
      <ellipse cx="50" cy="50" rx="24" ry="6" fill="url(#mat-clay)" fillOpacity="0.75" />
      <ellipse cx="50" cy="50" rx="24" ry="6" />
      {/* handles */}
      <path d="M24 56 C16 56 16 66 24 66" fill="none" />
      <path d="M76 56 C84 56 84 66 76 66" fill="none" />
      {/* decor lines */}
      <path d="M34 62 L66 62" strokeWidth="0.7" opacity="0.7" />
      <path d="M36 70 L64 70" strokeWidth="0.7" opacity="0.6" />
      {/* leaves top */}
      <path d="M46 34 C42 26 40 20 46 16 M54 34 C58 26 60 20 54 16" strokeWidth="1" stroke="#7A9660" fill="none" />
    </g>
  </svg>
);

const MatGems = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden>
    <GoldDefs id="matgem" />
    <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
      {/* Emerald */}
      <path d="M22 46 L32 34 L46 34 L56 46 L48 66 L30 66 Z" fill="#4B8A5A" />
      <path d="M22 46 L56 46" strokeWidth="0.5" />
      <path d="M28 42 L38 30 L48 42" stroke="#B7E3C1" strokeWidth="0.9" fill="none" />
      {/* Ruby */}
      <path d="M52 60 L60 52 L74 52 L82 60 L76 76 L58 76 Z" fill="#B23A48" />
      <path d="M52 60 L82 60" strokeWidth="0.5" />
      <path d="M58 56 L66 48 L74 56" stroke="#F6B0B8" strokeWidth="0.9" fill="none" />
      {/* Sapphire */}
      <path d="M38 74 L44 68 L56 68 L62 74 L58 86 L42 86 Z" fill="#3B62A6" />
      <path d="M38 74 L62 74" strokeWidth="0.5" />
      <path d="M44 71 L50 65 L56 71" stroke="#B1C4EA" strokeWidth="0.9" fill="none" />
    </g>
    {[{x:80,y:20},{x:20,y:20},{x:22,y:90}].map((s,i)=>(
      <path key={i} d={`M${s.x} ${s.y} l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z`} fill="#C8A048" opacity="0.7" />
    ))}
  </svg>
);

/* ============================================================
   PAGE
   ============================================================ */

const CATEGORIES = [
  { title: "Temple Jewellery", desc: "Antique South Indian temple designs with sacred motifs.", Icon: CatTemple,  bg: "card-ivory" },
  { title: "Bridal Jewellery", desc: "Layered heirloom sets crafted for your wedding day.",       Icon: CatBridal,  bg: "card-rose" },
  { title: "Necklaces",         desc: "From delicate chokers to statement haarams in pure gold.",  Icon: CatNecklace,bg: "card-mint" },
  { title: "Earrings",          desc: "Jhumkas, chandbalis and studs handcrafted with soul.",      Icon: CatEarring, bg: "card-blush" },
  { title: "Bangles",           desc: "Kadas, valayals and gemstone-set bangles for every wrist.", Icon: CatBangle,  bg: "card-peach" },
  { title: "Rings",             desc: "Signet rings and gemstone rings customized to your taste.", Icon: CatRing,    bg: "card-sage" },
];

const MATERIALS = [
  { name: "Gold",      note: "22k & 18k in hallmark purity",  Icon: MatGold   },
  { name: "Silver",    note: "925 sterling with fine finish", Icon: MatSilver },
  { name: "Brass",     note: "Traditional temple-grade cast", Icon: MatBrass  },
  { name: "Clay",      note: "Terracotta artisan sculpture",  Icon: MatClay   },
  { name: "Gemstones", note: "Ruby, emerald, sapphire & more",Icon: MatGems   },
];

function Hero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-10">
      {/* Watermarks */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute -left-16 top-10 w-[280px] h-[280px]" opacity={0.08} />
        <LotusMotif className="absolute right-[-40px] top-20 w-[240px] h-[240px]" opacity={0.08} />
        <LotusMotif className="absolute left-1/2 -translate-x-1/2 bottom-[-120px] w-[360px] h-[360px]" opacity={0.06} />
      </div>

      <div className="max-w-[1100px] mx-auto text-center relative z-[2]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-4"
        >
          <LotusLogo size={90} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-[#B8860B] mb-4"
        >
          <span className="h-px w-10 bg-[#B8860B]/70" />
          <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
            The Kamalavasinii Collection
          </span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[46px] md:text-[68px] lg:text-[80px] font-semibold maroon-text leading-[0.98] tracking-[0.02em]"
        >
          Swarna <span className="italic gold-text">Jewellery</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-5 flex justify-center"
        >
          <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden>
            <path d="M0 10 L34 10" stroke="#B8860B" strokeWidth="1" />
            <path d="M46 10 L80 10" stroke="#B8860B" strokeWidth="1" />
            <path d="M40 3 C34 7 34 13 40 17 C46 13 46 7 40 3 Z" fill="#B8860B" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 font-sans text-[15px] md:text-[17px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed"
        >
          Handcrafted jewellery inspired by Indian heritage, designed exclusively for you —
          from timeless temple traditions to bespoke bridal masterpieces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium">
            BOOK CONSULTATION
          </button>
          <button className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium">
            REQUEST CUSTOM DESIGN
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-8 w-[200px] h-[200px]" opacity={0.05} />
        <LotusMotif className="absolute right-[-20px] bottom-6 w-[220px] h-[220px]" opacity={0.05} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-[2]"
      >
        <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
          <span className="h-px w-10 bg-[#B8860B]/70" />
          <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Our Story</span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </div>
        <h2 className="font-serif text-[30px] md:text-[42px] font-semibold maroon-text leading-tight">
          Every Piece, A <span className="italic gold-text">Legacy</span> In The Making.
        </h2>
        <div className="mt-4 flex justify-center">
          <svg width="70" height="18" viewBox="0 0 70 18" aria-hidden>
            <path d="M0 9 L28 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M42 9 L70 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M35 2 C30 6 30 12 35 16 C40 12 40 6 35 2 Z" fill="#B8860B" />
          </svg>
        </div>
        <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          At Kamalavasinii, no two pieces are ever the same. Each design begins with a
          conversation — your inspiration, your occasion, your dream — and is then
          shaped by hand through weeks of quiet craftsmanship. From the first sketch
          to the final polish, every gram of gold, every gemstone, every zari thread is
          curated and worked by artisans who inherit their skill from generations past.
        </p>
        <p className="mt-4 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          What you receive is not merely jewellery. It is a keepsake — customized,
          exclusive, and made only for you.
        </p>
      </motion.div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section id="categories" className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute right-[-30px] top-10 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute left-[-30px] bottom-20 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Collections</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Jewellery <span className="italic gold-text">Categories</span>
          </h2>
          <p className="mt-4 font-sans text-[15px] text-[#5a3a3f] max-w-xl mx-auto">
            Explore our curated categories — each a canvas for your personal design story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.a
              key={c.title}
              href="#consult"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className={`category-card ${c.bg} group rounded-[28px] p-6 md:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_-15px_rgba(107,30,40,0.15)] relative overflow-hidden`}
            >
              <svg viewBox="0 0 24 24" className="absolute top-3 right-4 w-3 h-3 opacity-70" aria-hidden>
                <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
              </svg>
              <div className="w-36 h-28 md:w-44 md:h-32 mb-3">
                <c.Icon />
              </div>
              <h3 className="font-serif tracking-[0.08em] text-[19px] md:text-[22px] maroon-text font-semibold">
                {c.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] text-[#5a3a3f] leading-relaxed max-w-xs">
                {c.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 font-sans text-[13px] text-[#D97C74] tracking-wider">
                Explore Collection
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomMaterials() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-16 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-16 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Custom Jewellery</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight max-w-3xl mx-auto">
            Materials Chosen With <span className="italic gold-text">Intention</span>.
          </h2>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Every commission begins with the material. Choose the metal, the gemstone,
            the finish — our designers will guide you through every option and craft a
            piece that is entirely and only yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {MATERIALS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[24px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 flex flex-col items-center text-center shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500 overflow-hidden"
            >
              {/* gold halo */}
              <div className="relative mb-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="block w-16 h-16 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] opacity-70" />
                </div>
                <div className="relative">
                  <m.Icon />
                </div>
              </div>
              <h3 className="font-serif text-[19px] md:text-[20px] font-semibold maroon-text tracking-wide">
                {m.name}
              </h3>
              <div className="mt-2 mb-2 mx-auto h-[2px] w-8 bg-gradient-to-r from-[#C8A048] to-transparent group-hover:w-16 transition-all duration-500" />
              <p className="font-sans text-[12.5px] text-[#5a3a3f] leading-relaxed">
                {m.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CraftsmanshipIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cr-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
        <radialGradient id="cr-wash" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#F9E1D5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F9E1D5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cr-hand" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EBB995" />
          <stop offset="100%" stopColor="#B87F5A" />
        </linearGradient>
      </defs>

      {/* wash */}
      <ellipse cx="260" cy="260" rx="240" ry="240" fill="url(#cr-wash)" />

      {/* ornamental frame */}
      <circle cx="260" cy="260" r="220" stroke="url(#cr-gold)" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="260" cy="260" r="230" stroke="url(#cr-gold)" strokeWidth="0.5" strokeDasharray="2 6" fill="none" opacity="0.7" />

      {/* Workbench / anvil silhouette */}
      <path d="M120 400 L400 400 L410 430 L110 430 Z" fill="url(#cr-gold)" fillOpacity="0.15" stroke="url(#cr-gold)" strokeWidth="1.2" />

      {/* Anvil */}
      <path d="M200 380 L320 380 L340 400 L180 400 Z" fill="url(#cr-gold)" fillOpacity="0.3" stroke="url(#cr-gold)" strokeWidth="1.2" />
      <path d="M230 380 L230 350 L290 350 L290 380 Z" stroke="url(#cr-gold)" strokeWidth="1.2" fill="url(#cr-gold)" fillOpacity="0.4" />

      {/* Necklace being crafted on the anvil */}
      <path d="M215 348 C240 328 280 328 305 348" stroke="url(#cr-gold)" strokeWidth="2" fill="none" />
      {[220, 235, 250, 260, 270, 285, 300].map((x, i) => (
        <circle key={i} cx={x} cy={344 - Math.abs(i - 3) * 2} r="2.6" fill="url(#cr-gold)" />
      ))}
      <ellipse cx="260" cy="352" rx="6" ry="4" fill="url(#cr-gold)" />
      <circle cx="260" cy="352" r="1.6" fill="#7B2334" />

      {/* Left hand holding chisel */}
      <path d="M95 300 C85 260 105 220 145 210 C165 240 165 275 150 305 C135 320 115 320 95 300 Z" fill="url(#cr-hand)" />
      <path d="M150 210 L200 160 L215 175 L165 225 Z" fill="url(#cr-gold)" fillOpacity="0.6" stroke="url(#cr-gold)" strokeWidth="1" />
      <path d="M195 155 L215 175" stroke="url(#cr-gold)" strokeWidth="2" />
      <path d="M195 155 L205 145 L225 165 L215 175 Z" fill="url(#cr-gold)" />
      {/* bangles on wrist */}
      {[0,1,2].map((i) => (
        <ellipse key={i} cx={110 - i * 3} cy={285 + i * 6} rx="12" ry="3" fill="none" stroke="url(#cr-gold)" strokeWidth="1.5" />
      ))}

      {/* Right hand holding hammer */}
      <path d="M425 300 C435 260 415 220 375 210 C355 240 355 275 370 305 C385 320 405 320 425 300 Z" fill="url(#cr-hand)" />
      <path d="M370 210 L320 160 L305 175 L355 225 Z" fill="url(#cr-gold)" fillOpacity="0.55" stroke="url(#cr-gold)" strokeWidth="1" />
      {/* hammer head */}
      <path d="M300 145 L350 145 L354 170 L296 170 Z" fill="url(#cr-gold)" stroke="#8B6A1E" strokeWidth="1" />
      {/* bangles */}
      {[0,1,2].map((i) => (
        <ellipse key={i} cx={410 + i * 3} cy={285 + i * 6} rx="12" ry="3" fill="none" stroke="url(#cr-gold)" strokeWidth="1.5" />
      ))}

      {/* Sparks around the anvil */}
      {[
        { x: 240, y: 330, s: 6 },
        { x: 280, y: 330, s: 6 },
        { x: 220, y: 355, s: 5 },
        { x: 300, y: 355, s: 5 },
        { x: 260, y: 320, s: 7 },
      ].map((s, i) => (
        <path
          key={i}
          d={`M${s.x} ${s.y} l${s.s * 0.35} ${s.s} l${s.s} ${s.s * 0.35} l${-s.s} ${s.s * 0.35} l${-s.s * 0.35} ${s.s} l${-s.s * 0.35} ${-s.s} l${-s.s} ${-s.s * 0.35} l${s.s} ${-s.s * 0.35} z`}
          fill="#F1D07A"
          opacity="0.9"
        />
      ))}

      {/* Lotus flowers at bottom */}
      <g transform="translate(90 430)">
        <path d="M14 24 C6 18 6 6 14 2 C22 6 22 18 14 24 Z" fill="#EC9A8F" />
        <circle cx="14" cy="12" r="2" fill="#F1D07A" />
      </g>
      <g transform="translate(410 430)">
        <path d="M14 24 C6 18 6 6 14 2 C22 6 22 18 14 24 Z" fill="#EC9A8F" />
        <circle cx="14" cy="12" r="2" fill="#F1D07A" />
      </g>

      {/* filigree corners */}
      <g stroke="url(#cr-gold)" strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M40 40 C60 40 80 50 90 70" /><circle cx="40" cy="40" r="1.6" fill="url(#cr-gold)" />
        <path d="M480 40 C460 40 440 50 430 70" /><circle cx="480" cy="40" r="1.6" fill="url(#cr-gold)" />
        <path d="M40 480 C60 480 80 470 90 450" /><circle cx="40" cy="480" r="1.6" fill="url(#cr-gold)" />
        <path d="M480 480 C460 480 440 470 430 450" /><circle cx="480" cy="480" r="1.6" fill="url(#cr-gold)" />
      </g>
    </svg>
  );
}

function Craftsmanship() {
  const POINTS = [
    "Generational knowledge from Tamil Nadu, Andhra & Kerala",
    "Hand-drawn sketches, wax models and finishing by senior craftsmen",
    "Every stone hand-set, every polish inspected by our master jeweller",
  ];

  return (
    <section className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute right-[-30px] top-10 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute left-[-30px] bottom-10 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[32px] bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_25px_60px_-30px_rgba(107,30,40,0.20)] p-4 md:p-6 gentle-float">
            <CraftsmanshipIllustration className="w-full h-auto max-w-[520px] mx-auto" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Craftsmanship</span>
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-[1.1]">
            The Quiet Hands Behind Every{" "}
            <span className="italic gold-text">Masterpiece</span>.
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#B8860B] to-[#B8860B]" />
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#C8A048" />
              <circle cx="11" cy="11" r="1.6" fill="#7B2334" />
            </svg>
            <span className="h-px w-14 bg-gradient-to-l from-transparent via-[#B8860B] to-[#B8860B]" />
          </div>
          <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.85] max-w-xl">
            Kamalavasinii&apos;s artisans are not merely jewellers — they are custodians of
            an ancient South Indian craft tradition passed down through families for
            centuries. Every design begins with a sketch, then a wax model, then weeks
            of patient handwork at the bench.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
                className="flex items-start gap-4 group"
              >
                <span className="relative shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FBEED0] to-[#F1D48A] border border-[#C8A048]/40 shadow-[0_5px_15px_-5px_rgba(200,160,72,0.5)] transition-transform duration-500 group-hover:scale-110">
                  <svg viewBox="0 0 22 22" width="12" height="12" aria-hidden>
                    <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#8B6A1E" />
                  </svg>
                </span>
                <span className="font-serif text-[17px] md:text-[18px] text-[#3A2A20] tracking-wide leading-snug">
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ConsultCTA() {
  return (
    <section id="consult" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-40px] top-10 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-40px] bottom-10 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto relative z-[2]"
      >
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-[0_30px_60px_-30px_rgba(107,30,40,0.25)] px-6 md:px-14 py-14 md:py-20 text-center">
          {/* corner ornaments */}
          {[
            { c: "top-3 left-3", tr: "" },
            { c: "top-3 right-3", tr: "-scale-x-100" },
            { c: "bottom-3 left-3", tr: "-scale-y-100" },
            { c: "bottom-3 right-3", tr: "rotate-180" },
          ].map((o, i) => (
            <svg key={i} viewBox="0 0 60 60" className={`absolute ${o.c} w-10 h-10 opacity-70 ${o.tr}`} aria-hidden>
              <path d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
          ))}

          <div className="flex justify-center mb-4">
            <LotusLogo size={54} />
          </div>

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Bespoke Consultation</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h3 className="font-serif text-[30px] md:text-[46px] font-semibold maroon-text leading-tight max-w-3xl mx-auto">
            Let&apos;s Create Your Dream{" "}
            <span className="italic gold-text">Jewellery</span>.
          </h3>

          <p className="mt-4 font-sans text-[14px] md:text-[16px] text-[#5a3a3f] max-w-xl mx-auto">
            Speak with our master designers today and begin your bespoke Kamalavasinii journey.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-2">
              BOOK CONSULTATION
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12 L19 12 M13 6 L19 12 L13 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.42 0 .04 5.38.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.03 21.3h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.68.96.98-3.58-.24-.37a9.9 9.9 0 01-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.29.5 1.73.64.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z"/>
              </svg>
              WHATSAPP US
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function JewelleryPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/jewellery" />
      <Hero />
      <Introduction />
      <CategoryGrid />
      <CustomMaterials />
      <Craftsmanship />
      <ConsultCTA />
      <SiteFooter />
    </main>
  );
}

export default JewelleryPage;
