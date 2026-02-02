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
        
        {/* Schema.org Global Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://webifytech.netlify.app/#organization",
                "name": "WebifyTech",
                "url": "https://webifytech.netlify.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://webifytech.netlify.app/assets/logo.svg",
                  "width": "180",
                  "height": "60"
                },
                "sameAs": [
                  "https://twitter.com/webifytech",
                  "https://linkedin.com/company/webifytech",
                  "https://github.com/webifytech"
                ],
                "description": "WebifyTech is a premier digital agency specializing in high-performance web development, Shopify e-commerce, and strategic SEO optimization.",
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
                "@id": "https://webifytech.netlify.app/#website",
                "name": "WebifyTech",
                "url": "https://webifytech.netlify.app",
                "publisher": {
                  "@id": "https://webifytech.netlify.app/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://webifytech.netlify.app/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://webifytech.netlify.app/#service",
                "name": "WebifyTech Digital Solutions",
                "url": "https://webifytech.netlify.app",
                "image": "https://webifytech.netlify.app/assets/og-image.png",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Miami",
                  "addressRegion": "FL",
                  "addressCountry": "US"
                }
              }
            ]),
          }}
        />

      </body>
    </html>
  );
}

