import React from "react";
import SEO from "../components/SEO";
import {
  PitchDeckHeroSection,
  PitchDeckWhyChoose,
  PitchDeckWorkProcess,
} from "../components/pitchdeck";
import { CaseStudiesGrid } from "../components/services";
import { CTASection } from "../components/home";

const PitchDeck = () => {
  return (
    <div className="bg-white overflow-hidden">
      <SEO
        title="Pitch Deck Design – Investor-Ready Presentations"
        description="Growhm Tech creates compelling pitch decks that captivate investors. Visual storytelling, data visualization, and strategy to help you raise funding."
        keywords="pitch deck design, investor pitch deck, startup pitch deck, fundraising presentation, pitch deck agency, pitch deck Pakistan"
        canonical="/services/pitch-deck"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Pitch Deck Design",
          "provider": { "@type": "Organization", "name": "Growhm Tech", "url": "https://www.growhmtech.com" },
          "url": "https://www.growhmtech.com/services/pitch-deck",
          "description": "Compelling investor-ready pitch decks for startups."
        }}
      />
      <PitchDeckHeroSection />
      <PitchDeckWhyChoose />
      <PitchDeckWorkProcess />
      <CaseStudiesGrid />
      <CTASection/>
    </div>
  );
};

export default PitchDeck;
