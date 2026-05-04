import React from "react";
import SEO from "../components/SEO";
import { BlogsHeroSection, BlogsGrid } from "../components/blogs";
import { BlogSection, CTASection } from "../components/home";

const Blog = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      <SEO
        title="Blog – Design, Branding & Startup Insights"
        description="Explore articles and insights from Growhm Tech on UI/UX design, branding strategy, pitch decks, and startup growth tips."
        keywords="design blog, branding tips, startup growth, UI UX articles, pitch deck tips, Growhm Tech blog"
        canonical="/blog"
      />
      <BlogsHeroSection />
      <BlogsGrid />
      <CTASection />
      <BlogSection />
    </div>
  );
};

export default Blog;
