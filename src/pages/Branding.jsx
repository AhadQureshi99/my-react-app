import React from "react";
import {
  BrandingHeroSection,
  BrandingWhyChoose,
  BrandingWorkProcess,
} from "../components/branding";
import { CaseStudiesGrid } from "../components/services";
import { CTASection } from "../components/home";

const Branding = () => {
  return (
    <div className="bg-white overflow-hidden">
      <BrandingHeroSection />
      <BrandingWhyChoose />
      <BrandingWorkProcess />
       <CaseStudiesGrid />
      <CTASection/>
    </div>
  );
};

export default Branding;
