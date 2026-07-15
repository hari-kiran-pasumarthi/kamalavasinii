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
    <linearGradient id={`stories-gold-${id}`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#F6D78C" />
      <stop offset="55%" stopColor="#C8A048" />
      <stop offset="100%" stopColor="#8B6A1E" />
    </linearGradient>
  </defs>
);

/* ============================================================
   Editorial Illustration
============================================================ */

const StoryIllustration = ({ id }: { id: string }) => (
  <svg
    viewBox="0 0 220 180"
    className="w-full h-full"
    aria-hidden
  >
    <GoldDefs id={id} />

    <ellipse
      cx="110"
      cy="160"
      rx="72"
      ry="10"
      fill="#EBD6C6"
      opacity=".55"
    />

    <g
      fill="none"
      stroke={`url(#stories-gold-${id})`}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="45"
        y="25"
        width="130"
        height="105"
        rx="6"
      />

      <path d="M65 50 H155" />
      <path d="M65 65 H145" />
      <path d="M65 80 H150" />
      <path d="M65 95 H135" />

      <path d="M45 130 L175 130" />

      <circle
        cx="110"
        cy="145"
        r="10"
      />

      <path d="M110 135 V155" />
      <path d="M100 145 H120" />
    </g>

    {[
      [24,28],
      [195,30],
      [26,145],
      [194,146]
    ].map(([x,y],i)=>(
      <path
        key={i}
        d={`M${x} ${y} l2 5 l5 2 l-5 2 l-2 5 l-2-5 l-5-2 l5-2 z`}
        fill="#C8A048"
      />
    ))}

  </svg>
);

/* ============================================================
   Featured Stories
============================================================ */

const STORIES = [

{
title:"Bridal Moments",
desc:"Stories celebrating unforgettable weddings adorned with timeless jewellery.",
bg:"card-rose",
},

{
title:"Family Heirlooms",
desc:"Treasured creations lovingly passed from one generation to the next.",
bg:"card-ivory",
},

{
title:"Craftsmanship Diaries",
desc:"A glimpse into the artistry behind every handcrafted masterpiece.",
bg:"card-mint",
},

{
title:"Gemstone Journeys",
desc:"Discover the fascinating stories hidden within every precious gemstone.",
bg:"card-peach",
},

{
title:"Heritage Inspirations",
desc:"Ancient Indian traditions that continue inspiring modern jewellery.",
bg:"card-sage",
},

{
title:"Designer Notes",
desc:"Insights from our designers on creating timeless luxury collections.",
bg:"card-blush",
}

];

/* ============================================================
   Hero
============================================================ */

function Hero(){

return(

<section className="relative watercolor-bg paper-texture overflow-hidden py-24 lg:py-32">

<div className="absolute inset-0 pointer-events-none">

<LotusMotif
className="absolute left-[-50px] top-12 w-[260px]"
opacity={0.08}
/>

<LotusMotif
className="absolute right-[-30px] top-20 w-[240px]"
opacity={0.08}
/>

<LotusMotif
className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[320px]"
opacity={0.05}
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

<div className="mt-5 inline-flex items-center gap-3 text-[#B8860B]">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Editorial Journal

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h1 className="mt-6 font-serif text-[44px] md:text-[70px] font-semibold maroon-text leading-none">

Every Jewel

<span className="italic gold-text">
 Has A Story
</span>

</h1>

<p className="mt-7 max-w-2xl mx-auto text-[#5a3a3f] leading-relaxed">

Discover stories of love, craftsmanship, heritage and timeless
moments that make every Kamalavasinii creation truly unforgettable.

</p>

<div className="mt-10 flex justify-center gap-4">

<a
href="#stories"
className="btn-primary-gradient px-9 py-4 rounded-full tracking-[0.2em] text-[12px]"
>

EXPLORE STORIES

</a>

<a
href="#journal"
className="btn-outline-gold px-9 py-4 rounded-full tracking-[0.2em] text-[12px]"
>

READ JOURNAL

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
className="paper-texture py-20 px-4 md:px-8 lg:px-10"
style={{background:"#FDF7EF"}}
>

<div className="max-w-3xl mx-auto text-center">

<div className="inline-flex items-center gap-3 text-[#B8860B]">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Our Journal

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="mt-5 font-serif text-[40px] maroon-text">

Stories Beyond

<span className="italic gold-text">
 Jewellery
</span>

</h2>

<p className="mt-6 leading-[1.9] text-[#5a3a3f]">

Every creation carries memories, traditions and emotions.
Our journal captures these remarkable journeys—from artisans
who shape each masterpiece to the families who cherish them
for generations.

</p>

</div>

</section>

);

}

/* ============================================================
   Featured Stories Grid
============================================================ */

function FeaturedStories(){

return(

<section
id="stories"
className="cream-bg py-20 px-4 md:px-8 lg:px-10"
>

<div className="max-w-[1400px] mx-auto">

<div className="text-center mb-16">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Featured Stories

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-[46px] maroon-text">

Editorial

<span className="italic gold-text">
 Collection
</span>

</h2>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{STORIES.map((story,index)=>(

<motion.div

key={story.title}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6,delay:index*.08}}

whileHover={{y:-8}}

className={`${story.bg} rounded-[28px] p-8 shadow-[0_10px_30px_-15px_rgba(107,30,40,.15)] group cursor-pointer`}

>

<div className="w-full max-w-[170px] mx-auto mb-5">

<StoryIllustration id={story.title}/>

</div>

<h3 className="font-serif text-[22px] font-semibold maroon-text text-center">

{story.title}

</h3>

<p className="mt-3 text-center text-[#5a3a3f] leading-relaxed">

{story.desc}

</p>

<div className="mt-6 text-center text-[#D97C74] tracking-wider text-[13px]">

Read Story →

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}
/* ============================================================
   Behind The Atelier
============================================================ */

const ATELIER_STEPS = [
  {
    no: "01",
    title: "Inspiration",
    desc: "Every collection begins with heritage, architecture, nature and timeless Indian artistry."
  },
  {
    no: "02",
    title: "Sketch",
    desc: "Our designers transform inspiration into elegant hand-drawn concepts."
  },
  {
    no: "03",
    title: "Craftsmanship",
    desc: "Master artisans patiently shape every detail using traditional techniques."
  },
  {
    no: "04",
    title: "Stone Selection",
    desc: "Only exceptional gemstones are chosen for brilliance, colour and character."
  },
  {
    no: "05",
    title: "The Story Continues",
    desc: "Every finished jewel begins a new chapter with the family who wears it."
  }
];

function BehindTheAtelier() {

return(

<section
className="relative paper-texture py-24 px-4 md:px-8 lg:px-10"
style={{background:"#FDF7EF"}}
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Behind The Atelier

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-[46px] maroon-text">

Every Story Begins

<span className="italic gold-text">
 Here
</span>

</h2>

<p className="mt-6 max-w-3xl mx-auto text-[#5a3a3f] leading-relaxed">

Behind every Kamalavasinii creation is a journey of imagination,
craftsmanship and extraordinary attention to detail.

</p>

</div>

<div className="grid lg:grid-cols-5 gap-6">

{ATELIER_STEPS.map((step,index)=>(

<motion.div

key={step.no}

initial={{opacity:0,y:35}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6,delay:index*.1}}

whileHover={{y:-8}}

className="relative"

>

<div className="rounded-[26px] bg-[#FFF9F2] border border-[#EFE1CC] p-6 h-full shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)]">

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] flex items-center justify-center mb-6">

<span className="font-serif text-[#8B6A1E]">
{step.no}
</span>

</div>

<h3 className="font-serif text-[22px] maroon-text">

{step.title}

</h3>

<p className="mt-4 text-[#5a3a3f] leading-relaxed">

{step.desc}

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
   Customer Stories
============================================================ */

const CUSTOMER_STORIES=[

{
name:"Aditi & Rahul",
quote:"Our wedding jewellery became the most treasured part of our family's story."
},

{
name:"Meera",
quote:"Every detail reflected elegance, tradition and timeless craftsmanship."
},

{
name:"Lakshmi",
quote:"When I wore the necklace, it felt like wearing a piece of history."
}

];

function CustomerStories(){

return(

<section className="cream-bg py-24 px-4 md:px-8 lg:px-10">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Customer Stories

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-[46px] maroon-text">

Moments That

<span className="italic gold-text">
 Matter
</span>

</h2>

</div>

<div className="grid md:grid-cols-3 gap-8">

{CUSTOMER_STORIES.map((story,index)=>(

<motion.div

key={story.name}

initial={{opacity:0,y:35}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.15}}

viewport={{once:true}}

className="rounded-[30px] bg-[#FFF9F2] border border-[#EFE1CC] p-8 shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)]"

>

<div className="text-[#C8A048] text-[42px] font-serif">

"

</div>

<p className="italic text-[#5a3a3f] leading-[1.9]">

{story.quote}

</p>

<div className="mt-8">

<h4 className="font-serif text-[22px] maroon-text">

{story.name}

</h4>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}

/* ============================================================
   Editorial Categories
============================================================ */

const CATEGORIES=[

"Bridal",

"Craftsmanship",

"Gemstones",

"Heritage",

"Culture",

"Design",

"Artisans",

"Wedding Stories"

];

function EditorialCategories(){

return(

<section
className="paper-texture py-20 px-4 md:px-8 lg:px-10"
style={{background:"#FDF7EF"}}
>

<div className="max-w-5xl mx-auto text-center">

<div className="inline-flex items-center gap-3 text-[#B8860B] mb-5">

<span className="h-px w-10 bg-[#B8860B]"/>

<span className="tracking-[0.4em] uppercase text-[11px]">

Journal Categories

</span>

<span className="h-px w-10 bg-[#B8860B]"/>

</div>

<h2 className="font-serif text-[42px] maroon-text">

Explore Every

<span className="italic gold-text">
 Chapter
</span>

</h2>

<div className="mt-12 flex flex-wrap justify-center gap-4">

{CATEGORIES.map((cat)=>(

<button

key={cat}

className="px-7 py-3 rounded-full border border-[#C8A048]/50 bg-white hover:bg-[#FBEED0] transition-all font-sans text-[13px] tracking-[0.15em] uppercase"

>

{cat}

</button>

))}

</div>

</div>

</section>

);
}

/* ============================================================
   Story Timeline
============================================================ */

const STORY_TIMELINE=[
"Inspiration",
"Sketch",
"Craft",
"Gemstone",
"Celebration",
"Legacy"
];

function StoryTimeline(){

return(

<section className="cream-bg py-24 px-4 md:px-8 lg:px-10">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">

<h2 className="font-serif text-[44px] maroon-text">

Every Story

<span className="italic gold-text">
 Evolves
</span>

</h2>

</div>

<div className="grid md:grid-cols-6 gap-6">

{STORY_TIMELINE.map((item,index)=>(

<motion.div

key={item}

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{duration:.5,delay:index*.08}}

viewport={{once:true}}

className="text-center"

>

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] flex items-center justify-center mx-auto">

<span className="font-serif text-[#8B6A1E]">

{index+1}

</span>

</div>

<h3 className="mt-5 font-serif text-[20px] maroon-text">

{item}

</h3>

</motion.div>

))}

</div>

</div>

</section>

);
}
/* ============================================================
   Journal Highlights
============================================================ */

const JOURNAL_HIGHLIGHTS = [
  {
    title: "The Making Of A Masterpiece",
    desc: "Discover how inspiration transforms into timeless jewellery through weeks of meticulous craftsmanship.",
  },
  {
    title: "The Beauty Of Heritage",
    desc: "Ancient Indian artistry continues to inspire every Kamalavasinii collection.",
  },
  {
    title: "A Story Worth Passing Down",
    desc: "Jewellery becomes more meaningful as it gathers memories across generations.",
  },
];

function JournalHighlights() {
  return (
    <section
      id="journal"
      className="paper-texture py-24 px-4 md:px-8 lg:px-10"
      style={{ background: "#FDF7EF" }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]" />
            <span className="tracking-[0.4em] uppercase text-[11px]">
              Editorial Picks
            </span>
            <span className="h-px w-10 bg-[#B8860B]" />
          </div>

          <h2 className="font-serif text-[46px] maroon-text">
            Featured
            <span className="italic gold-text"> Journal</span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {JOURNAL_HIGHLIGHTS.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              whileHover={{ y: -8 }}
              className="rounded-[28px] bg-[#FFF9F2] border border-[#EFE1CC] overflow-hidden shadow-[0_10px_30px_-18px_rgba(107,30,40,.15)]"
            >

              <div className="aspect-[4/3] bg-gradient-to-br from-[#F8E7D0] via-[#FBEED0] to-[#F3D9BE] flex items-center justify-center">

                <svg
                  viewBox="0 0 120 120"
                  className="w-24 h-24"
                  fill="none"
                  stroke="#8B6A1E"
                  strokeWidth="1.8"
                >
                  <circle cx="60" cy="60" r="42" />
                  <path d="M35 60H85" />
                  <path d="M60 35V85" />
                  <path d="M44 44L76 76" />
                  <path d="M76 44L44 76" />
                </svg>

              </div>

              <div className="p-8">

                <h3 className="font-serif text-[24px] maroon-text">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#5a3a3f] leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-8 text-[#C8A048] tracking-[0.18em] uppercase text-[12px]">
                  Read Article →
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
   Newsletter
============================================================ */

function NewsletterSection() {
  return (
    <section className="cream-bg py-24 px-4 md:px-8 lg:px-10">

      <div className="max-w-4xl mx-auto text-center">

        <LotusLogo size={60} />

        <div className="mt-6 inline-flex items-center gap-3 text-[#B8860B]">

          <span className="h-px w-10 bg-[#B8860B]" />

          <span className="tracking-[0.4em] uppercase text-[11px]">
            Stay Inspired
          </span>

          <span className="h-px w-10 bg-[#B8860B]" />

        </div>

        <h2 className="mt-6 font-serif text-[46px] maroon-text">

          Subscribe To Our

          <span className="italic gold-text">
            {" "}Journal
          </span>

        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#5a3a3f] leading-relaxed">

          Receive exclusive stories, behind-the-scenes craftsmanship,
          heritage articles and new collection launches directly in your inbox.

        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[380px] rounded-full border border-[#C8A048]/40 bg-white px-6 py-4 outline-none"
          />

          <button className="btn-primary-gradient px-10 py-4 rounded-full tracking-[0.2em] text-[12px]">

            SUBSCRIBE

          </button>

        </div>

      </div>

    </section>
  );
}

/* ============================================================
   Final CTA
============================================================ */

function StoriesCTA() {
  return (
    <section
      className="paper-texture py-24 px-4 md:px-8 lg:px-10"
      style={{ background: "#FDF7EF" }}
    >

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-[0_30px_60px_-30px_rgba(107,30,40,.25)] px-8 md:px-16 py-16 text-center"
        >

          <LotusLogo size={58} />

          <h2 className="mt-8 font-serif text-[46px] maroon-text">

            Your Story

            <span className="italic gold-text">
              {" "}Begins Here
            </span>

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5a3a3f] leading-relaxed">

            Every masterpiece begins with a story waiting to be told.
            Let us create yours.

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

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">

      <SiteHeader activeHref="/stories" />

      <Hero />

      <Introduction />

      <FeaturedStories />

      <BehindTheAtelier />

      <CustomerStories />

      <EditorialCategories />

      <StoryTimeline />

      <JournalHighlights />

      <NewsletterSection />

      <StoriesCTA />

      <SiteFooter />

    </main>
  );
}
