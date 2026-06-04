import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { TeamGrid } from "@/components/TeamGrid";
import { PartnersGrid } from "@/components/PartnersGrid";
import { GallerySection } from "@/components/GallerySection";
import { ContactBlock } from "@/components/ContactBlock";
import {
  getSiteContent,
  getLatestActivities,
  getPublications,
  getGalleryItems,
} from "@/lib/content";

export default function HomePage() {
  const site = getSiteContent();
  const activities = getLatestActivities(3);
  const publications = getPublications();
  const galleryItems = getGalleryItems();

  return (
    <>
      <Hero site={site} />
      <AboutSection site={site} />
      <ServiceGrid site={site} />
      <ActivitiesSection activities={activities} />
      <PublicationsSection publications={publications} />
      <TeamGrid site={site} />
      <PartnersGrid site={site} />
      <GallerySection items={galleryItems} />
      <ContactBlock site={site} />
    </>
  );
}
