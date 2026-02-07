import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-6">Start a Conversation</h2>
          <p className="text-lg text-[#CBD5E1] mb-12 leading-relaxed">
            Available for strategic consulting engagements with enterprise organizations. 
            Let&apos;s discuss how I can help with your Angular architecture challenges.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:contact@mercurionconsulting.com"
              className="inline-flex items-center gap-3 text-white hover:text-[#60A5FA] transition-colors text-base"
            >
              <Mail className="w-5 h-5" />
              contact@mercurionconsulting.com
            </a>
            <div className="hidden md:block w-px h-6 bg-[#475569]"></div>
            <a 
              href="https://linkedin.com/in/umeshchaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-[#60A5FA] transition-colors text-base"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          <div className="pt-12 border-t border-[#475569]">
            <div className="text-[#94A3B8]">
              <div className="mb-2 text-white">Umesh Chaurasiya</div>
              <div className="text-sm">Enterprise Angular & Performance Consultant</div>
              <div className="text-xs mt-3">© 2026 All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
