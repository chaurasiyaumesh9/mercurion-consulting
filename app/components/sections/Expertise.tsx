import { Activity, Boxes, Check, GitBranch } from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Boxes,
      title: "Angular Platform Engineering",
      items: [
        "Enterprise-scale Angular application architecture and feature module design",
        "Scalable state management implementation (RxJS, NgRx, signal-driven patterns)",
        "Complex data flow and async state orchestration",
        "Enterprise component libraries and design system integration",
        "Multi-team frontend platform standardization and codebase governance",
      ],
    },
    {
      icon: Activity,
      title: "Frontend Performance and Runtime Optimization",
      items: [
        "Core Web Vitals and real user performance optimization",
        "Bundle size reduction and build optimization",
        "Change detection strategy and rendering performance tuning",
        "Server-side rendering (SSR) and SEO performance enablement",
        "Production performance monitoring and issue root cause analysis",
      ],
    },
    {
      icon: GitBranch,
      title: "Frontend Modernization and Delivery",
      items: [
        "Legacy AngularJS and legacy frontend modernization",
        "Enterprise frontend migration execution",
        "CI/CD integration and cloud deployment support",
        "Code quality, maintainability, and engineering standards enforcement",
        "Distributed team collaboration across product and design teams",
        "Production stability, incident debugging, and release risk reduction",
      ],
    },
  ];

  return (
    <section id="expertise" className="bg-slate-50 py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
            Enterprise Frontend Engineering Expertise
          </h2>
          <p className="text-lg text-slate-600">
            Delivering scalable, high-performance solutions for complex business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-white p-6 border border-slate-200 hover:bg-linear-to-br from-slate-900 to-blue-950 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <h3 className="text-xl text-slate-900 text-center group-hover:text-white">
                  {area.title}
                </h3>
              </div>

              <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent my-4" />

              <ul className="space-y-2 md:space-y-2.5">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-slate-700 text-[0.95rem] group-hover:text-slate-200">
                        <Check className="w-5 h-5" />
                    </span>
                    <span className="text-slate-700 text-[0.95rem] group-hover:text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
