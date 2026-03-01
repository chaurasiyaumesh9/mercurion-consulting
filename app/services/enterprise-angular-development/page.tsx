import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Enterprise Angular Developer | Scalable Apps for Fortune 500 Companies",

  description:
    "Build enterprise-grade Angular applications that scale. Proven experience with 1M+ user platforms. Clean architecture, high performance, mission-critical reliability. Trusted by global enterprises.",

  keywords: [
    "Enterprise Angular Development",
    "Large Scale Angular Applications",
    "Angular Platform Engineering",
    "Enterprise Angular Architect",
    "Scalable Angular Architecture",
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
        url: "https://mercurionconsulting.com/og-image.jpg",
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
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Enterprise Angular Development Consulting
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Hands-on Angular development and architecture consulting for
            enterprise-scale applications, platform engineering, and
            mission-critical frontend systems.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            I help organizations build scalable Angular platforms, improve
            engineering velocity, and deliver production-ready frontend
            architectures that support large product ecosystems and distributed
            engineering teams.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Enterprise Angular Development Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-slate-700">
              <li>✓ Enterprise Angular Application Architecture</li>
              <li>✓ Scalable Feature Module Design</li>
              <li>✓ Complex State Management Implementation</li>
              <li>✓ Angular Platform Engineering & Standards</li>
              <li>✓ Enterprise UI Component Library Integration</li>
            </ul>

            <ul className="space-y-4 text-slate-700">
              <li>✓ Multi-Team Codebase Architecture</li>
              <li>✓ Enterprise Frontend Scalability Strategy</li>
              <li>✓ Angular SSR & Hybrid Rendering Architecture</li>
              <li>✓ High Availability Frontend System Design</li>
              <li>✓ Production Stability Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Enterprise Delivery Approach
          </h2>

          <div className="space-y-10 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Architecture Discovery & Platform Assessment
              </h3>
              <p className="mt-3 text-slate-600">
                Evaluate existing Angular architecture, identify scalability
                bottlenecks, and define platform evolution strategy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                2. Platform Architecture & Engineering Standards
              </h3>
              <p className="mt-3 text-slate-600">
                Design scalable frontend platform foundations supporting
                multi-team development and long-term maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Hands-on Enterprise Angular Development
              </h3>
              <p className="mt-3 text-slate-600">
                Direct engineering contribution building scalable Angular
                features, improving architecture, and optimizing performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                4. Knowledge Transfer & Long-Term Platform Stability
              </h3>
              <p className="mt-3 text-slate-600">
                Establish engineering standards, documentation, and governance
                enabling teams to scale independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Business Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Faster Feature Delivery
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Scalable architecture enabling faster multi-team feature
                delivery.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Reduced Technical Debt
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Platform standardization reducing long-term maintenance costs.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-xl">
              <h3 className="font-semibold text-slate-900">
                Enterprise Scalability
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Frontend architecture supporting large product ecosystems and
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Need Enterprise Angular Engineering Support?
          </h2>

          <p className="mt-6 text-slate-600">
            I help global teams design and build scalable Angular platforms and
            enterprise frontend systems.
          </p>
         
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <span>Discuss Enterprise Angular Development</span>
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
