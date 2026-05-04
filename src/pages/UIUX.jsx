import React from "react";
import {
  UiUxHeroSection,
  WhyChooseServices,
  WorkProcess,
} from "../components/uiux";
import { CaseStudiesGrid } from "../components/services";
import { CTASection } from "../components/home";

const UiUx = () => {
  return (
    <div className="bg-white overflow-hidden">
      <UiUxHeroSection />
      <WhyChooseServices />
      <WorkProcess />
      <CaseStudiesGrid />
      <CTASection/>
      {/* Add more sections here as needed */}
    </div>
  );
};

export default UiUx;
