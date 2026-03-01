"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import ContactForm from "./forms/ContactForm";

export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application, this would send the data to a backend
//     console.log("Form submitted:", formData);
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: "", email: "", company: "", message: "" });
//     }, 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

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
              <h3 className="text-2xl text-slate-300 mb-6">
                Get in Touch
              </h3>
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

          {/* Contact Form */}
          <ContactForm />
          {/* <div className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-blue-600 transition-all hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600 text-center">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}
