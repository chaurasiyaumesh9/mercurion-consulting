import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "../services/components/ServiceCard";

export const metadata: Metadata = {
  title:
    "Hire Angular Consultant UK | Enterprise Migration, Architecture, and Performance",
  description:
    "UK-focused Angular consulting for enterprise migration, architecture modernization, and frontend performance optimization with GMT and BST collaboration.",
  keywords: [
    "angular consultant uk",
    "hire angular developer uk",
    "remote angular consultant united kingdom",
    "angular migration consultant uk",
    "enterprise angular consultant london",
  ],
  alternates: {
    canonical: "https://mercurionconsulting.com/hire-angular-consultant-uk",
  },
};

export default function HireAngularConsultantUKPage() {
  const breadcrumbItems = [
    { label: "Hire Angular Consultant", href: "/hire-angular-consultant" },
    { label: "UK", href: "/hire-angular-consultant-uk" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    {
      name: "Hire Angular Consultant",
      url: "https://mercurionconsulting.com/hire-angular-consultant",
    },
    {
      name: "UK",
      url: "https://mercurionconsulting.com/hire-angular-consultant-uk",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Hire Angular Consultant UK",
    "UK-focused remote Angular consulting for enterprise migration, performance optimization, and frontend platform engineering.",
    "https://mercurionconsulting.com/hire-angular-consultant-uk",
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <section className="py-14 md:py-20 scroll-mt-24">
        <div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 mt-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
              <h1 className="text-3xl sm:text-4xl text-slate-900 mb-4">
                Hire Angular Consultant for UK Product and Engineering Teams
              </h1>
              <p className="text-lg text-slate-600">
                Practical Angular consulting for UK organizations modernizing
                legacy applications, stabilizing delivery pipelines, and improving
                frontend performance outcomes.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="UK Angular Consulting Use Cases">
                <div className="space-y-2 text-sm">
                  <p>- AngularJS modernization for enterprise product suites</p>
                  <p>- Angular upgrade strategy for legacy codebases</p>
                  <p>- Core Web Vitals and runtime performance optimization</p>
                  <p>- Platform architecture reviews for distributed teams</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Delivery Alignment">
                <div className="space-y-2 text-sm">
                  <p>- Frontend delivery enablement and release confidence</p>
                  <p>- Engineering standards and code quality governance</p>
                  <p>- Collaboration model aligned to UK business hours</p>
                  <p>- Remote consulting for long-term enterprise initiatives</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Collaboration Model for UK Teams">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">GMT and BST Sync</h3>
                    <p className="text-sm">
                      Working overlap for architecture sessions, sprint planning,
                      and technical decision reviews.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Async-First Documentation
                    </h3>
                    <p className="text-sm">
                      Clear written decisions and implementation context to
                      support multi-team execution.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="Delivery Governance">
                <p className="text-sm">
                  Repeatable delivery model with architecture checkpoints and
                  measurable progress tracking.
                </p>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Predictable Releases</h3>
                  <p className="text-sm text-gray-700">
                    Better planning and execution confidence for UK teams.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Platform Stability</h3>
                  <p className="text-sm text-gray-700">
                    Improved reliability in business-critical frontend systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Sustainable Velocity</h3>
                  <p className="text-sm text-gray-700">
                    Practical modernization without disrupting delivery cadence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Need UK-Ready Angular Consulting Support?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s define a practical engagement model for your
                engineering goals, timeline, and expected technical outcomes.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss UK Consulting Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
