import ContactForm from "../components/forms/ContactForm";
import { Navigation } from "../components/Navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1E293B] mb-4">
              Contact / Enquiry
            </h1>

            <div className="mb-8 bg-blue-50/70 backdrop-blur px-5 py-4 flex items-start gap-3">
              <p className="text-sm text-blue-900 leading-relaxed">
                Prefer email? Send your enquiry directly to{" "}
                <span className="font-semibold">
                  contact@mercurionconsulting.com
                </span>{" "}
                or submit the form below.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>        
      </section>
    </div>
  );
}
