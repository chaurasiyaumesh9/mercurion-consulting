import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedServices } from "../components/RelatedServices";
import { ServiceCard } from "../components/ServiceCard";

export const metadata: Metadata = {
  title:
    "Frontend Platform Engineering | Scale Teams & Delivery Speed | Enterprise Proven",

  description:
    "Slow frontend releases holding you back? I'll set up CI/CD pipelines, establish best practices, and accelerate your team's velocity. Proven to 2x delivery speed in 90 days.",

  keywords: [
    "Frontend Platform Engineering",
    "Frontend Delivery Enablement",
    "Developer Productivity Consulting",
    "Frontend Team Acceleration",
    "Frontend Infrastructure Consulting",
    "frontend delivery consultant for distributed teams",
    "hire remote angular consultant for enterprise delivery",
    "enterprise frontend release engineering consultant",
    "frontend enablement consulting US UK Europe",
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
        url: "https://mercurionconsulting.com/og-image.webp",
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
    <main className="min-h-screen bg-gray-50">
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
      <section className="py-14 md:py-20 scroll-mt-24">
        <div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 mt-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
              <h1 className="text-3xl sm:text-4xl text-slate-900 mb-4">
                Frontend Delivery & Engineering Enablement Consulting
              </h1>
              <p className="text-lg text-slate-600">
                Helping enterprise engineering teams improve frontend delivery
                reliability, developer productivity, and platform engineering
                maturity for large-scale web applications.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="What I Do">
                <p className="text-[1rem]">
                  I help distributed product and engineering teams establish
                  delivery standards, improve CI/CD reliability, and reduce
                  production incidents in business-critical frontend systems.
                </p>
                <p className="text-[1rem]">
                  My work combines platform engineering, release process design,
                  and hands-on execution to make frontend delivery predictable,
                  scalable, and easier to operate for enterprise teams working
                  across multiple time zones and release trains.
                </p>
              </ServiceCard>

              <ServiceCard title="What's Included">
                <p className="text-[1rem]">
                  Slow and unstable delivery pipelines create release risk,
                  inconsistent quality, and reduced engineering velocity across
                  teams.
                </p>
                <p className="text-[1rem]">
                  A structured enablement approach improves governance,
                  developer productivity, and deployment confidence while
                  supporting long-term platform maturity for finance,
                  healthcare, e-commerce, and SaaS teams across US, UK, Europe,
                  and remote delivery organizations. This is frequently combined
                  with{" "}
                  <Link
                    href="/services/enterprise-angular-development"
                    className="text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-700"
                  >
                    enterprise Angular development consulting
                  </Link>{" "}
                  to standardize architecture and team workflows.
                </p>
              </ServiceCard>

              <ServiceCard title="Why It Matters">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Engineering Standards & Governance
                    </h3>
                    <p className="text-[1rem]">
                      Clear frontend standards that improve consistency and code
                      quality across teams.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      CI/CD & Release Engineering
                    </h3>
                    <p className="text-[1rem]">
                      Reliable delivery pipelines that reduce failed releases and
                      improve deployment safety.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Production Stability Strategy
                    </h3>
                    <p className="text-[1rem]">
                      Preventive quality controls and risk management for
                      enterprise-grade frontend operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Observability & Monitoring
                    </h3>
                    <p className="text-[1rem]">
                      Monitoring and alerting frameworks that improve incident
                      response and runtime visibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Workflow & Productivity Optimization
                    </h3>
                    <p className="text-[1rem]">
                      Better developer experience and delivery workflows for
                      faster, more predictable execution.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Cross-Team Platform Alignment for Remote Enterprise Delivery
                    </h3>
                    <p className="text-[1rem]">
                      Shared architecture and governance models that support
                      distributed engineering at scale.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="How I Execute">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      1. Delivery Assessment
                    </h4>
                    <p className="text-[1rem]">
                      Evaluate release pipelines, workflow bottlenecks, and
                      production reliability risks.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      2. Platform & Delivery Strategy
                    </h4>
                    <p className="text-[1rem]">
                      Define standards, governance, and CI/CD patterns aligned
                      with product and business goals.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      3. Hands-on Enablement Execution
                    </h4>
                    <p className="text-[1rem]">
                      Implement tooling, automation, and reliability
                      improvements with direct engineering collaboration.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      4. Team Enablement & Handover
                    </h4>
                    <p className="text-[1rem]">
                      Establish sustainable workflows and knowledge transfer for
                      long-term delivery performance.
                    </p>
                  </div>
                </div>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Predictable Releases</h3>
                  <p className="text-[1rem] text-gray-700">
                    Lower release risk and higher deployment confidence across
                    environments.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Higher Team Velocity</h3>
                  <p className="text-[1rem] text-gray-700">
                    Improved productivity through better tooling and delivery
                    workflows.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Operational Stability</h3>
                  <p className="text-[1rem] text-gray-700">
                    Reduced incident frequency with stronger quality and
                    observability guardrails.
                  </p>
                </div>
              </div>
            </div>

            <RelatedServices
              services={[
                {
                  href: "/services/enterprise-angular-development",
                  title: "Enterprise Angular Development",
                  description:
                    "Scale architecture, standards, and delivery across distributed teams.",
                },
                {
                  href: "/services/angular-migration-modernization",
                  title: "Angular Migration & Modernization",
                  description:
                    "Modernize legacy codebases with rollout safety and long-term maintainability.",
                },
                {
                  href: "/services/frontend-performance-optimization",
                  title: "Frontend Performance Optimization",
                  description:
                    "Improve speed, stability, and business metrics with targeted optimization.",
                },
              ]}
            />

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Improve Your Frontend Delivery & Engineering Velocity
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Support for global teams building and operating
                mission-critical frontend platforms, including{" "}
                <Link
                  href="/services/frontend-performance-optimization"
                  className="text-slate-100 underline decoration-slate-300 underline-offset-4 hover:decoration-white"
                >
                  performance optimization initiatives
                </Link>{" "}
                for high-traffic production environments.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Frontend Delivery Consulting
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
