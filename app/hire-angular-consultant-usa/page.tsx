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
    "Hire Angular Consultant USA | Enterprise Migration, Architecture, and Performance",
  description:
    "US-focused Angular consulting for enterprise migration, architecture modernization, and frontend performance optimization with EST, CST, and PST collaboration.",
  keywords: [
    "angular consultant usa",
    "hire angular developer united states",
    "remote angular consultant us",
    "angular migration consultant america",
    "angular performance optimization consultant us",
  ],
  alternates: {
    canonical: "https://mercurionconsulting.com/hire-angular-consultant-usa",
  },
};

export default function HireAngularConsultantUSAPage() {
  const breadcrumbItems = [
    { label: "Hire Angular Consultant", href: "/hire-angular-consultant" },
    { label: "USA", href: "/hire-angular-consultant-usa" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    {
      name: "Hire Angular Consultant",
      url: "https://mercurionconsulting.com/hire-angular-consultant",
    },
    {
      name: "USA",
      url: "https://mercurionconsulting.com/hire-angular-consultant-usa",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Hire Angular Consultant USA",
    "US-focused remote Angular consulting for enterprise migration, platform engineering, and performance optimization.",
    "https://mercurionconsulting.com/hire-angular-consultant-usa",
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
                Hire Angular Consultant for USA Enterprise Teams
              </h1>
              <p className="text-lg text-slate-600">
                Remote Angular consultant support for US companies modernizing
                AngularJS applications, scaling frontend platforms, and improving
                Core Web Vitals in production.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="US Enterprise Consulting Coverage">
                <div className="space-y-2 text-sm">
                  <p>- AngularJS to Angular migration for enterprise platforms</p>
                  <p>- Angular 2+ to Angular 18 upgrade planning and execution</p>
                  <p>- Frontend performance optimization and Core Web Vitals work</p>
                  <p>- Enterprise architecture and multi-team platform standards</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Delivery and Collaboration Model">
                <div className="space-y-2 text-sm">
                  <p>- Finance, healthcare, e-commerce, and SaaS experience</p>
                  <p>- CI/CD and release stability for distributed teams</p>
                  <p>- Delivery support aligned to US business hours</p>
                  <p>- Remote-first consulting for cross-functional collaboration</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Time Zone Compatibility for US Teams">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">EST and CST</h3>
                    <p className="text-sm">
                      Daily overlap windows for planning, architecture sessions,
                      and progress check-ins.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-2">PST Support</h3>
                    <p className="text-sm">
                      Structured overlap for west coast teams with async updates
                      to keep delivery moving.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="How I Work with US Teams">
                <p className="text-sm">
                  I collaborate with teams across EST, CST, and PST with a
                  predictable overlap model for architecture reviews,
                  implementation support, and engineering delivery.
                </p>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Faster Delivery</h3>
                  <p className="text-sm text-gray-700">
                    Better execution pace for migration and modernization tracks.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Reduced Risk</h3>
                  <p className="text-sm text-gray-700">
                    Controlled rollout and architecture decisions in critical
                    systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Stronger Performance</h3>
                  <p className="text-sm text-gray-700">
                    Improved frontend responsiveness and production stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Looking for US-Focused Angular Consulting?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Share your current Angular architecture and delivery goals to get
                a practical consulting engagement plan with clear milestones and
                realistic implementation expectations.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss US Consulting Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
