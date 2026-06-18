import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Georocks | Premium Rock & Stone Sales - Trivandrum",
    template: "%s | Georocks",
  },
  description:
    "Georocks offers premium quality rocks and stones of all sizes for construction, landscaping, and industrial use. Crusher unit services in Trivandrum, Kerala.",
  keywords: [
    "rocks",
    "stones",
    "crusher",
    "building materials",
    "construction",
    "Trivandrum",
    "Kerala",
    "aggregates",
    "gravel",
    "granite",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
