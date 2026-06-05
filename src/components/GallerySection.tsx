import Link from "next/link";
import type { GalleryItem, SiteContent } from "@/lib/content";

type GallerySectionProps = {
  items: GalleryItem[];
  site: SiteContent;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function GallerySection({ items, site }: GallerySectionProps) {
  const section = site.sections.gallery;

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl section-padding">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-subtitle">{section.subtitle}</p>
          </div>
          <Link
            href="/gallery"
            className="rounded-lg border border-nusrl-navy px-4 py-2 text-sm font-semibold text-nusrl-navy transition hover:bg-nusrl-navy hover:text-white"
          >
            {section.buttonLabel}
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              {item.image ? (
                <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
              ) : (
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-nusrl-navy/10 to-nusrl-gold/20 text-sm text-nusrl-navy">
                  Add event photo
                </div>
              )}
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-nusrl-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-nusrl-gold">{formatDate(item.date)}</p>
                <p className="mt-1 text-sm text-gray-600">{item.venue}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
