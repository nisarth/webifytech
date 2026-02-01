import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const fraunces = Fraunces({

  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebifyTech | Web Development & E-Commerce Agency",
  description:
    "WebifyTech builds high-performance websites and e-commerce platforms that drive real growth. Custom web development, SEO, and digital marketing — results you can measure.",
  keywords: [
    "web development agency",
    "e-commerce solutions",
    "digital marketing agency",
    "website design company",
    "custom web development",
    "SEO services",
    "UI/UX design",
  ],
  authors: [{ name: "WebifyTech" }],
  metadataBase: new URL("https://webifytech.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WebifyTech | Web Development & E-Commerce Agency",
    description:
      "WebifyTech builds high-performance websites and e-commerce platforms that drive real growth.",
    url: "https://webifytech.netlify.app/",
    siteName: "WebifyTech",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebifyTech | Web Development & E-Commerce Agency",
    description:
      "WebifyTech builds high-performance websites and e-commerce platforms that drive real growth.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-UQvKZh-cL81m7JDLGgoVRFZVXLV1W9BvASsBQcQH2Q",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JFYTKT7TP2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JFYTKT7TP2');
          `}
        </Script>
        <Header />

        <main>{children}</main>
        <Footer />
        
        {/* Schema.org Organization Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "WebifyTech",
                "url": "https://webify-tech.com",
                "logo": "https://webify-tech.com/assets/logo.svg",
                "description": "WebifyTech is a full-service digital agency specializing in web development, e-commerce solutions, SEO optimization, and digital marketing.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-123-4567",
                  "contactType": "customer service",
                  "email": "hello.webifytech@gmail.com",
                  "availableLanguage": "English"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "WebifyTech",
                "url": "https://webify-tech.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://webify-tech.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />

      </body>
    </html>
  );
}

