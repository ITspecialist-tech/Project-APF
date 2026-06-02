import Link from "next/link";

type PageHeroProps = {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
};

export function PageHero({
  title,
  description,
  backHref = "/",
  backLabel = "Back to home",
}: PageHeroProps) {
  return (
    <div className="bg-gradient-to-br from-nusrl-navy to-nusrl-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <Link href={backHref} className="text-sm text-nusrl-gold hover:underline">
          ← {backLabel}
        </Link>
        <h1 className="mt-4 font-serif text-3xl font-bold md:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-gray-300">{description}</p>}
      </div>
    </div>
  );
}
