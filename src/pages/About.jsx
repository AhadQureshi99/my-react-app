import React from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="About Us – Our Team & Story"
        description="Meet the team behind Growhm Tech. A passionate design & development agency helping startups and growing businesses turn ideas into impactful digital products."
        keywords="about Growhm Tech, design team, startup agency team, who we are, design agency Pakistan"
        canonical="/about"
      />
      {/* <AboutVideoSection /> */}}
      <OfficeCultureSection />
      <TeamHeroSection />
      <TeamExpertsSection />
      {/* <FAQSection /> */}
    </div>
  );
};

export default About;
