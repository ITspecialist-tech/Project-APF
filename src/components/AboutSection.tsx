import type { SiteContent } from "@/lib/content";
import { MissionValues } from "./MissionValues";

type AboutSectionProps = {
  site: SiteContent;
};

export function AboutSection({ site }: AboutSectionProps) {
  return (
    <section id="about" className="bg-nusrl-cream">
      <div className="mx-auto max-w-7xl section-padding">
        <h2 className="section-title">{site.about.title}</h2>
        <p className="section-subtitle">{site.about.intro}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-nusrl-navy">Our Journey</h3>
              <p className="mt-3 leading-relaxed text-gray-700">{site.about.journey}</p>
            </div>
            <div className="rounded-xl border border-nusrl-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-nusrl-navy">Constitutional Mandate</h3>
              <p className="mt-3 leading-relaxed text-gray-700">{site.about.constitutional}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-nusrl-navy p-8 text-white">
            <p className="text-4xl font-serif text-nusrl-gold">&ldquo;</p>
            <p className="text-lg leading-relaxed italic">
              The State shall secure that the operation of the legal system promotes justice, on a basis of
              equal opportunity, and shall, in particular, provide free legal aid.
            </p>
            <p className="mt-4 text-sm text-nusrl-gold">— Article 39A, Constitution of India</p>
          </div>
        </div>

        <div className="mt-16">
          <MissionValues site={site} />
        </div>
      </div>
    </section>
  );
}
