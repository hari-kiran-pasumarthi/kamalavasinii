"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Swarna Jewellery",
    subtitle: "Jewellery",
    href: "/swarna",
    bgColor: "bg-[#FBF3EB]",
  },
  {
    title: "Silks Sarees",
    subtitle: "Sarees",
    href: "/silks",
    bgColor: "bg-[#EFF5F0]",
  },
  {
    title: "Gemstones Ratna Mandira",
    subtitle: "Ratna Mandira",
    href: "/gemstones",
    bgColor: "bg-[#F5F0F8]",
  },
  {
    title: "Clay Jewellery",
    subtitle: "Artisan Crafts",
    href: "/clay",
    bgColor: "bg-[#FBF3EB]",
  },
  {
    title: "Couture Costumes",
    subtitle: "Costumes",
    href: "/couture",
    bgColor: "bg-[#F0F5F3]",
  },
  {
    title: "Heritage Our Legacy",
    subtitle: "Artisans",
    href: "/heritage",
    bgColor: "bg-[#FBF3EB]",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FDF7EF]">
      <Image
        src="/images/hero/hero-bg.webp"
        alt=""
        fill
        className="absolute inset-0 object-cover opacity-3"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF7EF] via-[#FDF7EF]/97 to-[#FDF7EF]" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#E6C15A]/12 to-transparent rounded-full blur-3xl" />

      <motion.div
        className="absolute top-32 left-16 w-56 h-56 opacity-[0.06]"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 8C65 28 75 48 70 68C78 85 50 98 50 98C50 98 22 85 30 68C25 48 35 28 50 8Z"
            stroke="#D4A574"
            strokeWidth="1.2"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-24 w-52 h-52 opacity-[0.05]"
        animate={{ rotate: [0, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" stroke="#D4A574" strokeWidth="1.2" />
          <path
            d="M50 12L68 45L100 55L68 65L50 98L32 65L0 55L32 45Z"
            fill="#D4A574"
            opacity="0.12"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Content */}
        <div className="min-h-[85vh] flex items-center">
          <div className="w-full grid lg:grid-cols-[0.95fr_1.1fr_0.95fr] gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-16 rounded-full border border-[#D4A574]/10 opacity-40" />

                <motion.div
                  className="absolute -top-8 -left-20 w-24 h-24 opacity-4"
                  animate={{ rotate: [0, 30, 0] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 12C68 35 78 58 72 78C82 95 50 110 50 110C50 110 18 95 28 78C22 58 32 35 50 12Z"
                      stroke="#D4A574"
                      strokeWidth="1.2"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/hero/hero-woman.png"
                    alt="South Indian Bride"
                    width={360}
                    height={480}
                    className="w-full max-w-[360px] h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="absolute -top-20 -right-12 w-24 h-24"
                  animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 10C65 32 75 55 70 75C78 92 50 105 50 105C50 105 22 92 30 75C25 55 35 32 50 10Z"
                      fill="#E6C15A"
                      opacity="0.65"
                    />
                    <circle cx="50" cy="82" r="9" fill="#D4A574" opacity="0.55" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* CENTER COLUMN */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.25 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center space-y-5 lg:space-y-7"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.9, ease: "easeOut" },
                  },
                }}
                className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="Kamalavasinii Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
                }}
                className="text-center space-y-2 lg:space-y-3"
              >
                <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-[#6B4423] leading-tight">
                  KAMALAVASINII
                </h1>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mt-2 lg:mt-4">
                  <div className="h-px w-8 lg:w-12 bg-[#D4A574]" />
                  <p className="font-serif text-base lg:text-lg text-[#D4A574] tracking-[0.2em] font-light">
                    SWARNA & SILKS
                  </p>
                  <div className="h-px w-8 lg:w-12 bg-[#D4A574]" />
                </div>
              </motion.div>

              <motion.h2
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
                }}
                className="font-serif text-2xl lg:text-3xl text-[#6B4423] font-light text-center"
              >
                Where Heritage Becomes Luxury
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
                }}
                className="flex items-center justify-center gap-2 lg:gap-3"
              >
                <div className="h-px w-10 lg:w-12 bg-[#D4A574]" />
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-5 lg:h-5">
                  <path d="M8 2C10 6 12 10 10 14C12 15 8 16 8 16C8 16 4 15 6 14C4 10 6 6 8 2Z" fill="#D4A574" opacity="0.6" />
                </svg>
                <div className="h-px w-10 lg:w-12 bg-[#D4A574]" />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
                }}
                className="text-center max-w-md lg:max-w-lg space-y-2 lg:space-y-3"
              >
                <p className="font-serif text-sm lg:text-base text-[#6B4423] leading-relaxed font-light">
                  Exclusive Customised Jewellery in Gold, Silver, Clay, Brass & Bronze.
                </p>
                <p className="font-serif text-xs lg:text-sm text-[#6B4423] leading-relaxed opacity-85 font-light">
                  All Types of G1 Tagged Sarees of South India and Exquisite Gemstones.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
                }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-5 pt-2 lg:pt-3"
              >
                <Link href="/swarna">
                  <motion.button
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 lg:px-10 py-2.5 lg:py-3 bg-[#D9757A] hover:bg-[#C4626A] text-white font-serif text-xs lg:text-sm font-light tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-[#D9757A]/30"
                  >
                    EXPLORE SWARNA
                  </motion.button>
                </Link>

                <Link href="/silks">
                  <motion.button
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 lg:px-10 py-2.5 lg:py-3 border-2 border-[#D4A574] text-[#6B4423] hover:bg-[#FBF3EB] font-serif text-xs lg:text-sm font-light tracking-wider rounded-full transition-all duration-300"
                  >
                    DISCOVER SILKS
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex items-center justify-center lg:justify-start h-[500px] lg:h-[580px]"
            >
              <div className="relative w-full max-w-[380px] h-full">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/hero/hero-sarees.png"
                    alt="Luxury Silk Sarees"
                    width={380}
                    height={580}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-16 -right-4 w-24 lg:w-28"
                  animate={{ y: [0, -22, 0], x: [0, 6, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/hero/necklace.png"
                    alt="Temple Necklace"
                    width={112}
                    height={140}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-48 right-6 w-20 lg:w-24"
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <Image
                    src="/images/hero/earrings.png"
                    alt="Temple Earrings"
                    width={96}
                    height={120}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-24 right-12 w-14 lg:w-16"
                  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <Image
                    src="/images/hero/gemstones.png"
                    alt="Gemstones"
                    width={64}
                    height={48}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-20 w-20 lg:w-24"
                  animate={{ rotate: [0, 6, 0], y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
                    <ellipse cx="50" cy="62" rx="35" ry="14" fill="#E6C15A" opacity="0.88" />
                    <ellipse cx="50" cy="62" rx="30" ry="11" fill="#D4A574" opacity="0.65" />
                    <circle cx="50" cy="32" r="18" fill="#E6C15A" opacity="0.92" />
                    <circle cx="50" cy="32" r="14" fill="#F0D484" opacity="0.8" />
                    <circle cx="48" cy="29" r="6" fill="white" opacity="0.45" />
                    <circle cx="49" cy="36" r="3.5" fill="#D4A574" opacity="0.35" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute top-24 right-16 w-12 h-12"
                  animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-55">
                    <path d="M50 12C63 30 72 50 67 68C75 82 50 92 50 92C50 92 25 82 33 68C28 50 37 30 50 12Z" fill="#E6C15A" opacity="0.65" />
                    <circle cx="50" cy="75" r="7" fill="#D4A574" opacity="0.5" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-32 right-32 w-10 h-10"
                  animate={{ y: [0, -16, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-45">
                    <path d="M50 10C62 28 70 48 65 65C72 78 50 88 50 88C50 88 28 78 35 65C30 48 38 28 50 10Z" fill="#D4A574" opacity="0.55" />
                    <circle cx="50" cy="68" r="5" fill="#E6C15A" opacity="0.4" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CATEGORY CARDS SECTION */}
        <motion.div
          className="w-full py-12 lg:py-16 border-t border-[#D4A574]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
              {categories.map((category, index) => (
                <Link key={index} href={category.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className={`${category.bgColor} rounded-2xl p-5 lg:p-6 text-center cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px]`}
                  >
                    <p className="font-serif text-sm lg:text-base text-[#6B4423] font-light tracking-wide mb-2 line-clamp-2">
                      {category.title}
                    </p>
                    <p className="font-serif text-xs lg:text-sm text-[#D4A574] font-light">
                      {category.subtitle}
                    </p>
                    <div className="mt-3 lg:mt-4 flex items-center justify-center text-[#D4A574] text-xs lg:text-sm font-serif font-light">
                      Explore
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
                        <path d="M2 7H12M9 4L12 7L9 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* PAGINATION DOTS */}
      <motion.div
        className="relative z-20 flex justify-center gap-2 py-6 lg:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div
          className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D9757A]"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D4A574]/25" />
        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D4A574]/25" />
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#D4A574] via-[#D4A574]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
