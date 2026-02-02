import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilmer Juntado | Real Estate Lead & CRM Systems",
  description:
    "Speed-to-lead, GoHighLevel CRM setup, and follow-up automations for real estate teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">

  {children}
</body>

    </html>
  );
}
