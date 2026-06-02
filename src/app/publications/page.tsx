import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PublicationList } from "@/components/PublicationList";
import { getPublications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Reports, brochures, research briefs, and educational materials from the Undertrial Prisoners & CLE project at NUSRL, Ranchi.",
};

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <>
      <PageHero
        title="Publications"
        description="Reports, policy briefs, brochures, and research materials documenting project outcomes and legal education resources."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        <PublicationList publications={publications} />
      </div>
    </>
  );
}
