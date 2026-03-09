import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  faqStructuredData,
  personStructuredData,
  serviceStructuredData,
  organizationStructuredData,
  localBusinessStructuredData
} from "./lib/structuredData";
import Script from "next/script";
import { BackToTop } from "./components/ui/BackToTop";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Hire Angular Consultant | Trusted by Fortune 500 for Migration & Performance | Free Audit",

  description:
    "Award-winning Angular consultant helping Fortune 500 companies migrate legacy apps, boost performance 40%+, and scale enterprise platforms. 500+ successful projects. Free consultation.",
  keywords: [
    "Angular Consultant",
    "Hire Angular Developer",
    "Angular Migration Expert",
    "Enterprise Angular Architect",
    "Frontend Performance Optimization",
    "AngularJS Migration Consultant",
    "Remote Angular Consultant",
  ],
  authors: [{ name: "Umesh Chaurasiya" }],
  creator: "Umesh Chaurasiya",
  publisher: "Mercurion Consulting",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercurionconsulting.com",
    title:
      "Senior Angular Consultant | Enterprise Frontend Performance Specialist",
    description:
      "Helping enterprises modernize Angular applications, improve performance, and scale frontend platforms.",
    siteName: "Mercurion Consulting",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Umesh Chaurasiya - Senior Angular Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Senior Angular Consultant | Enterprise Frontend & Performance Engineering",
    description:
      "Angular migration, performance optimization, and enterprise frontend architecture consulting.",
    images: ["https://mercurionconsulting.com/og-image.webp"],
  },
  alternates: {
    canonical: "https://mercurionconsulting.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
        {process.env.NODE_ENV === "production" && (
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NXD85WF5');
                    `,
                }}
            />
        )}
      </head>
      <body className={openSans.className}>
        {process.env.NODE_ENV === "production" && (
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NXD85WF5"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
        )}
        {children}
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
