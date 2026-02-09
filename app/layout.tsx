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
    "Senior Angular Consultant | Enterprise Frontend & Performance Engineering Specialist",

  description:
    "Senior Angular consultant helping global organizations modernize legacy Angular applications, improve frontend performance, and scale enterprise web platforms. Specializing in Angular migration, performance optimization, and enterprise frontend architecture.",
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
        url: "https://mercurionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercurion Consulting - Senior Angular Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Senior Angular Consultant | Enterprise Frontend & Performance Engineering",
    description:
      "Angular migration, performance optimization, and enterprise frontend architecture consulting.",
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
