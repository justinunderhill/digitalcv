import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Underhill | AI Systems Engineer",
  description:
    "AI Systems Engineer, Agentic AI Developer, and AI Automation Architect building production-ready systems for modern business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
