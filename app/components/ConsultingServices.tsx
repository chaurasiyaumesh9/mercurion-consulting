import { Boxes, GitBranch, Activity, ShieldCheck } from "lucide-react";

export function ConsultingServices() {
  const services = [
    {
      icon: Boxes,
      title: "Enterprise Angular Development & Platform Engineering",
      description:
        "Hands-on development and technical execution for large-scale Angular applications. Supporting enterprise frontend platforms, complex data workflows, scalable state management, and multi-team codebase environments.",
      href: "/services/enterprise-angular-development",
    },
    {
      icon: GitBranch,
      title: "Angular Modernization & Frontend Migration",
      description:
        "Modernizing legacy AngularJS and older frontend architectures to modern Angular and scalable frontend platforms. Supporting migration strategy, dependency upgrades, codebase restructuring, and production-safe rollout execution.",
        href: "/services/angular-migration-modernization",
    },
    {
      icon: Activity,
      title: "Frontend Performance Optimization & Runtime Stability",
      description:
        "Improving performance, scalability, and runtime reliability of enterprise frontend applications. Covering bundle optimization, rendering performance tuning, Core Web Vitals improvements, and production performance issue analysis.",
        href: "/services/frontend-performance-optimization",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Frontend Delivery & Engineering Enablement",
      description:
        "Supporting engineering teams with code quality standards, CI/CD integration, release stability, debugging production issues, and improving frontend delivery workflows across distributed teams.",
        href: "/services/frontend-delivery-enablement",
    },
  ];

  return (
    <section id="services" className="bg-white py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-[#1E293B] font-semibold leading-tight">
            Consulting Services
          </h2>

          <p className="mt-4 text-lg md:text-xl text-[#6B7280] leading-relaxed">
            Hands-on technical consulting and delivery support for enterprise
            Angular and frontend engineering teams.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="divide-y divide-slate-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-8 md:py-10
                         flex flex-col
                         sm:flex-row
                         gap-6 md:gap-10"
            >
              {/* LEFT — ICON + TITLE */}
              <div
                className="
                flex items-start gap-4
                sm:w-[40%]
                lg:w-[35%]
              "
              >
                <div
                  className="
                  w-10 h-10 md:w-12 md:h-12
                  rounded-xl
                  bg-blue-50
                  flex items-center justify-center
                  shrink-0
                "
                >
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-[#1E293B] leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* RIGHT — DESCRIPTION */}
              <div
                className="
                sm:w-[60%]
                lg:w-[65%]
              "
              >
                <p
                  className="
                  text-[#6B7280]
                  leading-relaxed
                  text-[15px] md:text-[16px]
                  max-w-xl md:max-w-2xl
                "
                >
                  {service.description}{" "}
                  <a
                    href={service.href}
                    className="text-blue-600 font-medium hover:text-blue-700 transition whitespace-nowrap"
                  >
                    Know more →
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
