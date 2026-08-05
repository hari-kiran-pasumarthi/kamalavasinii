"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#FDF7EF]">
      <Image
        src="/images/hero/hero-bg.webp"
        alt=""
        fill
        className="absolute inset-0 object-cover opacity-5"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF7EF] via-[#FDF7EF]/95 to-[#FDF7EF]" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#E6C15A]/10 to-transparent rounded-full blur-3xl" />

      <motion.div
        className="absolute top-24 left-12 w-48 h-48 opacity-[0.08]"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 10C62 28 70 45 65 60C72 72 50 85 50 85C50 85 28 72 35 60C30 45 38 28 50 10Z"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="50" cy="70" r="6" fill="#D4A574" opacity="0.4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 w-40 h-40 opacity-[0.06]"
        animate={{ rotate: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" stroke="#D4A574" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="25" stroke="#D4A574" strokeWidth="1" opacity="0.5" />
          <path
            d="M50 15L62 40L90 50L62 60L50 85L38 60L10 50L38 40Z"
            fill="#D4A574"
            opacity="0.15"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-12 py-32 flex items-center">
        <div className="grid lg:grid-cols-[1fr_1.15fr_1fr] gap-6 lg:gap-12 items-center w-full">
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-12 rounded-full border border-[#D4A574]/15 opacity-50" />
              
              <motion.div
                className="absolute -top-6 -left-16 w-20 h-20 opacity-5"
                animate={{ rotate: [0, 25, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 20C65 35 70 50 65 65C70 75 50 85 50 85C50 85 30 75 35 65C30 50 35 35 50 20Z"
                    stroke="#D4A574"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/hero/hero-woman.png"
                  alt="South Indian Bride"
                  width={380}
                  height={500}
                  className="w-full max-w-[380px] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute -top-16 -right-16 w-20 h-20"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 15C63 32 72 50 68 68C75 82 50 92 50 92C50 92 25 82 32 68C28 50 37 32 50 15Z"
                    fill="#E6C15A"
                    opacity="0.7"
                  />
                  <circle cx="50" cy="75" r="8" fill="#D4A574" opacity="0.6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center space-y-6 lg:space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="w-24 h-24 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M50 12C55 18 58 24 58 32C58 20 62 18 66 20C64 12 70 15 72 25C74 18 80 22 80 32C80 24 85 28 85 40C84 30 88 35 88 48C86 38 88 44 85 54C86 42 85 48 80 56C82 45 80 50 75 57C77 46 74 50 68 55C70 44 67 48 60 51C62 40 58 44 50 44C42 44 38 40 40 51C33 48 30 44 32 55C26 50 23 46 25 57C20 50 18 46 20 56C17 48 19 42 18 54C15 44 19 38 18 48C18 35 22 30 20 40C20 28 26 24 24 32C24 22 30 18 28 25C30 15 36 12 34 20C38 18 42 20 40 32C40 24 43 18 50 12Z" fill="#D4A574" opacity="0.85" />
                  <circle cx="50" cy="58" r="10" fill="#E6C15A" opacity="0.7" />
                  <circle cx="50" cy="58" r="6" fill="#D4A574" opacity="0.5" />
                </g>
              </svg>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-[#6B4423] leading-tight mb-3">
                KAMALAVASINII
              </h1>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px w-10 bg-[#D4A574]" />
                <p className="font-serif text-lg lg:text-xl text-[#D4A574] tracking-[0.25em] font-light">
                  SWARNA & SILKS
                </p>
                <div className="h-px w-10 bg-[#D4A574]" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl lg:text-3xl text-[#6B4423] font-light mb-3">
                Where Heritage Becomes Luxury
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4 mb-6">
                <div className="h-px w-12 bg-[#D4A574]" />
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M10 2C12 6 14 10 12 14C14 16 10 18 10 18C10 18 6 16 8 14C6 10 8 6 10 2Z" fill="#D4A574" opacity="0.6" />
                </svg>
                <div className="h-px w-12 bg-[#D4A574]" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-center max-w-lg space-y-3"
            >
              <p className="font-serif text-base lg:text-lg text-[#6B4423] leading-relaxed font-light">
                Exclusive Customised Jewellery in Gold, Silver, Clay, Brass & Bronze.
              </p>
              <p className="font-serif text-sm lg:text-base text-[#6B4423] leading-relaxed opacity-90 font-light">
                All Types of G1 Tagged Sarees of South India and Exquisite Gemstones.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4"
            >
              <Link href="/swarna">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 lg:px-12 py-3 lg:py-4 bg-[#D9757A] hover:bg-[#C4626A] text-white font-serif text-sm lg:text-base font-light tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-[#D9757A]/30 hover:shadow-xl hover:shadow-[#D9757A]/40"
                >
                  EXPLORE SWARNA
                </motion.button>
              </Link>

              <Link href="/silks">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 lg:px-12 py-3 lg:py-4 border-2 border-[#D4A574] text-[#6B4423] hover:bg-[#FBF3EB] font-serif text-sm lg:text-base font-light tracking-wider rounded-full transition-all duration-300"
                >
                  DISCOVER SILKS
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="pt-2"
            >
              <Link href="/consultation">
                <motion.div
                  whileHover={{ x: 6 }}
                  className="font-serif text-sm lg:text-base text-[#D4A574] hover:text-[#C4956A] cursor-pointer transition-colors inline-flex items-center gap-2"
                >
                  Book Private Consultation
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H15M12 6L15 9L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-start h-[600px] lg:h-[650px]"
          >
            <div className="relative w-full max-w-[400px] h-full">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/hero/hero-sarees.png"
                  alt="Luxury Silk Sarees"
                  width={400}
                  height={650}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute top-20 right-0 w-28 lg:w-32"
                animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/hero/necklace.png"
                  alt="Temple Necklace"
                  width={128}
                  height={150}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              <motion.div
                className="absolute top-56 -right-6 w-24 lg:w-28"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <Image
                  src="/images/hero/earrings.png"
                  alt="Temple Earrings"
                  width={112}
                  height={130}
                  className="w-full h-auto drop-shadow-lg"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-28 right-8 w-16 lg:w-20"
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Image
                  src="/images/hero/gemstones.png"
                  alt="Gemstones"
                  width={80}
                  height={60}
                  className="w-full h-auto drop-shadow-lg"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-12 right-20 w-24 lg:w-28"
                animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
                  <ellipse cx="50" cy="65" rx="38" ry="16" fill="#E6C15A" opacity="0.9" />
                  <ellipse cx="50" cy="65" rx="32" ry="13" fill="#D4A574" opacity="0.7" />
                  <circle cx="50" cy="35" r="20" fill="#E6C15A" opacity="0.95" />
                  <circle cx="50" cy="35" r="16" fill="#F0D484" opacity="0.85" />
                  <circle cx="47" cy="31" r="7" fill="white" opacity="0.5" />
                  <circle cx="48" cy="38" r="4" fill="#D4A574" opacity="0.4" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-32 right-24 w-14 h-14"
                animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
                  <path d="M50 15C62 32 72 50 68 68C75 82 50 92 50 92C50 92 25 82 32 68C28 50 37 32 50 15Z" fill="#E6C15A" opacity="0.7" />
                  <circle cx="50" cy="75" r="8" fill="#D4A574" opacity="0.6" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-40 right-40 w-12 h-12"
                animate={{ y: [0, -14, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50">
                  <path d="M50 12C60 28 68 45 62 62C68 74 50 85 50 85C50 85 32 74 38 62C32 45 40 28 50 12Z" fill="#D4A574" opacity="0.6" />
                  <circle cx="50" cy="70" r="6" fill="#E6C15A" opacity="0.5" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative z-20 flex justify-center gap-2 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-[#D9757A]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4A574]/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4A574]/30" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#D4A574] via-[#D4A574]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
