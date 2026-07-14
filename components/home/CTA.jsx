"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#5A1422] via-[#6B1E28] to-[#4A0F18]">

      {/* Decorative Background */}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.45em] text-[#E6C15A] text-sm">

            BESPOKE CONSULTATION

          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-6xl text-white leading-tight">

            Let's Create Something

            <span className="block italic text-[#E6C15A]">

              Truly Timeless

            </span>

          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-white/80 leading-8 text-lg">

            Whether you're searching for bridal jewellery,
            heirloom silk sarees, certified gemstones,
            or a completely bespoke masterpiece,
            our designers are ready to bring your vision to life.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#E6C15A] px-10 py-5 text-white font-semibold shadow-2xl hover:scale-105 transition duration-300"
            >

              Book Consultation

              <ArrowRight size={20} />

            </Link>

            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-3 rounded-full border border-[#E6C15A] px-10 py-5 text-[#E6C15A] font-semibold hover:bg-[#E6C15A] hover:text-[#5A1422] transition duration-300"
            >

              <Phone size={20} />

              Call Us

            </a>

          </div>

        </motion.div>

        {/* Bottom Features */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="grid md:grid-cols-3 gap-10 mt-24"
        >

          {[
            {
              title: "Personal Consultation",
              text: "Dedicated guidance tailored to your style and occasion.",
            },
            {
              title: "Authentic Craftsmanship",
              text: "Premium materials and meticulous attention to every detail.",
            },
            {
              title: "Made For Generations",
              text: "Creations designed to become treasured family heirlooms.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center"
            >

              <h3 className="font-serif text-2xl text-[#E6C15A]">

                {item.title}

              </h3>

              <p className="mt-5 text-white/75 leading-7">

                {item.text}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}
