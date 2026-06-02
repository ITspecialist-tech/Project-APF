import type { SiteContent } from "@/lib/content";

type MissionValuesProps = {
  site: SiteContent;
};

export function MissionValues({ site }: MissionValuesProps) {
  return (
    <div>
      <h2 className="section-title">{site.mission.title}</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="rounded-xl border border-nusrl-navy/10 bg-white p-8 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-nusrl-navy">Our Mission</h3>
          <ul className="mt-4 space-y-3">
            {site.mission.missionItems.map((item) => (
              <li key={item} className="flex gap-3 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nusrl-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {site.mission.values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-nusrl-gold/30 bg-white p-5 shadow-sm"
            >
              <h3 className="font-serif font-bold text-nusrl-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
