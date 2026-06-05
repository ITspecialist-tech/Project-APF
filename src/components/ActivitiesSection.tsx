import Link from "next/link";
import type { Activity, SiteContent } from "@/lib/content";

type ActivitiesSectionProps = {
  activities: Activity[];
  site: SiteContent;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ActivitiesSection({ activities, site }: ActivitiesSectionProps) {
  const section = site.sections.activities;

  return (
    <section id="activities" className="bg-nusrl-cream">
      <div className="mx-auto max-w-7xl section-padding">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-subtitle">{section.subtitle}</p>
          </div>
          <Link
            href="/activities"
            className="rounded-lg border border-nusrl-navy px-4 py-2 text-sm font-semibold text-nusrl-navy transition hover:bg-nusrl-navy hover:text-white"
          >
            {section.buttonLabel}
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="flex flex-col rounded-xl border border-nusrl-navy/10 bg-white p-6 shadow-sm"
            >
              <span className="inline-block w-fit rounded-full bg-nusrl-navy/10 px-3 py-1 text-xs font-semibold text-nusrl-navy">
                {activity.category}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-nusrl-navy">{activity.title}</h3>
              <p className="mt-2 text-sm text-nusrl-gold">{formatDate(activity.date)}</p>
              <p className="mt-3 flex-1 text-sm text-gray-600">{activity.summary}</p>
              <p className="mt-3 text-xs text-gray-500">{activity.venue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
