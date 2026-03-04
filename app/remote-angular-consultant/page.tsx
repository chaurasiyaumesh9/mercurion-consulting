import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import {
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/app/lib/structuredData";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "../services/components/ServiceCard";

export const metadata: Metadata = {
  title:
    "Remote Angular Consultant | Enterprise Migration, Architecture, and Performance",
  description:
    "Remote Angular consulting for enterprise migration, architecture modernization, and frontend performance optimization with an async-friendly global delivery model.",
  keywords: [
    "remote angular consultant",
    "hire remote angular developer",
    "enterprise remote angular consultant",
    "angular migration consultant remote",
    "remote frontend architecture consultant",
  ],
  alternates: {
    canonical: "https://mercurionconsulting.com/remote-angular-consultant",
  },
};

export default function RemoteAngularConsultantPage() {
  const breadcrumbItems = [
    { label: "Hire Angular Consultant", href: "/hire-angular-consultant" },
    { label: "Remote Angular Consultant", href: "/remote-angular-consultant" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    {
      name: "Hire Angular Consultant",
      url: "https://mercurionconsulting.com/hire-angular-consultant",
    },
    {
      name: "Remote Angular Consultant",
      url: "https://mercurionconsulting.com/remote-angular-consultant",
    },
  ]);

  const serviceSchema = getServicePageSchema(
    "Remote Angular Consultant",
    "Remote Angular consulting for enterprise migration, frontend performance optimization, and platform engineering across global teams.",
    "https://mercurionconsulting.com/remote-angular-consultant",
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                Remote Angular Consultant for Global Enterprise Teams
              </h1>
              <p className="text-lg text-slate-600">
                Remote consulting for organizations that need hands-on Angular
                engineering support without location constraints.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard title="Remote Engagement Scope">
                <div className="space-y-2 text-sm">
                  <p>- AngularJS to Angular modernization programs</p>
                  <p>- Enterprise platform architecture and technical leadership</p>
                  <p>- Frontend performance optimization and troubleshooting</p>
                  <p>- CI/CD and release engineering improvements</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Collaboration Approach">
                <div className="space-y-2 text-sm">
                  <p>- Structured async communication and documentation</p>
                  <p>- Time zone overlap planning for critical sessions</p>
                  <p>- Delivery transparency with measurable outcomes</p>
                  <p>- Collaboration across product, design, and engineering</p>
                </div>
              </ServiceCard>

              <ServiceCard title="Global Time Zone Coverage">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#1a2332] mb-2">US Coverage</h3>
                    <p className="text-sm">
                      Collaboration windows aligned to EST, CST, and PST teams.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#1a2332] mb-2">UK and Europe</h3>
                    <p className="text-sm">
                      Regular overlap for GMT, BST, CET, and EET teams.
                    </p>
                  </div>
                </div>
              </ServiceCard>

              <ServiceCard title="Async Delivery">
                <p className="text-sm">
                  Written architecture decisions and daily progress updates for
                  continuous execution.
                </p>
              </ServiceCard>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-[#1a2332] mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-[#1a2332] mb-2">Reliable Remote Execution</h3>
                  <p className="text-sm text-gray-700">
                    Stronger delivery consistency across distributed teams.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Faster Progress</h3>
                  <p className="text-sm text-gray-700">
                    Better migration, architecture, and performance momentum.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a2332] mb-2">Improved Stability</h3>
                  <p className="text-sm text-gray-700">
                    Higher production reliability and clearer technical
                    governance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-xl p-12 text-center text-white">
              <h2 className="text-white mb-3">
                Need a Remote Angular Consultant?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Share your current constraints and delivery objectives to
                receive a practical engagement recommendation with clear
                communication rhythm and execution milestones.
              </p>
              <Link
                href="/contact"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Discuss Remote Consulting Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
