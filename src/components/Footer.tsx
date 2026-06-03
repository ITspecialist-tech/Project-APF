import Link from "next/link";
import type { SiteContent } from "@/lib/content";

type FooterProps = {
  site: SiteContent;
};

export function Footer({ site }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-nusrl-navy/10 bg-nusrl-navy-dark text-white">
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-bold">{site.universityShort}</p>
            <p className="mt-2 text-sm text-gray-300">{site.siteName}</p>
          </div>
          <div>
            <p className="font-semibold text-nusrl-gold">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>
                <a href={site.universityUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  NUSRL Ranchi
                </a>
              </li>
              <li>
                <a href={site.projectsUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  University Projects
                </a>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  Event Gallery
                </Link>
              </li>
              <li>
                <a href="/admin" className="hover:text-white">
                  CMS Admin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-nusrl-gold">Contact</p>
            <p className="mt-3 text-sm text-gray-300 whitespace-pre-line">{site.contact.address}</p>
            <p className="mt-2 text-sm">
              <a href={`mailto:${site.contact.email}`} className="hover:text-nusrl-gold">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>© {year} {site.universityShort}. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Developed by Pratap, with dedication and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
