"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Shared gold gradient + defs helpers
   ============================================================ */
const GoldDefs = ({ id }) => (
  <defs>
    <linearGradient id={`gm-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#EAC77A" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

/* ============================================================
   Gemstone illustrations — faceted stones on a soft cushion
   ============================================================ */
const GemStone = ({ id, colors, kind = "diamond" }) => (
  <svg viewBox="0 0 220 160" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id={`gm-body-${id}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor={colors.light} />
        <stop offset="50%" stopColor={colors.mid} />
        <stop offset="100%" stopColor={colors.dark} />
      </linearGradient>
      <radialGradient id={`gm-shine-${id}`} cx="35%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <GoldDefs id={id} />

    {/* Soft cushion glow */}
    <ellipse cx="110" cy="130" rx="80" ry="10" fill="#EBD6C6" opacity="0.55" />
    <ellipse cx="110" cy="90" rx="72" ry="42" fill={colors.light} opacity="0.15" />

    {kind === "diamond" && (
      <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
        <path d="M60 60 L80 30 L140 30 L160 60 L110 130 Z" fill={`url(#gm-body-${id})`} />
        <path d="M60 60 L160 60" />
        <path d="M80 30 L110 60 L140 30" strokeWidth="0.6" />
        <path d="M60 60 L110 60 L110 130" strokeWidth="0.6" />
        <path d="M160 60 L110 60" strokeWidth="0.6" />
        {/* highlight */}
        <path d="M78 34 L100 34 L88 54" fill="url(#gm-shine-${id})" stroke="none" />
        <path d="M84 38 L96 38 L90 50" fill="#FFFFFF" opacity="0.6" stroke="none" />
      </g>
    )}
    {kind === "oval" && (
      <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
        <path d="M55 80 L75 40 L145 40 L165 80 L145 120 L75 120 Z" fill={`url(#gm-body-${id})`} />
        <path d="M55 80 L165 80" strokeWidth="0.6" />
        <path d="M75 40 L110 80 L145 40 M75 120 L110 80 L145 120" strokeWidth="0.5" />
        <ellipse cx="95" cy="60" rx="10" ry="4" fill="#FFFFFF" opacity="0.55" />
      </g>
    )}
    {kind === "emerald-cut" && (
      <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
        <path d="M55 55 L75 40 L145 40 L165 55 L165 105 L145 120 L75 120 L55 105 Z" fill={`url(#gm-body-${id})`} />
        <path d="M65 60 L155 60 L155 100 L65 100 Z" strokeWidth="0.6" />
        <path d="M65 60 L55 55 M155 60 L165 55 M65 100 L55 105 M155 100 L165 105" strokeWidth="0.5" />
        <path d="M65 70 L155 70 M65 82 L155 82 M65 92 L155 92" strokeWidth="0.4" opacity="0.6" />
        <path d="M80 45 L92 55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
      </g>
    )}
    {kind === "round" && (
      <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
        <circle cx="110" cy="80" r="55" fill={`url(#gm-body-${id})`} />
        {/* Facet lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          const x = Math.round((110 + Math.cos(rad) * 55) * 100) / 100;
          const y = Math.round((80 + Math.sin(rad) * 55) * 100) / 100;
          return <path key={i} d={`M110 80 L${x} ${y}`} strokeWidth="0.4" opacity="0.7" />;
        })}
        <circle cx="110" cy="80" r="22" fill="none" strokeWidth="0.6" />
        <path d="M92 58 L102 68" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.75" />
        <circle cx="96" cy="66" r="3" fill="#FFFFFF" opacity="0.7" />
      </g>
    )}
    {kind === "pearl" && (
      <g>
        <circle cx="110" cy="82" r="50" fill={`url(#gm-body-${id})`} />
        <circle cx="110" cy="82" r="50" fill={`url(#gm-shine-${id})`} />
        <ellipse cx="92" cy="62" rx="14" ry="8" fill="#FFFFFF" opacity="0.7" />
        <ellipse cx="90" cy="60" rx="6" ry="3" fill="#FFFFFF" opacity="0.95" />
        <circle cx="110" cy="82" r="50" fill="none" stroke="#8B6A1E" strokeWidth="0.4" opacity="0.4" />
      </g>
    )}
    {kind === "coral" && (
      <g stroke="#8B6A1E" strokeWidth="0.8" strokeLinejoin="round">
        {/* Branching coral */}
        <path d="M110 130 L110 90 L95 70 L80 55 L85 40 M95 70 L75 55 L60 45" strokeWidth="4" stroke={colors.mid} fill="none" />
        <path d="M110 90 L128 70 L142 55 L138 40 M128 70 L148 55 L165 42" strokeWidth="4" stroke={colors.mid} fill="none" />
        <path d="M110 90 L110 60 L100 42" strokeWidth="4" stroke={colors.mid} fill="none" />
        <path d="M110 130 L110 90 L95 70 L80 55 L85 40 M95 70 L75 55 L60 45" strokeWidth="1.6" stroke={colors.dark} fill="none" opacity="0.5" />
        {/* tips */}
        {[
          [85, 40], [60, 45], [138, 40], [165, 42], [100, 42], [80, 55], [148, 55],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill={colors.light} stroke={colors.dark} strokeWidth="0.5" />
        ))}
      </g>
    )}

    {/* Sparkles around */}
    {[
      { x: 30, y: 30 }, { x: 190, y: 30 }, { x: 22, y: 130 }, { x: 200, y: 128 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z`}
        fill="#C8A048"
        opacity="0.7"
      />
    ))}
  </svg>
);

const COLLECTIONS = [
  {
    title: "Ruby",
    desc: "The fiery stone of passion, power and the eternal sun.",
    bg: "card-rose",
    colors: { light: "#F6B0B8", mid: "#B23A48", dark: "#5E1420" },
    kind: "oval",
  },
  {
    title: "Emerald",
    desc: "A living green — symbol of growth, wisdom and prosperity.",
    bg: "card-mint",
    colors: { light: "#B7E3C1", mid: "#4B8A5A", dark: "#1F4A2C" },
    kind: "emerald-cut",
  },
  {
    title: "Sapphire",
    desc: "The deep blue of the heavens — clarity, calm and truth.",
    bg: "card-ivory",
    colors: { light: "#B1C4EA", mid: "#3B62A6", dark: "#1B305D" },
    kind: "oval",
  },
  {
    title: "Pearl",
    desc: "Born of the sea — purity, moonlight and quiet grace.",
    bg: "card-blush",
    colors: { light: "#FBF5EA", mid: "#EADFCB", dark: "#B7A688" },
    kind: "pearl",
  },
  {
    title: "Coral",
    desc: "A red bloom from the ocean — vitality, protection and warmth.",
    bg: "card-peach",
    colors: { light: "#F4B4A2", mid: "#D96C4A", dark: "#8E3419" },
    kind: "coral",
  },
  {
    title: "Diamond",
    desc: "The eternal stone — clarity, strength and unbreakable love.",
    bg: "card-sage",
    colors: { light: "#F0F5FA", mid: "#C6D4E0", dark: "#7C90A6" },
    kind: "round",
  },
];

/* ============================================================
   Symbolism items
   ============================================================ */
const SymbolItem = ({ title, meaning, colors, kind }) => (
  <div className="flex items-start gap-4 group">
    <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] border border-[#C8A048]/40 shadow-[0_10px_25px_-10px_rgba(200,160,72,0.45)] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
      <div className="w-14 h-14 md:w-16 md:h-16">
        <GemStone id={`sym-${title.toLowerCase()}`} colors={colors} kind={kind} />
      </div>
    </div>
    <div>
      <h4 className="font-serif text-[18px] md:text-[20px] font-semibold maroon-text tracking-wide">
        {title}
      </h4>
      <p className="mt-1 font-sans text-[13.5px] text-[#5a3a3f] leading-relaxed">
        {meaning}
      </p>
    </div>
  </div>
);

const SYMBOLS = [
  { title: "Ruby",     meaning: "Ruled by the Sun — courage, vitality and leadership.",  colors: { light: "#F6B0B8", mid: "#B23A48", dark: "#5E1420" }, kind: "oval" },
  { title: "Emerald",  meaning: "Ruled by Mercury — intellect, harmony and abundance.",  colors: { light: "#B7E3C1", mid: "#4B8A5A", dark: "#1F4A2C" }, kind: "emerald-cut" },
  { title: "Sapphire", meaning: "Ruled by Saturn — discipline, wisdom and destiny.",     colors: { light: "#B1C4EA", mid: "#3B62A6", dark: "#1B305D" }, kind: "oval" },
  { title: "Pearl",    meaning: "Ruled by the Moon — emotional peace and inner light.",  colors: { light: "#FBF5EA", mid: "#EADFCB", dark: "#B7A688" }, kind: "pearl" },
  { title: "Coral",    meaning: "Ruled by Mars — protection, energy and courage.",       colors: { light: "#F4B4A2", mid: "#D96C4A", dark: "#8E3419" }, kind: "coral" },
  { title: "Diamond",  meaning: "Ruled by Venus — enduring love and refinement.",        colors: { light: "#F0F5FA", mid: "#C6D4E0", dark: "#7C90A6" }, kind: "round" },
];

/* ============================================================
   Selection process step icons
   ============================================================ */
const IconGold = ({ id, children }) => (
  <svg
    viewBox="0 0 80 80"
    className="w-11 h-11"
    fill="none"
    stroke={`url(#gm-gold-${id})`}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <GoldDefs id={id} />
    {children}
  </svg>
);

const StepConsult = () => (
  <IconGold id="consult">
    <path d="M14 22 C14 16 20 12 26 12 L54 12 C60 12 66 16 66 22 L66 46 C66 52 60 56 54 56 L34 56 L22 66 L22 56 C18 55 14 52 14 46 Z" />
    <path d="M28 30 L52 30 M28 40 L46 40" strokeWidth="1" />
    <circle cx="60" cy="24" r="3" fill={`url(#gm-gold-consult)`} stroke="none" />
  </IconGold>
);

const StepSelect = () => (
  <IconGold id="select">
    {/* Faceted gem being selected */}
    <path d="M20 44 L34 26 L54 26 L68 44 L44 68 Z" />
    <path d="M20 44 L68 44 M34 26 L44 44 L54 26" strokeWidth="0.9" />
    <path d="M40 30 L46 30" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.85" />
    {/* Hand / tweezers */}
    <path d="M62 8 L52 22 M64 6 L58 20" strokeWidth="1.4" />
    <circle cx="60" cy="8" r="2" fill={`url(#gm-gold-select)`} stroke="none" />
  </IconGold>
);

const StepCertify = () => (
  <IconGold id="certify">
    <path d="M18 14 L54 14 L62 22 L62 62 L18 62 Z" />
    <path d="M54 14 L54 22 L62 22" />
    <path d="M26 30 L54 30 M26 38 L48 38" strokeWidth="0.9" />
    {/* seal */}
    <circle cx="30" cy="52" r="7" fill={`url(#gm-gold-certify)`} fillOpacity="0.25" />
    <circle cx="30" cy="52" r="7" />
    <path d="M27 52 L30 55 L34 49" strokeWidth="1.3" />
    {/* ribbon */}
    <path d="M22 58 L22 68 L26 64 L30 68 L30 58" strokeWidth="1" />
  </IconGold>
);

const StepDesign = () => (
  <IconGold id="design">
    <path d="M14 20 L46 20 L54 28 L54 60 L14 60 Z" />
    <path d="M46 20 L46 28 L54 28" />
    {/* Sketch of ring w/ gem */}
    <ellipse cx="30" cy="48" rx="10" ry="4" />
    <path d="M25 36 L30 30 L35 36 L32 44 L28 44 Z" fill={`url(#gm-gold-design)`} fillOpacity="0.35" />
    {/* Pencil */}
    <path d="M52 34 L70 52" />
    <path d="M50 32 L54 28 L58 32 L54 36 Z" fill={`url(#gm-gold-design)`} stroke="none" />
    <path d="M70 52 L74 56 L70 60 L66 56 Z" fill={`url(#gm-gold-design)`} stroke="none" />
  </IconGold>
);

const StepCreate = () => (
  <IconGold id="create">
    {/* Finished ring with gem */}
    <ellipse cx="40" cy="52" rx="24" ry="8" strokeWidth="2.4" />
    <ellipse cx="40" cy="52" rx="24" ry="8" strokeWidth="0.6" stroke="#8B6A1E" />
    <g transform="translate(40 30)">
      <path d="M-10 0 L0 -14 L10 0 L6 12 L-6 12 Z" fill={`url(#gm-gold-create)`} fillOpacity="0.35" />
      <path d="M-10 0 L10 0 M-6 12 L0 -14 L6 12" strokeWidth="0.7" />
    </g>
    {/* sparkles */}
    <path d="M64 14 l1.4 3.6 l3.6 1.4 l-3.6 1.4 l-1.4 3.6 l-1.4 -3.6 l-3.6 -1.4 l3.6 -1.4 z" fill={`url(#gm-gold-create)`} stroke="none" />
    <path d="M16 20 l1.2 3 l3 1.2 l-3 1.2 l-1.2 3 l-1.2 -3 l-3 -1.2 l3 -1.2 z" fill={`url(#gm-gold-create)`} stroke="none" opacity="0.8" />
  </IconGold>
);

const STEPS = [
  { n: "01", title: "Consultation",     desc: "Share your intent, occasion and astrological guidance.", Icon: StepConsult },
  { n: "02", title: "Stone Selection",  desc: "Handpicked gems shown to you for approval.",              Icon: StepSelect  },
  { n: "03", title: "Certification",    desc: "Every stone is lab-certified for purity and authenticity.",Icon: StepCertify},
  { n: "04", title: "Jewellery Design", desc: "Custom setting sketched around your chosen stone.",       Icon: StepDesign  },
  { n: "05", title: "Final Creation",   desc: "Hand-set, polished and delivered as a lifelong heirloom.", Icon: StepCreate  },
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
            Ratna Mandira
          </span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[42px] md:text-[66px] lg:text-[78px] font-semibold maroon-text leading-[0.98] tracking-[0.02em]"
        >
          Precious <span className="italic gold-text">Gemstones</span>
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
          Discover carefully selected gemstones that bring beauty, symbolism, and
          individuality to every bespoke creation — chosen with intention, set with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#collections" className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium">
            EXPLORE GEMSTONES
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
          Every Stone Carries A <span className="italic gold-text">Story</span>.
        </h2>
        <div className="mt-4 flex justify-center">
          <svg width="70" height="18" viewBox="0 0 70 18" aria-hidden>
            <path d="M0 9 L28 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M42 9 L70 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M35 2 C30 6 30 12 35 16 C40 12 40 6 35 2 Z" fill="#B8860B" />
          </svg>
        </div>
        <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          At Kamalavasinii, choosing a gemstone is never about ornamentation alone.
          Each stone is selected by hand — for its cut, its clarity, its colour and,
          most importantly, its meaning. Our master gemologists work alongside you to
          understand your occasion, your birth chart, your intent — and then curate
          stones that align with your story.
        </p>
        <p className="mt-4 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          Every gemstone we set is lab-certified, ethically sourced and quietly
          extraordinary. It is not a stone. It is a signature.
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Signature Stones</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Gemstone <span className="italic gold-text">Collections</span>
          </h2>
          <p className="mt-4 font-sans text-[15px] text-[#5a3a3f] max-w-xl mx-auto">
            Six stones, six stories — chosen for their beauty and their meaning.
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
                <GemStone
                  id={c.title.toLowerCase()}
                  colors={c.colors}
                  kind={c.kind}
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

function Symbolism() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture" style={{ background: "#FDF7EF" }}>
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-40px] top-14 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-14 w-[220px] h-[220px]" opacity={0.06} />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Meaning &amp; Symbolism
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            The Nine Sacred <span className="italic gold-text">Gems</span> Of India.
          </h2>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
            In Indian tradition, gemstones are not decoration — they are companions.
            Each ruling stone corresponds to a celestial body and carries a specific
            energy, said to shape the wearer&apos;s destiny across generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SYMBOLS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-[22px] bg-[#FFF9F2] border border-[#EFE1CC] p-5 md:p-6 shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500"
            >
              <SymbolItem {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectionProcess() {
  return (
    <section className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-16 w-[220px] h-[220px]" opacity={0.06} />
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Selection Process</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[34px] md:text-[50px] font-semibold maroon-text leading-[1.1] max-w-4xl mx-auto">
            From Stone To <span className="italic gold-text">Signature</span>.
          </h2>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Five careful stages — every step hand-guided by our master gemologist.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[64px] left-[8%] right-[8%] h-px pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8A048]/70" />
              ))}
            </div>
          </div>
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
              Gemstone Consultation
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h3 className="font-serif text-[28px] md:text-[42px] font-semibold maroon-text leading-tight max-w-3xl mx-auto">
            Choose The Perfect{" "}
            <span className="italic gold-text">Gemstone</span> For Your Story.
          </h3>

          <p className="mt-4 font-sans text-[14px] md:text-[16px] text-[#5a3a3f] max-w-xl mx-auto">
            Speak with our master gemologists — bring your intent, we&apos;ll bring the stones.
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

function GemstonesPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/gemstones" />
      <Hero />
      <Introduction />
      <Collections />
      <Symbolism />
      <SelectionProcess />
      <ConsultCTA />
      <SiteFooter />
    </main>
  );
}

export default GemstonesPage;
