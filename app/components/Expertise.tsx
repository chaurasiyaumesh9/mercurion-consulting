import { Boxes, Activity, GitBranch, ChevronRight } from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Boxes,
      title: "Angular Platform Engineering",
      items: [
        "Enterprise-Scale Angular Application Architecture & Feature Module Design",
        "Scalable State Management Implementation (RxJS, NgRx, Signal-driven patterns)",
        "Complex Data Flow & Async State Orchestration",
        "Enterprise Component Libraries & Design System Integration",
        "Multi-Team Frontend Platform Standardization & Codebase Governance",
      ],
    },
    {
      icon: Activity,
      title: "Frontend Performance & Runtime Optimization",
      items: [
        "Core Web Vitals & Real User Performance Optimization",
        "Bundle Size Reduction & Build Optimization",
        "Change Detection Strategy & Rendering Performance Tuning",
        "Server-Side Rendering (SSR) & SEO Performance Enablement",
        "Production Performance Monitoring & Issue Root Cause Analysis",
      ],
    },
    {
      icon: GitBranch,
      title: "Frontend Modernization & Delivery",
      items: [
        "Legacy AngularJS / Legacy Frontend Modernization",
        "Enterprise Frontend Migration Execution",
        "CI/CD Integration & Cloud Deployment Support (Azure Pipelines, Enterprise Hosting)",
        "Code Quality, Maintainability & Engineering Standards Enforcement",
        "Distributed Team Collaboration Across Product & Design Teams",
        "Production Stability, Incident Debugging & Release Risk Reduction",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-[#F9FAFB] py-14 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Enterprise Frontend Engineering Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Delivering scalable, high-performance solutions for complex business challenges
            </p>
          </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 border border-[#E5E7EB] rounded-xl
                         hover:shadow-sm transition-shadow duration-200"
            >

              {/* CARD HEADER */}
              <div className="flex items-start gap-4 mb-6">

                <div className="flex items-center justify-center
                                w-10 h-10 md:w-11 md:h-11
                                bg-[#EFF6FF] rounded-lg shrink-0">
                  <area.icon className="w-5 h-5 text-[#2563EB]" />
                </div>

                <h3 className="text-xl md:text-2xl text-[#1E293B] leading-snug font-semibold">
                  {area.title}
                </h3>

              </div>

              {/* LIST */}
              <ul className="space-y-2 md:space-y-2.5">
                {area.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#6B7280] text-sm md:text-[15px]
                               flex items-center gap-2 leading-relaxed"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
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
