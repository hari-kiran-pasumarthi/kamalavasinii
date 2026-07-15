"use client";

import React from "react";
import { motion } from "framer-motion";
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
  <svg
    viewBox="0 0 220 200"
    className="w-full h-full"
    aria-hidden
  >
    <GoldDefs id={id} />

    <ellipse
      cx="110"
      cy="185"
      rx="75"
      ry="10"
      fill="#EBD6C6"
      opacity=".55"
    />

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
      <circle
        cx="110"
        cy="5"
        r="2.5"
        fill="#C8A048"
        stroke="none"
      />

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
        d={`M${x} ${y} l2 5 l5 2 l-5 2 l-2 5 l-2-5 l-5-2 l5-2 z`}
        fill="#C8A048"
      />
    ))}
  </svg>
);

const PalaceIllustration = ({ id }: { id: string }) => (
  <svg
    viewBox="0 0 220 200"
    className="w-full h-full"
    aria-hidden
  >
    <GoldDefs id={id} />

    <ellipse
      cx="110"
      cy="182"
      rx="70"
      ry="10"
      fill="#EBD6C6"
      opacity=".55"
    />

    <g
      fill="none"
      stroke={`url(#heritage-gold-${id})`}
      strokeWidth="2"
    >
      <rect
        x="55"
        y="60"
        width="110"
        height="105"
        rx="3"
      />

      <path d="M70 60 L70 165" />
      <path d="M150 60 L150 165" />

      <path d="M55 95 H165" />

      <path d="M82 95 V60" />
      <path d="M110 95 V60" />
      <path d="M138 95 V60" />

      <path d="M55 60 Q110 10 165 60" />

      <path d="M96 165 V122 H124 V165" />

      <circle
        cx="110"
        cy="42"
        r="5"
      />
    </g>
  </svg>
);

/* ============================================================
   Heritage Categories
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

function HeritageCard({
    title,
    desc,
    bg,
    icon,
}: any) {

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`${bg} category-card rounded-[28px] p-8 text-center shadow-[0_10px_30px_-15px_rgba(107,30,40,0.15)]`}
        >

            <div className="w-full max-w-[180px] mx-auto mb-5">

                {icon === "temple"
                    ? <TempleIllustration id={title}/>
                    : <PalaceIllustration id={title}/>
                }

            </div>

            <h3 className="font-serif text-[22px] font-semibold maroon-text">
                {title}
            </h3>

            <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#5a3a3f]">
                {desc}
            </p>

        </motion.div>
    );

}

/* ============================================================
   Hero
============================================================ */

function Hero() {

    return (

<section className="relative watercolor-bg paper-texture overflow-hidden py-24 lg:py-32">

<div className="pointer-events-none absolute inset-0">

<LotusMotif
className="absolute left-[-60px] top-10 w-[280px]"
opacity={0.07}
/>

<LotusMotif
className="absolute right-[-40px] top-20 w-[240px]"
opacity={0.07}
/>

</div>

<div className="max-w-[1100px] mx-auto text-center relative z-10">

<motion.div
initial={{opacity:0,scale:.9}}
animate={{opacity:1,scale:1}}
transition={{duration:.8}}
>

<LotusLogo size={90}/>

</motion.div>

<div className="mt-6 inline-flex items-center gap-3 text-[#B8860B]">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">
Our Heritage
</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h1 className="mt-6 font-serif text-[44px] md:text-[70px] font-semibold maroon-text leading-none">

A Legacy Of

<span className="italic gold-text">
 Craftsmanship
</span>

</h1>

<p className="mt-7 max-w-2xl mx-auto font-sans text-[16px] text-[#5a3a3f] leading-relaxed">

Every Kamalavasinii creation is inspired by India's timeless heritage,
where temple architecture, royal artistry and generations of craftsmanship
come together to create jewellery with enduring meaning.

</p>

<div className="mt-10 flex justify-center gap-4">

<a
href="#heritage"
className="btn-primary-gradient px-9 py-4 rounded-full tracking-[0.2em] text-[12px]"
>

EXPLORE HERITAGE

</a>

<a
href="#consult"
className="btn-outline-gold px-9 py-4 rounded-full tracking-[0.2em] text-[12px]"
>

BOOK CONSULTATION

</a>

</div>

</div>

</section>

);

}

/* ============================================================
   Introduction
============================================================ */

function Introduction(){

return(

<section
className="py-20 px-4 md:px-8 lg:px-10 paper-texture"
style={{background:"#FDF7EF"}}
>

<div className="max-w-3xl mx-auto text-center">

<div className="inline-flex items-center gap-3 text-[#B8860B]">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Our Story

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="mt-5 font-serif text-[40px] maroon-text">

Honouring India's

<span className="italic gold-text">
 Timeless Traditions
</span>

</h2>

<p className="mt-6 font-sans text-[#5a3a3f] leading-[1.9]">

Our heritage is rooted in centuries of Indian artistry.
Every design celebrates the stories carved into temple walls,
the grandeur of royal courts, and the skill passed from one
generation of artisans to the next.

</p>

</div>

</section>

);

}

/* ============================================================
   Heritage Collections
============================================================ */

function HeritageCollections(){

return(

<section
id="heritage"
className="cream-bg py-20 px-4 md:px-8 lg:px-10"
>

<div className="max-w-[1400px] mx-auto">

<div className="text-center mb-16">

<h2 className="font-serif text-[46px] maroon-text">

Our Heritage

<span className="italic gold-text">
 Inspirations
</span>

</h2>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{HERITAGE_COLLECTIONS.map((item)=>(

<HeritageCard
key={item.title}
{...item}
/>

))}

</div>

</div>

</section>

);

}
/* ============================================================
   Legacy Timeline Data
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

/* ============================================================
   Traditional Craft Techniques
============================================================ */

const CRAFT_TECHNIQUES = [
  {
    title: "Hand Engraving",
    description:
      "Every fine line is carefully carved by experienced artisans, giving every creation depth and individuality."
  },
  {
    title: "Filigree",
    description:
      "Delicate gold wires are woven together into intricate patterns inspired by nature and architecture."
  },
  {
    title: "Temple Embellishment",
    description:
      "Inspired by South Indian temple ornaments, every motif celebrates devotion and timeless elegance."
  },
  {
    title: "Stone Setting",
    description:
      "Every gemstone is individually placed to maximize brilliance while preserving traditional craftsmanship."
  }
];

/* ============================================================
   Legacy Timeline
============================================================ */

function LegacyTimeline() {
  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-10 paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">
              Legacy
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[42px] md:text-[52px] maroon-text">
            Centuries Of
            <span className="italic gold-text">
              {" "}Craftsmanship
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto font-sans text-[#5a3a3f] leading-relaxed">
            Every Kamalavasinii creation reflects generations of artistry,
            preserving India's cultural richness while embracing modern refinement.
          </p>

        </motion.div>

        <div className="relative">

          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">

            {LEGACY_TIMELINE.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .15
                }}
                viewport={{ once: true }}
                className="relative text-center"
              >

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] mx-auto flex items-center justify-center border border-[#C8A048] shadow-lg">

                  <span className="font-serif text-[#8B6A1E] font-semibold">
                    {item.year}
                  </span>

                </div>

                <div className="mt-8 rounded-[24px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)]">

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
   Traditional Craftsmanship
============================================================ */

function TraditionalCraftsmanship() {

  return (

<section className="cream-bg py-24 px-4 md:px-8 lg:px-10">

<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="uppercase tracking-[0.4em] text-[11px]">
Traditional Techniques
</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-[46px] maroon-text">

Mastering

<span className="italic gold-text">
 Ancient Techniques
</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-[#5a3a3f] leading-relaxed">

Our artisans preserve centuries-old jewellery making traditions,
combining patience, precision and artistic excellence in every creation.

</p>

</div>

<div className="grid md:grid-cols-2 gap-8">

{CRAFT_TECHNIQUES.map((craft,index)=>(

<motion.div

key={craft.title}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.15}}

viewport={{once:true}}

whileHover={{y:-6}}

className="rounded-[28px] bg-[#FFF9F2] border border-[#EFE1CC] p-8 shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)] hover:border-[#C8A048] transition-all"

>

<div className="flex items-center gap-5">

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] flex items-center justify-center">

<svg
viewBox="0 0 24 24"
width="26"
height="26"
fill="none"
stroke="#8B6A1E"
strokeWidth="1.7"
>

<path d="M12 3L19 7V17L12 21L5 17V7Z"/>

<path d="M12 7V17"/>

<path d="M5 7L12 11L19 7"/>

</svg>

</div>

<div>

<h3 className="font-serif text-[24px] maroon-text">

{craft.title}

</h3>

<p className="mt-3 text-[#5a3a3f] leading-relaxed">

{craft.description}

</p>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

  );

}

/* ============================================================
   Indian Art Forms
============================================================ */

const ART_FORMS = [
  {
    title: "Lotus",
    subtitle: "Purity & Prosperity",
    description:
      "The lotus symbolizes spiritual awakening, beauty, and timeless elegance. Its graceful form inspires many of our signature motifs.",
    icon: "✿",
  },
  {
    title: "Peacock",
    subtitle: "Grace & Royalty",
    description:
      "India's national bird represents magnificence, confidence, and artistic expression through intricate feather-inspired detailing.",
    icon: "🦚",
  },
  {
    title: "Temple Bells",
    subtitle: "Sacred Harmony",
    description:
      "Traditional temple architecture inspires ornamental curves, sacred symmetry, and intricate gold craftsmanship.",
    icon: "🔔",
  },
  {
    title: "Paisley",
    subtitle: "Abundance",
    description:
      "The timeless mango motif symbolizes fertility, prosperity, and continuous growth across Indian heritage.",
    icon: "❋",
  },
];

function IndianArtForms() {
  return (
    <section
      className="relative py-24 px-4 md:px-8 lg:px-10 paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">
              Artistic Inspirations
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[44px] maroon-text">
            Symbols That
            <span className="italic gold-text"> Endure</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[#5a3a3f] leading-relaxed">
            Across centuries, Indian artisans have drawn inspiration from nature,
            temples, and sacred symbols. These motifs continue to influence every
            Kamalavasinii creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ART_FORMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-[26px] bg-[#FFF9F2] border border-[#EFE1CC] p-8 text-center shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)] hover:border-[#C8A048]"
            >
              <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] flex items-center justify-center text-[34px]">
                {item.icon}
              </div>

              <h3 className="mt-6 font-serif text-[24px] maroon-text">
                {item.title}
              </h3>

              <p className="mt-2 uppercase tracking-[0.25em] text-[11px] text-[#B8860B]">
                {item.subtitle}
              </p>

              <p className="mt-5 text-[#5a3a3f] text-[14px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Master Artisan
============================================================ */

function MasterArtisan() {
  return (
    <section className="cream-bg py-24 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[34px] bg-gradient-to-br from-[#FFF5EA] to-[#F7E1C2] p-10 border border-[#E6CF9A] shadow-xl">

            <div className="aspect-square rounded-[24px] border border-[#C8A048]/40 flex items-center justify-center">

              <svg
                viewBox="0 0 240 240"
                className="w-56 h-56"
                fill="none"
                stroke="#8B6A1E"
                strokeWidth="2"
              >
                <circle cx="120" cy="70" r="28" />
                <path d="M75 190C75 145 95 110 120 110C145 110 165 145 165 190" />
                <path d="M70 130L95 145" />
                <path d="M170 130L145 145" />
                <path d="M120 110V170" />
              </svg>

            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-5">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">
              Master Artisan
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[46px] leading-tight maroon-text">
            Crafted By
            <span className="italic gold-text"> Human Hands</span>
          </h2>

          <p className="mt-8 text-[#5a3a3f] leading-[1.9]">
            Behind every Kamalavasinii masterpiece stands an artisan whose
            knowledge has been refined over decades. Their patience,
            intuition, and craftsmanship transform precious metals and
            gemstones into timeless works of art.
          </p>

          <p className="mt-6 text-[#5a3a3f] leading-[1.9]">
            Rather than relying solely on machines, our atelier preserves
            techniques passed through generations, ensuring every creation
            carries the warmth and individuality of true handmade luxury.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">

            <div>
              <h3 className="font-serif text-[40px] gold-text">50+</h3>
              <p className="text-[#5a3a3f]">Years of combined experience</p>
            </div>

            <div>
              <h3 className="font-serif text-[40px] gold-text">100%</h3>
              <p className="text-[#5a3a3f]">Hand-finished craftsmanship</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================
   Heritage Values
============================================================ */

const HERITAGE_VALUES = [
  {
    title: "Authenticity",
    desc: "Every design remains true to India's artistic traditions while embracing refined contemporary aesthetics."
  },
  {
    title: "Craftsmanship",
    desc: "Every ornament is carefully handcrafted with patience, precision and extraordinary attention to detail."
  },
  {
    title: "Legacy",
    desc: "Our creations are designed to become treasured heirlooms, carrying stories across generations."
  }
];

function HeritageValues() {
  return (
    <section
      className="relative py-24 px-4 md:px-8 lg:px-10 paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">
              Our Philosophy
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[44px] maroon-text">
            Heritage Lives Through
            <span className="italic gold-text"> Every Creation</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[#5a3a3f] leading-relaxed">
            Every Kamalavasinii masterpiece is guided by timeless values that
            celebrate India's artistic legacy while creating jewellery for the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HERITAGE_VALUES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-[28px] bg-[#FFF9F2] border border-[#EFE1CC] p-8 text-center shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)] hover:border-[#C8A048]"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] flex items-center justify-center">
                <span className="text-[#8B6A1E] text-2xl">✦</span>
              </div>

              <h3 className="font-serif text-[24px] maroon-text">
                {item.title}
              </h3>

              <p className="mt-4 text-[#5a3a3f] leading-relaxed">
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
   Consultation CTA
============================================================ */

function HeritageCTA() {
  return (
    <section
      id="consult"
      className="relative py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ background: "#FDF7EF" }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-[0_35px_60px_-30px_rgba(107,30,40,.25)] px-8 md:px-16 py-16 text-center"
        >

          <LotusLogo size={60} />

          <div className="mt-6 inline-flex items-center gap-3 text-[#B8860B]">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="uppercase tracking-[0.4em] text-[11px]">
              Heritage Consultation
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="mt-6 font-serif text-[42px] md:text-[52px] maroon-text">
            Celebrate Your
            <span className="italic gold-text"> Heritage</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5a3a3f] leading-relaxed">
            Discover jewellery inspired by India's timeless traditions,
            thoughtfully crafted to become part of your own family legacy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <button className="btn-primary-gradient px-10 py-4 rounded-full tracking-[0.2em] text-[12px]">
              BOOK CONSULTATION
            </button>

            <button className="btn-outline-gold px-10 py-4 rounded-full tracking-[0.2em] text-[12px]">
              EXPLORE COLLECTIONS
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================
   Final Page
============================================================ */

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/heritage" />

      <Hero />

      <Introduction />

      <HeritageCollections />

      <LegacyTimeline />

      <TraditionalCraftsmanship />

      <IndianArtForms />

      <MasterArtisan />

      <HeritageValues />

      <HeritageCTA />

      <SiteFooter />
    </main>
  );
}
