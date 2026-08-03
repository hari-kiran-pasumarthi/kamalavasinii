import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Collections from "@/components/home/Collections";
import CuratedTreasures from "@/components/home/CuratedTreasures";
import WhyKamalavasinii from "@/components/home/WhyKamalavasinii";
import Heritage from "@/components/home/Heritage";
import CustomJourney from "@/components/home/CustomJourney";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF7EF]">
      <SiteHeader activeHref="/" />

      {/* Hero */}
      <Hero />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Collections */}
      <Collections />

      {/* Curated Treasures */}
      <CuratedTreasures />

      {/* Why Kamalavasinii */}
      <WhyKamalavasinii />

      {/* Heritage */}
      <Heritage />

      {/* Custom Journey */}
      <CustomJourney />

      {/* Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CTA />

      <SiteFooter />
    </main>
  );
}
