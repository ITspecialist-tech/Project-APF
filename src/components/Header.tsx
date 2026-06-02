"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteContent } from "@/lib/content";

type HeaderProps = {
  site: SiteContent;
};

export function Header({ site }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nusrl-navy/10 bg-white/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-nusrl-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/#home" className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wide text-nusrl-gold">
            NUSRL, Ranchi
          </span>
          <span className="font-serif text-sm font-bold leading-tight text-nusrl-navy md:text-base">
            Undertrial Prisoners &amp; CLE
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-nusrl-navy"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/activities"
            className="text-sm font-medium text-gray-700 transition hover:text-nusrl-navy"
          >
            All Activities
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-nusrl-navy/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6 text-nusrl-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-nusrl-navy/10 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-gray-700 hover:text-nusrl-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/activities"
                className="block py-1 text-gray-700 hover:text-nusrl-navy"
                onClick={() => setOpen(false)}
              >
                All Activities
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
