import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { Navigation } from "@/app/components/Navigation";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Frontend Performance Optimization Consultant | Angular & Core Web Vitals Expert",

  description:
    "Enterprise frontend performance consultant specializing in Angular performance optimization, Core Web Vitals improvement, bundle optimization, and runtime performance tuning for high-traffic web applications.",

  keywords: [
    "Frontend Performance Consultant",
    "Angular Performance Optimization Consultant",
    "Core Web Vitals Optimization Consultant",
    "Web Performance Engineering Consultant",
    "Angular Runtime Performance Expert",
    "Enterprise Web Performance Consultant",
    "High Traffic Frontend Performance Specialist",
    "Improve LCP FID CLS Consultant",
  ],

  alternates: {
    canonical:
      "https://mercurionconsulting.com/services/frontend-performance-optimization",
  },

  openGraph: {
    title: "Frontend Performance Optimization Consultant",
    description:
      "Angular performance engineering, Core Web Vitals optimization, and enterprise frontend runtime performance consulting.",
    url: "https://mercurionconsulting.com/services/frontend-performance-optimization",
    images: [
      {
        url: "https://mercurionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FrontendPerformanceServicePage() {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    {
      label: "Frontend Performance Optimization",
      href: "/services/frontend-performance-optimization",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Services", url: "https://mercurionconsulting.com#services" },
    {
      name: "Frontend Performance Optimization",
      url: "https://mercurionconsulting.com/services/frontend-performance-optimization",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Frontend Performance Optimization & Runtime Stability",
    "Angular performance optimization consulting including Core Web Vitals improvement, bundle optimization, runtime performance tuning, and enterprise frontend performance engineering.",
    "https://mercurionconsulting.com/services/frontend-performance-optimization",
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
            Frontend Performance Optimization Consulting
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Helping enterprises diagnose and fix frontend performance
            bottlenecks, improve Core Web Vitals, and scale Angular applications
            for high traffic production environments.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            I work hands-on with engineering teams to identify real-world
            performance issues, implement production-grade optimizations, and
            establish long-term performance monitoring strategies.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Enterprise Frontend Performance Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-slate-700">
              <li>✓ Core Web Vitals Optimization (LCP, CLS, INP)</li>
              <li>✓ Angular Change Detection & Rendering Optimization</li>
              <li>✓ Bundle Size Reduction & Build Optimization</li>
              <li>✓ Lazy Loading & Code Splitting Strategy</li>
              <li>✓ SSR & Hydration Performance Optimization</li>
            </ul>

            <ul className="space-y-4 text-slate-700">
              <li>✓ Runtime Performance Bottleneck Analysis</li>
              <li>✓ Production Performance Debugging</li>
              <li>✓ High Traffic Frontend Scaling Strategy</li>
              <li>✓ Real User Monitoring (RUM) Analysis</li>
              <li>✓ Performance Architecture Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Performance Optimization Methodology
          </h2>

          <div className="space-y-10 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Real User Performance Analysis
              </h3>
              <p className="mt-3 text-slate-600">
                Analyze production telemetry, RUM data, and Core Web Vitals
                trends to identify real user performance bottlenecks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                2. Architecture & Code Performance Audit
              </h3>
              <p className="mt-3 text-slate-600">
                Deep analysis of Angular rendering patterns, state flows, bundle
                structure, and runtime performance hotspots.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Hands-on Performance Optimization
              </h3>
              <p className="mt-3 text-slate-600">
                Implement production-safe optimizations improving load time,
                runtime performance, and user experience metrics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                4. Performance Monitoring & Guardrails
              </h3>
              <p className="mt-3 text-slate-600">
                Establish performance budgets, monitoring dashboards, and
                alerting for long-term performance stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Business Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Faster User Experience
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Faster load times and improved responsiveness across real user
                journeys.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Better Conversion & Engagement
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Improved performance metrics directly impacting business KPIs.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Production Stability
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Reduced performance regressions through monitoring and
                guardrails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Need Help Improving Frontend Performance?
          </h2>

          <p className="mt-6 text-slate-600">
            I help global teams improve Angular performance, Core Web Vitals,
            and production frontend scalability.
          </p>

          <a
            href="mailto:contact@mercurionconsulting.com"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Discuss Performance Optimization →
          </a>
        </div>
      </section>
    </main>
  );
}
