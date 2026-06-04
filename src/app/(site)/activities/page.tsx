import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ActivityList } from "@/components/ActivityList";
import { getActivities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activities & Updates",
  description:
    "Project activities, legal aid initiatives, consultation programmes, prison outreach, and continuous legal education at NUSRL, Ranchi.",
};

export default function ActivitiesPage() {
  const activities = getActivities();

  return (
    <>
      <PageHero
        title="Activities & Updates"
        description="Archive of project activities, legal aid initiatives, consultations, outreach programmes, and continuous legal education events."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        <ActivityList activities={activities} />
      </div>
    </>
  );
}
