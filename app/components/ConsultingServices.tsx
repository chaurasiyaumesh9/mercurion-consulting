import { Boxes, GitBranch, Activity, ShieldCheck } from "lucide-react";

export function ConsultingServices() {
  const services = [
    {
      icon: Boxes,
      title: "Enterprise Angular Development & Platform Engineering",
      description:
        "Hands-on development and technical execution for large-scale Angular applications. Supporting enterprise frontend platforms, complex data workflows, scalable state management, and multi-team codebase environments.",
    },
    {
      icon: GitBranch,
      title: "Angular Modernization & Frontend Migration",
      description:
        "Modernizing legacy AngularJS and older frontend architectures to modern Angular and scalable frontend platforms. Supporting migration strategy, dependency upgrades, codebase restructuring, and production-safe rollout execution.",
    },
    {
      icon: Activity,
      title: "Frontend Performance Optimization & Runtime Stability",
      description:
        "Improving performance, scalability, and runtime reliability of enterprise frontend applications. Covering bundle optimization, rendering performance tuning, Core Web Vitals improvements, and production performance issue analysis.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Frontend Delivery & Engineering Enablement",
      description:
        "Supporting engineering teams with code quality standards, CI/CD integration, release stability, debugging production issues, and improving frontend delivery workflows across distributed teams.",
    },
  ];

  return (
    <section id="services" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl tracking-tight mb-5 text-[#1E293B]">
            Consulting Services
          </h2>

          <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed">
            Hands-on technical consulting and delivery support for enterprise
            Angular and frontend engineering teams.
          </p>
        </div>

        {/* Editorial Split Blocks */}
        <div className="divide-y divide-slate-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-7 flex flex-col md:flex-row md:items-start gap-10"
            >
              {/* LEFT COLUMN — Icon + Title */}
              <div className="md:w-1/3 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-[#1E293B] leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* RIGHT COLUMN — Description */}
              <div className="md:w-2/3">
                <p className="text-[#6B7280] leading-relaxed text-[16px] max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
