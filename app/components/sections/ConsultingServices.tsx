import Link from "next/link";

export function ConsultingServices() {
  const services = [
    {
      title: "Enterprise Angular Development and Platform Engineering",
      description:
        "Hands-on development and technical execution for large-scale Angular applications. Supporting enterprise frontend platforms, complex data workflows, scalable state management, and multi-team codebase environments.",
      href: "/services/enterprise-angular-development",
      image: "/services_1.webp",
      ariaLabel:
      "Learn more about Enterprise Angular Development and Platform Engineering consulting services",
    },
    {
      title: "Angular Modernization and Frontend Migration",
      description:
        "Modernizing legacy AngularJS and older frontend architectures to modern Angular and scalable frontend platforms. Supporting migration strategy, dependency upgrades, codebase restructuring, and production-safe rollout execution.",
      href: "/services/angular-migration-modernization",
      image: "/services_2.webp",
      ariaLabel:
      "Learn more about Angular Modernization and AngularJS to Angular migration consulting services",
    },
    {
      title: "Frontend Performance Optimization and Runtime Stability",
      description:
        "Improving performance, scalability, and runtime reliability of enterprise frontend applications. Covering bundle optimization, rendering performance tuning, Core Web Vitals improvements, and production performance issue analysis.",
      href: "/services/frontend-performance-optimization",
      image: "/services_3.webp",
      ariaLabel:
      "Learn more about Angular frontend performance optimization consulting services",
    },
    {
      title: "Enterprise Frontend Delivery and Engineering Enablement",
      description:
        "Supporting engineering teams with code quality standards, CI/CD integration, release stability, debugging production issues, and improving frontend delivery workflows across distributed teams.",
      href: "/services/frontend-delivery-enablement",
      image: "/services_4.webp",
      ariaLabel:
      "Learn more about frontend delivery enablement and engineering consulting services",
    },
  ];

  return (
    <section id="services" className="bg-white py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">Consulting Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive frontend consulting services to transform your engineering organization
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div key={service.href} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={isReversed ? "md:order-2" : "md:order-1"}>
                  <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img src={service.image} loading="lazy" alt={service.title} className="w-full h-80 object-cover" />
                  </div>
                </div>

                <div className={isReversed ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-xl text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-slate-700 text-[1rem] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={service.href}
                      aria-label={service.ariaLabel}
                      className="inline-block bg-slate-800 text-white px-8 py-3 rounded-md text-base font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
