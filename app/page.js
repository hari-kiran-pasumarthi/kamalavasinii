import { SiteHeader, SiteFooter } from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import WhyUs from "@/components/home/WhyUs";
import Heritage from "@/components/home/Heritage";
import Journey from "@/components/home/Journey";

export default function HomePage() {
  return (
    <>
      <SiteHeader activeHref="/" />

      <main>
        <Hero />
        <Categories />
        <WhyUs />
        <Heritage />
        <Journey />
      </main>

      <SiteFooter />
    </>
  );
}
