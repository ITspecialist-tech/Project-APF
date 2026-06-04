import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSiteContent } from "@/lib/content";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const site = getSiteContent();

  return (
    <div className="flex min-h-full flex-col">
      <Header site={site} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer site={site} />
    </div>
  );
}
