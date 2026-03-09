import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-slate-200 text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/angular-migration-modernization" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Angular Migration & Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-angular-development" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Enterprise Angular Development
                </Link>
              </li>
              <li>
                <Link href="/services/frontend-performance-optimization" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Frontend Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/frontend-delivery-enablement" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Frontend Delivery & Enablement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blogs" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Angular Consulting Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/#professional-projects" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Professional Project Case Studies
                </Link>
              </li>
              <li>
                <Link href="/hire-angular-consultant" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Hire an Angular Consultant
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-slate-200 transition-colors">
                  About Mercurion Consulting
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Technical Delivery Approach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-slate-200 transition-colors">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 text-sm font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-6">
              <a
                href="mailto:contact@mercurionconsulting.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/uc1990/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/chaurasiyaumesh9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2026 Mercurion Consulting. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/sitemap.xml" className="text-slate-400 hover:text-slate-200 transition-colors">
              Sitemap
            </Link>
            <a
              href="mailto:contact@mercurionconsulting.com"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              contact@mercurionconsulting.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
