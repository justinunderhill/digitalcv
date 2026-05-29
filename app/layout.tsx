import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinunderhill.com";
const title = "Justin Underhill | Applied AI & Automation Consultant";
const description =
  "Johannesburg-based Applied AI & Automation Consultant building practical AI tools, agent workflows, and automation that connects to real business processes.";
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
  jobTitle: "Applied AI & Automation Consultant",
  knowsAbout: [
    "Applied AI",
    "AI automation",
    "LLM applications",
    "Agent workflows",
    "Project delivery",
    "Digital strategy",
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
        alt: "Justin Underhill — Applied AI & Automation Consultant",
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
    <html lang="en">
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
