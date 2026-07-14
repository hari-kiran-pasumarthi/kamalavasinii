"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Shared gold gradient defs helper
   ============================================================ */
const GoldDefs = ({ id }) => (
  <defs>
    <linearGradient id={`sk-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#EAC77A" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
    <pattern id={`sk-zari-${id}`} width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#C8A048" />
      <path d="M0 5 Q2.5 0 5 5 T10 5" stroke="#8B6A1E" strokeWidth="0.6" fill="none" />
      <circle cx="5" cy="5" r="0.7" fill="#F1D07A" />
    </pattern>
    <pattern id={`sk-weave-${id}`} width="4" height="4" patternUnits="userSpaceOnUse">
      <path d="M0 0 L4 4 M4 0 L0 4" stroke="#ffffff" strokeWidth="0.3" opacity="0.3" />
    </pattern>
  </defs>
);

/* ============================================================
   Saree collection illustrations
   Each shows a folded silk saree with region-specific pattern
   ============================================================ */
const SareeCard = ({ id, silkFrom, silkTo, patternFn }) => (
  <svg viewBox="0 0 220 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id={`silk-${id}`} x1="0" x2="1" y1="0" y2="0.6">
        <stop offset="0%" stopColor={silkFrom} />
        <stop offset="50%" stopColor={silkTo} />
        <stop offset="100%" stopColor={silkFrom} />
      </linearGradient>
    </defs>
    <GoldDefs id={id} />

    {/* base plate */}
    <ellipse cx="110" cy="140" rx="90" ry="6" fill="#EBD6C6" opacity="0.55" />

    {/* Folded saree main body */}
    <path d="M40 70 L180 70 L200 130 L20 130 Z" fill={`url(#silk-${id})`} />
    <path d="M40 70 L180 70 L200 130 L20 130 Z" fill={`url(#sk-weave-${id})`} />

    {/* Top edge with zari border */}
    <path d="M40 70 L180 70" stroke={`url(#sk-zari-${id})`} strokeWidth="7" />
    <path d="M40 70 L180 70" stroke="#8B6A1E" strokeWidth="0.6" />

    {/* Bottom zari border */}
    <path d="M20 130 L200 130" stroke={`url(#sk-zari-${id})`} strokeWidth="8" />

    {/* Second folded saree layer behind (subtle) */}
    <path d="M50 58 L170 58 L180 70 L40 70 Z" fill={`url(#silk-${id})`} opacity="0.75" />
    <path d="M50 58 L170 58" stroke={`url(#sk-zari-${id})`} strokeWidth="4" />

    {/* Region-specific pattern */}
    {patternFn(id)}

    {/* Sparkles */}
    {[{ x: 18, y: 22 }, { x: 200, y: 22 }, { x: 26, y: 150 }, { x: 195, y: 150 }].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z`}
        fill="#C8A048"
        opacity="0.7"
      />
    ))}
  </svg>
);

/* Region-specific pattern rendering functions */
const kanchipuramPattern = (id) => (
  <g>
    {/* Temple-tower motifs */}
    {[60, 90, 120, 150, 180].map((x, i) => (
      <g key={i} transform={`translate(${x} 100)`}>
        <path d="M0 0 L4 -8 L-4 -8 Z" fill="#F1D07A" opacity="0.9" />
        <path d="M-4 0 L4 0" stroke="#F1D07A" strokeWidth="0.6" />
      </g>
    ))}
    {/* peacock feather medallions */}
    {[70, 105, 140].map((x, i) => (
      <g key={`p-${i}`} transform={`translate(${x} 115)`}>
        <ellipse cx="0" cy="0" rx="5" ry="8" fill="#8B6A1E" opacity="0.5" />
        <ellipse cx="0" cy="-1" rx="2" ry="4" fill="#F1D07A" />
        <circle cx="0" cy="-1" r="0.9" fill="#7B2334" />
      </g>
    ))}
  </g>
);

const banarasiPattern = (id) => (
  <g>
    {/* Ornate paisleys */}
    {[55, 85, 115, 145, 175].map((x, i) => (
      <path
        key={i}
        d={`M${x} 95 C${x + 5} 88 ${x + 9} 96 ${x + 6} 104 C${x + 2} 110 ${x - 4} 106 ${x} 95 Z`}
        fill="#F1D07A"
        opacity="0.9"
      />
    ))}
    {/* small buti dots */}
    {[45, 60, 75, 90, 105, 120, 135, 150, 165, 180].map((x, i) => (
      <circle key={`d-${i}`} cx={x} cy={115} r="1.2" fill="#8B6A1E" opacity="0.8" />
    ))}
    {/* Middle zari band */}
    <path d="M30 95 L190 95" stroke="#F1D07A" strokeWidth="1" opacity="0.7" />
    <path d="M30 118 L190 118" stroke="#F1D07A" strokeWidth="1" opacity="0.7" />
  </g>
);

const mysorePattern = (id) => (
  <g>
    {/* Minimal fine dots (Mysore is known for smooth silk with small zari buti) */}
    {Array.from({ length: 6 }).map((_, r) =>
      Array.from({ length: 12 }).map((__, c) => (
        <circle
          key={`m-${r}-${c}`}
          cx={35 + c * 13}
          cy={82 + r * 8}
          r="0.9"
          fill="#F1D07A"
          opacity={0.7}
        />
      ))
    )}
  </g>
);

const uppadaPattern = (id) => (
  <g>
    {/* Jamdani-style diagonal floral motifs */}
    {[60, 100, 140, 180].map((x, i) => (
      <g key={i} transform={`translate(${x} 100)`}>
        <path d="M0 -4 C-3 -2 -3 2 0 4 C3 2 3 -2 0 -4 Z" fill="#F1D07A" />
        <circle cx="0" cy="0" r="0.9" fill="#7B2334" />
      </g>
    ))}
    {[45, 80, 115, 150, 185].map((x, i) => (
      <path
        key={`u-${i}`}
        d={`M${x} 115 L${x + 6} 120 L${x - 2} 120 Z`}
        fill="#F1D07A"
        opacity="0.85"
      />
    ))}
  </g>
);

const gadwalPattern = (id) => (
  <g>
    {/* Interlocked cotton-silk checked pattern */}
    <g stroke="#F1D07A" strokeWidth="0.5" opacity="0.7">
      {[80, 95, 110, 125].map((y, i) => (
        <line key={`gh-${i}`} x1="30" y1={y} x2="190" y2={y} />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`gv-${i}`} x1={35 + i * 15} y1={78} x2={35 + i * 15} y2={128} />
      ))}
    </g>
    {/* Temple border triangles */}
    {[40, 60, 80, 100, 120, 140, 160, 180].map((x, i) => (
      <path
        key={`t-${i}`}
        d={`M${x} 128 L${x + 5} 122 L${x + 10} 128 Z`}
        fill="#F1D07A"
        opacity="0.85"
      />
    ))}
  </g>
);

const pochampallyPattern = (id) => (
  <g>
    {/* Ikat diamond geometric pattern */}
    {[
      { x: 55, y: 95 },
      { x: 85, y: 95 },
      { x: 115, y: 95 },
      { x: 145, y: 95 },
      { x: 175, y: 95 },
      { x: 70, y: 115 },
      { x: 100, y: 115 },
      { x: 130, y: 115 },
      { x: 160, y: 115 },
    ].map((p, i) => (
      <g key={i} transform={`translate(${p.x} ${p.y})`}>
        <path d="M0 -5 L5 0 L0 5 L-5 0 Z" fill="none" stroke="#F1D07A" strokeWidth="0.9" />
        <path d="M0 -2 L2 0 L0 2 L-2 0 Z" fill="#F1D07A" />
      </g>
    ))}
  </g>
);

const COLLECTIONS = [
  {
    title: "Kanchipuram",
    desc: "Regal temple-motif silks with heavy pure-gold zari from Tamil Nadu.",
    bg: "card-rose",
    silkFrom: "#DC7E76",
    silkTo: "#F7C8C0",
    pattern: kanchipuramPattern,
  },
  {
    title: "Banarasi",
    desc: "Ornate paisleys and floral brocade woven in the ghats of Varanasi.",
    bg: "card-ivory",
    silkFrom: "#A8862E",
    silkTo: "#F1D48A",
    pattern: banarasiPattern,
  },
  {
    title: "Mysore Silk",
    desc: "Pure smooth silk with delicate gold buti — the pride of Karnataka.",
    bg: "card-mint",
    silkFrom: "#6E8A55",
    silkTo: "#BFD09E",
    pattern: mysorePattern,
  },
  {
    title: "Uppada",
    desc: "Fine jamdani weaves with rich floral motifs from coastal Andhra.",
    bg: "card-blush",
    silkFrom: "#A8865E",
    silkTo: "#E9C89A",
    pattern: uppadaPattern,
  },
  {
    title: "Gadwal",
    desc: "Cotton body with pure silk borders and iconic temple-tower ends.",
    bg: "card-peach",
    silkFrom: "#78578C",
    silkTo: "#C7B0D3",
    pattern: gadwalPattern,
  },
  {
    title: "Pochampally",
    desc: "Ikat geometry — dyed thread by thread, woven with mathematical precision.",
    bg: "card-sage",
    silkFrom: "#265F58",
    silkTo: "#78B0A8",
    pattern: pochampallyPattern,
  },
];

/* ============================================================
   Craftsmanship step icons
   ============================================================ */
const IconGold = ({ id, children }) => (
  <svg viewBox="0 0 80 80" className="w-11 h-11" fill="none" stroke={`url(#sk-gold-${id})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <GoldDefs id={id} />
    {children}
  </svg>
);

const StepDesign = () => (
  <IconGold id="step-design">
    {/* Pen sketching a saree */}
    <path d="M14 22 L46 22 L54 30 L54 60 L14 60 Z" />
    <path d="M46 22 L46 30 L54 30" />
    <path d="M22 40 C30 46 42 46 50 40" />
    <path d="M22 50 L46 50" strokeWidth="0.8" />
    <path d="M52 34 L70 52" />
    <path d="M50 32 L54 28 L58 32 L54 36 Z" fill="url(#sk-gold-step-design)" stroke="none" />
    <path d="M70 52 L74 56 L70 60 L66 56 Z" fill="url(#sk-gold-step-design)" stroke="none" />
  </IconGold>
);

const StepLoom = () => (
  <IconGold id="step-loom">
    {/* Loom frame */}
    <path d="M12 20 L68 20" />
    <path d="M20 20 L20 66" />
    <path d="M60 20 L60 66" />
    <path d="M14 66 L66 66" strokeWidth="2" />
    {/* Warp threads */}
    {[26, 32, 38, 44, 50, 56].map((x, i) => (
      <path key={i} d={`M${x} 22 L${x} 60`} strokeWidth="0.8" opacity="0.75" />
    ))}
    {/* Shuttle */}
    <path d="M14 44 L26 44 L30 48 L26 52 L14 52 Z" fill="url(#sk-gold-step-loom)" stroke="none" />
    <path d="M30 48 L54 48" strokeWidth="2" stroke="url(#sk-gold-step-loom)" />
    {/* Woven fabric */}
    <path d="M20 60 L60 60 L60 66 L20 66 Z" fill="url(#sk-gold-step-loom)" fillOpacity="0.3" />
  </IconGold>
);

const StepZari = () => (
  <IconGold id="step-zari">
    {/* Zari spool with thread */}
    <ellipse cx="40" cy="30" rx="18" ry="6" />
    <path d="M22 30 L22 54" />
    <path d="M58 30 L58 54" />
    <ellipse cx="40" cy="54" rx="18" ry="6" fill="url(#sk-gold-step-zari)" fillOpacity="0.5" />
    {/* Thread strands */}
    {[24, 30, 36, 42, 48, 54].map((x, i) => (
      <path key={i} d={`M${x} 32 L${x} 52`} strokeWidth="0.9" opacity="0.85" />
    ))}
    {/* Trailing zari thread */}
    <path d="M58 54 C64 60 70 60 74 66" strokeWidth="1.2" />
    <circle cx="74" cy="66" r="2" fill="url(#sk-gold-step-zari)" stroke="none" />
    {/* Sparkles */}
    <path d="M18 66 l1.4 3.6 l3.6 1.4 l-3.6 1.4 l-1.4 3.6 l-1.4 -3.6 l-3.6 -1.4 l3.6 -1.4 z" fill="url(#sk-gold-step-zari)" stroke="none" />
  </IconGold>
);

const StepInspect = () => (
  <IconGold id="step-inspect">
    {/* Magnifying glass over fabric */}
    <circle cx="34" cy="34" r="14" />
    <path d="M45 45 L60 60" strokeWidth="2.4" />
    {/* Fabric threads inside glass */}
    <path d="M26 34 L42 34 M30 30 L38 30 M30 38 L38 38" strokeWidth="0.9" />
    {/* Check tick */}
    <path d="M52 22 L58 28 L68 16" stroke="url(#sk-gold-step-inspect)" strokeWidth="2" />
  </IconGold>
);

const StepDeliver = () => (
  <IconGold id="step-deliver">
    {/* Wrapped silk saree box with lotus ribbon */}
    <path d="M14 32 L66 32 L66 66 L14 66 Z" />
    <path d="M10 24 L70 24 L70 34 L10 34 Z" />
    <path d="M40 24 L40 66" strokeWidth="2" />
    <path d="M40 24 C30 20 24 12 30 8 C36 10 38 16 40 22" />
    <path d="M40 24 C50 20 56 12 50 8 C44 10 42 16 40 22" />
    <circle cx="40" cy="20" r="2" fill="url(#sk-gold-step-deliver)" stroke="none" />
  </IconGold>
);

const STEPS = [
  { n: "01", title: "Design", desc: "Motifs and colour palette drawn by our master designer.", Icon: StepDesign },
  { n: "02", title: "Handloom Weaving", desc: "Every thread lovingly woven on traditional handlooms.", Icon: StepLoom },
  { n: "03", title: "Zari Work", desc: "Real gold and silver zari threads worked into the borders.", Icon: StepZari },
  { n: "04", title: "Quality Inspection", desc: "Each saree hand-inspected weave by weave for perfection.", Icon: StepInspect },
  { n: "05", title: "Ready For You", desc: "Wrapped with lotus ribbon and delivered with care.", Icon: StepDeliver },
];

/* ============================================================
   "Why our silks" icons
   ============================================================ */
const FeatWeaving = () => (
  <IconGold id="f-weav">
    {/* Loom motif */}
    <path d="M18 22 L62 22" />
    <path d="M22 22 L22 60" />
    <path d="M58 22 L58 60" />
    <path d="M14 60 L66 60" strokeWidth="2" />
    {[28, 34, 40, 46, 52].map((x, i) => (
      <path key={i} d={`M${x} 24 L${x} 58`} strokeWidth="0.7" opacity="0.75" />
    ))}
    <path d="M22 40 L58 40" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="2.4" fill="url(#sk-gold-f-weav)" stroke="none" />
  </IconGold>
);

const FeatPureSilk = () => (
  <IconGold id="f-silk">
    {/* Silk cocoon shape */}
    <ellipse cx="40" cy="42" rx="18" ry="26" />
    <path d="M24 30 C30 38 50 38 56 30" strokeWidth="0.8" />
    <path d="M22 44 C30 52 50 52 58 44" strokeWidth="0.8" />
    <path d="M24 58 C30 62 50 62 56 58" strokeWidth="0.8" />
    {/* certificate mark */}
    <circle cx="60" cy="20" r="8" />
    <path d="M56 20 L60 24 L66 16" strokeWidth="1.4" />
  </IconGold>
);

const FeatDesigns = () => (
  <IconGold id="f-design">
    {/* Traditional motif kolam / paisley */}
    <path d="M40 14 C22 26 22 54 40 66 C58 54 58 26 40 14 Z" />
    <path d="M40 22 C28 30 28 50 40 58 C52 50 52 30 40 22 Z" opacity="0.8" />
    <circle cx="40" cy="40" r="3" fill="url(#sk-gold-f-design)" stroke="none" />
    <path d="M40 14 L40 6" strokeWidth="0.9" />
    <path d="M40 66 L40 74" strokeWidth="0.9" />
    <path d="M14 40 L6 40" strokeWidth="0.9" />
    <path d="M66 40 L74 40" strokeWidth="0.9" />
  </IconGold>
);

const FeatFinish = () => (
  <IconGold id="f-finish">
    {/* Neatly folded saree */}
    <path d="M18 24 L62 24 L62 34 L18 34 Z" />
    <path d="M18 24 L62 24" strokeWidth="1.5" />
    <path d="M14 40 L66 40 L66 50 L14 50 Z" />
    <path d="M14 40 L66 40" strokeWidth="1.5" />
    <path d="M10 56 L70 56 L70 66 L10 66 Z" />
    <path d="M10 56 L70 56" strokeWidth="1.5" />
    {/* Sparkles */}
    <path d="M14 18 l1.4 3.6 l3.6 1.4 l-3.6 1.4 l-1.4 3.6 l-1.4 -3.6 l-3.6 -1.4 l3.6 -1.4 z" fill="url(#sk-gold-f-finish)" stroke="none" opacity="0.85" />
    <path d="M66 18 l1.4 3.6 l3.6 1.4 l-3.6 1.4 l-1.4 3.6 l-1.4 -3.6 l-3.6 -1.4 l3.6 -1.4 z" fill="url(#sk-gold-f-finish)" stroke="none" opacity="0.85" />
  </IconGold>
);

const FEATURES = [
  {
    title: "Authentic Weaving",
    desc: "Sourced directly from GI-tagged weaver clusters across South India.",
    Icon: FeatWeaving,
  },
  {
    title: "Pure Silk",
    desc: "Certified mulberry silk with genuine zari — never blended, never fake.",
    Icon: FeatPureSilk,
  },
  {
    title: "Traditional Designs",
    desc: "Timeless temple, paisley and peacock motifs from centuries of heritage.",
    Icon: FeatDesigns,
  },
  {
    title: "Premium Finishing",
    desc: "Hand-inspected, softly pressed and gift-wrapped in lotus muslin.",
    Icon: FeatFinish,
  },
];

/* ============================================================
   PAGE SECTIONS
   ============================================================ */

function Hero() {
  return (
    <section className="relative watercolor-bg paper-texture overflow-hidden py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-10">
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
            Woven In Heritage
          </span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[38px] md:text-[62px] lg:text-[74px] font-semibold maroon-text leading-[0.98] tracking-[0.02em]"
        >
          South Indian <span className="italic gold-text">Silk Sarees</span>
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
          Handpicked silk sarees celebrating India&apos;s weaving traditions and timeless
          elegance — sourced directly from heritage weaver clusters, pure of thread
          and rich of spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#collections" className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium">
            VIEW COLLECTIONS
          </a>
          <a href="#consult" className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium">
            BOOK CONSULTATION
          </a>
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
          Every Saree, A <span className="italic gold-text">Woven</span> Poem.
        </h2>
        <div className="mt-4 flex justify-center">
          <svg width="70" height="18" viewBox="0 0 70 18" aria-hidden>
            <path d="M0 9 L28 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M42 9 L70 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M35 2 C30 6 30 12 35 16 C40 12 40 6 35 2 Z" fill="#B8860B" />
          </svg>
        </div>
        <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          South Indian silk sarees are not simply garments — they are inheritances.
          Each thread is spun with care, dyed with patience, and woven by generations
          of artisans whose fingers hold the memory of the temples, rivers and skies of
          Tamil Nadu, Karnataka and Andhra Pradesh.
        </p>
        <p className="mt-4 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          At Kamalavasinii we curate only what is authentic, GI-tagged and truly
          handloom — silk that carries not just a border of gold, but a history of grace.
        </p>
      </motion.div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden">
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Signature Weaves</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Saree <span className="italic gold-text">Collections</span>
          </h2>
          <p className="mt-4 font-sans text-[15px] text-[#5a3a3f] max-w-xl mx-auto">
            A gathering of India&apos;s most storied handloom traditions — each a
            world of its own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {COLLECTIONS.map((c, i) => (
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

              <div className="w-full max-w-[220px] mb-3">
                <SareeCard
                  id={c.title.toLowerCase().replace(/\s+/g, "-")}
                  silkFrom={c.silkFrom}
                  silkTo={c.silkTo}
                  patternFn={c.pattern}
                />
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

function Craftsmanship() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-40px] top-16 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-40 w-[240px] h-[240px]" opacity={0.06} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Craftsmanship</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[34px] md:text-[50px] font-semibold maroon-text leading-[1.1] max-w-4xl mx-auto">
            From Loom To{" "}
            <span className="italic gold-text">Legacy</span>.
          </h2>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Every Kamalavasinii silk journeys through five hand-touched stages —
            from the first sketch to the moment it reaches your hands.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-[64px] left-[8%] right-[8%] h-px pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8A048]/70" />
              ))}
            </div>
          </div>
          {/* Mobile vertical line */}
          <div className="lg:hidden absolute top-6 bottom-6 left-[36px] w-px bg-gradient-to-b from-transparent via-[#C8A048]/70 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-4 relative">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="relative pl-16 lg:pl-0 flex lg:flex-col items-start lg:items-center text-left lg:text-center"
              >
                <div className="absolute lg:static left-3 top-2 lg:mb-4 shrink-0 z-[3]">
                  <div className="relative w-[68px] h-[68px] rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] border border-[#C8A048]/60 shadow-[0_10px_25px_-10px_rgba(200,160,72,0.55)] flex items-center justify-center">
                    <s.Icon />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#8A2A36] to-[#5E1420] text-[#F1D07A] text-[11px] font-serif font-semibold flex items-center justify-center shadow-md">
                      {s.n}
                    </span>
                    <span className="absolute inset-[-6px] rounded-full border border-[#C8A048]/25" />
                  </div>
                </div>

                <div className="group w-full rounded-[22px] bg-[#FFF9F2] border border-[#EFE1CC] p-5 md:p-6 shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500">
                  <h3 className="font-serif text-[19px] md:text-[20px] font-semibold maroon-text tracking-wide">
                    {s.title}
                  </h3>
                  <div className="mt-2 mb-3 h-[2px] w-10 lg:mx-auto bg-gradient-to-r from-[#C8A048] to-transparent group-hover:w-16 transition-all duration-500" />
                  <p className="font-sans text-[13.5px] text-[#5a3a3f] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="lg:hidden absolute -bottom-5 left-[28px]">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M12 4 L12 20 M6 14 L12 20 L18 14"
                        stroke="#C8A048"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySilks() {
  return (
    <section className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute -left-10 top-10 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-10 w-[240px] h-[240px]" opacity={0.06} />
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Why Our Silks
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Chosen With <span className="italic gold-text">Care</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[28px] p-6 md:p-8 bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_30px_60px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/60 transition-all duration-500 overflow-hidden"
            >
              <svg
                viewBox="0 0 40 40"
                className="absolute top-3 right-3 w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                aria-hidden
              >
                <path
                  d="M4 20 C4 10 10 4 20 4 M20 4 L20 12 M20 4 L28 4"
                  stroke="#C8A048"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="20" r="1.2" fill="#C8A048" />
              </svg>

              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-start">
                  <span className="block w-16 h-16 rounded-full bg-gradient-to-br from-[#F7E4C5] to-[#F0D7A9] opacity-70" />
                </div>
                <div className="relative pt-1 pl-1">
                  <f.Icon />
                </div>
              </div>

              <h3 className="font-serif text-[22px] md:text-[24px] font-semibold maroon-text tracking-wide">
                {f.title}
              </h3>
              <div className="mt-2 mb-4 h-[2px] w-10 bg-gradient-to-r from-[#C8A048] to-transparent group-hover:w-20 transition-all duration-500" />
              <p className="font-sans text-[13.5px] md:text-[14px] text-[#5a3a3f] leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Personal Silk Consultation
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h3 className="font-serif text-[28px] md:text-[42px] font-semibold maroon-text leading-tight max-w-3xl mx-auto">
            Find The Perfect{" "}
            <span className="italic gold-text">Silk</span> For Your Special Occasion.
          </h3>

          <p className="mt-4 font-sans text-[14px] md:text-[16px] text-[#5a3a3f] max-w-xl mx-auto">
            Tell us the occasion, the colours you love, the story you want to wear —
            our silk curators will bring the perfect saree to you.
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

function SilksPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/silks" />
      <Hero />
      <Introduction />
      <Collections />
      <Craftsmanship />
      <WhySilks />
      <ConsultCTA />
      <SiteFooter />
    </main>
  );
}

export default SilksPage;
