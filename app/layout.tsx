import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinunderhill.com";
const title = "Justin Underhill | AI Delivery & Systems";
const description =
  "Johannesburg-based digital delivery leader building practical AI systems, LLM assistants, and automation workflows for business environments.";
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
  jobTitle: "AI Delivery and Systems Practitioner",
  knowsAbout: [
    "AI automation",
    "LLM applications",
    "Project delivery",
    "Digital strategy",
    "Workflow orchestration",
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
        alt: "Justin Underhill portfolio social preview",
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
      </body>
    </html>
  );
}
