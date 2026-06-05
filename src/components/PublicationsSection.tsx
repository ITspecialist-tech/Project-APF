import Link from "next/link";
import type { Publication, SiteContent } from "@/lib/content";

type PublicationsSectionProps = {
  publications: Publication[];
  site: SiteContent;
};

export function PublicationsSection({ publications, site }: PublicationsSectionProps) {
  const section = site.sections.publications;

  return (
    <section id="publications" className="bg-white">
      <div className="mx-auto max-w-7xl section-padding">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-subtitle">{section.subtitle}</p>
          </div>
          <Link
            href="/publications"
            className="rounded-lg border border-nusrl-navy px-4 py-2 text-sm font-semibold text-nusrl-navy transition hover:bg-nusrl-navy hover:text-white"
          >
            {section.buttonLabel}
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {publications.slice(0, 4).map((pub) => (
            <article
              key={pub.id}
              className="rounded-xl border border-gray-100 p-6 transition hover:border-nusrl-gold/50 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-nusrl-gold/20 px-3 py-1 text-xs font-semibold text-nusrl-navy">
                  {pub.type}
                </span>
                <span className="text-sm text-gray-500">{pub.date}</span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-nusrl-navy">{pub.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{pub.description}</p>
              {pub.pdfPath ? (
                <a
                  href={pub.pdfPath}
                  className="mt-4 inline-flex text-sm font-semibold text-nusrl-navy hover:text-nusrl-gold"
                  download
                >
                  Download PDF →
                </a>
              ) : (
                <p className="mt-4 text-sm italic text-gray-400">PDF available upon upload</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
