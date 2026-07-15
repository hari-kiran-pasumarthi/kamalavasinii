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
    <>
      <SiteHeader activeHref="/" />

      <main>
        <Hero />
        <CuratedTreasures />
        <WhyKamalavasinii />
        <Heritage />
        <CustomJourney />
        <Testimonials />
        <CTA />
      </main>

      <SiteFooter />
    </>
  );
}
