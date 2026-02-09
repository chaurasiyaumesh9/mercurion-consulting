import ContactForm from "../components/forms/ContactForm";
import { Navigation } from "../components/Navigation";

export default function ContactPage() {
  
  return (
    <div className="min-h-screen bg-white">
        <Navigation />
        <ContactForm />
    </div>
    
  );
}