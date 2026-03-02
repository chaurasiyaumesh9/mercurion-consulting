import ContactForm from "../components/forms/ContactForm";
import { Navigation } from "../components/layout/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Angular Consultant | Free Consultation - Mercurion Consulting",
  description:
    "Contact Umesh Chaurasiya for Angular consulting services. Get expert help with Angular migration, performance optimization, and enterprise development. Free initial consultation for qualified projects.",

  keywords: [
    "Contact Angular Consultant",
    "Hire Angular Developer",
    "Angular Consulting Enquiry",
    "Angular Expert Contact",
  ],

  alternates: {
    canonical: "https://mercurionconsulting.com/contact",
  },

  openGraph: {
    title: "Contact Angular Consultant | Free Consultation",
    description:
      "Get expert Angular consulting help. Contact for migration, performance optimization, and enterprise development services.",
    url: "https://mercurionconsulting.com/contact",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Umesh Chaurasiya - Angular Consultant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Angular Consultant | Free Consultation",
    description:
      "Expert Angular consulting services. Get help with migration, performance, and enterprise development.",
    images: ["https://mercurionconsulting.com/og-image.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Contact / Enquiry
            </h1>

            <div className="mb-8 bg-blue-50/70 backdrop-blur px-5 py-4 flex items-start gap-3">
              <p className="text-sm text-blue-900 leading-relaxed">
                Prefer email? Send your enquiry directly to{" "}
                <span className="font-semibold">
                  contact@mercurionconsulting.com
                </span>{" "}
                or submit the form below.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
