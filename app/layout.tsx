import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  faqStructuredData,
  personStructuredData,
  serviceStructuredData,
} from "./lib/structuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Senior Angular Consultant | Enterprise Frontend & Performance Engineering Specialist",

  description:
    "Senior Angular consultant helping global organizations modernize legacy Angular applications, improve frontend performance, and scale enterprise web platforms. Specializing in Angular migration, performance optimization, and enterprise frontend architecture.",
  keywords: [
    "Hire Angular Developer",
    "Hire Angular Consultant",
    "Hire Senior Angular Developer",
    "Hire Angular Contractor",
    "Hire Angular Expert",
    "Angular Consultant for Hire",
    "Remote Angular Contractor",
    "Enterprise Angular Architect Consultant",
    "Angular Freelance Developer Hire",
    "Angular Contract Developer Remote",
    "Angular Architect",
    "Angular Consultant",
    "Angular Lead",
    "Angular Expert",
    "Angular Developer",
    "Frontend Architect",
    "Enterprise Angular Consultant",
    "Angular Performance Optimization",
    "Angular Enterprise Applications",
    "Angular UI Architecture",
    "Frontend Architecture Consulting",
    "Enterprise Angular",
    "Frontend Performance",
    "Angular Architecture",
    "Performance Optimization",
    "Performance Engineering",
    "Angular migration",
    "Frontend engineering",
    "Web performance",
    "Umesh Chaurasiya",
    "Senior Angular Developer",
    "Angular Contractor",
    "Angular Freelance Consultant",
    "Angular Migration Consultant",
    "Angular Modernization Specialist",
    "Angular Performance Optimization Expert",
    "Frontend Performance Consultant",
    "Enterprise Frontend Consultant",
    "Web Performance Engineering Consultant",
    "Enterprise Angular Applications",
    "Large Scale Angular Applications",
    "Mission Critical Frontend Systems",
    "Enterprise Web Application Frontend Engineering",
    "Angular SSR Performance",
    "Core Web Vitals Optimization Consultant",
    "Remote Angular Consultant",
    "Global Angular Consultant",
    "Enterprise Frontend Contractor",
    "Senior Angular Engineer",
    "Angular Technical Lead",
    "Angular Solution Consultant",
    "Angular Modernization Consultant",
    "Enterprise Frontend Engineer Angular",
    "Enterprise Web Frontend Consultant",
    "Enterprise UI Engineering Consultant",
    "Large Scale Frontend Consultant",
    "Mission Critical Frontend Engineer",
    "AngularJS to Angular Migration Expert",
    "Legacy Angular Modernization Specialist",
    "Frontend Modernization Consultant",
    "Legacy Frontend Migration Consultant",
    "Angular Upgrade Specialist Enterprise",
    "Angular Performance Optimization Consultant",
    "Frontend Performance Engineering Consultant",
    "Core Web Vitals Optimization Consultant Enterprise",
    "Enterprise Web Performance Consultant",
    "High Traffic Frontend Performance Specialist",
    "Frontend Runtime Performance Engineer",
    "Angular Architecture Consultant",
    "Frontend Architecture Consultant Enterprise",
    "Frontend Platform Engineering Consultant",
    "Enterprise UI Architecture Specialist",
    "Frontend Scalability Consultant",
    "Distributed Frontend Architecture Consultant",
    "Hands-on Angular Consultant",
    "Angular Implementation Consultant",
    "Enterprise Angular Delivery Consultant",
    "Frontend Engineering Execution Consultant",
    "Angular Feature Platform Engineer",
    "Enterprise Frontend Delivery Specialist",
    "Angular Contractor Remote",
    "Enterprise Angular Contract Developer",
    "Senior Angular Remote Consultant",
    "Angular Consultant International Projects",
    "Angular Mission Critical Systems",
    "Enterprise Web Application Angular",
    "High Availability Frontend Systems Angular",
    "Scalable Angular Platform Engineering",
    "Senior Angular Migration Consultant Enterprise",
    "Enterprise Frontend Performance Consultant Angular",
    "Legacy Angular Modernization Specialist Consultant",
    "Angular Platform Architecture Consultant",
    "Angular Technical Lead Consultant",
    "Enterprise Web Frontend Performance Specialist",
    "Angular Enterprise Application Specialist",
    "High Traffic Angular Performance Engineer",
    "Remote Angular Consultant Enterprise",
    "Angular Delivery Consultant Enterprise",
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
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Senior Angular Consultant | Enterprise Frontend & Performance Engineering",
    description:
      "Angular migration, performance optimization, and enterprise frontend architecture consulting.",
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
