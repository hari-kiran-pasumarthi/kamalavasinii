"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Swarna Jewellery",
    subtitle: "Handcrafted Gold & Diamond Jewellery",
    image: "/images/categories/jewellery.webp",
    href: "/jewellery",
  },
  {
    title: "Silk Sarees",
    subtitle: "Authentic South Indian Handloom Collection",
    image: "/images/categories/silks.webp",
    href: "/silks",
  },
  {
    title: "Gemstones",
    subtitle: "Certified Precious & Semi-Precious Stones",
    image: "/images/categories/gemstones.webp",
    href: "/gemstones",
  },
  {
    title: "Clay Jewellery",
    subtitle: "Artisan Terracotta & Handcrafted Clay Pieces",
    image: "/images/categories/clay.webp",
    href: "/clay",
  },
  {
    title: "Couture",
    subtitle: "Bespoke Bridal & Occasion Costumes",
    image: "/images/categories/couture.webp",
    href: "/couture",
  },
  {
    title: "Heritage",
    subtitle: "Our Legacy of Timeless Indian Craftsmanship",
    image: "/images/categories/heritage.webp",
    href: "/heritage",
  },
  {
    title: "Stories",
    subtitle: "Meet The Artisans Behind Every Creation",
    image: "/images/categories/stories.webp",
    href: "/stories",
  },
];

export default function CuratedTreasures() {
  return (
    <section className="py-28 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#B8860B] text-sm">
            OUR COLLECTIONS
          </p>
          <h2 className="mt-5 text-5xl md:text-6xl font-serif text-[#5A1422]">
            Curated
            <span className="italic bg-gradient-to-r from-[#B8860B] to-[#E8C96B] bg-clip-text text-transparent">
              {" "}Treasures
            </span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-[#6B5A4F] leading-8">
            Every creation reflects timeless craftsmanship,
            refined elegance and the rich heritage of Indian artistry.
          </p>
        </motion.div>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: (index % 3) * .15,
              }}
            >
              <Link href={item.href}>
                <div className="group overflow-hidden rounded-[32px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  {/* Text */}
                  <div className="p-8">
                    <p className="uppercase tracking-[0.35em] text-xs text-[#B8860B]">
                      Luxury Collection
                    </p>
                    <h3 className="mt-3 text-3xl font-serif text-[#5A1422]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[#7A6A5C] leading-7">
                      {item.subtitle}
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-[#B8860B] font-medium">
                      Explore Collection
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
