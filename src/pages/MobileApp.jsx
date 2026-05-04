import React from "react";
import SEO from "../components/SEO";
import {
  MobileAppHeroSection,
  MobileAppWhyChoose,
  MobileAppWorkProcess,
} from "../components/mobileapp";

const MobileApp = () => {
  return (
    <div className="bg-white overflow-hidden">
      <SEO
        title="Mobile App Development for Startups"
        description="Growhm Tech builds high-performance mobile apps for startups and businesses. React Native and cross-platform development with stunning UI/UX design."
        keywords="mobile app development, react native app, cross platform app, startup mobile app, app design and development, mobile app agency Pakistan"
        canonical="/services/mobile-app"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile App Development",
          "provider": { "@type": "Organization", "name": "Growhm Tech", "url": "https://www.growhmtech.com" },
          "url": "https://www.growhmtech.com/services/mobile-app",
          "description": "High-performance mobile apps for startups."
        }}
      />
      <MobileAppHeroSection />
      <MobileAppWhyChoose />
      <MobileAppWorkProcess />
    </div>
  );
};

export default MobileApp;
