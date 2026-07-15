import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import Hero from "@/components/stories/Hero";
import FeaturedStories from "@/components/stories/FeaturedStories";
import ArtisanStories from "@/components/stories/ArtisanStories";
import HeritageJournal from "@/components/stories/HeritageJournal";
import Inspiration from "@/components/stories/Inspiration";
import CTA from "@/components/stories/CTA";

export const metadata = {
  title: "Stories | Kamalavasinii",
  description:
    "Explore the stories behind our jewellery, silks, artisans and timeless Indian heritage.",
};

export default function StoriesPage() {
  return (
    <>
      <SiteHeader activeHref="/stories" />

      <main>
        <Hero />
        <FeaturedStories />
        <ArtisanStories />
        <HeritageJournal />
        <Inspiration />
        <CTA />
      </main>

      <SiteFooter />
    </>
  );
}
