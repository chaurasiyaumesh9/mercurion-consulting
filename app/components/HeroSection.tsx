"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-16">
          {/* IMAGE — FIRST IN DOM (Mobile Trust + LCP) */}
          <div className="flex justify-center md:justify-start md:flex-[0.35] shrink-0">
            <div className="relative w-[200px] h-[240px] md:w-[280px] md:h-[340px]">
              <Image
                src="/umesh-profile.jpg"
                alt="Umesh Chaurasiya — Senior Angular Consultant and Frontend Performance Engineer"
                fill
                sizes="(max-width: 640px) 80vw,
                       (max-width: 1024px) 40vw,
                       280px"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left md:flex-[0.65] max-w-3xl">
            {/* NAME */}
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Umesh Chaurasiya
            </h1>

            {/* TITLE */}
            <h2 className="mt-2 text-xl md:text-2xl font-medium text-gray-500">
              Senior Angular Engineer & Frontend Consultant
            </h2>

            {/* SPECIALIZATION STRIP */}
            <p className="mt-4 text-base md:text-lg text-blue-600 font-medium">
              Angular Modernization • Performance Engineering • Enterprise UI
              Development
            </p>

            {/* VALUE PROP */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              I help engineering teams modernize legacy Angular applications,
              improve frontend performance, and deliver stable, production-ready
              features for enterprise web platforms.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Specialized in Angular migrations, runtime performance
              optimization, large-scale feature delivery, and long-term
              maintenance of business-critical applications.
            </p>

            {/* PROOF SIGNALS */}
            <div className="mt-6 space-y-1.5 text-sm text-gray-700">
              <p>✔ 10+ Years Frontend Engineering Experience</p>
              <p>✔ Enterprise Production Systems</p>
              <p>✔ Distributed & Global Team Collaboration</p>
              <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
                Available for hire as a Senior Angular Consultant, Enterprise Angular Developer, or Frontend Architecture Consultant. I support global
                organizations with Angular migration, performance optimization,
                and enterprise frontend modernization through remote consulting
                and contract engagements.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#case-studies"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded-md text-center"
              >
                View Case Studies
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 font-medium hover:bg-gray-50 transition rounded-md text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
