import dynamic from "next/dynamic";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import { Expertise } from "./components/sections/Expertise";
import { ConsultingServices } from "./components/sections/ConsultingServices";

const ProfessionalProjects = dynamic(
  () =>
    import("./components/sections/ProfessionalProjects").then(
      (mod) => mod.ProfessionalProjects,
    ),
  {
    loading: () => <div className="min-h-[320px]" aria-hidden="true" />,
  },
);

const ConsultingApproach = dynamic(
  () =>
    import("./components/sections/ConsultingApproach").then(
      (mod) => mod.ConsultingApproach,
    ),
  {
    loading: () => <div className="min-h-[280px]" aria-hidden="true" />,
  },
);

const Contact = dynamic(
  () => import("./components/sections/Contact").then((mod) => mod.Contact),
  {
    loading: () => <div className="min-h-[420px]" aria-hidden="true" />,
  },
);

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
