import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Angular Blogs | Migration, Performance, and Architecture Insights",
  description:
    "Explore Angular blogs on migration, performance optimization, architecture decisions, and enterprise frontend delivery.",
  keywords: [
    "angular blog topics",
    "angular migration guide",
    "angular long tail seo",
    "angular performance blog",
    "enterprise angular content strategy",
  ],
  alternates: {
    canonical: "https://mercurionconsulting.com/blogs",
  },
};

export default function BlogsPage() {
  const breadcrumbItems = [{ label: "Blogs", href: "/blogs" }];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Blogs", url: "https://mercurionconsulting.com/blogs" },
  ]);

  const blogsSchema = getServicePageSchema(
    "Angular Blogs",
    "Angular blog library for migration, performance, architecture, and enterprise frontend delivery topics.",
    "https://mercurionconsulting.com/blogs",
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsSchema) }}
      />
      <Navigation />

      <section className="py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 mt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 text-center">
            <h1 className="text-3xl sm:text-4xl text-slate-900 mb-4">Latest Projects</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              This blog highlights recent Angular work across architecture,
              migration, performance, and enterprise delivery execution.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blogs/migrate-angularjs-to-angular-18-2026-complete-guide"
              className="group h-full rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-colors"
            >
              <div className="p-8 min-h-[248px]">
                <h2 className="text-[#1a2332] mb-4">
                  How to migrate from AngularJS to Angular 18 in 2026.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A complete migration guide to plan phased upgrades, reduce
                  delivery risk, and modernize enterprise applications.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-300 text-slate-700 text-xs font-medium flex items-center justify-center">
                    MC
                  </span>
                  <span className="text-sm text-slate-700">Mercurion Team</span>
                </div>
                <span className="text-blue-700 text-sm font-medium">Mar 04, 2026</span>
              </div>
            </Link>

            <Link
              href="/blogs/common-angular-performance-issues-and-fixes"
              className="group h-full rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-colors"
            >
              <div className="p-8 min-h-[248px]">
                <h2 className="text-[#1a2332] mb-4">
                  Fix common Angular performance issues with practical steps.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Identify runtime bottlenecks, improve Core Web Vitals, and
                  establish a repeatable optimization workflow.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-300 text-slate-700 text-xs font-medium flex items-center justify-center">
                    MC
                  </span>
                  <span className="text-sm text-slate-700">Mercurion Team</span>
                </div>
                <span className="text-blue-700 text-sm font-medium">Mar 04, 2026</span>
              </div>
            </Link>

            <Link
              href="/blogs/angularjs-end-of-life-migration-strategy-enterprise-apps"
              className="group h-full rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-colors"
            >
              <div className="p-8 min-h-[248px]">
                <h2 className="text-[#1a2332] mb-4">
                  AngularJS end-of-life strategy for enterprise modernization.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Build a risk-aware migration roadmap with governance, phased
                  rollout, and clear stakeholder visibility.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-300 text-slate-700 text-xs font-medium flex items-center justify-center">
                    MC
                  </span>
                  <span className="text-sm text-slate-700">Mercurion Team</span>
                </div>
                <span className="text-blue-700 text-sm font-medium">Mar 04, 2026</span>
              </div>
            </Link>

            <Link
              href="/blogs/angular-vs-react-2026-enterprise-framework-decision"
              className="group h-full rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-colors"
            >
              <div className="p-8 min-h-[248px]">
                <h2 className="text-[#1a2332] mb-4">
                  Angular vs React in 2026 for enterprise applications.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Compare governance, architecture, and team productivity to
                  choose the right framework for your organization.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-300 text-slate-700 text-xs font-medium flex items-center justify-center">
                    MC
                  </span>
                  <span className="text-sm text-slate-700">Mercurion Team</span>
                </div>
                <span className="text-blue-700 text-sm font-medium">Mar 04, 2026</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
