import type { SiteContent } from "@/lib/content";

type ServiceGridProps = {
  site: SiteContent;
};

const icons = ["⚖️", "🤝", "📚", "🏛️", "🔬", "📢", "📄", "🏛️"];

export function ServiceGrid({ site }: ServiceGridProps) {
  return (
    <section id="initiatives" className="bg-white">
      <div className="mx-auto max-w-7xl section-padding">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Our comprehensive approach addresses legal aid, education, outreach, and research for undertrial
          prisoners and stakeholders in the criminal justice system.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.initiatives.map((item, i) => (
            <article
              key={item.title}
              className="group rounded-xl border border-gray-100 bg-nusrl-cream/50 p-6 transition hover:border-nusrl-gold/50 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">
                {icons[i % icons.length]}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-nusrl-navy group-hover:text-nusrl-gold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
