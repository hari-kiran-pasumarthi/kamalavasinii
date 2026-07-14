import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/home/Hero";
import CuratedTreasures from "@/components/home/CuratedTreasures";

export default function Home() {
  return (
    <>
      <SiteHeader activeHref="/" />

      <Hero />

      <CuratedTreasures />

      <SiteFooter />
    </>
  );
}
