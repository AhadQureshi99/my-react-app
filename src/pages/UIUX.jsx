import React from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="UI/UX Design Services for Startups"
        description="Growhm Tech delivers user-centered UI/UX design for web and mobile. Beautiful interfaces, intuitive flows, and designs that convert visitors into customers."
        keywords="UI UX design service, user experience design, user interface design, web app design, mobile UI design, startup UX agency"
        canonical="/services/ui-ux"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "UI/UX Design",
          "provider": { "@type": "Organization", "name": "Growhm Tech", "url": "https://www.growhmtech.com" },
          "url": "https://www.growhmtech.com/services/ui-ux",
          "description": "User-centered UI/UX design for web and mobile apps."
        }}
      />
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
