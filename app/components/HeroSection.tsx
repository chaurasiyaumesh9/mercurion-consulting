"use client";

import Image from "next/image";
import Link from "next/link";

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

              {/* Social Links */}
              <div className="absolute bottom-2 right-2 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/uc1990/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/chaurasiyaumesh9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
                  aria-label="GitHub Profile"
                >
                  <svg
                    className="w-6 h-6 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
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
              Senior Angular & NetSuite SuiteCommerce Developer
            </h2>

            {/* SPECIALIZATION STRIP */}
            <p className="mt-4 text-base md:text-lg text-blue-600 font-medium">
              Angular Modernization | Performance Engineering | SuiteCommerce
              Development
            </p>

            {/* VALUE PROP */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              I help engineering teams modernize legacy Angular/SuiteCommerce applications,
              improve frontend performance, and deliver stable, production-ready
              features for enterprise web platforms.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Specialized in Angular/SuiteCommerce migrations, runtime performance
              optimization, large-scale feature delivery, and long-term
              maintenance of business-critical applications.
            </p>

            {/* PROOF SIGNALS */}
            <div className="mt-6 space-y-1.5 text-sm text-gray-700">
              <p>✔ 10+ Years Frontend Engineering Experience</p>
              <p>✔ Enterprise Production Systems</p>
              <p>✔ Distributed & Global Team Collaboration</p>
              <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
                Available for hire as a Senior Angular/SuiteCommerce Consultant, Enterprise
                Angular/SuiteCommerce Developer, or Frontend Architecture Consultant. I
                support global organizations with Angular/SuiteCommerce migration, performance
                optimization, and enterprise frontend modernization through
                remote consulting and contract engagements.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="mailto:contact@mercurionconsulting.com"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded-md text-center"
              >
                Schedule a Call
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 font-medium hover:bg-gray-50 transition rounded-md text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
