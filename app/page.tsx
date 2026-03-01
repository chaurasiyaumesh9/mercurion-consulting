import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { ConsultingServices } from "./components/ConsultingServices";
import { CaseStudies } from "./components/CaseStudies";
import { ConsultingApproach } from "./components/ConsultingApproach";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { HireSection } from "./components/HireSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Expertise />
      <ConsultingServices />      
      <CaseStudies />
      <ConsultingApproach />
      {/* <Blog /> */}
      {/* <HireSection /> */}
      <Contact />
      <Footer />
    </div>
  );
}
