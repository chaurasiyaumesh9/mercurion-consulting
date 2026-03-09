import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getHowToSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedServices } from "../components/RelatedServices";
import { ServiceCard } from "../components/ServiceCard";

export const metadata: Metadata = {
  title:
    "Angular Migration Expert | Migrate AngularJS→Angular in 90 Days | Zero Downtime",
  description:
    "Migrate your AngularJS app to Angular 18+ in 90 days with zero downtime. Trusted by 50+ enterprises. Proven incremental migration strategy. Free migration assessment.",

  keywords: [
    "Angular Migration Consultant",
    "AngularJS to Angular Migration",
    "Angular Upgrade Specialist",
    "Enterprise Angular Migration",
    "Angular Modernization Expert",
    "angularjs to angular 18 migration consultant",
    "angular 2 to angular 18 upgrade consultant",
    "angular migration service for financial services",
    "zero downtime angular migration consultant",
    "incremental angular migration strategy for enterprise",
  ],

  alternates: {
    canonical:
      "https://mercurionconsulting.com/services/angular-migration-modernization",
  },

  openGraph: {
    title: "Angular Migration Expert | Zero-Downtime AngularJS Upgrades",
    description:
      "Migrate your AngularJS app to Angular 18 safely. 10+ years experience with enterprise migrations.",
    url: "https://mercurionconsulting.com/services/angular-migration-modernization",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Angular Migration Services by Umesh Chaurasiya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angular Migration Expert | Zero-Downtime Upgrades",
    description:
      "Expert AngularJS to Angular migration services for enterprises",
    images: ["https://mercurionconsulting.com/og-image.webp"],
  },
};

export default function AngularMigrationServicePage() {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    {
      label: "Angular Migration",
      href: "/services/angular-migration-modernization",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Services", url: "https://mercurionconsulting.com#services" },
    {
      name: "Angular Migration",
      url: "https://mercurionconsulting.com/services/angular-migration-modernization",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Angular Migration & Modernization",
    "Expert AngularJS to Angular migration and enterprise Angular upgrade services",
    "https://mercurionconsulting.com/services/angular-migration-modernization",
  );

  const howToSchema = getHowToSchema(
    "How to Migrate from AngularJS to Angular 18",
    "Step-by-step enterprise migration approach covering audit, phased execution, and stabilization.",
    "https://mercurionconsulting.com/services/angular-migration-modernization",
    [
      {
        name: "Technical Audit",
        text: "Perform codebase, dependency, architecture, and risk analysis to define migration scope and constraints.",
      },
      {
        name: "Migration Strategy",
        text: "Create a phased migration roadmap aligned to release cycles, business priorities, and rollback safety.",
      },
      {
        name: "Hands-on Execution",
        text: "Implement incremental module migration and architecture refactoring with continuous production validation.",
      },
      {
        name: "Stabilization and Optimization",
        text: "Monitor production behavior, fix regressions, and optimize runtime performance and Core Web Vitals.",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <Navigation />
      <section className="py-14 md:py-20 scroll-mt-24">
        <div className="">
          <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 mt-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
              <h1 className="text-3xl sm:text-4xl text-slate-900 mb-4">
                Angular Migration & Modernization Consulting
              </h1>
              <p className="text-lg text-slate-600">
                Structured AngularJS and legacy Angular migrations for
                enterprise applications that require architectural stability,
                risk control, and production-safe delivery.
              </p>
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-10">
              <h2 className="text-[#1a2332] mb-6">
                Angular Migration for Financial Services and Regulated Teams
              </h2>
              <p className="text-[1rem] text-gray-700 leading-relaxed mb-4">
                Many regulated organizations need an angular migration service
                for financial services use cases where downtime and compliance
                risk are unacceptable. I provide phased execution that protects
                business continuity while modernizing legacy AngularJS and
                Angular 2+ platforms. As part of migration planning, teams
                usually combine this with{" "}
                <Link
                  href="/services/frontend-performance-optimization"
                  className="text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-700"
                >
                  frontend performance optimization consulting
                </Link>{" "}
                to keep user experience stable during rollout.
              </p>

              <ul className="space-y-2 text-[1rem] text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <span>
                    Secure migration architecture for high-risk workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <span>
                    Compliance-aware modernization for SOC 2 and PCI-DSS
                    environments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <span>
                    AngularJS to Angular 18 migration consultant guidance for
                    phased rollout
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <span>
                    Angular 2 to Angular 18 upgrade planning with rollback
                    safety
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="What I Do">
                <p className="text-[1rem]">
                  I help enterprise engineering teams migrate AngularJS and
                  older Angular applications (v2+) to modern Angular 18
                  architectures using incremental, zero-downtime strategies.
                </p>
                <p className="text-[1rem]">
                  My role spans technical audit, migration roadmap design,
                  hands-on execution, and performance stabilization — ensuring
                  modernization strengthens your architecture instead of
                  disrupting delivery.
                </p>
              </ServiceCard>

              <ServiceCard title="What's Included">
                <p className="text-[1rem]">
                  Legacy Angular architectures increase release risk, slow
                  feature velocity, and create long-term technical debt.
                  Large-scale upgrades without structured planning can introduce
                  instability, regressions, and costly downtime.
                </p>
                <p className="text-[1rem]">
                  A controlled, phased migration strategy allows teams to
                  modernize safely while maintaining production reliability and
                  protecting business continuity. Migration programs also pair
                  well with{" "}
                  <Link
                    href="/services/frontend-delivery-enablement"
                    className="text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-700"
                  >
                    frontend delivery enablement services
                  </Link>{" "}
                  to improve release confidence.
                </p>
              </ServiceCard>

              <ServiceCard title="Why It Matters">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Migration Assessment & Architecture Audit
                    </h3>
                    <p className="text-[1rem]">
                      Codebase analysis, dependency review, performance
                      baselining, and migration feasibility evaluation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Incremental Migration Strategy
                    </h3>
                    <p className="text-[1rem]">
                      Phase-based or Angular co-existence models using
                      strangler-pattern execution.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Angular 2 → Angular 18 Upgrades
                    </h3>
                    <p className="text-[1rem]">
                      Structured version upgrades including RxJS refactoring,
                      NgRx modernization, and signals adoption.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Platform & CI/CD Modernization
                    </h3>
                    <p className="text-[1rem]">
                      Build pipeline improvements, modular architecture
                      refactoring and release process stabilization.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Performance Optimization
                    </h3>
                    <p className="text-[1rem]">
                      Runtime profiling, bundle size reduction, and Core Web
                      Vitals improvements during migration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Knowledge Transfer & Documentation
                    </h3>
                    <p className="text-[1rem]">
                      Migration playbooks and team enablement for long-term
                      maintainability.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="How I Execute">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      1. Technical Discovery
                    </h4>
                    <p className="text-[1rem]">
                      Deep architectural review to assess migration complexity,
                      integration points, and production risk.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      2. Phased Roadmap Design
                    </h4>
                    <p className="text-[1rem]">
                      Migration plan aligned with release cycles and business
                      milestones.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      3. Hands-on Execution
                    </h4>
                    <p className="text-[1rem]">
                      Direct collaboration with your engineering teams to
                      implement module migrations and architecture improvements.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      4. Stabilization & Optimization
                    </h4>
                    <p className="text-[1rem]">
                      Production monitoring, performance refinement and
                      post-migration validation.
                    </p>
                  </div>
                </div>
              </ServiceCard>
            </div>

            {/* Expected Outcomes Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">
                    Reduced Technical Debt
                  </h3>
                  <p className="text-[1rem] text-gray-700">
                    Modernized architecture that supports faster feature
                    delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Improved Performance</h3>
                  <p className="text-[1rem] text-gray-700">
                    Faster builds, improved runtime stability, and better Core
                    Web Vitals.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">
                    Long-Term Maintainability
                  </h3>
                  <p className="text-[1rem] text-gray-700">
                    Scalable Angular platform ready for multi-team enterprise
                    growth.
                  </p>
                </div>
              </div>
            </div>

            <RelatedServices
              services={[
                {
                  href: "/services/frontend-performance-optimization",
                  title: "Frontend Performance Optimization",
                  description:
                    "Improve Core Web Vitals and runtime responsiveness after migration.",
                },
                {
                  href: "/services/enterprise-angular-development",
                  title: "Enterprise Angular Development",
                  description:
                    "Build scalable Angular foundations for post-migration growth.",
                },
                {
                  href: "/services/frontend-delivery-enablement",
                  title: "Frontend Delivery Enablement",
                  description:
                    "Stabilize CI/CD and release quality across modernization phases.",
                },
              ]}
            />

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Planning an Angular Migration?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's define a structured migration roadmap tailored to your
                enterprise architecture.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Your Migration
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
