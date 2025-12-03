import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThreeScene from "@/components/ThreeScene";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebifyTech - Digital & E-commerce Agency",
  description:
    "Transform your digital presence with WebifyTech. We specialize in modern web design, e-commerce solutions, and digital marketing strategies.",
  keywords:
    "web design, e-commerce, digital agency, web development, SEO, digital marketing",
  authors: [{ name: "WebifyTech" }],
  openGraph: {
    title: "WebifyTech - Digital & E-commerce Agency",
    description: "Transform your digital presence with WebifyTech",
    type: "website",
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
    <html lang="en" className={interTight.variable}>
      <body className="antialiased">
        <ThreeScene />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
