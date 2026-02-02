import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Lead & CRM Systems | GoHighLevel Specialist",
  description:
    "I help real estate teams capture every lead, respond faster, automate follow-ups, and book more appointments using GoHighLevel (LeadConnector).",
  openGraph: {
    title: "Real Estate Lead & CRM Systems | GoHighLevel Specialist",
    description:
      "Stop losing leads. Speed-to-lead + follow-up automation + clean pipelines in GoHighLevel.",
    type: "website",
  },
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
