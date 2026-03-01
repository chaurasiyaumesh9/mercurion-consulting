import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import { Expertise } from "./components/sections/Expertise";
import { ConsultingServices } from "./components/sections/ConsultingServices";
import { ProfessionalProjects } from "./components/sections/ProfessionalProjects";
import { ConsultingApproach } from "./components/sections/ConsultingApproach";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Expertise />
      <ConsultingServices />
      <ProfessionalProjects />
      <ConsultingApproach />
      <Contact />
      <Footer />
    </div>
  );
}
