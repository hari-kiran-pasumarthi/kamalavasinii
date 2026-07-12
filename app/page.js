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
      <Footer />
    </main>
  );
}

export default App;
