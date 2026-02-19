import { Navigation } from "./components/Navigation";
import { Expertise } from "./components/Expertise";
import { ConsultingServices } from "./components/ConsultingServices";
import { CaseStudies } from "./components/CaseStudies";
import { ConsultingApproach } from "./components/ConsultingApproach";
import { Contact } from "./components/Contact";
import { AvailabilityBanner } from "./components/AvailabilityBanner";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AvailabilityBanner />
      <AboutMe />
      <Expertise />
      <ConsultingServices />      
      <CaseStudies />
      <ConsultingApproach />
      <Contact />
    </div>
  );
}
