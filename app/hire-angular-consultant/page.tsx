import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hire Angular Consultant | Available Now for Your Next Project",

  description:
    "Need an expert Angular consultant? 10+ years experience. Enterprise-grade delivery. Available for contracts starting next month. Trusted by Fortune 500 companies. Let's discuss your project.",

  keywords: [
    "Hire Angular Consultant",
    "Hire Angular Developer",
    "Angular Contractor Remote",
    "Enterprise Angular Consultant",
    "Senior Angular Consultant",
  ],
};

export default function HireAngularConsultantPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Hire Senior Angular Consultant for Enterprise Frontend Engineering
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Looking to hire an experienced Angular consultant for enterprise
            frontend architecture, migration, or performance optimization?
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            I help global organizations modernize legacy Angular applications,
            improve frontend performance, and build scalable enterprise frontend
            platforms used by millions of users.
          </p>
        </div>
      </section>

      {/* HIRING USE CASES */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            When Companies Hire Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-slate-700">
            <ul className="space-y-4">
              <li>✓ AngularJS to Modern Angular Migration Projects</li>
              <li>✓ Enterprise Angular Architecture Design</li>
              <li>✓ Frontend Performance & Core Web Vitals Optimization</li>
              <li>✓ Large-Scale Angular Platform Engineering</li>
              <li>✓ Mission-Critical Frontend Stability Improvements</li>
            </ul>

            <ul className="space-y-4">
              <li>✓ Enterprise Frontend Modernization Initiatives</li>
              <li>✓ High-Traffic Web Application Performance Tuning</li>
              <li>✓ Angular Technical Leadership for Distributed Teams</li>
              <li>✓ Frontend Platform Standardization Across Teams</li>
              <li>✓ Production Performance Incident Resolution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Why Hire Me as Your Angular Consultant
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-slate-900">
                Enterprise Production Experience
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                10+ years building and optimizing enterprise frontend systems
                handling large user scale and complex business workflows.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-slate-900">
                Hands-On Engineering Execution
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                I contribute directly to architecture, performance optimization,
                debugging, and production engineering execution.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-slate-900">
                Global Remote Consulting Experience
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Experienced working with distributed product and engineering
                teams across global time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900">
                Contract Angular Consultant
              </h3>
              <p className="mt-3 text-sm">
                Short-term or long-term consulting for enterprise projects.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Project-Based Consulting
              </h3>
              <p className="mt-3 text-sm">
                Migration, modernization, or performance optimization delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Technical Advisory & Architecture Consulting
              </h3>
              <p className="mt-3 text-sm">
                Architecture reviews, performance audits, and modernization
                strategy planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Hire an Enterprise Angular Consultant
          </h2>

          <p className="mt-6 text-slate-600">
            Available for remote consulting, contract engagements, and
            enterprise frontend modernization projects.
          </p>

          <a
            href="mailto:contact@mercurionconsulting.com"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Contact for Consulting Availability →
          </a>
        </div>
      </section>
    </main>
  );
}
