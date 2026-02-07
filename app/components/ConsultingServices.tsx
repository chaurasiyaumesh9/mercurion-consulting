import { Code2, RefreshCw, Gauge, Layers, Library } from "lucide-react";

export function ConsultingServices() {
  const services = [
    {
      icon: Code2,
      title: "Angular Architecture Consulting",
      description: "Strategic guidance on scalable Angular architecture for enterprise applications. Design patterns, module organization, and long-term maintainability."
    },
    {
      icon: RefreshCw,
      title: "Angular Modernization & Migration",
      description: "Upgrade legacy Angular applications to latest versions. Migration strategy, dependency management, and risk mitigation for critical systems."
    },
    {
      icon: Gauge,
      title: "Frontend Performance Optimization",
      description: "Comprehensive performance audits and optimization. Bundle size reduction, rendering optimization, and Core Web Vitals improvement."
    },
    {
      icon: Layers,
      title: "Enterprise UI Engineering",
      description: "Technical leadership for complex UI implementations. State management architecture, testing strategies, and development workflow optimization."
    },
    {
      icon: Library,
      title: "Component Library & Design System Architecture",
      description: "Build scalable component libraries and design systems. Token architecture, documentation standards, and cross-team adoption strategies."
    }
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 text-[#1E293B]">Consulting Services</h2>
        <p className="text-xl text-[#6B7280] max-w-3xl">
          Specialized technical consulting for enterprise Angular applications
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-l-4 border-[#2563EB] pl-8 py-4">
            <div className="flex items-start gap-6">
              <div className="mt-1">
                <service.icon className="w-8 h-8 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="text-xl mb-3 text-[#1E293B]">{service.title}</h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
