import React from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="Growth Happens When Idea Becomes Action"
        description="Growhm Tech is a design & development agency built for startups. We deliver UI/UX design, branding, pitch decks, and mobile apps that drive real growth."
        keywords="startup design agency, UI UX design, branding agency, pitch deck design, mobile app development, Growhm Tech"
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Growhm Tech – Home",
          "url": "https://www.growhmtech.com/",
          "description": "Growhm Tech is a design & development agency built for startups."
        }}
      />
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
