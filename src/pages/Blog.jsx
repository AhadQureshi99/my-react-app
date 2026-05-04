import React from "react";
import { BlogsHeroSection, BlogsGrid } from "../components/blogs";
import { BlogSection, CTASection } from "../components/home";

const Blog = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      <BlogsHeroSection />
      <BlogsGrid />
      <CTASection />
      <BlogSection />
    </div>
  );
};

export default Blog;
