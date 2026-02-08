import { Boxes, Activity, GitBranch } from "lucide-react";

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
    <section id="expertise" className="bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-4xl mb-4 text-[#1E293B]">
            Enterprise Frontend Engineering Expertise
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            Hands-on engineering across Angular ecosystems, large-scale frontend
            platforms, and performance-critical enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-11 h-11 bg-[#EFF6FF] rounded-lg shrink-0">
                  <area.icon className="w-5 h-5 text-[#2563EB]" />
                </div>

                <h3 className="text-2xl text-[#1E293B] leading-tight">
                  {area.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {area.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#6B7280] text-sm flex items-start gap-2"
                  >
                    <span className="text-[#2563EB] mt-1">•</span>
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
