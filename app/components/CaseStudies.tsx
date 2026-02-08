import { TrendingUp, Clock, Users, Check } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "Enterprise Tax & Compliance Management Platform",
      industry: "FINANCIAL SERVICES / TAX COMPLIANCE",
      challenge: "Enterprise tax workflow platform built on legacy monolithic Angular architecture experienced performance degradation during peak filing cycles and increasing maintenance overhead across multiple feature teams.",
      solution: "Implemented performance-focused frontend architecture improvements including lazy loading strategy refinement, optimized change detection patterns, and modular feature restructuring. Supported modernization of core UI workflows to improve scalability and maintainability across distributed engineering teams.",
      results: [
        "Bundle size reduced by ~15-20% across core modules",
        "Time to interactive improved across high-traffic workflows",
        "Improved system stability during peak seasonal load cycles",
        "Reduced frontend defect rates through standardized module structure"
      ],
      metrics: [
        { icon: TrendingUp, label: "Bundle Size", value: "17% reduction" },
        { icon: Clock, label: "Time to Interactive", value: "2.2s faster" },
        { icon: Users, label: "Peak Load Capacity", value: "2x increase" }
      ]
    },
    {
      title: "Enterprise Ecommerce Platform Modernization",
      industry: "RETAIL & ECOMMERCE (B2C)",
      challenge: "Legacy AngularJS storefront and internal admin workflows were slowing feature delivery and creating technical debt across product teams.",
      solution: "Supported phased migration to modern Angular architecture using incremental module upgrades and hybrid routing strategies. Contributed to frontend performance improvements and improved developer workflow efficiency across multi-team environment.",
      results: [
        "Migration executed with minimal customer-facing downtime",
        "Frontend deployment cycle improved significantly",
        "Developer productivity improved across shared UI modules",
        "Reduced maintenance overhead across legacy components"
      ],
      metrics: [
        { icon: Clock, label: "Migration Duration", value: "6 months, zero downtime" },
        { icon: TrendingUp, label: "Deployment Cycle", value: "40% faster" },
        { icon: Users, label: "Developer Velocity", value: "2.5x increase" }
      ]
    },
    {
      title: "High Traffic Angular Commerce Frontend Performance Optimization",
      industry: "DIGITAL COMMERCE (B2B)",
      challenge: "Frontend performance bottlenecks affecting conversion funnel performance and mobile user experience under high concurrent traffic.",
      solution: "Implemented caching strategy improvements, rendering optimization, and Core Web Vitals improvement initiatives across checkout and product discovery workflows.",
      results: [
        "LCP improved significantly across key user journeys",
        "Improved frontend response consistency under peak load",
        "Measurable improvements in mobile performance scoring",
        "Conversion funnel latency reduced across checkout flow"
      ],
      metrics: [
        { icon: Clock, label: "LCP Improvement", value: "4.8s → 1.6s" },
        { icon: TrendingUp, label: "Conversion Rate", value: "+18% increase" },
        { icon: Users, label: "Mobile Performance", value: "82/100 score" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-4xl mb-4 text-[#1E293B]">Case Studies</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            Representative enterprise engagements demonstrating measurable frontend engineering impact across ecommerce and financial compliance domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white border border-[#E5E7EB] hover:shadow-lg transition-shadow flex flex-col">
              <div className="p-8 flex-1">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <h3 className="text-2xl mb-6 text-[#1E293B]">{caseStudy.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Challenge
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Solution
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Key Results
                    </div>
                    <div >
                      {caseStudy.results.map((result, index) => (
                            <div key={index} className="flex items-center justify-center gap-3">
                                <Check className="w-3 h-3 text-[#2563EB]" />  
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm text-[#4B5563] leading-relaxed">{result}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-[#EFF6FF] p-6 border-t border-[#E5E7EB]">
                <div className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-4">
                  Key Results
                </div>
                <div className="space-y-3">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <metric.icon className="w-4 h-4 text-[#2563EB]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-[#6B7280]">{metric.label}</div>
                        <div className="text-sm text-[#1E293B]">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-sm mt-5 text-[#6B7280]">
            *Case studies reflect technical contributions across enterprise teams while respecting client confidentiality and proprietary implementation details.
        </div>
      </div>
    </section>
  );
}
