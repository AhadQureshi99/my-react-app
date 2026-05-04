import React from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="Case Studies – Our Work & Results"
        description="Explore Growhm Tech's portfolio of case studies. See how we've helped startups with UI/UX design, branding, pitch decks, and mobile apps that deliver real results."
        keywords="design case studies, portfolio, UI UX case study, branding work, startup design projects, Growhm Tech portfolio"
        canonical="/cases"
      />
      <ServicesHeroSection />
      <ServicesSlider />
      <CaseStudiesGrid />
      <CTASection />
      <WorkProcessSection />
    </div>
  );
};

export default Services;
