import React from "react";
import {
  // AboutVideoSection,
  OfficeCultureSection,
  TeamHeroSection,
  TeamExpertsSection,
  FAQSection,
} from "../components/about";

const About = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      {/* <AboutVideoSection /> */}
      <OfficeCultureSection />
      <TeamHeroSection />
      <TeamExpertsSection />
      {/* <FAQSection /> */}
    </div>
  );
};

export default About;
