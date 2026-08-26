import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "BizToolkit – Free Business Calculators",
    template: "%s | BizToolkit",
  },
  description:
    "Free business calculators for profit margin, ROI, break-even, markup, discount, commission, and VAT.",
  verification: {
    google: "Jk3U7_HyMGJ25qFvdNZvmmgpywVFKAC1Vh-kEZkCcSM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
