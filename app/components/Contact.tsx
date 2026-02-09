import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-16 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            Start a Conversation
          </h2>

          <p className="mt-4 text-lg md:text-xl text-[#CBD5E1] leading-relaxed">
            Whether you need help with a specific challenge or want to discuss a larger initiative, I'm here to help. Let's explore how we can work together to achieve your frontend goals.
          </p>

          {/* CONTACT LINKS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* EMAIL */}
            <a
              href="mailto:contact@mercurionconsulting.com"
              className="inline-flex items-center gap-3 text-white hover:text-[#60A5FA]
                         transition-colors text-base
                         px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <Mail className="w-5 h-5" />
              contact@mercurionconsulting.com
            </a>

            {/* DIVIDER */}
            <div className="hidden sm:block w-px h-6 bg-[#475569]" />

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/uc1990/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-[#60A5FA]
                         transition-colors text-base
                         px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          {/* FOOTER IDENTITY */}
          <div className="mt-14 pt-10 border-t border-[#475569]">
            <div className="text-[#94A3B8]">
              <div className="text-white font-medium tracking-wide">
                Umesh Chaurasiya
              </div>

              <div className="text-sm mt-1">
                Enterprise Angular & Frontend Performance Consultant
              </div>

              <div className="text-xs mt-4 opacity-80">
                © 2026 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
