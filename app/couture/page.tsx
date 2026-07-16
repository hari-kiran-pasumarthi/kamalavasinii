"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Shared gold gradient + defs helpers
   ============================================================ */
const GoldDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`couture-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#EAC77A" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

/* ============================================================
   Couture illustrations
   ============================================================ */

const CoutureDress = ({ id }: { id: string }) => (
  <svg viewBox="0 0 240 220" className="w-full h-full" aria-hidden>
    <defs>
      <radialGradient id={`couture-halo-${id}`} cx="50%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF8EE" stopOpacity="1" />
        <stop offset="100%" stopColor="#F2D9BF" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`couture-body-${id}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F8DDBA" />
        <stop offset="45%" stopColor="#D6A464" />
        <stop offset="100%" stopColor="#8F5B2A" />
      </linearGradient>
      <linearGradient id={`couture-fabric-${id}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FFF4E3" />
        <stop offset="60%" stopColor="#F2D8B3" />
        <stop offset="100%" stopColor="#D6A464" />
      </linearGradient>
    </defs>

    <ellipse cx="120" cy="196" rx="84" ry="10" fill="#EBD6C6" opacity="0.55" />
    <circle cx="120" cy="96" r="62" fill={`url(#couture-halo-${id})`} opacity="0.6" />

    {/* mannequin */}
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M120 35
           C109 35 103 44 103 53
           C103 63 109 69 120 69
           C131 69 137 63 137 53
           C137 44 131 35 120 35Z"
        fill="url(#couture-body-creator)"
        stroke="#8B6A1E"
        strokeWidth="1"
      />
      <path
        d="M120 69
           C104 69 95 82 94 100
           C93 118 100 132 108 145
           L88 188
           C88 193 92 196 97 196
           L143 196
           C148 196 152 193 152 188
           L132 145
           C140 132 147 118 146 100
           C145 82 136 69 120 69Z"
        fill={`url(#couture-fabric-${id})`}
        stroke="#8B6A1E"
        strokeWidth="1.1"
      />
      <path d="M103 100 L90 125" stroke="#8B6A1E" strokeWidth="1" />
      <path d="M137 100 L150 125" stroke="#8B6A1E" strokeWidth="1" />
      <path d="M108 145 L90 188" stroke="#8B6A1E" strokeWidth="1" />
      <path d="M132 145 L150 188" stroke="#8B6A1E" strokeWidth="1" />

      {/* corset detail */}
      <path d="M109 86 L120 96 L131 86" stroke="#8B6A1E" strokeWidth="0.8" />
      <path d="M108 104 L120 116 L132 104" stroke="#8B6A1E" strokeWidth="0.8" />
      <path d="M106 122 L120 135 L134 122" stroke="#8B6A1E" strokeWidth="0.8" />

      {/* embellishment */}
      <path d="M120 93 L124 103 L135 104 L126 110 L129 121 L120 115 L111 121 L114 110 L105 104 L116 103 Z"
        fill="#C8A048"
        opacity="0.75"
      />
    </g>

    {/* sparkles */}
    {[
      { x: 36, y: 56 },
      { x: 202, y: 48 },
      { x: 30, y: 168 },
      { x: 207, y: 170 },
    ].map((s, i) => (
      <path
        key={i}
        d={`M${s.x} ${s.y} l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z`}
        fill="#C8A048"
        opacity="0.68"
      />
    ))}
  </svg>
);

const CoutureThread = ({ id }: { id: string }) => (
  <svg viewBox="0 0 240 180" className="w-full h-full" aria-hidden>
    <defs>
      <linearGradient id={`thread-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FFF3D5" />
        <stop offset="55%" stopColor="#D6A464" />
        <stop offset="100%" stopColor="#8B6A1E" />
      </linearGradient>
    </defs>

    <ellipse cx="120" cy="156" rx="82" ry="10" fill="#EBD6C6" opacity="0.5" />
    <path
      d="M46 126 C62 102 79 88 103 82 C121 78 139 80 158 88 C171 94 183 104 196 122"
      fill="none"
      stroke={`url(#thread-gold-${id})`}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M56 124 C72 105 89 95 104 91 C120 87 137 89 151 95 C164 101 175 111 188 124"
      fill="none"
      stroke="#C8A048"
      strokeWidth="1"
      opacity="0.55"
    />
    <path
      d="M106 83
         C112 68 122 58 136 54
         C149 50 160 52 170 60
         C181 69 186 82 184 95
         C182 107 173 117 160 121
         C146 125 132 122 122 113
         C113 105 109 94 106 83Z"
      fill="#FFF8EE"
      stroke="#8B6A1E"
      strokeWidth="1"
    />
    <path d="M128 48 L148 48 L154 54 L154 72 L148 78 L128 78 L122 72 L122 54 Z" fill="#F4E3C2" stroke="#8B6A1E" strokeWidth="1" />
    <path d="M127 48 L137 33 L149 48" fill="#F4E3C2" stroke="#8B6A1E" strokeWidth="1" />
    <path d="M135 40 L139 48" stroke="#8B6A1E" strokeWidth="1" />
    <path d="M131 62 L150 62" stroke="#8B6A1E" strokeWidth="0.8" />
    <path d="M134 70 L147 70" stroke="#8B6A1E" strokeWidth="0.8" />

    {/* needles + spark */}
    <path d="M182 41 L216 77" stroke={`url(#thread-gold-${id})`} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="184" cy="44" r="3" fill="#C8A048" />
    <path d="M212 74 l1.2 3 l3 1.2 l-3 1.2 l-1.2 3 l-1.2 -3 l-3 -1.2 l3 -1.2 z" fill="#C8A048" opacity="0.8" />
  </svg>
);

/* ============================================================
   Couture collection cards
   ============================================================ */

type CoutureCollection = {
  title: string;
  desc: string;
  bg: string;
  accent: string;
  style: string;
  icon: "dress" | "thread";
};

const COUTURE_COLLECTIONS: CoutureCollection[] = [
  {
    title: "Bridal Couture",
    desc: "Hand-finished ensembles shaped for weddings, sangeets, and heirloom bridal moments.",
    bg: "card-rose",
    accent: "#B23A48",
    style: "Floral embroidery, zari, and layered drape",
    icon: "dress",
  },
  {
    title: "Evening Luxe",
    desc: "Elegant silhouettes for receptions, galas, and refined celebrations after sunset.",
    bg: "card-ivory",
    accent: "#3B62A6",
    style: "Sculpted drapes and crystal accents",
    icon: "thread",
  },
  {
    title: "Fusion Edit",
    desc: "A modern balance of traditional craft and contemporary tailoring.",
    bg: "card-mint",
    accent: "#4B8A5A",
    style: "Structured blouses with fluid skirts",
    icon: "dress",
  },
  {
    title: "Temple Ceremony",
    desc: "Rich, graceful ensembles designed for auspicious occasions and sacred gatherings.",
    bg: "card-peach",
    accent: "#D96C4A",
    style: "Silk textures with antique gold borders",
    icon: "thread",
  },
  {
    title: "Cocktail Statement",
    desc: "Bold couture pieces that turn every entrance into a memorable reveal.",
    bg: "card-sage",
    accent: "#7C90A6",
    style: "Sharp necklines and dramatic flow",
    icon: "dress",
  },
  {
    title: "Custom Atelier",
    desc: "A fully bespoke creation built around your body, your story, and your occasion.",
    bg: "card-blush",
    accent: "#8B6A1E",
    style: "From sketch to final fitting",
    icon: "thread",
  },
];

/* ============================================================
   Shared card icon
   ============================================================ */
const CoutureCardIcon = ({ kind, id }: { kind: "dress" | "thread"; id: string }) => {
  if (kind === "dress") return <CoutureDress id={id} />;
  return <CoutureThread id={id} />;
};

/* ============================================================
   Page sections
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
            Kamalavasinii Couture
          </span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[42px] md:text-[66px] lg:text-[78px] font-semibold maroon-text leading-[0.98] tracking-[0.02em]"
        >
          Crafted <span className="italic gold-text">For Presence</span>
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
          Discover couture that feels personal, sculpted, and unforgettable — made
          with exquisite fabrics, hand embroidery, and a design language that is
          as graceful as it is commanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collections"
            className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium"
          >
            EXPLORE COUTURE
          </a>
          <a
            href="#consult"
            className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium"
          >
            BOOK CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section
      className="relative py-16 md:py-20 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
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
          <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Atelier Story</span>
          <span className="h-px w-10 bg-[#B8860B]/70" />
        </div>

        <h2 className="font-serif text-[30px] md:text-[42px] font-semibold maroon-text leading-tight">
          Couture That Begins With <span className="italic gold-text">You</span>.
        </h2>

        <div className="mt-4 flex justify-center">
          <svg width="70" height="18" viewBox="0 0 70 18" aria-hidden>
            <path d="M0 9 L28 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M42 9 L70 9" stroke="#B8860B" strokeWidth="1" />
            <path d="M35 2 C30 6 30 12 35 16 C40 12 40 6 35 2 Z" fill="#B8860B" />
          </svg>
        </div>

        <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          At Kamalavasinii, couture is designed as a personal experience — not just
          a garment. Every drape, seam, silhouette, and embellishment is created
          around the occasion, the mood, and the wearer&apos;s identity. Our atelier
          translates your vision into something refined, wearable, and deeply memorable.
        </p>

        <p className="mt-4 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
          From bridal splendour to evening elegance, each piece is tailored with
          precision, hand-finished by artisans, and elevated through thoughtful detail.
        </p>
      </motion.div>
    </section>
  );
}

function Collections() {
  return (
    <section
      id="collections"
      className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
    >
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
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">Couture Selections</span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Couture <span className="italic gold-text">Collections</span>
          </h2>

          <p className="mt-4 font-sans text-[15px] text-[#5a3a3f] max-w-xl mx-auto">
            Six signatures, each shaped for a different moment, mood, and silhouette.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {COUTURE_COLLECTIONS.map((c, i) => (
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

              <div className="w-full max-w-[230px] mb-3">
                <CoutureCardIcon kind={c.icon} id={c.title.toLowerCase().replace(/\s+/g, "-")} />
              </div>

              <h3 className="font-serif tracking-[0.08em] text-[19px] md:text-[22px] maroon-text font-semibold">
                {c.title}
              </h3>

              <p className="mt-2 font-sans text-[13px] text-[#5a3a3f] leading-relaxed max-w-xs">
                {c.desc}
              </p>

              <p
                className="mt-4 text-[12px] font-sans tracking-[0.18em] uppercase"
                style={{ color: c.accent }}
              >
                {c.style}
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

function CouturePagePart1() {
   return (
      <main className="min-h-screen bg-[#FDF7EF]">
         <SiteHeader activeHref="/couture" />
         <Hero />
         <Introduction />
         <Collections />
         <Craftsmanship />
         <BespokeJourney />
         <ConsultCTA />
         <SiteFooter />
      </main>
   );
}

/* ============================================================
   Couture craft + journey content
   ============================================================ */

const CRAFTSMANSHIP = [
  {
    title: "Hand Embroidery",
    desc: "Intricate zardozi, resham, sequins, and beadwork placed by artisans with patient precision.",
    tone: "#B23A48",
  },
  {
    title: "Drape Engineering",
    desc: "Every silhouette is balanced to move beautifully, flatter naturally, and photograph flawlessly.",
    tone: "#4B8A5A",
  },
  {
    title: "Private Fittings",
    desc: "A personalised atelier process with careful refinements at each stage of the creation.",
    tone: "#3B62A6",
  },
];

const JOURNEY_STEPS = [
  {
    n: "01",
    title: "Style Consultation",
    desc: "We understand your occasion, your taste, and the feeling you want the outfit to create.",
  },
  {
    n: "02",
    title: "Fabric Curation",
    desc: "Silks, organza, velvet, brocade, and fluid blends are selected based on structure and flow.",
  },
  {
    n: "03",
    title: "Sketching & Draping",
    desc: "Initial sketches and toile concepts are shaped around your body and your preferred silhouette.",
  },
  {
    n: "04",
    title: "Embroidery Development",
    desc: "Ornamentation is refined by hand, with placement designed to frame movement and detail.",
  },
  {
    n: "05",
    title: "Final Atelier Finish",
    desc: "The couture piece is completed, fitted, and polished into a refined final presentation.",
  },
];

function Craftsmanship() {
  return (
    <section
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
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
              Atelier Craft
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            Couture Made With <span className="italic gold-text">Precision</span>.
          </h2>

          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
            Each couture piece is built through a considered process — from fabric selection to
            final finishing — with the focus always on elegance, fit, and long-lasting beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CRAFTSMANSHIP.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="rounded-[24px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 md:p-7 shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500"
            >
              <div
                className="w-14 h-14 rounded-full mb-5 flex items-center justify-center border border-[#C8A048]/30"
                style={{
                  background: `linear-gradient(135deg, #FFF3D5 0%, ${item.tone}22 100%)`,
                }}
              >
                <div
                  className="w-7 h-7 rounded-full"
                  style={{ background: item.tone }}
                />
              </div>

              <h3 className="font-serif text-[20px] md:text-[22px] font-semibold maroon-text">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-[13.5px] text-[#5a3a3f] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BespokeJourney() {
  return (
    <section
      className="relative cream-bg py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
    >
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
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Bespoke Journey
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h2 className="font-serif text-[34px] md:text-[50px] font-semibold maroon-text leading-[1.1] max-w-4xl mx-auto">
            From Vision To <span className="italic gold-text">Atelier Finish</span>.
          </h2>

          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            A couture piece moves through five focused stages, each one designed to keep the
            process intimate, refined, and collaborative.
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
            {JOURNEY_STEPS.map((s, i) => (
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
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#8A2A36] to-[#5E1420] text-[#F1D07A] text-[11px] font-serif font-semibold flex items-center justify-center shadow-md">
                      {s.n}
                    </span>
                    <span className="absolute inset-[-6px] rounded-full border border-[#C8A048]/25" />
                    <svg
                      viewBox="0 0 24 24"
                      width="26"
                      height="26"
                      fill="none"
                      stroke="#8B6A1E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {i === 0 && (
                        <>
                          <path d="M4 12h16" />
                          <path d="M12 4v16" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <path d="M5 19h14" />
                          <path d="M8 5l8 14" />
                          <path d="M16 5l-8 14" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <path d="M6 6h12v12H6z" />
                          <path d="M8 8h8v8H8z" />
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <path d="M5 12c2-4 6-6 7-6s5 2 7 6" />
                          <path d="M5 12c2 4 6 6 7 6s5-2 7-6" />
                        </>
                      )}
                      {i === 4 && (
                        <>
                          <path d="M6 12l4 4 8-8" />
                          <path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" />
                        </>
                      )}
                    </svg>
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

                {i < JOURNEY_STEPS.length - 1 && (
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
    <section
      id="consult"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
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
            <svg
              key={i}
              viewBox="0 0 60 60"
              className={`absolute ${o.c} w-10 h-10 opacity-70 ${o.tr}`}
              aria-hidden
            >
              <path
                d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4"
                stroke="#C8A048"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
          ))}

          <div className="flex justify-center mb-4">
            <LotusLogo size={54} />
          </div>

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Couture Consultation
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h3 className="font-serif text-[28px] md:text-[42px] font-semibold maroon-text leading-tight max-w-3xl mx-auto">
            Begin Your <span className="italic gold-text">Couture</span> Journey.
          </h3>

          <p className="mt-4 font-sans text-[14px] md:text-[16px] text-[#5a3a3f] max-w-xl mx-auto">
            Share your occasion, inspiration, and preferred silhouette — and let our atelier
            shape it into something unforgettable.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-2">
              BOOK CONSULTATION
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
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
                <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.42 0 .04 5.38.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.03 21.3h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.68.96.98-3.58-.24-.37a9.9 9.9 0 01-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.29.5 1.73.64.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z" />
              </svg>
              WHATSAPP US
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   Experience highlights
   ============================================================ */

const EXPERIENCE_POINTS = [
  {
    title: "Private Styling",
    desc: "One-on-one guidance to match silhouette, fabric, and occasion with elegant precision.",
  },
  {
    title: "Heritage Detailing",
    desc: "Artisan techniques that bring depth, richness, and timeless character to every piece.",
  },
  {
    title: "Made To Measure",
    desc: "A couture fit tailored around you, ensuring comfort, confidence, and a flawless finish.",
  },
];

function AtelierExperience() {
  return (
    <section
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden cream-bg"
    >
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-14 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-14 w-[240px] h-[240px]" opacity={0.06} />
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
              Atelier Experience
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>

          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-tight">
            A Couture Experience That Feels <span className="italic gold-text">Personal</span>.
          </h2>

          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.9]">
            Every stage of the journey is designed to feel intimate, calm, and exceptionally
            refined — so the final garment carries both beauty and meaning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {EXPERIENCE_POINTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="rounded-[24px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 md:p-7 shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] border border-[#C8A048]/30">
                <span className="w-6 h-6 rounded-full bg-[#8B6A1E] opacity-80" />
              </div>

              <h3 className="font-serif text-[20px] md:text-[22px] font-semibold maroon-text">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-[13.5px] text-[#5a3a3f] leading-relaxed">
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
   Final page
   ============================================================ */

function CouturePage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/couture" />
      <Hero />
      <Introduction />
      <Collections />
      <Craftsmanship />
      <BespokeJourney />
      <AtelierExperience />
      <ConsultCTA />
      <SiteFooter />
    </main>
  );
}

export default CouturePage;
