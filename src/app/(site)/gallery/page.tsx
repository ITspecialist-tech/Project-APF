import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Event Gallery",
  description:
    "Photo gallery of consultations, legal aid activities, prison outreach, and continuous legal education programmes.",
};

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <>
      <PageHero
        title="Event Gallery"
        description="Photo archive of project events, consultations, outreach visits, and continuous legal education sessions."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <GalleryGrid items={items} />
      </div>
    </>
  );
}
