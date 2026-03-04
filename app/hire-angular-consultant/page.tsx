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
    "Hire Angular Consultant | Enterprise Migration, Architecture, and Performance",
  description:
    "Hire a senior Angular consultant for enterprise migration, architecture modernization, and frontend performance optimization with clear scope and practical execution support.",
  keywords: [
    "Hire Angular Consultant",
    "Hire Angular Developer",
    "Angular Contractor Remote",
    "Enterprise Angular Consultant",
    "Senior Angular Consultant",
  ],
  alternates: {
    canonical: "https://mercurionconsulting.com/hire-angular-consultant",
  },
};

export default function HireAngularConsultantPage() {
  const breadcrumbItems = [
    { label: "Hire Angular Consultant", href: "/hire-angular-consultant" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    {
      name: "Hire Angular Consultant",
      url: "https://mercurionconsulting.com/hire-angular-consultant",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Hire Angular Consultant",
    "Senior Angular consultant support for enterprise frontend architecture, migration, and performance optimization.",
    "https://mercurionconsulting.com/hire-angular-consultant",
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
                Hire Senior Angular Consultant for Enterprise Frontend Engineering
              </h1>
              <p className="text-lg text-slate-600">
                Looking to hire an experienced Angular consultant for enterprise
                frontend architecture, migration, or performance optimization?
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="What I Do">
                <p className="text-sm">
                  I help global organizations modernize legacy Angular
                  applications, improve frontend performance, and build scalable
                  enterprise frontend platforms used by millions of users.
                </p>
                <p className="text-sm">
                  I contribute directly to architecture, performance
                  optimization, debugging, and production engineering execution.
                </p>
              </ServiceCard>

              <ServiceCard title="When Companies Hire Me">
                <div className="space-y-2 text-sm">
                  <p>- AngularJS to Modern Angular Migration Projects</p>
                  <p>- Enterprise Angular Architecture Design</p>
                  <p>- Frontend Performance and Core Web Vitals Optimization</p>
                  <p>- Large-Scale Angular Platform Engineering</p>
                  <p>- Mission-Critical Frontend Stability Improvements</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Why Hire Me">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-1">
                      Enterprise Production Experience
                    </h3>
                    <p className="text-sm">
                      10+ years building and optimizing enterprise frontend
                      systems handling large user scale and complex workflows.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-1">
                      Hands-On Engineering Execution
                    </h3>
                    <p className="text-sm">
                      Direct implementation support, not only advisory guidance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-1">
                      Global Remote Consulting Experience
                    </h3>
                    <p className="text-sm">
                      Experienced with distributed product and engineering teams
                      across global time zones.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="Engagement Models">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      1. Contract Angular Consultant
                    </h4>
                    <p className="text-sm">
                      Short-term or long-term consulting for enterprise
                      projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      2. Project-Based Consulting
                    </h4>
                    <p className="text-sm">
                      Migration, modernization, or performance optimization
                      delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      3. Technical Advisory and Architecture Consulting
                    </h4>
                    <p className="text-sm">
                      Architecture reviews, performance audits, and
                      modernization strategy planning.
                    </p>
                  </div>
                </div>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">
                Explore Location-Specific Consulting Pages
              </h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <Link href="/hire-angular-consultant-usa" className="text-blue-700 hover:text-blue-800">
                  Hire Angular Consultant USA
                </Link>
                <Link href="/hire-angular-consultant-uk" className="text-blue-700 hover:text-blue-800">
                  Hire Angular Consultant UK
                </Link>
                <Link href="/hire-angular-consultant-europe" className="text-blue-700 hover:text-blue-800">
                  Hire Angular Consultant Europe
                </Link>
                <Link href="/remote-angular-consultant" className="text-blue-700 hover:text-blue-800">
                  Remote Angular Consultant
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Hire an Enterprise Angular Consultant
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Available for remote consulting, contract engagements, and
                enterprise frontend modernization projects with clear scope,
                timeline, and delivery expectations.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Contact for Consulting Availability
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
