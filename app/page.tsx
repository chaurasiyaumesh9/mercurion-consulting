import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import { Expertise } from "./components/sections/Expertise";
import { ConsultingServices } from "./components/sections/ConsultingServices";
import { CaseStudies } from "./components/sections/CaseStudies";
import { ConsultingApproach } from "./components/sections/ConsultingApproach";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Expertise />
      <ConsultingServices />
      <CaseStudies />
      <ConsultingApproach />
      <Contact />
      <Footer />
    </div>
  );
}
