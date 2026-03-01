import { Boxes, Activity, GitBranch, ChevronRight, CheckCircle } from "lucide-react";

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

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {expertiseAreas.map((area, index) => (
                    <div key={index} className="group bg-white p-6 border border-slate-200 hover:bg-linear-to-br from-slate-900 to-blue-950 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1transition-all duration-300">

                        {/* CARD HEADER */}                        
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl text-slate-900 text-center group-hover:text-white">
                                {area.title}
                            </h3>
                        </div>

                        <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent my-4"></div>

                        {/* LIST */}
                        <ul className="space-y-2 md:space-y-2.5">
                            {area.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-slate-700 text-[0.95rem] group-hover:text-slate-200">✔</span>
                                <span className="text-slate-700 text-[0.95rem] group-hover:text-slate-200">{item}</span>
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
