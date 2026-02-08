import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Angular Migration & Modernization Consultant | AngularJS to Angular Enterprise Upgrades",

  description:
    "Senior Angular migration consultant helping enterprises modernize legacy AngularJS and older Angular applications. Expert in enterprise Angular upgrades, performance optimization, and large-scale frontend modernization.",

  keywords: [
    "Angular Migration Consultant",
    "Angular Modernization Consultant",
    "AngularJS to Angular Migration Expert",
    "Enterprise Angular Upgrade Consultant",
    "Legacy Angular Modernization Specialist",
    "Hire Angular Migration Consultant",
    "Angular Upgrade Specialist Enterprise",
    "Frontend Modernization Consultant",
    "Enterprise Angular Migration Services",
  ],
};

export default function AngularMigrationServicePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
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

      {/* WHAT I HELP WITH */}
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

      {/* MIGRATION APPROACH */}
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

      {/* BUSINESS OUTCOMES */}
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

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Planning an Angular Migration?
          </h2>

          <p className="mt-6 text-slate-600">
            I help global teams execute safe, production-ready Angular
            migrations with minimal business disruption.
          </p>

          <a
            href="mailto:contact@mercurionconsulting.com"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Discuss Your Migration →
          </a>
        </div>
      </section>
    </main>
  );
}
