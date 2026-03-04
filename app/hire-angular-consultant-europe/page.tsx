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
    "Hire Angular Consultant Europe | Enterprise Migration, Architecture, and Performance",
  description:
    "Europe-focused Angular consulting for enterprise migration, architecture modernization, and frontend performance optimization with CET and EET collaboration.",
  keywords: [
    "angular consultant europe",
    "hire angular developer europe",
    "remote angular consultant eu",
    "angular migration consultant europe",
    "enterprise angular architect europe",
  ],
  alternates: {
    canonical:
      "https://mercurionconsulting.com/hire-angular-consultant-europe",
  },
};

export default function HireAngularConsultantEuropePage() {
  const breadcrumbItems = [
    { label: "Hire Angular Consultant", href: "/hire-angular-consultant" },
    { label: "Europe", href: "/hire-angular-consultant-europe" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    {
      name: "Hire Angular Consultant",
      url: "https://mercurionconsulting.com/hire-angular-consultant",
    },
    {
      name: "Europe",
      url: "https://mercurionconsulting.com/hire-angular-consultant-europe",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Hire Angular Consultant Europe",
    "Europe-focused remote Angular consulting for enterprise migration, architecture modernization, and performance optimization.",
    "https://mercurionconsulting.com/hire-angular-consultant-europe",
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
                Hire Angular Consultant for Europe-Based Teams
              </h1>
              <p className="text-lg text-slate-600">
                Enterprise Angular consulting for organizations across Europe
                looking to modernize architecture, improve frontend performance,
                and reduce delivery risk.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="Europe-Focused Angular Consulting Areas">
                <div className="space-y-2 text-sm">
                  <p>- AngularJS and legacy Angular modernization strategy</p>
                  <p>- Enterprise platform architecture and team scaling</p>
                  <p>- Core Web Vitals and runtime performance optimization</p>
                  <p>- Frontend quality standards for distributed teams</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Delivery Coverage">
                <div className="space-y-2 text-sm">
                  <p>- Migration programs for finance, healthcare, and SaaS</p>
                  <p>- CI/CD and release stability improvement</p>
                  <p>- Delivery governance for cross-country engineering teams</p>
                  <p>- Remote consulting with transparent execution cadence</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Time Zone and Team Coordination">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">CET and EET</h3>
                    <p className="text-sm">
                      Reliable overlap for architecture workshops, reviews, and
                      technical delivery planning.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Multi-Region Coordination
                    </h3>
                    <p className="text-sm">
                      Structured communication for teams spanning multiple
                      European regions and partner locations.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="Governance and Execution">
                <p className="text-sm">
                  Architecture and delivery checkpoints that align product goals
                  with engineering quality.
                </p>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Reduced Delivery Risk</h3>
                  <p className="text-sm text-gray-700">
                    Better planning and control across distributed engineering
                    teams.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Improved Architecture</h3>
                  <p className="text-sm text-gray-700">
                    Scalable platform foundations for long-term product growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Performance Gains</h3>
                  <p className="text-sm text-gray-700">
                    Faster and more stable frontend experiences in production.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Need Angular Consulting for Europe?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Share your architecture and delivery context to get a focused
                plan for modernization and execution with transparent scope and
                measurable milestones.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Europe Consulting Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
