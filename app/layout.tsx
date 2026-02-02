import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Lead & CRM Systems | GoHighLevel Specialist",
  description:
    "I help real estate teams capture every lead, respond faster, and book more appointments using GoHighLevel.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Real Estate Lead & CRM Systems | GoHighLevel Specialist",
    description:
      "Stop losing leads. Speed-to-lead + follow-up automation + clean CRM pipeline.",
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
