import type { GalleryItem } from "@/lib/content";

type GalleryGridProps = {
  items: GalleryItem[];
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function GalleryGrid({ items }: GalleryGridProps) {
  if (items.length === 0) {
    return <p className="text-gray-600">No gallery items available yet.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
          {item.image ? (
            <img src={item.image} alt={item.alt} className="h-56 w-full object-cover" />
          ) : (
            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-nusrl-navy/10 to-nusrl-gold/20 text-sm text-nusrl-navy">
              Add photo in CMS
            </div>
          )}
          <div className="p-5">
            <h2 className="font-serif text-lg font-bold text-nusrl-navy">{item.title}</h2>
            <p className="mt-2 text-sm text-nusrl-gold">{formatDate(item.date)}</p>
            <p className="mt-1 text-sm text-gray-600">{item.venue}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
