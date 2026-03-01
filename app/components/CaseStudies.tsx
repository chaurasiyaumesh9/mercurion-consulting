import { Award, CheckCircle, ChevronRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "Enterprise Tax & Compliance Management Platform",
      industry: "Financial Services / Tax Compliance",
      challenge:
        "Enterprise tax workflow platform built on legacy monolithic Angular architecture experienced performance degradation during peak filing cycles and increasing maintenance overhead across multiple feature teams.",
      solution: [
        "Implemented performance-focused frontend architecture improvements including lazy loading strategy refinement, optimized change detection patterns, and modular feature restructuring.",
        "Supported modernization of core UI workflows to improve scalability and maintainability across distributed engineering teams.",
      ],
      results: [
        "Bundle size reduced by ~15-20% across core modules",
        "Time to interactive improved across high-traffic workflows",
        "Improved system stability during peak seasonal load cycles",
        "Reduced frontend defect rates through standardized module structure",
      ],
      technologies: ["Angular 14", "NgRx", "RxJS", "AgGrid", "Rest APIs"],
    },
    {
      title: "Enterprise Ecommerce Platform Modernization",
      industry: "Retail & Ecommerce (B2C)",
      challenge:
        "Legacy AngularJS storefront and internal admin workflows were slowing feature delivery and creating technical debt across product teams.",
      solution: [
        "Supported phased migration to modern Angular architecture using incremental module upgrades and hybrid routing strategies.",
        "Contributed to frontend performance improvements and improved developer workflow efficiency across multi-team environment.",
      ],
      results: [
        "Migration executed with minimal customer-facing downtime",
        "Frontend deployment cycle improved significantly",
        "Developer productivity improved across shared UI modules",
        "Reduced maintenance overhead across legacy components",
      ],
      technologies: [
        "Angular JS",
        "Angular 2",
        "Rest APIs",
        "Bootstrap",
        "Webpack",
      ],
    },
    {
      title: "High Traffic Angular Commerce Frontend Performance Optimization",
      industry: "Digital Commerce (B2B)",
      challenge:
        "Frontend performance bottlenecks affecting conversion funnel performance and mobile user experience under high concurrent traffic.",
      solution: [
        "Implemented caching strategy improvements, rendering optimization, and Core Web Vitals improvement initiatives across checkout and product discovery workflows.",
      ],
      results: [
        "LCP improved significantly across key user journeys",
        "Improved frontend response consistency under peak load",
        "Measurable improvements in mobile performance scoring",
        "Conversion funnel latency reduced across checkout flow",
      ],
      technologies: ["Angular 8", "Rest APIs", "RxJs", "Webpack"],
    },
  ];

  return (
    <section
      id="case-studies"
      className="bg-slate-50 py-14 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600">
            Real-world examples of how I've helped organizations transform their
            frontend engineering and deliver exceptional results
          </p>
        </div>

        {/* CASE LIST */}
        <div className="space-y-8 md:space-y-10">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl text-slate-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-blue-700 font-medium">{caseStudy.industry}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Challenge</h4>
                  <p className="text-slate-700 text-[0.95rem]">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Solution</h4>
                  <ul className="space-y-1">
                    {caseStudy.solution.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-slate-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-blue-700 mr-2 shrink-0 mt-1"
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Results</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center text-slate-700"
                      >
                        <Award
                          size={16}
                          className="text-blue-700 mr-2 flex-shrink-0"
                        />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-full text-sm text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="text-sm mt-8 text-slate-400">
          * Case studies reflect technical contributions across enterprise teams
          while respecting client confidentiality and proprietary implementation
          details.
        </div>
      </div>
    </section>
  );
}
