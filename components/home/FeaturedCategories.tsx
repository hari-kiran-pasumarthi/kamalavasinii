"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Kundan Jewellery",
    slug: "kundan",
    image: "/images/categories/kundan.jpg",
  },
  {
    name: "Victorian Jewellery",
    slug: "victorian",
    image: "/images/categories/victorian.jpg",
  },
  {
    name: "Casting Jewellery",
    slug: "casting",
    image: "/images/categories/casting.jpg",
  },
  {
    name: "Temple Jewellery",
    slug: "temple",
    image: "/images/categories/temple.jpg",
  },
  {
    name: "Plain Gold",
    slug: "plain-gold",
    image: "/images/categories/plain-gold.jpg",
  },
  {
    name: "Imported Jewellery",
    slug: "imported",
    image: "/images/categories/imported.jpg",
  },
  {
    name: "Silver Jewellery",
    slug: "silver",
    image: "/images/categories/silver.jpg",
  },
  {
    name: "Diamond Jewellery",
    slug: "diamond",
    image: "/images/categories/diamond.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-[#FDF7EF] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9B7B55]">
            Discover
          </p>

          <h2 className="mt-3 text-4xl font-serif text-[#3B2C23] md:text-5xl">
            Explore Our Jewellery Collections
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-[#B88A44]" />

          <p className="mx-auto mt-6 max-w-2xl text-[#6A5A50]">
            Handcrafted masterpieces inspired by tradition, designed with
            elegance, and curated for every celebration.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/jewellery/${category.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-serif text-xl text-[#3B2C23]">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#7A6B60]">
                    View Collection
                  </p>
                </div>

                <div className="rounded-full bg-[#B88A44] p-3 text-white transition group-hover:translate-x-1">
                  <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
