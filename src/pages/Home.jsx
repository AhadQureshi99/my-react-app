import React from "react";
import {
  Hero,
  // VideoSection,
  BrandsSlider,
  WhoWeAre,
  StatsSection,
  ServicesSection,
  CTASection,
  TestimonialsSection,
  BlogSection,
} from "../components/home";
import { CaseStudiesGrid } from "../components/services";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      {/* Hero Section Component */}
      <Hero />

      {/* Video Section Component */}
      {/* <VideoSection /> */}

      {/* Brands Slider Component */}
      <BrandsSlider />

      {/* Who We Are Component */}
      <WhoWeAre />

      {/* Stats Section Component */}
      <StatsSection />

      {/* Services Section Component */}
      <ServicesSection />

      {/* Case Studies Section Component */}
      <CaseStudiesGrid />

      {/* CTA Section Component */}
      <CTASection />

      {/* Testimonials Section Component */}
      <TestimonialsSection />

      {/* Blog Section Component */}
      {/* <BlogSection /> */}
    </div>
  );
};

export default Home;
