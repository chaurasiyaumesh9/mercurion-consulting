import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "../components/ServiceCard";

export const metadata: Metadata = {
  title:
    "Enterprise Angular Development | Scalable Apps for Fortune 500 | 10+ Years Exp",

  description:
    "Build enterprise-grade Angular applications that scale. Proven experience with 1M+ user platforms. Clean architecture, high performance, mission-critical reliability. Trusted by global enterprises.",

  keywords: [
    "Enterprise Angular Development",
    "Large Scale Angular Applications",
    "Angular Platform Engineering",
    "Enterprise Angular Architect",
    "Scalable Angular Architecture",
    "enterprise angular architect for hire",
    "hire remote angular consultant for enterprise",
    "angular platform modernization consultant",
    "enterprise angular development consultant US",
  ],
  alternates: {
    canonical:
      "https://mercurionconsulting.com/services/enterprise-angular-development",
  },

  openGraph: {
    title: "Enterprise Angular Development Consultant",
    description:
      "Enterprise Angular platform engineering, scalable architecture, and enterprise UI development consulting services.",
    url: "https://mercurionconsulting.com/services/enterprise-angular-development",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function EnterpriseAngularDevelopmentPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    {
      label: "Enterprise Angular Development",
      href: "/services/enterprise-angular-development",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Services", url: "https://mercurionconsulting.com#services" },
    {
      name: "Enterprise Angular Development",
      url: "https://mercurionconsulting.com/services/enterprise-angular-development",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Enterprise Angular Development & Platform Engineering",
    "Enterprise Angular platform engineering, scalable architecture, state management, and large-scale Angular application development consulting services.",
    "https://mercurionconsulting.com/services/enterprise-angular-development",
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
                Enterprise Angular Development Consulting
              </h1>
              <p className="text-lg text-slate-600">
                Hands-on Angular development and architecture consulting for
                enterprise-scale applications, platform engineering, and
                mission-critical frontend systems.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="What I Do">
                <p>
                  I help organizations build scalable Angular platforms for
                  complex product ecosystems and distributed engineering teams.
                </p>
                <p>
                  My role spans architecture design, technical standards,
                  hands-on implementation, and platform stabilization so teams
                  can deliver consistently at enterprise scale. This includes
                  enterprise Angular architect for hire support for organizations
                  running multi-team, long-horizon product platforms.
                </p>
              </ServiceCard>

              <ServiceCard title="What's Included">
                <p>
                  Enterprise frontend platforms often struggle with uneven
                  architecture, inconsistent patterns, and delivery bottlenecks
                  across multiple teams.
                </p>
                <p>
                  A structured platform engineering approach improves
                  maintainability, reduces technical debt, and enables faster,
                  predictable feature delivery.
                </p>
              </ServiceCard>

              <ServiceCard title="Why It Matters">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Enterprise Angular Application Architecture
                    </h3>
                    <p className="text-sm">
                      Scalable architecture design for large product suites and
                      mission-critical frontend workflows.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Platform Engineering & Standards
                    </h3>
                    <p className="text-sm">
                      Shared conventions, code quality standards, and modular
                      patterns for multi-team velocity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      State Management at Scale
                    </h3>
                    <p className="text-sm">
                      Robust state architecture for complex enterprise
                      interactions and high-volume data flows.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      UI Platform & Component Strategy
                    </h3>
                    <p className="text-sm">
                      Enterprise component foundations that improve consistency
                      and reduce implementation overhead.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Scalability & Performance Engineering
                    </h3>
                    <p className="text-sm">
                      Architecture and runtime optimization to support growth,
                      reliability, and frontend resilience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Team Enablement & Governance
                    </h3>
                    <p className="text-sm">
                      Documentation, working models, and mentoring that let
                      teams scale independently.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="How I Execute">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      1. Architecture Discovery
                    </h4>
                    <p className="text-sm">
                      Assess current platform structure, delivery constraints,
                      and scaling risks.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      2. Platform Blueprinting
                    </h4>
                    <p className="text-sm">
                      Define architecture, module boundaries, engineering
                      standards, and implementation priorities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      3. Hands-on Engineering
                    </h4>
                    <p className="text-sm">
                      Collaborate directly with teams to ship scalable Angular
                      capabilities and improve architecture quality.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      4. Stabilization & Handover
                    </h4>
                    <p className="text-sm">
                      Embed standards, documentation, and governance for
                      sustained long-term platform performance.
                    </p>
                  </div>
                </div>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Faster Delivery</h3>
                  <p className="text-sm text-gray-700">
                    Platform consistency that accelerates multi-team feature
                    development.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Reduced Tech Debt</h3>
                  <p className="text-sm text-gray-700">
                    Standardized architecture that lowers maintenance burden and
                    rework.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Scalable Foundation</h3>
                  <p className="text-sm text-gray-700">
                    Enterprise-ready frontend platform built for long-term
                    growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">
                Remote Enterprise Angular Architecture Support
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                If you need to hire a remote Angular consultant for enterprise
                platform work, I collaborate with engineering leaders across US,
                UK, and Europe to define architecture standards, reduce
                cross-team drift, and improve delivery throughput without
                forcing a full platform rewrite.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Need Enterprise Angular Engineering Support?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s design a scalable Angular platform strategy aligned to
                your business and engineering goals.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Enterprise Angular Development
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
