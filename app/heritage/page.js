import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import Hero from "@/components/heritage/Hero";
import Legacy from "@/components/heritage/Legacy";
import Traditions from "@/components/heritage/Traditions";
import Craftsmanship from "@/components/heritage/Craftsmanship";
import Timeline from "@/components/heritage/Timeline";
import CTA from "@/components/heritage/CTA";

export const metadata = {
  title: "Our Heritage | Kamalavasinii",
  description:
    "Discover the timeless heritage, traditions and craftsmanship that inspire every Kamalavasinii creation.",
};

export default function HeritagePage() {
  return (
    <>
      <SiteHeader activeHref="/heritage" />

      <main>
        <Hero />
        <Legacy />
        <Traditions />
        <Craftsmanship />
        <Timeline />
        <CTA />
      </main>

      <SiteFooter />
    </>
  );
}
