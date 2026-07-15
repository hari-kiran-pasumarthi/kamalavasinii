import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import Hero from "@/components/couture/Hero";
import Collections from "@/components/couture/Collections";
import WhyCouture from "@/components/couture/WhyCouture";
import DesignerSpotlight from "@/components/couture/DesignerSpotlight";
import CreationProcess from "@/components/couture/CreationProcess";
import CTA from "@/components/couture/CTA";

export const metadata = {
  title: "Couture | Kamalavasinii",
  description:
    "Luxury bespoke couture designed exclusively for weddings, celebrations and timeless elegance.",
};

export default function CouturePage() {
  return (
    <>
      <SiteHeader activeHref="/couture" />

      <main>
        <Hero />
        <Collections />
        <WhyCouture />
        <DesignerSpotlight />
        <CreationProcess />
        <CTA />
      </main>

      <SiteFooter />
    </>
  );
}
