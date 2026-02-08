import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ExperienceAuthority } from "./components/ExperienceAuthority";
import { Expertise } from "./components/Expertise";
import { ConsultingServices } from "./components/ConsultingServices";
import { CaseStudies } from "./components/CaseStudies";
import { ConsultingApproach } from "./components/ConsultingApproach";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      {/* <ExperienceAuthority /> */}
      <Expertise />
      <ConsultingServices />
      <CaseStudies />
      <ConsultingApproach />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
