"use client";

import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Necklace Sets",
    slug: "necklace-sets",
    image: "/images/collections/necklace.jpg",
  },
  {
    title: "Haram Sets",
    slug: "haram-sets",
    image: "/images/collections/haram.jpg",
  },
  {
    title: "Bangles & Bracelets",
    slug: "bangles",
    image: "/images/collections/bangles.jpg",
  },
  {
    title: "Finger Rings",
    slug: "rings",
    image: "/images/collections/rings.jpg",
  },
  {
    title: "Earrings & Jhumkas",
    slug: "earrings",
    image: "/images/collections/earrings.jpg",
  },
  {
    title: "Belts / Vaddanam",
    slug: "vaddanam",
    image: "/images/collections/vaddanam.jpg",
  },
  {
    title: "Nose Pins & Hair Pins",
    slug: "pins",
    image: "/images/collections/pins.jpg",
  },
  {
    title: "Special Jewellery",
    slug: "special",
    image: "/images/collections/special.jpg",
  },
];

export default function Collections() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-[#A67C52] text-sm">
            Collections
          </p>

          <h2 className="mt-3 text-4xl font-serif text-[#3A2A1F]">
            Browse By Collection
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover handcrafted jewellery designed for every occasion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className="group overflow-hidden rounded-2xl bg-[#F9F5F0] shadow transition hover:shadow-xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl text-[#3A2A1F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[#8B6B4A]">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
