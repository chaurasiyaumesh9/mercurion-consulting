import { TrendingUp, Clock, Users } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "Enterprise Tax Platform",
      industry: "Financial Services",
      challenge: "Monolithic Angular application with performance degradation under peak tax season load",
      solution: "Redesigned architecture with lazy loading strategy, optimized change detection, and modular feature structure",
      metrics: [
        { icon: TrendingUp, label: "Bundle Size", value: "17% reduction" },
        { icon: Clock, label: "Time to Interactive", value: "2.2s faster" },
        { icon: Users, label: "Peak Load Capacity", value: "2x increase" }
      ]
    },
    {
      title: "Enterprise Ecommerce Platform",
      industry: "Retail & Ecommerce",
      challenge: "Legacy AngularJS application blocking feature development and creating technical debt",
      solution: "Phased migration strategy to modern Angular with hybrid routing and incremental module upgrades",
      metrics: [
        { icon: Clock, label: "Migration Duration", value: "6 months, zero downtime" },
        { icon: TrendingUp, label: "Deployment Cycle", value: "40% faster" },
        { icon: Users, label: "Developer Velocity", value: "2.5x increase" }
      ]
    },
    {
      title: "High Traffic Angular Commerce Platform",
      industry: "Digital Commerce",
      challenge: "Frontend performance bottlenecks affecting conversion rates and user experience",
      solution: "Performance optimization program including SSR implementation, caching strategy, and Core Web Vitals improvements",
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
            Representative engagements demonstrating measurable impact
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
                </div>
              </div>

              <div className="bg-[#EFF6FF] p-6 border-t border-[#E5E7EB]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
