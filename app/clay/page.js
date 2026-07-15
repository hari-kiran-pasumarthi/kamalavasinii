"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { LotusLogo, LotusMotif } from "@/components/SiteIllustrations";

/* ============================================================
   Shared Gold Gradient
============================================================ */

const GoldDefs = ({ id }) => (
  <defs>
    <linearGradient id={`clay-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#EAC77A" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

/* ============================================================
   Clay Jewellery Illustration
============================================================ */

const ClayArt = ({ id, colors, type = "earring" }) => (
  <svg viewBox="0 0 220 180" className="w-full h-full">

    <defs>

      <linearGradient id={`body-${id}`} x1="0" x2="1">

        <stop offset="0%" stopColor={colors.light}/>

        <stop offset="100%" stopColor={colors.dark}/>

      </linearGradient>

    </defs>

    <GoldDefs id={id}/>

    <ellipse
      cx="110"
      cy="150"
      rx="65"
      ry="10"
      fill="#EADBCF"
      opacity=".5"
    />

    {type==="earring" && (
      <>
        <circle
          cx="110"
          cy="42"
          r="12"
          fill={`url(#body-${id})`}
        />

        <path
          d="M110 54
             L80 90
             L110 125
             L140 90
             Z"
          fill={`url(#body-${id})`}
          stroke="#8B6A1E"
        />

        <circle cx="110" cy="90" r="8" fill="#C8A048"/>

      </>
    )}

    {type==="necklace" && (

      <>
        <path
          d="M55 55
             C70 20
             150 20
             165 55"
          stroke="#8B6A1E"
          strokeWidth="5"
          fill="none"
        />

        <circle
          cx="110"
          cy="95"
          r="35"
          fill={`url(#body-${id})`}
          stroke="#8B6A1E"
        />

        <circle cx="110" cy="95" r="12" fill="#C8A048"/>

      </>
    )}

    {type==="set" && (

      <>
        <path
          d="M60 45
             C75 20
             145 20
             160 45"
          stroke="#8B6A1E"
          strokeWidth="4"
          fill="none"
        />

        <circle
          cx="110"
          cy="82"
          r="28"
          fill={`url(#body-${id})`}
        />

        <circle
          cx="70"
          cy="118"
          r="12"
          fill={`url(#body-${id})`}
        />

        <circle
          cx="150"
          cy="118"
          r="12"
          fill={`url(#body-${id})`}
        />

      </>
    )}

  </svg>
);

/* ============================================================
   Clay Collections
============================================================ */

const COLLECTIONS = [

  {
    title:"Traditional Clay",
    desc:"Inspired by temple traditions and timeless Indian artistry.",
    bg:"card-peach",
    colors:{
      light:"#F7C8A5",
      dark:"#B45E32"
    },
    type:"necklace"
  },

  {
    title:"Terracotta",
    desc:"Earth-fired creations handcrafted by skilled artisans.",
    bg:"card-blush",
    colors:{
      light:"#E8A06C",
      dark:"#8A4420"
    },
    type:"earring"
  },

  {
    title:"Hand Painted",
    desc:"Bright colours blended with traditional craftsmanship.",
    bg:"card-mint",
    colors:{
      light:"#F9D6AE",
      dark:"#A86131"
    },
    type:"set"
  },

  {
    title:"Bridal Clay",
    desc:"Statement jewellery for weddings and festive occasions.",
    bg:"card-sage",
    colors:{
      light:"#E9B690",
      dark:"#8D4A23"
    },
    type:"necklace"
  },

  {
    title:"Contemporary",
    desc:"Minimal handcrafted pieces for everyday elegance.",
    bg:"card-rose",
    colors:{
      light:"#F5C7A7",
      dark:"#B15C2C"
    },
    type:"earring"
  },

  {
    title:"Festive Collection",
    desc:"Colourful handcrafted jewellery celebrating Indian festivals.",
    bg:"card-ivory",
    colors:{
      light:"#F0C79B",
      dark:"#995529"
    },
    type:"set"
  }

];

/* ============================================================
   Hero
============================================================ */

function Hero(){

return(

<section className="relative watercolor-bg paper-texture overflow-hidden py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0">

<LotusMotif
className="absolute left-[-40px] top-10 w-[280px] h-[280px]"
opacity={0.08}
/>

<LotusMotif
className="absolute right-[-20px] top-20 w-[240px] h-[240px]"
opacity={0.08}
/>

</div>

<div className="max-w-[1100px] mx-auto text-center relative z-10">

<motion.div
initial={{opacity:0,scale:.9}}
animate={{opacity:1,scale:1}}
transition={{duration:.8}}
className="flex justify-center mb-5"
>

<LotusLogo size={90}/>

</motion.div>

<div className="inline-flex items-center gap-3 text-[#B8860B]">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.35em] uppercase text-[11px]">

Artisan Collection

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h1 className="mt-6 font-serif text-[42px] md:text-[68px] maroon-text leading-none">

Clay

<span className="italic gold-text">

 Jewellery

</span>

</h1>

<p className="mt-8 max-w-2xl mx-auto text-[#5A3A3F] leading-8">

Handcrafted by skilled artisans using traditional techniques,
our clay jewellery celebrates India's artistic heritage with
contemporary elegance.

</p>

<div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

<a
href="#collections"
className="btn-primary-gradient px-9 py-4 rounded-full"
>

EXPLORE COLLECTION

</a>

<a
href="#consult"
className="btn-outline-gold px-9 py-4 rounded-full"
>

BOOK CONSULTATION

</a>

</div>

</div>

</section>

)

}

/* ============================================================
   Introduction
============================================================ */

function Introduction(){

return(

<section className="relative py-20 bg-[#FDF7EF] paper-texture">

<div className="max-w-3xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.35em] uppercase text-[11px]">

Handcrafted Heritage

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-5xl maroon-text">

Where

<span className="italic gold-text">

 Art Meets Tradition

</span>

</h2>

<p className="mt-8 text-[#5A3A3F] leading-8">

Every piece of clay jewellery at Kamalavasinii begins with natural clay,
shaped entirely by hand, sun-dried, kiln-fired and beautifully hand-painted.
Each creation reflects generations of Indian craftsmanship while embracing
modern elegance.

</p>

</div>

</section>

)

}
/* ============================================================
   Collections
============================================================ */

function Collections() {
  return (
    <section
      id="collections"
      className="py-24 px-4 md:px-8 lg:px-10 cream-bg paper-texture"
    >
      <div className="max-w-[1350px] mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-5">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="tracking-[0.35em] uppercase text-[11px]">
              Signature Collections
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-5xl maroon-text">
            Explore Our
            <span className="italic gold-text"> Clay Collections</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[#6B4B4F] leading-8">
            Every collection is handcrafted individually, making every
            creation unique. Select a style that resonates with your
            personality and customise it during your consultation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {COLLECTIONS.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className={`${item.bg} rounded-[34px] overflow-hidden shadow-xl border border-[#E9DAC5]`}
            >

              <div className="aspect-[4/3] flex items-center justify-center p-10">

                <ClayArt
                  id={index}
                  colors={item.colors}
                  type={item.type}
                />

              </div>

              <div className="px-8 pb-8">

                <h3 className="font-serif text-3xl maroon-text">

                  {item.title}

                </h3>

                <p className="mt-4 text-[#6B4B4F] leading-7">

                  {item.desc}

                </p>

                <button
                  className="mt-8 btn-outline-gold px-6 py-3 rounded-full"
                >
                  View Collection
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

/* ============================================================
   Why Clay Jewellery
============================================================ */

function WhyClayJewellery() {

  const features = [

    {
      title: "100% Handmade",
      text: "Every ornament is individually handcrafted by experienced artisans without industrial moulding."
    },

    {
      title: "Eco-Friendly",
      text: "Crafted from natural clay and sustainable materials that celebrate responsible luxury."
    },

    {
      title: "Lightweight",
      text: "Designed for long hours of comfortable wear without compromising elegance."
    },

    {
      title: "Custom Designs",
      text: "Colours, themes and styles can all be personalised during your consultation."
    }

  ];

  return (

    <section className="py-24 watercolor-bg paper-texture px-6">

      <div className="max-w-1200 mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 text-[#B8860B]">

            <span className="h-px w-10 bg-[#B8860B]" />

            <span className="tracking-[0.35em] uppercase text-[11px]">

              Why Choose Us

            </span>

            <span className="h-px w-10 bg-[#B8860B]" />

          </div>

          <h2 className="font-serif text-5xl mt-5 maroon-text">

            Crafted With
            <span className="gold-text italic">

              Passion

            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <motion.div

              key={item.title}

              initial={{ opacity: 0, x: index % 2 ? 60 : -60 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .6 }}

              className="bg-white rounded-[28px] p-8 shadow-lg border border-[#E8D8C2]"

            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-[#F5E2CA] flex items-center justify-center">

                  <LotusLogo size={34} />

                </div>

                <div>

                  <h3 className="font-serif text-2xl maroon-text">

                    {item.title}

                  </h3>

                  <p className="mt-3 text-[#6B4B4F] leading-7">

                    {item.text}

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
   Artisan Highlight
============================================================ */

function ArtisanHighlight() {

  return (

    <section className="py-24 cream-bg paper-texture">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <div className="rounded-[40px] bg-[#FAEFE3] p-10 shadow-xl">

              <ClayArt

                id="artisan"

                type="set"

                colors={{

                  light:"#E7B387",

                  dark:"#8D4A23"

                }}

              />

            </div>

          </motion.div>

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <div className="inline-flex items-center gap-3 text-[#B8860B] mb-5">

              <span className="h-px w-10 bg-[#B8860B]" />

              <span className="tracking-[0.35em] uppercase text-[11px]">

                Artisan Craft

              </span>

            </div>

            <h2 className="font-serif text-5xl maroon-text">

              Every Piece Has

              <span className="gold-text italic">

                A Story

              </span>

            </h2>

            <p className="mt-8 text-[#6B4B4F] leading-8">

              Our artisans spend hours carefully moulding, carving,
              firing and hand-painting every ornament.
              No two creations are ever exactly alike, making every
              Kamalavasinii clay jewellery piece truly exclusive.

            </p>

            <button
              className="btn-primary-gradient mt-10 px-8 py-4 rounded-full"
            >

              Book Consultation

            </button>

          </motion.div>

        </div>

      </div>

    </section>

  );

}
/* ============================================================
   Creation Process
============================================================ */

function CreationProcess() {
  const steps = [
    {
      title: "Concept Discussion",
      text: "We begin by understanding your preferences, occasion, colour palette and the story you wish your jewellery to tell.",
    },
    {
      title: "Design Sketch",
      text: "Our artisans prepare handcrafted design concepts inspired by traditional Indian craftsmanship and your ideas.",
    },
    {
      title: "Handcrafting",
      text: "Each ornament is carefully sculpted using natural clay, dried, kiln-fired and refined by experienced artisans.",
    },
    {
      title: "Painting & Finishing",
      text: "Every piece is individually hand-painted, polished and finished with intricate detailing to create a luxurious appearance.",
    },
    {
      title: "Consultation & Delivery",
      text: "After final approval, your bespoke creation is beautifully packed and delivered with utmost care.",
    },
  ];

  return (
    <section className="py-24 watercolor-bg paper-texture">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-5">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="tracking-[0.35em] uppercase text-[11px]">
              Our Process
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-5xl maroon-text">
            From
            <span className="gold-text italic"> Vision </span>
            To Creation
          </h2>

        </div>

        <div className="space-y-10">

          {steps.map((step, index) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="flex gap-8 items-start"
            >

              <div className="flex flex-col items-center">

                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EAC77A] to-[#8B6A1E] text-white flex items-center justify-center font-bold text-lg shadow-lg">

                  {index + 1}

                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#D8C2A3] mt-3" />
                )}

              </div>

              <div className="bg-white rounded-[26px] shadow-lg border border-[#E7D8C5] p-8 flex-1">

                <h3 className="font-serif text-3xl maroon-text">

                  {step.title}

                </h3>

                <p className="mt-4 text-[#6B4B4F] leading-8">

                  {step.text}

                </p>

              </div>

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

function ConsultationCTA() {

  return (

    <section
      id="consult"
      className="relative py-28 overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#5A1422] via-[#6D2132] to-[#8B6A1E]" />

      <LotusMotif
        className="absolute left-[-40px] top-10 w-[260px] h-[260px] opacity-10"
      />

      <LotusMotif
        className="absolute right-[-50px] bottom-0 w-[320px] h-[320px] opacity-10"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <LotusLogo size={80} />

        <h2 className="mt-8 font-serif text-5xl md:text-6xl text-white">

          Create Your

          <span className="text-[#EAC77A] italic">

            Dream Clay Jewellery

          </span>

        </h2>

        <p className="mt-8 text-[#F6E9DD] leading-8 text-lg max-w-3xl mx-auto">

          Every handcrafted creation is tailored to your personality,
          colours and celebration. Book a consultation with our artisans
          and let us design something truly unique for you.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="/contact"
            className="bg-[#EAC77A] hover:bg-[#D6B05A] transition-colors text-[#5A1422] px-10 py-4 rounded-full font-semibold"
          >
            Book Consultation
          </a>

          <a
            href="/contact"
            className="border border-white text-white hover:bg-white hover:text-[#5A1422] transition-colors px-10 py-4 rounded-full"
          >
            Talk To Our Team
          </a>

        </div>

      </div>

    </section>

  );

}

/* ============================================================
   Page
============================================================ */

export default function ClayJewelleryPage() {

  return (

    <>
      <SiteHeader activeHref="/clay" />

      <main>

        <Hero />

        <Introduction />

        <Collections />

        <WhyClayJewellery />

        <ArtisanHighlight />

        <CreationProcess />

        <ConsultationCTA />

      </main>

      <SiteFooter />
    </>

  );

}
