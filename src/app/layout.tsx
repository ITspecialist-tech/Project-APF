import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { getSiteContent } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const site = getSiteContent();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://apf.nusrlranchi.ac.in"),
  title: {
    default: `${site.siteName} | ${site.universityShort}`,
    template: `%s | ${site.universityShort}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.siteName,
    description: site.tagline,
    siteName: site.universityShort,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
