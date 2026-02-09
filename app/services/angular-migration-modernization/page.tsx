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
    "Angular Migration & Modernization Consultant | AngularJS to Angular Enterprise Upgrades",
  description:
    "Senior Angular migration consultant helping enterprises modernize legacy AngularJS and older Angular applications...",

  keywords: [
    "Angular Migration Consultant",
    "AngularJS to Angular Migration",
    "Angular Upgrade Specialist",
    "Enterprise Angular Migration",
  ],

  alternates: {
    canonical:
      "https://mercurionconsulting.com/services/angular-migration-modernization",
  },

  openGraph: {
    title: "Angular Migration & Modernization Consultant",
    description:
      "Expert AngularJS to Angular migration services for enterprises",
    url: "https://mercurionconsulting.com/services/angular-migration-modernization",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
            Angular Migration & Modernization Consulting
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Helping enterprises safely migrate legacy AngularJS and older
            Angular applications to modern, scalable Angular architectures —
            with minimal business disruption and production risk.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            I work hands-on with engineering teams to modernize enterprise
            frontend platforms, reduce technical debt, improve performance, and
            establish scalable frontend foundations for long-term product
            evolution.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Enterprise Angular Migration Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-slate-700">
              <li>✓ AngularJS to Modern Angular Migration</li>
              <li>✓ Legacy Angular Version Upgrade (v2 → Latest)</li>
              <li>✓ Monolith to Modular Angular Architecture Refactoring</li>
              <li>✓ Enterprise Frontend Platform Modernization</li>
              <li>✓ Performance Optimization During Migration</li>
            </ul>

            <ul className="space-y-4 text-slate-700">
              <li>✓ Incremental / Strangler Migration Strategy</li>
              <li>✓ Hybrid Routing & Co-existence Architecture</li>
              <li>✓ State Management Modernization (NgRx / Signals)</li>
              <li>✓ Build Pipeline & CI/CD Modernization</li>
              <li>✓ Production Stability & Risk Mitigation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Proven Enterprise Migration Approach
          </h2>

          <div className="space-y-10 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Technical Audit & Migration Feasibility
              </h3>
              <p className="mt-3 text-slate-600">
                Deep codebase analysis, dependency audit, performance baseline
                measurement, and migration complexity assessment across modules.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                2. Migration Strategy & Roadmap
              </h3>
              <p className="mt-3 text-slate-600">
                Define phased migration strategy balancing business priorities,
                release timelines, and production risk management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Hands-on Migration Execution
              </h3>
              <p className="mt-3 text-slate-600">
                Work directly with engineering teams implementing module
                migrations, architecture improvements, and performance tuning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                4. Stabilization & Knowledge Transfer
              </h3>
              <p className="mt-3 text-slate-600">
                Documentation, upgrade playbooks, and team enablement for
                long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Typical Enterprise Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Reduced Technical Debt
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Remove legacy constraints blocking product innovation and
                feature velocity.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Improved Performance
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Better Core Web Vitals, faster builds, improved runtime
                performance.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Future-Ready Architecture
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Scalable Angular platform ready for multi-team development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Planning an Angular Migration?
          </h2>

          <p className="mt-6 text-slate-600">
            I help global teams execute safe, production-ready Angular
            migrations with minimal business disruption.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <span>Discuss Your Migration</span>
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
