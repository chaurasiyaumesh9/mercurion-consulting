export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Profile */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
              <img
                src="/umesh-profile.jpg"
                alt="Umesh Chaurasiya - Senior Full-Stack Developer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Social Links */}
            <div className="absolute bottom-8 left-8 flex gap-3">
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

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p className="text-xl leading-relaxed">
                I'm <strong className="text-slate-900">Umesh Chaurasiya</strong>
                , a Senior Full-Stack Developer specializing in
                <strong className="text-blue-600"> Angular</strong> and
                <strong className="text-blue-600">
                  {" "}
                  NetSuite SuiteCommerce
                </strong>{" "}
                development with over
                <strong className="text-slate-900"> 10 years</strong> of
                enterprise experience.
              </p>

              <p>
                My expertise spans the full stack of modern web development,
                with deep specialization in building scalable enterprise
                applications and high-performance e-commerce platforms.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Core Expertise:
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Angular Development
                    </h4>
                    <ul className="text-sm space-y-1 ml-4 text-slate-600">
                      <li>• Enterprise Angular applications & architecture</li>
                      <li>• AngularJS to modern Angular migrations</li>
                      <li>• Performance optimization & Core Web Vitals</li>
                      <li>• State management (NgRx, Signals)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      NetSuite SuiteCommerce
                    </h4>
                    <ul className="text-sm space-y-1 ml-4 text-slate-600">
                      <li>• Theme & core customization development</li>
                      <li>• Extension module architecture</li>
                      <li>• SCA version migrations (Montblanc → 2023.1)</li>
                      <li>• Site performance optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      SuiteScript 2.0
                    </h4>
                    <ul className="text-sm space-y-1 ml-4 text-slate-600">
                      <li>• User Event, Client, & Scheduled scripts</li>
                      <li>• Map/Reduce scripts for bulk operations</li>
                      <li>• Suitelets & RESTlets</li>
                      <li>• Custom workflows & saved searches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                I help global organizations modernize their frontend platforms,
                execute zero-downtime migrations, and build scalable e-commerce
                solutions that serve millions of users.
              </p>

              <p>
                Whether you need to migrate a legacy Angular application,
                upgrade your SuiteCommerce site, or build custom NetSuite
                integrations, I bring hands-on technical expertise and a proven
                track record of delivering mission-critical projects.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">6+</div>
                <div className="text-sm text-slate-600">SCA Versions</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/hire-me"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                View Rates & Availability
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="/cv/umesh-chaurasiya-cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>

              <a
                href="mailto:contact@mercurionconsulting.com"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
