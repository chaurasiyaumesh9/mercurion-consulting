import { Award, Check, CheckCircle } from "lucide-react";

export function ProfessionalProjects() {
  const projects = [
    {
      title: "Enterprise Tax and Compliance Management Platform",
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
      industry: "Retail and Ecommerce (B2C)",
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
      technologies: ["AngularJS", "Angular 2", "Rest APIs", "Bootstrap", "Webpack"],
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
      technologies: ["Angular 8", "Rest APIs", "RxJS", "Webpack"],
    },
  ];

  return (
    <section
      id="professional-projects"
      aria-labelledby="professional-projects-heading"
      className="bg-slate-50 py-14 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 id="professional-projects-heading" className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Professional Projects
          </h2>
          <p className="text-lg text-slate-600">
            Real-world examples of how I&apos;ve helped organizations transform frontend engineering
            and deliver measurable outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              itemScope
              itemType="https://schema.org/CreativeWork"
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <header className="mb-4">
                <h3 itemProp="name" className="text-xl text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p itemProp="about" className="text-blue-700 font-medium">
                  {project.industry}
                </p>
              </header>

              <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent my-4" />

              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 mb-2">Challenge</h4>
                  <p itemProp="abstract" className="text-slate-700 text-[0.95rem]">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 mb-2">Solution</h4>
                  <ul className="space-y-1">
                    {project.solution.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-slate-700">
                            <Check className="w-4 h-4 shrink-0 mt-0.75" />
                        </span>
                        <span className="text-slate-700 text-[0.95rem]">
                            {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-900 mb-2">Business Impact</h4>
                  <ul className="grid sm:grid-cols-1 gap-2">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-slate-700">
                            <Check className="w-4 h-4 shrink-0 mt-0.75" />
                        </span>
                        <span className="text-slate-700 text-[0.95rem]">
                            {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-900 mb-2">Technologies Used</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        itemProp="keywords"
                        className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-full text-sm text-slate-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm mt-8 text-slate-400">
          Professional projects reflect technical contributions across enterprise teams while respecting
          client confidentiality and proprietary implementation details.
        </p>
      </div>
    </section>
  );
}
