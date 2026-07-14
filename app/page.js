import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import Hero from "@/components/home/Hero";
import CuratedTreasures from "@/components/home/CuratedTreasures";
import WhyKamalavasinii from "@/components/home/WhyKamalavasinii";
import Heritage from "@/components/home/Heritage";
import CustomJourney from "@/components/home/CustomJourney";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader activeHref="/" />

      <Hero />

      <CuratedTreasures />

      <WhyKamalavasinii />

      <Heritage />
      
      <CustomJourney />

      <Testimonials />

      <SiteFooter />
    </>
  );
}
