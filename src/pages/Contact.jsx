import React from "react";
import SEO from "../components/SEO";
import { AboutContactSection } from "../components/about";

const Contact = () => {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      <SEO
        title="Contact Us – Book a Free Call"
        description="Ready to grow? Book a free strategy call with Growhm Tech. We work with startups and businesses on UI/UX design, branding, pitch decks, and mobile apps."
        keywords="contact Growhm Tech, book a call, schedule meeting, design agency contact, startup consultation"
        canonical="/contact"
      />
      <AboutContactSection />
    </div>
  );
};

export default Contact;
