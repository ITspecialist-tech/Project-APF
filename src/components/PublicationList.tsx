import type { Publication } from "@/lib/content";

type PublicationListProps = {
  publications: Publication[];
};

export function PublicationList({ publications }: PublicationListProps) {
  if (publications.length === 0) {
    return <p className="text-gray-600">No publications listed yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-100">
      {publications.map((pub) => (
        <li key={pub.id} className="py-8 first:pt-0">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-nusrl-gold/20 px-3 py-1 text-xs font-semibold text-nusrl-navy">
                  {pub.type}
                </span>
                <span className="text-sm text-gray-500">{pub.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold text-nusrl-navy">{pub.title}</h2>
              <p className="mt-2 text-gray-600">{pub.description}</p>
            </div>
            {pub.file ? (
              <a
                href={pub.file}
                className="shrink-0 rounded-lg bg-nusrl-navy px-4 py-2 text-sm font-semibold text-white hover:bg-nusrl-navy-dark"
                download
              >
                Download
              </a>
            ) : (
              <span className="shrink-0 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-400">
                Pending upload
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
