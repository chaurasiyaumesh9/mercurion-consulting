import { ChevronRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "Enterprise Tax & Compliance Management Platform",
      industry: "Financial Services / Tax Compliance",
      challenge:
        "Enterprise tax workflow platform built on legacy monolithic Angular architecture experienced performance degradation during peak filing cycles and increasing maintenance overhead across multiple feature teams.",
      solution:
        "Implemented performance-focused frontend architecture improvements including lazy loading strategy refinement, optimized change detection patterns, and modular feature restructuring. Supported modernization of core UI workflows to improve scalability and maintainability across distributed engineering teams.",
      results: [
        "Bundle size reduced by ~15-20% across core modules",
        "Time to interactive improved across high-traffic workflows",
        "Improved system stability during peak seasonal load cycles",
        "Reduced frontend defect rates through standardized module structure",
      ],
    },
    {
      title: "Enterprise Ecommerce Platform Modernization",
      industry: "Retail & Ecommerce (B2C)",
      challenge:
        "Legacy AngularJS storefront and internal admin workflows were slowing feature delivery and creating technical debt across product teams.",
      solution:
        "Supported phased migration to modern Angular architecture using incremental module upgrades and hybrid routing strategies. Contributed to frontend performance improvements and improved developer workflow efficiency across multi-team environment.",
      results: [
        "Migration executed with minimal customer-facing downtime",
        "Frontend deployment cycle improved significantly",
        "Developer productivity improved across shared UI modules",
        "Reduced maintenance overhead across legacy components",
      ],
    },
    {
      title: "High Traffic Angular Commerce Frontend Performance Optimization",
      industry: "Digital Commerce (B2B)",
      challenge:
        "Frontend performance bottlenecks affecting conversion funnel performance and mobile user experience under high concurrent traffic.",
      solution:
        "Implemented caching strategy improvements, rendering optimization, and Core Web Vitals improvement initiatives across checkout and product discovery workflows.",
      results: [
        "LCP improved significantly across key user journeys",
        "Improved frontend response consistency under peak load",
        "Measurable improvements in mobile performance scoring",
        "Conversion funnel latency reduced across checkout flow",
      ],
    },
  ];

  return (
    <section id="case-studies" className="bg-slate-50 py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world examples of how I've helped organizations transform their frontend engineering 
              and deliver exceptional results
            </p>
          </div>

        {/* CASE LIST */}
        <div className="space-y-8 md:space-y-10">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              {/* INDUSTRY TAG */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl text-[#1E293B] font-semibold leading-snug mb-6 max-w-3xl">
                {caseStudy.title}
              </h3>

              {/* CONTENT GRID */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* CHALLENGE */}
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#9CA3AF] mb-2">
                    Challenge
                  </div>
                  <p className="text-sm md:text-[15px] text-[#4B5563] leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* APPROACH */}
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#9CA3AF] mb-2">
                    Approach
                  </div>
                  <p className="text-sm md:text-[15px] text-[#4B5563] leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* IMPACT */}
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#9CA3AF] mb-2">
                    Business Impact
                  </div>

                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm md:text-[15px] text-[#4B5563] leading-relaxed">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="text-sm mt-8 text-[#6B7280] max-w-4xl">
          * Case studies reflect technical contributions across enterprise teams
          while respecting client confidentiality and proprietary implementation
          details.
        </div>
      </div>
    </section>
  );
}
