import type { SiteContent } from "@/lib/content";

type TeamGridProps = {
  site: SiteContent;
};

export function TeamGrid({ site }: TeamGridProps) {
  return (
    <section id="team" className="bg-nusrl-cream">
      <div className="mx-auto max-w-7xl section-padding">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Faculty, coordinators, and student volunteers advancing the project at NUSRL, Ranchi. Update team
          details from official project materials in <code className="rounded bg-white px-1 text-sm">src/content/site.json</code>.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.team.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-nusrl-navy/10 bg-white p-6 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nusrl-navy text-2xl font-bold text-nusrl-gold">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-nusrl-navy">{member.name}</h3>
              <p className="text-sm font-medium text-nusrl-gold">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="mt-3 block text-sm text-nusrl-navy hover:underline"
                >
                  {member.email}
                </a>
              )}
              {member.phone && <p className="text-sm text-gray-500">{member.phone}</p>}
            </article>
          ))}
        </div>

        {site.patrons.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-nusrl-navy">Patrons</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {site.patrons.map((patron) => (
                <div
                  key={patron.name}
                  className="rounded-xl border border-nusrl-gold/30 bg-white p-6 text-center"
                >
                  <h4 className="font-serif text-lg font-bold text-nusrl-navy">{patron.name}</h4>
                  <p className="text-sm text-nusrl-gold">{patron.role}</p>
                  {patron.note && <p className="mt-2 text-sm text-gray-600">{patron.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
