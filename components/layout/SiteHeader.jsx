"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, User, ShoppingBag } from "lucide-react";
import { LotusLogo } from "@/components/SiteIllustrations";

export const NAV = [
  {
    label: "Home",
    sub: "",
    href: "/",
  },
  {
    label: "Swarna",
    sub: "Jewellery",
    href: "/jewellery",
  },
  {
    label: "Silks",
    sub: "Sarees",
    href: "/silks",
  },
  {
    label: "Gemstones",
    sub: "Ratna Mandira",
    href: "/gemstones",
  },
  {
    label: "Contact",
    sub: "Consultation",
    href: "/contact",
  },
];

export default function SiteHeader({ activeHref = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FDF7EF]/90 border-b border-[#EFE1CC]">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">

        <div className="h-24 flex items-center justify-between">

          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <LotusLogo size={56} />

            <div>

              <h1 className="font-serif text-2xl tracking-[0.18em] text-[#6B1E28]">
                KAMALAVASINII
              </h1>

              <p className="text-[11px] tracking-[0.35em] text-[#B8860B] uppercase">
                Swarna & Silks
              </p>

            </div>

          </Link>

          {/* Desktop Nav */}

          <nav className="hidden xl:flex items-center gap-10">

            {NAV.map((item) => {

              const active = item.href === activeHref;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={`font-medium transition ${
                      active
                        ? "text-[#D97C74]"
                        : "text-[#4A2A2F] group-hover:text-[#D97C74]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {item.sub && (
                    <span className="text-[11px] text-[#9C6C72]">
                      {item.sub}
                    </span>
                  )}
                </Link>
              );
            })}

          </nav>

          {/* Icons */}

          <div className="hidden xl:flex items-center gap-3">

            <button className="icon-btn">
              <Search size={20} />
            </button>

            <Link href="/admin/login" className="icon-btn">
              <User size={20} />
            </Link>

            <button className="icon-btn">
              <Heart size={20} />
            </button>

            <button className="relative icon-btn">

              <ShoppingBag size={20} />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D97C74] text-white text-[11px] flex items-center justify-center">
                0
              </span>

            </button>

          </div>

          {/* Mobile Button */}

          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="xl:hidden bg-[#FDF7EF] border-t border-[#EFE1CC]">

          {NAV.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 border-b border-[#EFE1CC]"
            >

              <div className="font-medium text-[#6B1E28]">
                {item.label}
              </div>

              <div className="text-xs text-[#A37B55]">
                {item.sub}
              </div>

            </Link>

          ))}

        </div>

      )}

    </header>
  );
}
