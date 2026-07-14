"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function SiteFooter() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#4D0815] text-white">

      {/* Background Pattern */}

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top_right,#E5C36A_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Top */}

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Kamalavasinii"
              width={170}
              height={170}
              priority
              className="object-contain"
            />

            <p className="mt-6 text-[#E7D8C6] leading-8 text-sm">
              A celebration of timeless craftsmanship,
              bespoke jewellery, authentic South Indian silk sarees
              and carefully curated gemstones.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-[#D6AF36] font-serif text-2xl mb-6">
              Explore
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#D6AF36] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/jewellery"
                  className="hover:text-[#D6AF36] transition"
                >
                  Swarna Jewellery
                </Link>
              </li>

              <li>
                <Link
                  href="/silks"
                  className="hover:text-[#D6AF36] transition"
                >
                  Silk Sarees
                </Link>
              </li>

              <li>
                <Link
                  href="/gemstones"
                  className="hover:text-[#D6AF36] transition"
                >
                  Gemstones
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#D6AF36] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-[#D6AF36] font-serif text-2xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="text-[#D6AF36] mt-1"
                />

                <span className="text-[#E7D8C6]">
                  Mylapore,
                  Chennai,
                  Tamil Nadu,
                  India
                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={20}
                  className="text-[#D6AF36]"
                />

                <a
                  href="tel:+919999999999"
                  className="hover:text-[#D6AF36]"
                >
                  +91 99999 99999
                </a>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={20}
                  className="text-[#D6AF36]"
                />

                <a
                  href="mailto:info@kamalavasinii.com"
                  className="hover:text-[#D6AF36]"
                >
                  info@kamalavasinii.com
                </a>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-[#D6AF36] font-serif text-2xl mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#D6AF36]/30 flex items-center justify-center hover:bg-[#D6AF36] hover:text-black transition"
              >
                <Instagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#D6AF36]/30 flex items-center justify-center hover:bg-[#D6AF36] hover:text-black transition"
              >
                <Facebook />
              </a>

            </div>

            <button
              onClick={scrollTop}
              className="mt-10 inline-flex items-center gap-2 text-[#D6AF36] hover:text-white transition"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-[#D6AF36]/20 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#C9B5A3]">
            © {new Date().getFullYear()} Kamalavasinii Swarna & Silks.
            All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <Link
              href="/privacy"
              className="hover:text-[#D6AF36]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#D6AF36]"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
