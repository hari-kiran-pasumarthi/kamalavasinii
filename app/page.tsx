import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

import Hero from "@/components/home/Hero";
import CuratedTreasures from "@/components/home/CuratedTreasures";
import WhyKamalavasinii from "@/components/home/WhyKamalavasinii";
import Heritage from "@/components/home/Heritage";
import CustomJourney from "@/components/home/CustomJourney";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FDF2F4] to-[#F9E8EC]">
      <SiteHeader activeHref="/" />

      {/* Hero section with integrated Category Navigation Hub */}
      <Hero />

      {/* Content Flow Continues */}
      <WhyKamalavasinii />
      <Heritage />
      <CustomJourney />
      <Testimonials />
      <CTA />

      <SiteFooter />
    </main>
  );
}
