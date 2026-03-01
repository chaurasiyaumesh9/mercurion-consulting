import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./forms/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 py-14 md:py-20 scroll-mt-2"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-slate-300 mb-4">
            Start a Conversation
          </h2>
          <p className="text-lg text-slate-200">
            Whether you need help with a specific project or want to explore how
            I can help transform your digital presence, I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-slate-300 mb-6">Get in Touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm currently available for freelance work and consulting
                projects. Let's discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <a
                    href="mailto:umesh@example.com"
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    umesh.chaursiya@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    +91-8707907092
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mr-4 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-300">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-200 rounded-2xl p-6 text-slate-900">
              <h4 className="font-bold mb-3">Response Time</h4>
              <p className="text-slate-900">
                I typically respond to all inquiries within 24-48 hours. For
                urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
