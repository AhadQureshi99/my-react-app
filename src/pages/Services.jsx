import React from "react";
import {
  ServicesHeroSection,
  ServicesSlider,
  CaseStudiesGrid,
  WorkProcessSection,
} from "../components/services";
import { CTASection } from "../components/home";

const Services = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      <ServicesHeroSection />
      <ServicesSlider />
      <CaseStudiesGrid />
      <CTASection />
      <WorkProcessSection />
    </div>
  );
};

export default Services;
