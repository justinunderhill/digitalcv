import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinunderhill.com";
const title = "Justin Underhill | AI Engineer & Builder";
const description =
  "Johannesburg-based AI engineer who builds and ships production AI end-to-end — from ambiguous problem to deployed product. Full-stack (Next.js · Python/FastAPI) with a delivery background.";
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Justin Underhill",
  url: siteUrl,
  email: "mailto:underhill.justin@gmail.com",
  telephone: "+27814812165",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  sameAs: ["https://www.linkedin.com/in/justinunderhill"],
  jobTitle: "AI Engineer & Builder",
  knowsAbout: [
    "AI engineering",
    "Applied AI",
    "LLM applications",
    "Agent workflows",
    "Full-stack development",
    "Project delivery",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Justin Underhill" }],
  creator: "Justin Underhill",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Justin Underhill Portfolio",
    locale: "en_ZA",
    type: "profile",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Justin Underhill — AI Engineer & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <span aria-hidden="true">↑</span>
          <span>top</span>
        </a>
      </body>
    </html>
  );
}
