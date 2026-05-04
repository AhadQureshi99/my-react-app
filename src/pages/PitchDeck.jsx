import React from "react";
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
      <PitchDeckHeroSection />
      <PitchDeckWhyChoose />
      <PitchDeckWorkProcess />
      <CaseStudiesGrid />
      <CTASection/>
    </div>
  );
};

export default PitchDeck;
