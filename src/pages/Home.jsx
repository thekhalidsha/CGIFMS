// import FeaturesSection from "../components/FeaturesSection";
// import CTASection from "../components/CTASection";
// import TestimonialsSection from "../components/TestimonialsSection";

import CTASection from "../components/CTASection";
import Faq from "../components/Faq";
import HeroSection from "../components/HeroSection";
import ModulesList from "../components/ModulesList";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ModulesList/>
      <Faq/>
      <CTASection/>
    </>
  );
};

export default LandingPage;