import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  faqStructuredData,
  personStructuredData,
  serviceStructuredData,
  organizationStructuredData
} from "./lib/structuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Senior Angular Consultant | Full-Stack Developer with NetSuite SuiteCommerce Expertise",

  description:
    "Senior Full-Stack Developer specializing in Angular and NetSuite SuiteCommerce. 10+ years building enterprise applications and high-performance e-commerce platforms. Available for remote contracts.",
  keywords: [
    "Angular Consultant",
    "Hire Angular Developer",
    "SuiteCommerce Developer",
    "NetSuite SuiteCommerce Consultant",
    "Angular Migration Expert",
    "SuiteScript Developer",
    "Full-Stack JavaScript Developer",
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
      "Senior Angular & NetSuite SuiteCommerce Developer | Full-Stack Consultant",
    description:
      "10+ years experience in Angular and NetSuite SuiteCommerce development. Available for enterprise projects and remote contracts.",
    siteName: "Mercurion Consulting",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Umesh Chaurasiya - Senior Angular & SuiteCommerce Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Senior Angular & SuiteCommerce Developer | Available for Hire",
    description:
      "10+ years experience. Angular migration, SuiteCommerce development, enterprise consulting.",
    images: ["https://mercurionconsulting.com/og-image.jpg"],
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GTM-NXD85WF5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GTM-NXD85WF5');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
