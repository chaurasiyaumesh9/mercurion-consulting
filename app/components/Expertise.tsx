import { Target, Users, Briefcase } from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Target,
      title: "Technical Architecture",
      items: [
        "Enterprise Angular Architecture",
        "Micro-frontend Design",
        "State Management at Scale",
        "Component Library Architecture",
        "Module Federation Strategies"
      ]
    },
    {
      icon: Users,
      title: "Performance Engineering",
      items: [
        "Core Web Vitals Optimization",
        "Bundle Size Reduction",
        "Runtime Performance Tuning",
        "Server-Side Rendering (SSR)",
        "Progressive Web App (PWA)"
      ]
    },
    {
      icon: Briefcase,
      title: "Enterprise Delivery",
      items: [
        "Legacy System Modernization",
        "Technical Due Diligence",
        "Development Workflow Design",
        "Team Enablement & Training",
        "Code Quality Standards"
      ]
    }
  ];

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 text-[#1E293B]">Technical Expertise</h2>
        <p className="text-xl text-[#6B7280] max-w-3xl">
          Specialized knowledge across Angular ecosystem and enterprise frontend engineering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="bg-[#F9FAFB] p-8 border border-[#E5E7EB]">
            <div className="mb-6 flex items-center justify-center w-12 h-12 bg-[#EFF6FF] rounded">
              <area.icon className="w-10 h-10 text-[#2563EB]" />
            </div>
            <h3 className="text-2xl mb-5 text-[#1E293B]">{area.title}</h3>
            <ul className="space-y-2.5">
              {area.items.map((item, idx) => (
                <li key={idx} className="text-[#6B7280] text-sm flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
