import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../forms/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 py-14 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-slate-300 mb-4">Start a Conversation</h2>
          <p className="text-lg text-slate-200">
            Whether you need help with a specific project or want to explore how I can help
            transform your digital presence, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-slate-300 mb-6">Get in Touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I&apos;m currently available for freelance work and consulting projects. Let&apos;s
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <Mail size={24} />
                </div>
                <a
                  href="mailto:contact@mercurionconsulting.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  contact@mercurionconsulting.com
                </a>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <Phone size={24} />
                </div>
                <a href="tel:+918707907092" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +91-8407907092
                </a>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <MapPin size={24} />
                </div>
                <p className="text-slate-300">Available for remote work worldwide</p>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl p-6 text-slate-900">
              <h4 className="font-bold mb-3">Response Time</h4>
              <p>
                I typically respond to all inquiries within 24-48 hours. For urgent matters,
                mention it in your message.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
