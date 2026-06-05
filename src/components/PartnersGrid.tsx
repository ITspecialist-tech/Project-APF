import type { SiteContent } from "@/lib/content";

type PartnersGridProps = {
  site: SiteContent;
};

export function PartnersGrid({ site }: PartnersGridProps) {
  return (
    <section id="partners" className="bg-white">
      <div className="mx-auto max-w-7xl section-padding">
        <h2 className="section-title">{site.sections.partners.title}</h2>
        <p className="section-subtitle">{site.sections.partners.subtitle}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-xl border border-gray-100 bg-nusrl-cream/30 p-6 text-center"
            >
              <p className="font-serif font-bold text-nusrl-navy">{partner.name}</p>
              <p className="mt-2 text-sm text-nusrl-gold">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
