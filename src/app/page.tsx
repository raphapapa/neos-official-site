import { getPlayers, getArticles, getSponsors, getSiteSettings } from "@/lib/api";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PlayerHighlight } from "@/components/home/PlayerHighlight";
import { NewsPreview } from "@/components/home/NewsPreview";
import { SponsorSection } from "@/components/home/SponsorSection";
import { SectionDivider } from "@/components/shared/SectionDivider";

export default async function HomePage() {
  const [players, articlesRes, sponsors, settings] = await Promise.all([
    getPlayers(),
    getArticles(1, 3),
    getSponsors(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero
        heroImageUrl={settings.hero_image_url}
        heroTitle={settings.hero_title}
        heroSubtitle={settings.hero_subtitle}
      />
      <AboutPreview />
      <SectionDivider />
      <PlayerHighlight players={players} />
      <SectionDivider />
      <NewsPreview articles={articlesRes.articles} />
      <SectionDivider />
      <SponsorSection sponsors={sponsors} />
    </>
  );
}
