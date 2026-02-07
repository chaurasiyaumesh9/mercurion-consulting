import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umesh Chaurasiya - Enterprise Angular & Performance Consultant",
  description: "Independent Angular consultant specializing in enterprise-scale frontend architecture and performance optimization. I help organizations scale Angular applications and optimize frontend performance for mission-critical systems.",
  keywords: [
    "Angular Architect",
    "Angular Consultant",
    "Angular Lead",
    "Angular Expert",
    "Frontend Architect",
    "Enterprise Angular Consultant",
    "Angular Performance Optimization",
    "Angular Enterprise Applications",
    "Angular UI Architecture",
    "Frontend Architecture Consulting",
    "Indian Consultant",
    "Indian Technical Consultant",    
    "Technical Consultant",    
    "Remote Worker",
    "Indian Remote Worker",
    "Enterprise Angular",
    "Frontend Performance",
    "Angular Architecture",
    "Performance Optimization",
    "Performance Engineering",
    "Angular migration",
    "Frontend engineering",
    "Web performance",
    "Umesh Chaurasiya"
  ],
  authors: [{ name: "Umesh Chaurasiya" }],
  creator: "Umesh Chaurasiya",
  publisher: "Umesh Chaurasiya",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercurionconsulting.com",
    title: "Umesh Chaurasiya - Enterprise Angular & Performance Consultant",
    description: "Independent Angular consultant specializing in enterprise-scale frontend architecture and performance optimization.",
    siteName: "Umesh Chaurasiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesh Chaurasiya - Enterprise Angular & Performance Consultant",
    description: "Independent Angular consultant specializing in enterprise-scale frontend architecture and performance optimization.",
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
