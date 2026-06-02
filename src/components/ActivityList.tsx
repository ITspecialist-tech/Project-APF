import type { Activity } from "@/lib/content";

type ActivityListProps = {
  activities: Activity[];
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <ul className="divide-y divide-gray-100">
      {activities.map((activity) => (
        <li key={activity.id} className="py-8 first:pt-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-nusrl-navy/10 px-3 py-1 text-xs font-semibold text-nusrl-navy">
              {activity.category}
            </span>
            <span className="text-sm text-nusrl-gold">{formatDate(activity.date)}</span>
          </div>
          <h2 className="mt-3 font-serif text-xl font-bold text-nusrl-navy">{activity.title}</h2>
          <p className="mt-2 text-gray-600">{activity.summary}</p>
          <p className="mt-2 text-sm text-gray-500">{activity.venue}</p>
        </li>
      ))}
    </ul>
  );
}
