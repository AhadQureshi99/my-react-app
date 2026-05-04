import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden"
        >
          {/* Background Glass Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top right glass shapes */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl rotate-12 blur-sm"></div>
            <div className="absolute right-20 top-20 w-48 h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl -rotate-12 blur-sm"></div>
            <div className="absolute right-40 top-10 w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl rotate-45 blur-sm"></div>

            {/* Bottom right glass shapes */}
            <div className="absolute -right-5 bottom-10 w-56 h-56 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl -rotate-6 blur-sm"></div>
            <div className="absolute right-32 -bottom-10 w-40 h-40 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl rotate-12 blur-sm"></div>

            {/* Holographic/iridescent effect elements */}
            <div className="absolute right-10 top-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl rotate-45"></div>
            <div className="absolute right-1/4 bottom-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-green-500/20 rounded-2xl -rotate-12"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-white mb-6 leading-tight">
              Let's build your brand's
              <br />
              next big win
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Schedule a 20-minute session with Growhm to plan your website,
              pitch deck, or full branding package—and start turning visitors
              into customers today.
            </p>
            <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
              Book a Call
              <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <FaArrowRight className="text-white text-sm -rotate-45" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
