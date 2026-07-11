"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import {
  LotusLogo,
  WomanIllustration,
  SareeStackIllustration,
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
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % 3), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative watercolor-bg paper-texture overflow-hidden">
      <FloatingPetals />
      <GoldenSparkles />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr_1fr] gap-4 md:gap-6 items-center relative z-[2]">
        {/* Left: Woman illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="gentle-float">
            <WomanIllustration className="w-full max-w-[480px] mx-auto" />
          </div>
        </motion.div>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative text-center order-1 lg:order-2 px-2 md:px-4"
        >
          <div className="flex justify-center mb-3">
            <LotusLogo size={100} />
          </div>
          <h1 className="font-serif tracking-[0.06em] leading-[0.95] maroon-text">
            <span className="block text-[42px] sm:text-[58px] md:text-[68px] lg:text-[76px] font-semibold">
              KAMALAVASINII
            </span>
          </h1>
          <div className="mt-2 flex justify-center items-center gap-3 text-[#B8862A]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />
            <span className="font-serif tracking-[0.4em] text-[15px] md:text-[17px] uppercase">
              Swarna &amp; Silks
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#C8A048] to-transparent" />
          </div>
          <p className="mt-6 font-serif italic text-[22px] md:text-[28px] text-[#4a2a2f]">
            Where Heritage Becomes Luxury
          </p>
          <div className="mt-3 flex justify-center">
            <svg width="70" height="18" viewBox="0 0 70 18">
              <path d="M0 9 L30 9" stroke="#C8A048" strokeWidth="1" />
              <path d="M40 9 L70 9" stroke="#C8A048" strokeWidth="1" />
              <path d="M35 2 C30 6 30 12 35 16 C40 12 40 6 35 2 Z" fill="#C8A048" />
            </svg>
          </div>

          <p className="mt-5 font-sans text-[14px] md:text-[15px] text-[#5a3a3f] max-w-lg mx-auto leading-relaxed">
            Exclusive Customised Jewellery in Gold, Silver, Clay, Wood, Brass &amp; Bronze.
            <br className="hidden md:inline" />
            All Types of GI Tagged Sarees of South India and Exquisite Gemstones.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary-gradient font-sans tracking-[0.2em] text-[12px] px-8 py-4 rounded-full font-medium">
              EXPLORE SWARNA
            </button>
            <button className="btn-outline-gold font-sans tracking-[0.2em] text-[12px] px-8 py-4 rounded-full font-medium">
              DISCOVER SILKS
            </button>
          </div>

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
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative order-3"
        >
          <div className="gentle-float" style={{ animationDelay: "1.5s" }}>
            <SareeStackIllustration className="w-full max-w-[520px] mx-auto" />
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
      <Footer />
    </main>
  );
}

export default App;
