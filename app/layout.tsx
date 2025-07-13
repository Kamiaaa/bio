import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./components/ScroolToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biobuild Development Ltd. | Sustainable Real Estate Developers in Bangladesh",
  description: "Leading real estate developers in Bangladesh, specializing in sustainable luxury homes, affordable housing, and commercial properties in Dhaka, Chittagong, and beyond.",
  keywords: [
    "real estate developers in Bangladesh",
    "property developers Bangladesh",
    "sustainable construction Bangladesh",
    "luxury homes Dhaka",
    "affordable housing Bangladesh",
    "commercial real estate Chittagong",
    "residential projects Bangladesh",
    "green building Bangladesh",
    "Biobuild Development Ltd.",
    "real estate investment Bangladesh",
  ],
  authors: [{ name: "Biobuild Development Ltd.", url: "https://www.biobuildbd.com/" }],
  openGraph: {
    title: "Biobuild Development Ltd. | Sustainable Real Estate in Bangladesh",
    description: "Premier real estate developers in Bangladesh, delivering sustainable luxury and affordable housing projects in Dhaka, Chittagong, and major cities.",
    url: "https://www.biobuildbd.com/",
    siteName: "Biobuild Development Ltd.",
    images: [
      {
        url: "/og-image.jpg", // Replace with your OG image
        alt: "Biobuild Development Ltd. - Sustainable Real Estate in Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biobuild Development Ltd. | Sustainable Real Estate in Bangladesh",
    description: "Leading real estate developers in Bangladesh, specializing in eco-friendly and luxury properties.",
    images: ["/og-image.jpg"], // Replace with your Twitter image
  },
  metadataBase: new URL("https://www.biobuildbd.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <WhatsAppWidget />
          <ScrollToTop/>
          <Footer />
        </div>
      </body>
    </html>
  );
}