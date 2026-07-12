"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import {
  LotusLogo,
  LotusMotif,
  IconNecklace,
  IconSaree,
  IconGems,
  IconClay,
  IconCouture,
  IconTemple,
} from "@/components/SiteIllustrations";

const NAV = [
  { label: "Home",             sub: "" },
  { label: "Swarna",           sub: "Jewellery" },
  { label: "Silks",            sub: "Sarees" },
  { label: "Gemstones",        sub: "Ratna Mandira" },
  { label: "Clay Jewellery",   sub: "Artisan Crafts" },
  { label: "Couture",          sub: "Costumes" },
  { label: "Heritage",         sub: "Our Legacy" },
  { label: "Stories",          sub: "Artisans" },
];

const CATEGORIES = [
  { title: "Swarna",   sub: "Jewellery",   bg: "card-ivory", icon: IconNecklace },
  { title: "Silks",    sub: "Sarees",      bg: "card-mint",  icon: IconSaree    },
  { title: "Gemstones",sub: "Ratna Mandira",bg: "card-rose", icon: IconGems     },
  { title: "Clay",     sub: "Jewellery",   bg: "card-blush", icon: IconClay     },
  { title: "Couture",  sub: "Costumes",    bg: "card-peach", icon: IconCouture  },
  { title: "Heritage", sub: "Our Legacy",  bg: "card-ivory", icon: IconTemple   },
];

// Floating petals over hero — client only to avoid hydration mismatch
function FloatingPetals() {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: 12 }).map((_, i) => ({
        left: `${(i * 8.3 + Math.random() * 6) % 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${14 + Math.random() * 10}s`,
        size: 10 + Math.random() * 14,
        rotate: Math.random() * 360,
      }))
    );
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]" aria-hidden>
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            left: p.left,
            top: "-10%",
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotate}deg)`,
            animation: `float-petal ${p.duration} linear ${p.delay} infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" width={p.size} height={p.size}>
            <path
              d="M12 2 C7 8 7 16 12 22 C17 16 17 8 12 2 Z"
              fill="#F2B4AC"
              opacity="0.75"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

// Small golden sparkles scattered — client only to avoid hydration mismatch
function GoldenSparkles({ count = 18 }) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 8 + Math.random() * 10,
        delay: `${Math.random() * 3}s`,
      }))
    );
    setMounted(true);
  }, [count]);
  if (!mounted) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      {items.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute sparkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        >
          <path
            d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
            fill="#D3AA55"
          />
        </svg>
      ))}
    </div>
  );
}

function Header({ active, setActive }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#FDF7EF]/85 border-b border-[#EFE1CC]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <LotusLogo size={56} />
          <div className="leading-tight">
            <div className="font-serif text-[22px] md:text-[26px] tracking-[0.14em] maroon-text font-semibold">
              KAMALAVASINII
            </div>
            <div className="hidden sm:flex items-center justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.35em] text-[#B8862A]">
              <span className="h-px w-6 bg-[#C8A048]/60" />
              SWARNA &amp; SILKS
              <span className="h-px w-6 bg-[#C8A048]/60" />
            </div>
          </div>
        </a>

        {/* Center Nav */}
        <nav className="hidden xl:flex items-end gap-8 flex-1 justify-center">
          {NAV.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                className={`nav-item flex flex-col items-center text-center group ${isActive ? "active" : ""}`}
              >
                <span
                  className={`font-sans text-[15px] font-medium transition-colors ${
                    isActive ? "text-[#D97C74]" : "text-[#4a2a2f] group-hover:text-[#D97C74]"
                  }`}
                >
                  {item.label}
                </span>
                {item.sub && (
                  <span className="font-sans text-[11px] text-[#9a6c72] tracking-wide mt-0.5">
                    {item.sub}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          {[
            { Icon: Search, label: "Search" },
            { Icon: User,   label: "Account" },
            { Icon: Heart,  label: "Wishlist" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#6B1E28] hover:bg-[#F4D2CC]/50 transition-colors"
            >
              <Icon className="w-5 h-5" strokeWidth={1.6} />
            </button>
          ))}
          <button
            aria-label="Cart"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#6B1E28] hover:bg-[#F4D2CC]/50 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.6} />
            <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-[#D97C74] text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#6B1E28] hover:bg-[#F4D2CC]/50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-[#EFE1CC] bg-[#FDF7EF]"
          >
            <div className="px-6 py-4 grid grid-cols-2 gap-3">
              {NAV.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActive(i);
                    setOpen(false);
                  }}
                  className={`text-left py-2 ${active === i ? "text-[#D97C74]" : "text-[#4a2a2f]"}`}
                >
                  <div className="font-sans font-medium">{item.label}</div>
                  {item.sub && (
                    <div className="text-[11px] text-[#9a6c72]">{item.sub}</div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax transforms
  const yLeft   = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yRight  = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % 3), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative watercolor-bg paper-texture overflow-hidden min-h-[calc(100vh-72px)] flex items-center"
    >
      {/* Background lotus motifs (very subtle) */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute -left-16 top-10 w-[280px] h-[280px]" opacity={0.09} />
        <LotusMotif className="absolute right-[-40px] top-24 w-[240px] h-[240px]" opacity={0.08} />
        <LotusMotif className="absolute left-1/3 bottom-[-80px] w-[360px] h-[360px]" opacity={0.06} />
        <LotusMotif className="absolute right-[10%] bottom-4 w-[200px] h-[200px]" opacity={0.07} />
      </div>

      <FloatingPetals />
      <GoldenSparkles />

      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-[3fr_4fr_3fr] gap-4 md:gap-8 items-center relative z-[2]">
        {/* Left: Woman illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ y: yLeft, opacity }}
          className="relative order-2 lg:order-1"
        >
          <div className="gentle-float">
            <Image
              src="/images/hero/hero-woman.png"
              alt="Elegant South Indian woman in Kanchipuram silk saree with temple jewellery holding a pink lotus"
              width={909}
              height={1024}
              priority
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="w-full h-auto max-w-[520px] mx-auto select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(107,30,40,0.15)]"
            />
          </div>
        </motion.div>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{ y: yCenter }}
          className="relative text-center order-1 lg:order-2 px-2 md:px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="flex justify-center mb-3"
          >
            <LotusLogo size={110} />
          </motion.div>

          <h1 className="font-serif tracking-[0.06em] leading-[0.95] maroon-text">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="block text-[42px] sm:text-[58px] md:text-[68px] lg:text-[78px] font-semibold"
            >
              KAMALAVASINII
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-3 flex justify-center items-center gap-3 text-[#B8860B]"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
            <span className="font-serif tracking-[0.4em] text-[15px] md:text-[17px] uppercase">
              Swarna &amp; Silks
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-6 font-serif italic text-[22px] md:text-[28px] text-[#3A2A20]"
          >
            Where Heritage Becomes Luxury
          </motion.p>

          <div className="mt-3 flex justify-center">
            <svg width="72" height="18" viewBox="0 0 72 18" aria-hidden>
              <path d="M0 9 L30 9" stroke="#B8860B" strokeWidth="1" />
              <path d="M42 9 L72 9" stroke="#B8860B" strokeWidth="1" />
              <path d="M36 2 C31 6 31 12 36 16 C41 12 41 6 36 2 Z" fill="#B8860B" />
            </svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-5 font-sans text-[14px] md:text-[15px] text-[#5a3a3f] max-w-lg mx-auto leading-relaxed"
          >
            Exclusive Customised Jewellery in Gold, Silver, Clay, Wood, Brass &amp; Bronze.
            <br className="hidden md:inline" />
            All Types of GI Tagged Sarees of South India and Exquisite Gemstones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-8 py-4 rounded-full font-medium">
              EXPLORE SWARNA
            </button>
            <button className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-8 py-4 rounded-full font-medium">
              DISCOVER SILKS
            </button>
          </motion.div>

          {/* Slider dots */}
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`dot ${i === slide ? "active" : ""}`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Saree stack + jewellery */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          style={{ y: yRight, opacity }}
          className="relative order-3"
        >
          <div className="gentle-float" style={{ animationDelay: "1.8s" }}>
            <Image
              src="/images/hero/hero-sarees.png"
              alt="Stack of luxurious Kanchipuram silk sarees with gold zari borders, temple necklace, jhumkas and gemstones"
              width={864}
              height={951}
              priority
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="w-full h-auto max-w-[540px] mx-auto select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(107,30,40,0.15)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.a
      href={`#${item.title.toLowerCase()}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className={`category-card ${item.bg} rounded-[28px] p-5 md:p-6 flex flex-col items-center text-center shadow-[0_10px_30px_-15px_rgba(107,30,40,0.15)] relative overflow-hidden`}
    >
      {/* subtle sparkles inside */}
      <svg viewBox="0 0 24 24" className="absolute top-3 right-4 w-3 h-3 opacity-70">
        <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute bottom-6 left-4 w-2 h-2 opacity-60">
        <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
      </svg>

      <div className="w-28 h-24 md:w-36 md:h-28 mb-2">
        <Icon />
      </div>

      <div className="font-serif tracking-[0.12em] text-[18px] md:text-[20px] maroon-text font-semibold uppercase">
        {item.title}
      </div>
      <div className="font-serif tracking-[0.14em] text-[14px] md:text-[15px] text-[#8a4f56] uppercase">
        {item.sub}
      </div>

      <div className="mt-4 flex items-center gap-2 font-sans text-[13px] text-[#D97C74] group-hover:text-[#B84E45] transition-colors">
        <span className="tracking-wider">Explore</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.a>
  );
}

function Categories() {
  return (
    <section id="collections" className="relative cream-bg py-14 md:py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-3 text-[#B8862A] mb-3">
            <span className="h-px w-10 bg-[#C8A048]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans">OUR COLLECTIONS</span>
            <span className="h-px w-10 bg-[#C8A048]/70" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[44px] maroon-text font-semibold">
            Curated Treasures of India
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {CATEGORIES.map((item, i) => (
            <CategoryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const FEATURES = [
    {
      title: "Heritage",
      desc:
        "Traditional Indian craftsmanship preserved across generations, kept alive through master artisans.",
      Icon: () => (
        <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none" stroke="url(#gold-line)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <defs>
            <linearGradient id="gold-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#EAC77A" />
              <stop offset="55%" stopColor="#C8A048" />
              <stop offset="100%" stopColor="#8B6A1E" />
            </linearGradient>
          </defs>
          <path d="M20 82 L80 82" />
          <path d="M25 82 L25 55 L75 55 L75 82" />
          <path d="M25 55 L30 45 L70 45 L75 55" />
          <path d="M30 45 L34 36 L66 36 L70 45" />
          <path d="M34 36 L38 28 L62 28 L66 36" />
          <path d="M38 28 L45 22 L50 14 L55 22 L62 28" />
          <circle cx="50" cy="10" r="1.6" fill="url(#gold-line)" />
          <path d="M44 82 L44 68 C44 64 56 64 56 68 L56 82" />
          <path d="M14 82 L14 62 M14 62 c-3 -2 -5 -6 -5 -10 M14 62 c3 -2 5 -6 5 -10" />
          <path d="M86 82 L86 62 M86 62 c-3 -2 -5 -6 -5 -10 M86 62 c3 -2 5 -6 5 -10" />
        </svg>
      ),
    },
    {
      title: "Custom Jewellery",
      desc:
        "Every piece is handcrafted and customized to the client's vision — from concept sketch to final polish.",
      Icon: () => (
        <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none" stroke="url(#gold-line2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <defs>
            <linearGradient id="gold-line2" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#EAC77A" />
              <stop offset="55%" stopColor="#C8A048" />
              <stop offset="100%" stopColor="#8B6A1E" />
            </linearGradient>
          </defs>
          <path d="M22 32 C34 78 66 78 78 32" />
          <path d="M32 42 C40 70 60 70 68 42" />
          <ellipse cx="50" cy="70" rx="9" ry="7" fill="url(#gold-line2)" opacity="0.15" />
          <ellipse cx="50" cy="70" rx="9" ry="7" />
          <path d="M50 63 L50 77 M44 70 L56 70" strokeWidth="1" />
          {[36, 44, 50, 56, 64].map((x, i) => (
            <circle key={i} cx={x} cy={82 + Math.abs(i - 2) * 1.5} r="1.6" />
          ))}
          <path d="M18 28 l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z" fill="url(#gold-line2)" stroke="none" />
          <path d="M82 28 l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z" fill="url(#gold-line2)" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Authentic Silk",
      desc:
        "Premium South Indian GI-tagged silk sarees, sourced directly from heritage weaver clusters with care.",
      Icon: () => (
        <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none" stroke="url(#gold-line3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <defs>
            <linearGradient id="gold-line3" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#EAC77A" />
              <stop offset="55%" stopColor="#C8A048" />
              <stop offset="100%" stopColor="#8B6A1E" />
            </linearGradient>
          </defs>
          <path d="M22 72 L78 72 L82 84 L18 84 Z" />
          <path d="M26 60 L74 60 L78 72 L22 72 Z" />
          <path d="M30 48 L70 48 L74 60 L26 60 Z" />
          <path d="M34 36 L66 36 L70 48 L30 48 Z" />
          <path d="M38 24 L62 24 L66 36 L34 36 Z" />
          <path d="M22 72 L78 72 M26 60 L74 60 M30 48 L70 48 M34 36 L66 36" />
          <path d="M42 30 L58 30 M40 42 L60 42 M38 54 L62 54 M35 66 L65 66 M30 78 L70 78" strokeWidth="0.8" opacity="0.7" />
        </svg>
      ),
    },
    {
      title: "Handcrafted Excellence",
      desc:
        "Attention to every detail, premium materials and skilled artisans — the hallmarks of true Indian luxury.",
      Icon: () => (
        <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none" stroke="url(#gold-line4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <defs>
            <linearGradient id="gold-line4" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#EAC77A" />
              <stop offset="55%" stopColor="#C8A048" />
              <stop offset="100%" stopColor="#8B6A1E" />
            </linearGradient>
          </defs>
          <path d="M35 82 L35 52 C35 46 45 46 45 52 L45 30 C45 24 55 24 55 30 L55 34 C55 28 65 28 65 34 L65 40 C65 34 75 34 75 40 L75 66 C75 76 68 82 58 82 Z" />
          <path d="M45 52 L45 40" strokeWidth="0.9" />
          <path d="M55 34 L55 46" strokeWidth="0.9" />
          <path d="M65 40 L65 52" strokeWidth="0.9" />
          {/* sparkle above hand */}
          <path d="M30 20 l1.6 4 l4 1.6 l-4 1.6 l-1.6 4 l-1.6 -4 l-4 -1.6 l4 -1.6 z" fill="url(#gold-line4)" stroke="none" />
          <path d="M74 18 l1.2 3 l3 1.2 l-3 1.2 l-1.2 3 l-1.2 -3 l-3 -1.2 l3 -1.2 z" fill="url(#gold-line4)" stroke="none" opacity="0.8" />
          {/* small lotus in palm */}
          <path d="M50 62 C46 58 46 52 50 50 C54 52 54 58 50 62 Z" strokeWidth="1.1" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ background: "#FDF7EF" }}
    >
      {/* Very soft watermarks */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute -left-10 top-10 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-10 w-[240px] h-[240px]" opacity={0.06} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              The Kamalavasinii Promise
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[36px] md:text-[52px] font-semibold maroon-text leading-tight">
            Why Kamalavasinii
          </h2>
          <div className="mt-3 flex justify-center">
            <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden>
              <path d="M0 10 L34 10" stroke="#B8860B" strokeWidth="1" />
              <path d="M46 10 L80 10" stroke="#B8860B" strokeWidth="1" />
              <path
                d="M40 3 C34 7 34 13 40 17 C46 13 46 7 40 3 Z"
                fill="#B8860B"
              />
            </svg>
          </div>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Experience timeless craftsmanship, authentic heritage and bespoke luxury —
            where every creation tells a story of India's finest artistry.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[28px] p-6 md:p-8 bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_30px_60px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/60 transition-all duration-500 overflow-hidden"
            >
              {/* gold corner ornament */}
              <svg
                viewBox="0 0 40 40"
                className="absolute top-3 right-3 w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                aria-hidden
              >
                <path
                  d="M4 20 C4 10 10 4 20 4 M20 4 L20 12 M20 4 L28 4"
                  stroke="#C8A048"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="20" r="1.2" fill="#C8A048" />
              </svg>

              {/* small gold circle behind icon */}
              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-start">
                  <span className="block w-16 h-16 rounded-full bg-gradient-to-br from-[#F7E4C5] to-[#F0D7A9] opacity-70" />
                </div>
                <div className="relative pt-1 pl-1">
                  <f.Icon />
                </div>
              </div>

              <h3 className="font-serif text-[22px] md:text-[24px] font-semibold maroon-text tracking-wide">
                {f.title}
              </h3>

              {/* gold underline */}
              <div className="mt-2 mb-4 h-[2px] w-10 bg-gradient-to-r from-[#C8A048] to-transparent group-hover:w-20 transition-all duration-500" />

              <p className="font-sans text-[13.5px] md:text-[14px] text-[#5a3a3f] leading-relaxed">
                {f.desc}
              </p>

              {/* subtle bottom sparkle on hover */}
              <svg
                viewBox="0 0 24 24"
                className="absolute bottom-4 right-5 w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity"
                aria-hidden
              >
                <path
                  d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z"
                  fill="#C8A048"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeritageIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 560 620" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
        <linearGradient id="h-maroon" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8A2A36" />
          <stop offset="100%" stopColor="#5E1420" />
        </linearGradient>
        <linearGradient id="h-lotus" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FBD1C8" />
          <stop offset="100%" stopColor="#EC9A8F" />
        </linearGradient>
        <radialGradient id="h-wash" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#F9E1D5" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#F9E1D5" stopOpacity="0" />
        </radialGradient>
        <pattern id="h-weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q2 0 4 4 T8 4" stroke="#C8A048" strokeWidth="0.5" fill="none" opacity="0.5" />
        </pattern>
      </defs>

      {/* Watercolor wash backdrop */}
      <ellipse cx="280" cy="300" rx="270" ry="290" fill="url(#h-wash)" />

      {/* Ornamental circular frame */}
      <circle
        cx="280"
        cy="310"
        r="235"
        stroke="url(#h-gold)"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      <circle
        cx="280"
        cy="310"
        r="245"
        stroke="url(#h-gold)"
        strokeWidth="0.6"
        fill="none"
        strokeDasharray="2 6"
        opacity="0.7"
      />

      {/* Decorative arch behind temple */}
      <path
        d="M120 500 L120 260 C120 175 190 110 280 110 C370 110 440 175 440 260 L440 500 Z"
        fill="#FFF3E7"
        stroke="url(#h-gold)"
        strokeWidth="1"
        opacity="0.9"
      />
      <path
        d="M140 500 L140 265 C140 190 200 130 280 130 C360 130 420 190 420 265 L420 500"
        stroke="url(#h-gold)"
        strokeWidth="0.6"
        strokeDasharray="1 5"
        fill="none"
        opacity="0.7"
      />

      {/* Temple gopuram (stylized) */}
      <g
        stroke="url(#h-gold)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Base platform */}
        <path d="M180 470 L380 470 L380 500 L180 500 Z" />
        <path d="M170 470 L390 470" strokeWidth="2" />
        {/* Tiers ascending */}
        <path d="M190 430 L370 430 L380 470 L180 470 Z" />
        <path d="M198 395 L362 395 L370 430 L190 430 Z" />
        <path d="M206 360 L354 360 L362 395 L198 395 Z" />
        <path d="M214 325 L346 325 L354 360 L206 360 Z" />
        <path d="M222 292 L338 292 L346 325 L214 325 Z" />
        <path d="M230 262 L330 262 L338 292 L222 292 Z" />
        <path d="M240 235 L320 235 L330 262 L230 262 Z" />
        {/* Kalash dome */}
        <path d="M250 235 L250 210 L270 210 L270 235 Z" />
        <path d="M290 235 L290 210 L310 210 L310 235 Z" />
        <path d="M245 210 L275 210 L280 200 L275 190 L245 190 L240 200 Z" />
        <path d="M285 210 L315 210 L320 200 L315 190 L285 190 L280 200 Z" />
        <path d="M260 190 L260 175 L300 175 L300 190" />
        <path d="M255 175 L305 175 L295 158 L265 158 Z" />
        <path d="M280 158 L280 138" />
        <circle cx="280" cy="132" r="4" fill="url(#h-gold)" />
        <path d="M280 128 L280 118" />
        <circle cx="280" cy="115" r="2.4" fill="url(#h-gold)" />

        {/* Door */}
        <path d="M266 470 L266 425 C266 415 294 415 294 425 L294 470" />
        <path d="M280 470 L280 430" strokeWidth="0.9" />
      </g>
      {/* Door interior glow */}
      <path
        d="M270 470 L270 428 C270 420 290 420 290 428 L290 470 Z"
        fill="url(#h-maroon)"
        opacity="0.9"
      />
      <circle cx="280" cy="452" r="3" fill="url(#h-gold)" />

      {/* Fine detail marks on tiers */}
      <g fill="url(#h-gold)" opacity="0.85">
        {[240, 260, 280, 300, 320].map((x, i) => (
          <circle key={`t1-${i}`} cx={x} cy={280} r="1.2" />
        ))}
        {[230, 250, 270, 290, 310, 330].map((x, i) => (
          <circle key={`t2-${i}`} cx={x} cy={312} r="1.2" />
        ))}
        {[224, 246, 268, 290, 312, 334].map((x, i) => (
          <circle key={`t3-${i}`} cx={x} cy={348} r="1.2" />
        ))}
        {[216, 240, 264, 288, 312, 336, 352].map((x, i) => (
          <circle key={`t4-${i}`} cx={x} cy={383} r="1.2" />
        ))}
        {[204, 228, 252, 276, 300, 324, 348, 366].map((x, i) => (
          <circle key={`t5-${i}`} cx={x} cy={418} r="1.2" />
        ))}
      </g>

      {/* Small tier windows */}
      <g fill="none" stroke="url(#h-gold)" strokeWidth="0.9">
        <rect x="234" y="270" width="10" height="14" rx="4" />
        <rect x="316" y="270" width="10" height="14" rx="4" />
        <rect x="224" y="303" width="10" height="14" rx="4" />
        <rect x="326" y="303" width="10" height="14" rx="4" />
      </g>

      {/* Palm trees on either side of arch */}
      <g stroke="url(#h-gold)" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M78 500 L78 400" />
        <path d="M78 400 c-14 -10 -25 -6 -30 -18 M78 400 c14 -10 25 -6 30 -18 M78 400 c-10 -18 -8 -24 6 -30 M78 400 c10 -18 8 -24 -6 -30" />
        <circle cx="78" cy="382" r="2" fill="url(#h-gold)" />

        <path d="M482 500 L482 400" />
        <path d="M482 400 c-14 -10 -25 -6 -30 -18 M482 400 c14 -10 25 -6 30 -18 M482 400 c-10 -18 -8 -24 6 -30 M482 400 c10 -18 8 -24 -6 -30" />
        <circle cx="482" cy="382" r="2" fill="url(#h-gold)" />
      </g>

      {/* Ground line */}
      <path d="M40 500 L520 500" stroke="url(#h-gold)" strokeWidth="1.2" />
      <path d="M40 507 L520 507" stroke="url(#h-gold)" strokeWidth="0.5" strokeDasharray="1 6" opacity="0.7" />

      {/* Silk-weave ribbon banner at top */}
      <g>
        <path
          d="M100 75 C220 55 340 55 460 75 L460 100 C340 82 220 82 100 100 Z"
          fill="url(#h-weave)"
        />
        <path
          d="M100 75 C220 55 340 55 460 75"
          stroke="url(#h-gold)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M100 100 C220 82 340 82 460 100"
          stroke="url(#h-gold)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Little motifs on ribbon */}
        {[
          140, 180, 220, 260, 300, 340, 380, 420,
        ].map((x, i) => (
          <g key={i} transform={`translate(${x} 85)`}>
            <path
              d="M0 -3 L2 0 L0 3 L-2 0 Z"
              fill="url(#h-gold)"
            />
          </g>
        ))}
      </g>

      {/* Lotuses at base — left */}
      <g transform="translate(80 505)">
        <path d="M20 40 C6 30 6 10 20 2 C34 10 34 30 20 40 Z" fill="url(#h-lotus)" />
        <path d="M20 40 C4 30 -2 8 20 -4 C42 8 36 30 20 40 Z" fill="url(#h-lotus)" opacity="0.75" />
        <circle cx="20" cy="20" r="3" fill="url(#h-gold)" />
        <path d="M20 40 C18 55 18 75 20 90" stroke="#7E9660" strokeWidth="1.5" fill="none" />
        {/* Leaf */}
        <path d="M20 65 C6 60 -2 50 4 42 C14 46 22 55 20 65 Z" fill="#B7C99B" />
      </g>
      {/* Lotus at base — right */}
      <g transform="translate(440 505)">
        <path d="M20 40 C6 30 6 10 20 2 C34 10 34 30 20 40 Z" fill="url(#h-lotus)" />
        <path d="M20 40 C4 30 -2 8 20 -4 C42 8 36 30 20 40 Z" fill="url(#h-lotus)" opacity="0.75" />
        <circle cx="20" cy="20" r="3" fill="url(#h-gold)" />
        <path d="M20 40 C22 55 22 75 20 90" stroke="#7E9660" strokeWidth="1.5" fill="none" />
        <path d="M20 65 C34 60 42 50 36 42 C26 46 18 55 20 65 Z" fill="#B7C99B" />
      </g>

      {/* Filigree corners */}
      <g stroke="url(#h-gold)" strokeWidth="1" fill="none" strokeLinecap="round">
        {/* top-left */}
        <path d="M40 40 C60 40 80 50 90 70" />
        <path d="M40 40 C40 60 50 80 70 90" />
        <circle cx="40" cy="40" r="2" fill="url(#h-gold)" />
        {/* top-right */}
        <path d="M520 40 C500 40 480 50 470 70" />
        <path d="M520 40 C520 60 510 80 490 90" />
        <circle cx="520" cy="40" r="2" fill="url(#h-gold)" />
        {/* bottom-left */}
        <path d="M40 580 C60 580 80 570 90 550" />
        <path d="M40 580 C40 560 50 540 70 530" />
        <circle cx="40" cy="580" r="2" fill="url(#h-gold)" />
        {/* bottom-right */}
        <path d="M520 580 C500 580 480 570 470 550" />
        <path d="M520 580 C520 560 510 540 490 530" />
        <circle cx="520" cy="580" r="2" fill="url(#h-gold)" />
      </g>

      {/* Sparkles */}
      {[
        { x: 90, y: 200, s: 7 },
        { x: 470, y: 210, s: 8 },
        { x: 60, y: 340, s: 6 },
        { x: 500, y: 350, s: 7 },
        { x: 130, y: 130, s: 6 },
        { x: 430, y: 130, s: 6 },
      ].map((s, i) => (
        <path
          key={i}
          d={`M${s.x} ${s.y} l${s.s * 0.35} ${s.s} l${s.s} ${s.s * 0.35} l${-s.s} ${s.s * 0.35} l${-s.s * 0.35} ${s.s} l${-s.s * 0.35} ${-s.s} l${-s.s} ${-s.s * 0.35} l${s.s} ${-s.s * 0.35} z`}
          fill="#C8A048"
          opacity="0.75"
        />
      ))}

      {/* Lotus divider under scene */}
      <g transform="translate(210 555)">
        <path d="M0 8 L60 8" stroke="url(#h-gold)" strokeWidth="0.9" />
        <path d="M80 8 L140 8" stroke="url(#h-gold)" strokeWidth="0.9" />
        <g transform="translate(70 0)">
          <path d="M0 12 C-8 8 -8 -2 0 -6 C8 -2 8 8 0 12 Z" fill="url(#h-lotus)" />
          <circle cx="0" cy="4" r="1.8" fill="url(#h-gold)" />
        </g>
      </g>
    </svg>
  );
}

function Heritage() {
  const HIGHLIGHTS = [
    "Authentic South Indian Heritage",
    "Skilled Artisan Craftsmanship",
    "Premium Quality Materials",
  ];

  return (
    <section
      id="heritage"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      {/* Subtle lotus watermarks */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-40px] top-16 w-[260px] h-[260px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-20 w-[220px] h-[220px]" opacity={0.07} />
        <LotusMotif className="absolute right-[35%] top-[40%] w-[180px] h-[180px]" opacity={0.04} />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
        {/* Left column — illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[32px] bg-[#FFF9F2] border border-[#EFE1CC] shadow-[0_25px_60px_-30px_rgba(107,30,40,0.20)] p-4 md:p-6 gentle-float">
            <HeritageIllustration className="w-full h-auto max-w-[560px] mx-auto" />
          </div>
        </motion.div>

        {/* Right column — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          {/* Overline */}
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-4">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Our Heritage
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[32px] md:text-[46px] font-semibold maroon-text leading-[1.1]">
            Preserving Tradition.
            <br />
            Creating Timeless{" "}
            <span className="italic gold-text">Elegance.</span>
          </h2>

          {/* Decorative lotus divider */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#B8860B] to-[#B8860B]" />
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#C8A048" />
              <circle cx="11" cy="11" r="1.6" fill="#7B2334" />
            </svg>
            <span className="h-px w-14 bg-gradient-to-l from-transparent via-[#B8860B] to-[#B8860B]" />
          </div>

          {/* Body */}
          <p className="mt-6 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] leading-[1.85] max-w-xl">
            Kamalavasinii celebrates India&apos;s timeless traditions through handcrafted
            jewellery, authentic South Indian silk sarees, gemstones, and artisan
            creations. Every piece reflects craftsmanship, heritage, and a commitment
            to preserving culture for future generations.
          </p>

          {/* Highlights */}
          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                className="flex items-center gap-4 group"
              >
                {/* Gold lotus bullet */}
                <span className="relative shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FBEED0] to-[#F1D48A] border border-[#C8A048]/40 shadow-[0_5px_15px_-5px_rgba(200,160,72,0.5)] transition-transform duration-500 group-hover:scale-110">
                  <svg viewBox="0 0 22 22" width="14" height="14" aria-hidden>
                    <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#8B6A1E" />
                    <circle cx="11" cy="11" r="1.6" fill="#7B2334" />
                  </svg>
                </span>
                <span className="font-serif text-[18px] md:text-[20px] text-[#3A2A20] tracking-wide">
                  {h}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10"
          >
            <button className="btn-outline-gold font-sans tracking-[0.22em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-3">
              EXPLORE OUR HERITAGE
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12 L19 12 M13 6 L19 12 L13 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyIcons() { return null; }

const STEP_ICONS = {
  vision: () => (
    <svg viewBox="0 0 80 80" fill="none" stroke="url(#j-gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11" aria-hidden>
      <defs>
        <linearGradient id="j-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
      </defs>
      {/* lotus */}
      <path d="M28 46 C22 40 22 30 28 24 C34 30 34 40 28 46 Z" />
      <path d="M28 46 C18 40 14 28 28 20 C42 28 38 40 28 46 Z" opacity="0.85" />
      <path d="M28 40 C24 32 24 22 28 14 C32 22 32 32 28 40 Z" opacity="0.9" />
      <circle cx="28" cy="30" r="1.6" fill="url(#j-gold)" />
      {/* pencil crossing */}
      <path d="M48 20 L66 38" />
      <path d="M46 22 L50 18 L52 20 L48 24 Z" fill="url(#j-gold)" stroke="none" />
      <path d="M66 38 L70 42 L66 46 L62 42 Z" fill="url(#j-gold)" stroke="none" opacity="0.9" />
      <path d="M52 26 L60 34" strokeWidth="0.9" />
      {/* sparkles */}
      <path d="M60 14 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="url(#j-gold)" stroke="none" />
      <path d="M14 60 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="url(#j-gold)" stroke="none" opacity="0.8" />
    </svg>
  ),
  design: () => (
    <svg viewBox="0 0 80 80" fill="none" stroke="url(#j-gold2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11" aria-hidden>
      <defs>
        <linearGradient id="j-gold2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
      </defs>
      {/* paper with folded corner */}
      <path d="M18 14 L52 14 L62 24 L62 66 L18 66 Z" />
      <path d="M52 14 L52 24 L62 24" />
      {/* sketch lines - a necklace curve on paper */}
      <path d="M26 34 C32 46 48 46 54 34" strokeWidth="1.1" />
      <ellipse cx="40" cy="46" rx="4" ry="3" />
      <path d="M28 54 L52 54" strokeWidth="0.9" opacity="0.7" />
      <path d="M28 60 L46 60" strokeWidth="0.9" opacity="0.5" />
      {/* pencil */}
      <path d="M52 42 L72 62" />
      <path d="M50 40 L54 36 L58 40 L54 44 Z" fill="url(#j-gold2)" stroke="none" />
      <path d="M72 62 L76 66 L72 70 L68 66 Z" fill="url(#j-gold2)" stroke="none" opacity="0.9" />
    </svg>
  ),
  material: () => (
    <svg viewBox="0 0 80 80" fill="none" stroke="url(#j-gold3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11" aria-hidden>
      <defs>
        <linearGradient id="j-gold3" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
      </defs>
      {/* Big center gem */}
      <path d="M40 14 L54 26 L48 46 L32 46 L26 26 Z" />
      <path d="M40 14 L48 46 M40 14 L32 46 M26 26 L54 26" strokeWidth="0.9" />
      <path d="M32 22 L40 18 L48 22" strokeWidth="0.9" opacity="0.7" />
      {/* Small gems left/right */}
      <path d="M14 54 L20 48 L26 54 L22 62 L18 62 Z" />
      <path d="M14 54 L26 54" strokeWidth="0.8" />
      <path d="M54 54 L60 48 L66 54 L62 62 L58 62 Z" />
      <path d="M54 54 L66 54" strokeWidth="0.8" />
      {/* gold ring below */}
      <ellipse cx="40" cy="62" rx="14" ry="4" />
      <circle cx="40" cy="62" r="1.4" fill="url(#j-gold3)" stroke="none" />
    </svg>
  ),
  artisan: () => (
    <svg viewBox="0 0 80 80" fill="none" stroke="url(#j-gold4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11" aria-hidden>
      <defs>
        <linearGradient id="j-gold4" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
      </defs>
      {/* hammer */}
      <path d="M18 62 L48 32" />
      <path d="M16 60 L20 64" strokeWidth="2.2" />
      <path d="M42 26 L58 42 L52 48 L36 32 Z" fill="url(#j-gold4)" fillOpacity="0.12" />
      {/* chisel crossing */}
      <path d="M60 18 L34 44" />
      <path d="M32 46 L28 42 L30 40 L34 44 Z" fill="url(#j-gold4)" stroke="none" />
      <path d="M60 18 L66 14 L70 18 L66 22 Z" fill="url(#j-gold4)" stroke="none" />
      {/* small gem sparkle */}
      <path d="M60 62 l1.4 3.6 l3.6 1.4 l-3.6 1.4 l-1.4 3.6 l-1.4 -3.6 l-3.6 -1.4 l3.6 -1.4 z" fill="url(#j-gold4)" stroke="none" />
    </svg>
  ),
  delivery: () => (
    <svg viewBox="0 0 80 80" fill="none" stroke="url(#j-gold5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11" aria-hidden>
      <defs>
        <linearGradient id="j-gold5" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#EAC77A" />
          <stop offset="55%" stopColor="#C8A048" />
          <stop offset="100%" stopColor="#8B6A1E" />
        </linearGradient>
      </defs>
      {/* box */}
      <path d="M14 32 L66 32 L66 66 L14 66 Z" />
      <path d="M10 24 L70 24 L70 34 L10 34 Z" />
      {/* vertical ribbon */}
      <path d="M40 24 L40 66" strokeWidth="2" />
      <path d="M40 24 L40 66" stroke="#7B2334" strokeWidth="0.9" opacity="0.75" />
      {/* Lotus bow on top */}
      <path d="M40 24 C30 20 24 12 30 8 C36 10 38 16 40 22" />
      <path d="M40 24 C50 20 56 12 50 8 C44 10 42 16 40 22" />
      <circle cx="40" cy="20" r="2" fill="url(#j-gold5)" stroke="none" />
      {/* corners sparkle */}
      <path d="M18 46 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="url(#j-gold5)" stroke="none" opacity="0.85" />
      <path d="M60 50 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="url(#j-gold5)" stroke="none" opacity="0.85" />
    </svg>
  ),
};

function Journey() {
  const STEPS = [
    {
      n: "01",
      title: "Share Your Vision",
      desc: "Tell us your idea, inspiration or occasion.",
      Icon: STEP_ICONS.vision,
    },
    {
      n: "02",
      title: "Design Consultation",
      desc: "Our designers discuss your requirements and prepare concepts.",
      Icon: STEP_ICONS.design,
    },
    {
      n: "03",
      title: "Material Selection",
      desc: "Choose gold, silver, brass, clay, silk, gemstones and finishes.",
      Icon: STEP_ICONS.material,
    },
    {
      n: "04",
      title: "Handcrafted By Artisans",
      desc: "Experienced craftsmen create every detail with precision.",
      Icon: STEP_ICONS.artisan,
    },
    {
      n: "05",
      title: "Delivered With Care",
      desc: "Receive a handcrafted masterpiece made exclusively for you.",
      Icon: STEP_ICONS.delivery,
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      {/* Watermarks */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-40px] top-16 w-[240px] h-[240px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-30px] bottom-40 w-[240px] h-[240px]" opacity={0.06} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Custom Craftsmanship
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[34px] md:text-[50px] font-semibold maroon-text leading-[1.1] max-w-4xl mx-auto">
            From Your Dream To A{" "}
            <span className="italic gold-text">Timeless Masterpiece</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden>
              <path d="M0 10 L34 10" stroke="#B8860B" strokeWidth="1" />
              <path d="M46 10 L80 10" stroke="#B8860B" strokeWidth="1" />
              <path d="M40 3 C34 7 34 13 40 17 C46 13 46 7 40 3 Z" fill="#B8860B" />
            </svg>
          </div>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Every Kamalavasinii creation begins with your vision and is handcrafted
            by skilled artisans into a timeless piece of heritage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting gold line */}
          <div className="hidden lg:block absolute top-[64px] left-[8%] right-[8%] h-px pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />
            {/* subtle beads on line */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8A048]/70" />
              ))}
            </div>
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute top-6 bottom-6 left-[36px] w-px bg-gradient-to-b from-transparent via-[#C8A048]/70 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-4 relative">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="relative pl-16 lg:pl-0 flex lg:flex-col items-start lg:items-center text-left lg:text-center"
              >
                {/* Numbered gold circle (positioned above card on desktop; left on mobile) */}
                <div className="absolute lg:static left-3 top-2 lg:mb-4 shrink-0 z-[3]">
                  <div className="relative w-[68px] h-[68px] rounded-full bg-gradient-to-br from-[#FBEED0] to-[#F0D7A9] border border-[#C8A048]/60 shadow-[0_10px_25px_-10px_rgba(200,160,72,0.55)] flex items-center justify-center">
                    <s.Icon />
                    {/* step number badge */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#8A2A36] to-[#5E1420] text-[#F1D07A] text-[11px] font-serif font-semibold flex items-center justify-center shadow-md">
                      {s.n}
                    </span>
                    {/* Ring accent */}
                    <span className="absolute inset-[-6px] rounded-full border border-[#C8A048]/25" />
                  </div>
                </div>

                {/* Card */}
                <div className="group w-full rounded-[22px] bg-[#FFF9F2] border border-[#EFE1CC] p-5 md:p-6 shadow-[0_10px_30px_-18px_rgba(107,30,40,0.15)] hover:shadow-[0_25px_50px_-25px_rgba(107,30,40,0.25)] hover:border-[#C8A048]/70 transition-all duration-500">
                  <h3 className="font-serif text-[19px] md:text-[20px] font-semibold maroon-text tracking-wide">
                    {s.title}
                  </h3>
                  <div className="mt-2 mb-3 h-[2px] w-10 lg:mx-auto bg-gradient-to-r from-[#C8A048] to-transparent group-hover:w-16 transition-all duration-500" />
                  <p className="font-sans text-[13.5px] text-[#5a3a3f] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Mobile down-arrow between steps */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden absolute -bottom-5 left-[28px]">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M12 4 L12 20 M6 14 L12 20 L18 14"
                        stroke="#C8A048"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#FFF3E7] via-[#FBEED0] to-[#F7DDC5] border border-[#C8A048]/40 shadow-[0_30px_60px_-30px_rgba(107,30,40,0.25)] px-6 md:px-14 py-12 md:py-16 text-center">
            {/* corner ornaments */}
            <svg viewBox="0 0 60 60" className="absolute top-3 left-3 w-10 h-10 opacity-70" aria-hidden>
              <path d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
            <svg viewBox="0 0 60 60" className="absolute top-3 right-3 w-10 h-10 opacity-70 -scale-x-100" aria-hidden>
              <path d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
            <svg viewBox="0 0 60 60" className="absolute bottom-3 left-3 w-10 h-10 opacity-70 -scale-y-100" aria-hidden>
              <path d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>
            <svg viewBox="0 0 60 60" className="absolute bottom-3 right-3 w-10 h-10 opacity-70 rotate-180" aria-hidden>
              <path d="M4 30 C4 15 15 4 30 4 M30 4 L30 14 M30 4 L40 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="30" r="1.4" fill="#C8A048" />
            </svg>

            {/* Lotus mark */}
            <div className="flex justify-center mb-4">
              <LotusLogo size={54} />
            </div>

            <h3 className="font-serif text-[28px] md:text-[40px] font-semibold maroon-text leading-tight">
              Ready To Create Something{" "}
              <span className="italic gold-text">Unique?</span>
            </h3>

            <p className="mt-4 font-sans text-[14px] md:text-[15px] text-[#5a3a3f] max-w-xl mx-auto">
              Speak with our designers and begin your bespoke Kamalavasinii journey.
              We&apos;ll guide you from first idea to finished heirloom.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-2">
                BOOK CONSULTATION
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12 L19 12 M13 6 L19 12 L13 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-9 py-4 rounded-full font-medium inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.42 0 .04 5.38.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 005.82 1.49h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.03 21.3h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.68.96.98-3.58-.24-.37a9.9 9.9 0 01-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.29.5 1.73.64.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z"/>
                </svg>
                WHATSAPP US
              </a>
            </div>

            {/* sparkles */}
            <svg viewBox="0 0 24 24" className="absolute top-1/4 left-[10%] w-3 h-3 opacity-70" aria-hidden>
              <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
            </svg>
            <svg viewBox="0 0 24 24" className="absolute bottom-[30%] right-[12%] w-3 h-3 opacity-70" aria-hidden>
              <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const TESTIMONIALS = [
    {
      quote:
        "The craftsmanship exceeded every expectation. My bridal jewellery was exactly how I imagined it — every gemstone, every curve of gold, a reflection of my dream.",
      name: "Ananya Iyer",
      city: "Chennai",
      occasion: "Bridal Collection",
    },
    {
      quote:
        "The consultation process was wonderful. Every detail was customized beautifully and the team treated my vision like their own creation.",
      name: "Meera Krishnan",
      city: "Bengaluru",
      occasion: "Anniversary Gift",
    },
    {
      quote:
        "Our family ordered matching silk sarees and jewellery for a wedding. Everything arrived perfectly crafted, radiant, and full of soul.",
      name: "Lakshmi Raghavan",
      city: "Hyderabad",
      occasion: "Wedding Ensemble",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden paper-texture"
      style={{ background: "#FDF7EF" }}
    >
      {/* Watermarks */}
      <div className="pointer-events-none absolute inset-0 z-[0]" aria-hidden>
        <LotusMotif className="absolute left-[-30px] top-14 w-[220px] h-[220px]" opacity={0.06} />
        <LotusMotif className="absolute right-[-40px] bottom-16 w-[260px] h-[260px]" opacity={0.06} />
        <LotusMotif className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]" opacity={0.03} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 text-[#B8860B] mb-3">
            <span className="h-px w-10 bg-[#B8860B]/70" />
            <span className="tracking-[0.4em] text-[11px] font-sans uppercase">
              Testimonials
            </span>
            <span className="h-px w-10 bg-[#B8860B]/70" />
          </div>
          <h2 className="font-serif text-[34px] md:text-[50px] font-semibold maroon-text leading-[1.1]">
            Words From Our{" "}
            <span className="italic gold-text">Patrons</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden>
              <path d="M0 10 L34 10" stroke="#B8860B" strokeWidth="1" />
              <path d="M46 10 L80 10" stroke="#B8860B" strokeWidth="1" />
              <path d="M40 3 C34 7 34 13 40 17 C46 13 46 7 40 3 Z" fill="#B8860B" />
            </svg>
          </div>
          <p className="mt-5 font-sans text-[15px] md:text-[16px] text-[#5a3a3f] max-w-2xl mx-auto leading-relaxed">
            Every handcrafted creation carries a story. Here&apos;s what our clients
            say about their experience with Kamalavasinii.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[28px] bg-[#FFF9F2] border border-[#EFE1CC] p-7 md:p-9 shadow-[0_15px_40px_-20px_rgba(107,30,40,0.16)] hover:shadow-[0_35px_70px_-30px_rgba(107,30,40,0.28)] hover:border-[#C8A048]/70 transition-all duration-500 overflow-hidden"
            >
              {/* Gold corner ornaments */}
              <svg viewBox="0 0 40 40" className="absolute top-3 left-3 w-6 h-6 opacity-60" aria-hidden>
                <path d="M4 20 C4 10 10 4 20 4 M20 4 L20 12 M20 4 L28 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
                <circle cx="20" cy="20" r="1.2" fill="#C8A048" />
              </svg>
              <svg viewBox="0 0 40 40" className="absolute bottom-3 right-3 w-6 h-6 opacity-60 rotate-180" aria-hidden>
                <path d="M4 20 C4 10 10 4 20 4 M20 4 L20 12 M20 4 L28 4" stroke="#C8A048" strokeWidth="1" fill="none" strokeLinecap="round" />
                <circle cx="20" cy="20" r="1.2" fill="#C8A048" />
              </svg>

              {/* Large decorative quotation mark */}
              <svg
                viewBox="0 0 100 80"
                className="absolute -top-2 right-5 w-24 h-20 opacity-70 group-hover:opacity-90 transition-opacity"
                aria-hidden
              >
                <defs>
                  <linearGradient id={`q-${i}`} x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#EAC77A" />
                    <stop offset="55%" stopColor="#C8A048" />
                    <stop offset="100%" stopColor="#8B6A1E" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 60 C20 40 32 24 50 20 L50 30 C42 32 34 40 34 50 L44 50 L44 66 L20 66 Z"
                  fill={`url(#q-${i})`}
                />
                <path
                  d="M56 60 C56 40 68 24 86 20 L86 30 C78 32 70 40 70 50 L80 50 L80 66 L56 66 Z"
                  fill={`url(#q-${i})`}
                  opacity="0.85"
                />
              </svg>

              {/* 5 gold stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" width="16" height="16" aria-hidden>
                    <defs>
                      <linearGradient id={`star-${i}-${s}`} x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#EAC77A" />
                        <stop offset="100%" stopColor="#B8860B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 2 L14.6 8.6 L22 9.3 L16.3 14.1 L18.1 21.3 L12 17.4 L5.9 21.3 L7.7 14.1 L2 9.3 L9.4 8.6 Z"
                      fill={`url(#star-${i}-${s})`}
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial quote */}
              <blockquote className="relative">
                <p className="font-serif italic text-[18px] md:text-[19.5px] text-[#3A2A20] leading-[1.6]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Decorative lotus divider */}
              <div className="mt-7 mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A048]/70" />
                <svg width="20" height="20" viewBox="0 0 22 22" aria-hidden>
                  <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#C8A048" />
                  <circle cx="11" cy="11" r="1.5" fill="#7B2334" />
                </svg>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A048]/70" />
              </div>

              {/* Name + City + Occasion */}
              <div>
                <div className="font-serif text-[20px] md:text-[22px] font-semibold maroon-text tracking-wide">
                  {t.name}
                </div>
                <div className="mt-1 flex items-center justify-center gap-2 font-sans text-[12px] text-[#8a5f66] tracking-[0.16em] uppercase">
                  <span>{t.city}</span>
                  <span className="w-1 h-1 rounded-full bg-[#C8A048]" />
                  <span className="text-[#B8860B]">{t.occasion}</span>
                </div>
              </div>

              {/* subtle hover sparkle */}
              <svg viewBox="0 0 24 24" className="absolute bottom-5 left-5 w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity" aria-hidden>
                <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" fill="#C8A048" />
              </svg>
            </motion.article>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 justify-center">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B8860B] to-[#B8860B]" />
            <svg width="26" height="26" viewBox="0 0 22 22" aria-hidden>
              <path d="M11 3 C7 8 7 14 11 19 C15 14 15 8 11 3 Z" fill="#C8A048" />
              <path d="M11 3 C4 10 4 12 11 19" stroke="#8B6A1E" strokeWidth="0.5" fill="none" />
              <circle cx="11" cy="11" r="1.6" fill="#7B2334" />
            </svg>
            <span className="h-px w-16 bg-gradient-to-l from-transparent via-[#B8860B] to-[#B8860B]" />
          </div>
          <p className="mt-4 font-serif italic text-[22px] md:text-[28px] maroon-text">
            Become a part of the{" "}
            <span className="gold-text not-italic font-semibold">Kamalavasinii</span>{" "}
            family.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="cream-bg border-t border-[#EFE1CC] py-10 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LotusLogo size={40} />
          <div>
            <div className="font-serif text-[16px] maroon-text tracking-[0.12em] font-semibold">
              KAMALAVASINII
            </div>
            <div className="font-sans text-[10px] text-[#B8862A] tracking-[0.3em]">
              SWARNA &amp; SILKS
            </div>
          </div>
        </div>
        <p className="font-sans text-[12px] text-[#8a4f56] text-center">
          © {new Date().getFullYear()} Kamalavasinii Swarna &amp; Silks. Crafted with heritage.
        </p>
        <div className="flex items-center gap-4 text-[13px] font-sans text-[#6B1E28]">
          <a href="#" className="hover:text-[#D97C74]">Instagram</a>
          <a href="#" className="hover:text-[#D97C74]">Facebook</a>
          <a href="#" className="hover:text-[#D97C74]">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [active, setActive] = useState(0);
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <Header active={active} setActive={setActive} />
      <Hero />
      <Categories />
      <WhyUs />
      <Heritage />
      <Journey />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
