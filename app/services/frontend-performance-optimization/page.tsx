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
    "Angular Performance Expert | Improve Core Web Vitals 40%+ | Free Analysis",

  description:
    "Improve Core Web Vitals by 40%+ and reduce load time 50%. Expert Angular performance consulting for enterprise apps. 100+ optimizations completed. Free performance audit.",

  keywords: [
    "Angular Performance Optimization",
    "Core Web Vitals Optimization",
    "Frontend Performance Consultant",
    "Web Performance Engineering",
    "Angular Speed Optimization",
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
        url: "https://mercurionconsulting.com/og-image.webp",
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
                Frontend Performance Optimization Consulting
              </h1>
              <p className="text-lg text-slate-600">
                Helping enterprises diagnose and fix frontend performance
                bottlenecks, improve Core Web Vitals, and scale Angular
                applications for high-traffic production environments.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="What I Do">
                <p>
                  I work hands-on with engineering teams to identify real-world
                  performance issues, implement production-grade optimizations,
                  and improve frontend responsiveness at scale.
                </p>
                <p>
                  My focus is measurable performance improvement across loading,
                  rendering, runtime execution, and monitoring guardrails.
                </p>
              </ServiceCard>

              <ServiceCard title="What's Included">
                <p>
                  Performance bottlenecks in enterprise applications can reduce
                  conversion, impact engagement, and increase operational risk.
                </p>
                <p>
                  A structured optimization program improves Core Web Vitals,
                  runtime stability, and long-term performance governance across
                  teams.
                </p>
              </ServiceCard>

              <ServiceCard title="Why It Matters">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Core Web Vitals Optimization
                    </h3>
                    <p className="text-sm">
                      Improve LCP, CLS, and INP with production-focused
                      performance engineering.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Rendering & Change Detection Tuning
                    </h3>
                    <p className="text-sm">
                      Optimize Angular rendering flows to reduce UI latency and
                      unnecessary re-renders.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Bundle & Build Optimization
                    </h3>
                    <p className="text-sm">
                      Reduce bundle size and improve build output for faster page
                      delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Lazy Loading & Runtime Strategy
                    </h3>
                    <p className="text-sm">
                      Improve load behavior with targeted code splitting and
                      runtime optimization patterns.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Production Bottleneck Debugging
                    </h3>
                    <p className="text-sm">
                      Resolve real user performance issues using telemetry, RUM,
                      and profiling data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#1a2332] mb-2">
                      Monitoring & Performance Guardrails
                    </h3>
                    <p className="text-sm">
                      Establish budgets, dashboards, and alerts to prevent
                      regressions over time.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="How I Execute">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      1. Real User Performance Analysis
                    </h4>
                    <p className="text-sm">
                      Analyze telemetry, RUM signals, and Core Web Vitals trends
                      to locate high-impact bottlenecks.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      2. Code & Architecture Audit
                    </h4>
                    <p className="text-sm">
                      Review rendering patterns, state flows, and asset delivery
                      to prioritize optimization opportunities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      3. Hands-on Optimization
                    </h4>
                    <p className="text-sm">
                      Implement production-safe changes that improve load time,
                      responsiveness, and stability.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1a2332] mb-1">
                      4. Monitoring & Handover
                    </h4>
                    <p className="text-sm">
                      Set up performance guardrails and team practices for
                      continuous improvement.
                    </p>
                  </div>
                </div>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Faster User Experience</h3>
                  <p className="text-sm text-gray-700">
                    Better load and interaction performance across real user
                    journeys.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Stronger Business Metrics</h3>
                  <p className="text-sm text-gray-700">
                    Higher conversion and engagement driven by measurable
                    performance gains.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#1a2332] mb-2">Stable Performance Baseline</h3>
                  <p className="text-sm text-gray-700">
                    Reduced regressions with ongoing monitoring and performance
                    governance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Need Help Improving Frontend Performance?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get hands-on support to improve Angular performance, Core Web
                Vitals, and runtime stability at enterprise scale.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Performance Optimization
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
