import type { SiteContent } from "@/lib/content";

type HeroProps = {
  site: SiteContent;
};

export function Hero({ site }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-nusrl-navy via-nusrl-navy-dark to-nusrl-navy text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-nusrl-gold blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-nusrl-gold-light blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-nusrl-gold/40 bg-white/10 px-4 py-1 text-sm font-medium text-nusrl-gold">
            {site.universityShort}
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {site.siteName}
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">{site.university}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={site.hero.ctaPrimary.href}
              className="rounded-lg bg-nusrl-gold px-6 py-3 font-semibold text-nusrl-navy-dark transition hover:bg-nusrl-gold-light"
            >
              {site.hero.ctaPrimary.label}
            </a>
            <a
              href={site.hero.ctaSecondary.href}
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              {site.hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
