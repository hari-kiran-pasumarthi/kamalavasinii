"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { LotusLogo } from "@/components/SiteIllustrations";

export const NAV = [
  { label: "Home",           sub: "",            href: "/" },
  { label: "Swarna",         sub: "Jewellery",   href: "/jewellery" },
  { label: "Silks",          sub: "Sarees",      href: "/silks" },
  { label: "Gemstones",      sub: "Ratna Mandira", href: "/gemstones" },
  { label: "Clay Jewellery", sub: "Artisan Crafts", href: "/clay" },
  { label: "Couture",        sub: "Costumes",    href: "/couture" },
  { label: "Heritage",       sub: "Our Legacy",  href: "/heritage" },
  { label: "Stories",        sub: "Artisans",    href: "/stories" },
];

/**
 * SiteHeader — sticky navbar shared across all pages.
 * @param {string} activeHref - The href of the current page (e.g. "/", "/jewellery")
 */
export function SiteHeader({ activeHref = "/" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#FDF7EF]/85 border-b border-[#EFE1CC]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
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
        </Link>

        {/* Center Nav */}
        <nav className="hidden xl:flex items-end gap-8 flex-1 justify-center">
          {NAV.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-item flex flex-col items-center text-center group ${isActive ? "active" : ""}`}
              >
                <span
                  className={`font-sans text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-[#D97C74]"
                      : "text-[#4a2a2f] group-hover:text-[#D97C74]"
                  }`}
                >
                  {item.label}
                </span>
                {item.sub && (
                  <span className="font-sans text-[11px] text-[#9a6c72] tracking-wide mt-0.5">
                    {item.sub}
                  </span>
                )}
              </Link>
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
              {NAV.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-left py-2 ${isActive ? "text-[#D97C74]" : "text-[#4a2a2f]"}`}
                  >
                    <div className="font-sans font-medium">{item.label}</div>
                    {item.sub && (
                      <div className="text-[11px] text-[#9a6c72]">{item.sub}</div>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * SiteFooter — shared footer.
 */
export function SiteFooter() {
  return (
    <footer className="cream-bg border-t border-[#EFE1CC] py-10 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <LotusLogo size={40} />
          <div>
            <div className="font-serif text-[16px] maroon-text tracking-[0.12em] font-semibold">
              KAMALAVASINII
            </div>
            <div className="font-sans text-[10px] text-[#B8862A] tracking-[0.3em]">
              SWARNA &amp; SILKS
            </div>
          </div>
        </Link>
        <p className="font-sans text-[12px] text-[#8a4f56] text-center">
          © 2026 Kamalavasinii Swarna &amp; Silks. Crafted with heritage.
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
