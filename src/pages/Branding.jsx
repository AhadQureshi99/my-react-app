import React from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="Branding Design – Build a Brand That Stands Out"
        description="Growhm Tech crafts powerful brand identities for startups. Logo design, visual identity, brand strategy, and more to help you stand out and grow."
        keywords="branding design agency, logo design, brand identity, visual identity, startup branding, brand strategy, branding Pakistan"
        canonical="/services/branding"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Branding Design",
          "provider": { "@type": "Organization", "name": "Growhm Tech", "url": "https://www.growhmtech.com" },
          "url": "https://www.growhmtech.com/services/branding",
          "description": "Brand identity and visual design for startups and businesses."
        }}
      />
      <BrandingHeroSection />
      <BrandingWhyChoose />
      <BrandingWorkProcess />
       <CaseStudiesGrid />
      <CTASection/>
    </div>
  );
};

export default Branding;
