import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { Navigation } from "@/app/components/Navigation";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Enterprise Frontend Delivery & Engineering Enablement Consultant | Frontend Platform & Delivery Specialist",

  description:
    "Senior frontend consultant helping enterprise teams improve engineering delivery, platform standards, CI/CD integration, and production stability for large-scale web applications.",

  keywords: [
    "Frontend Delivery Consultant",
    "Frontend Engineering Enablement Consultant",
    "Enterprise Frontend Delivery Specialist",
    "Frontend Platform Engineering Consultant",
    "Technical Leadership Frontend Consultant",
    "Engineering Productivity Consultant Frontend",
    "Enterprise Frontend Governance Consultant",
  ],

  alternates: {
    canonical:
      "https://mercurionconsulting.com/services/frontend-delivery-enablement",
  },

  openGraph: {
    title: "Enterprise Frontend Delivery & Engineering Enablement",
    description:
      "Frontend delivery consulting covering CI/CD integration, engineering standards, release stability, and enterprise frontend delivery optimization.",
    url: "https://mercurionconsulting.com/services/frontend-delivery-enablement",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FrontendDeliveryEnablementPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    {
      label: "Frontend Delivery & Engineering Enablement",
      href: "/services/frontend-delivery-enablement",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Services", url: "https://mercurionconsulting.com#services" },
    {
      name: "Frontend Delivery & Engineering Enablement",
      url: "https://mercurionconsulting.com/services/frontend-delivery-enablement",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Enterprise Frontend Delivery & Engineering Enablement",
    "Enterprise frontend delivery consulting including CI/CD integration, release stability improvement, code quality enforcement, and distributed team engineering enablement.",
    "https://mercurionconsulting.com/services/frontend-delivery-enablement",
  );

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Navigation />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Enterprise Frontend Delivery & Engineering Enablement Consulting
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Helping enterprise engineering teams improve frontend delivery
            reliability, developer productivity, and platform engineering
            maturity for large-scale web applications.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            I work with distributed product and engineering teams to establish
            frontend standards, improve CI/CD reliability, reduce production
            incidents, and enable predictable delivery of business-critical
            frontend systems.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Frontend Delivery & Enablement Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-slate-700">
              <li>✓ Frontend Engineering Standards & Governance</li>
              <li>✓ Enterprise CI/CD Integration & Release Engineering</li>
              <li>✓ Production Stability & Incident Reduction Strategy</li>
              <li>✓ Frontend Observability & Monitoring Strategy</li>
              <li>✓ Cross-Team Frontend Architecture Alignment</li>
            </ul>

            <ul className="space-y-4 text-slate-700">
              <li>✓ Developer Experience & Productivity Improvements</li>
              <li>✓ Distributed Team Delivery Workflow Optimization</li>
              <li>✓ Release Risk Reduction & Quality Gate Design</li>
              <li>✓ Frontend Platform Governance Models</li>
              <li>✓ Enterprise Frontend Code Quality Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Delivery Engagement Model
          </h2>

          <div className="space-y-10 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Engineering Delivery Assessment
              </h3>
              <p className="mt-3 text-slate-600">
                Evaluate frontend delivery pipelines, architecture risks,
                production stability patterns, and team development workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                2. Frontend Platform & Delivery Strategy
              </h3>
              <p className="mt-3 text-slate-600">
                Define engineering standards, CI/CD reliability patterns,
                release strategies, and platform governance models.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Hands-on Engineering & Enablement Execution
              </h3>
              <p className="mt-3 text-slate-600">
                Implement platform improvements, delivery automation,
                observability, and production reliability improvements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                4. Team Enablement & Knowledge Transfer
              </h3>
              <p className="mt-3 text-slate-600">
                Enable teams to independently operate and evolve frontend
                platforms with sustainable engineering practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Business Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Predictable Release Cycles
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Reduced release failures and improved deployment confidence.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Higher Developer Productivity
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Better tooling, workflows, and platform engineering maturity.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Reduced Production Incidents
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Improved observability, stability strategy, and release quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Improve Your Frontend Delivery & Engineering Velocity
          </h2>

          <p className="mt-6 text-slate-600">
            Supporting global engineering teams building and operating
            mission-critical frontend platforms.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <span>Discuss Frontend Delivery Consulting</span>
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
