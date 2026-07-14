"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  PencilRuler,
  Gem,
  Hammer,
  Gift,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Personal Consultation",
    description:
      "Begin with a one-to-one consultation where we understand your story, style, occasion and vision.",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Concept & Design",
    description:
      "Our designers create elegant concepts tailored exclusively for you, combining heritage with modern sophistication.",
  },
  {
    icon: Gem,
    number: "03",
    title: "Material Selection",
    description:
      "Choose from certified gemstones, authentic silk, precious metals and handcrafted finishes.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Handcrafted Creation",
    description:
      "Master artisans meticulously craft every detail, ensuring exceptional quality and timeless beauty.",
  },
  {
    icon: Gift,
    number: "05",
    title: "A Legacy Delivered",
    description:
      "Your bespoke creation is beautifully packaged and presented as an heirloom to cherish for generations.",
  },
];

export default function CustomJourney() {
  return (
    <section className="relative py-32 bg-[#FFFAF5] overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#B8860B] text-sm">
            YOUR EXPERIENCE
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-serif text-[#5A1422]">
            Your Journey
            <span className="italic bg-gradient-to-r from-[#B8860B] to-[#E6C15A] bg-clip-text text-transparent">
              {" "}With Kamalavasinii
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-[#6C5A4D] leading-8">
            Every masterpiece follows a carefully curated process,
            ensuring your experience is as memorable as the creation itself.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Gold Line */}

          <div className="hidden lg:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-[#B8860B] via-[#E7C86C] to-[#B8860B]" />

          <div className="grid lg:grid-cols-5 gap-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  className="relative text-center"
                >

                  {/* Number Circle */}

                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#B8860B] to-[#E6C15A] flex items-center justify-center shadow-xl relative z-10">

                    <Icon
                      size={32}
                      className="text-white"
                    />

                  </div>

                  <div className="mt-6 text-[#B8860B] font-serif text-2xl">

                    {step.number}

                  </div>

                  <h3 className="mt-3 text-2xl font-serif text-[#5A1422]">

                    {step.title}

                  </h3>

                  <p className="mt-5 leading-8 text-[#6B5A4F]">

                    {step.description}

                  </p>

                </motion.div>

              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-24"
        >

          <div className="rounded-[40px] bg-gradient-to-r from-[#5A1422] to-[#7A2033] px-12 py-16 text-center shadow-2xl">

            <p className="uppercase tracking-[0.4em] text-[#E6C15A] text-sm">
              BESPOKE EXPERIENCE
            </p>

            <h3 className="mt-5 text-4xl md:text-5xl font-serif text-white">
              Let's Create Something Truly Yours
            </h3>

            <p className="mt-6 max-w-3xl mx-auto text-white/80 leading-8">
              Whether it's bridal jewellery, an heirloom necklace,
              a luxury silk saree or a custom-designed masterpiece,
              your journey begins with a conversation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#E6C15A] text-white font-medium hover:scale-105 transition"
              >
                Book Consultation
              </a>

              <a
                href="/jewellery"
                className="px-8 py-4 rounded-full border border-[#E6C15A] text-[#E6C15A] hover:bg-[#E6C15A] hover:text-[#5A1422] transition"
              >
                Explore Collections
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
