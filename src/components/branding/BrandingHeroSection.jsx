import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const BrandingHeroSection = () => {
  return (
    <section className="relative min-h-[380px] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-[40px] mx-4 mt-24 mb-8 overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Branding Design
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Transform your digital experience with innovative UI & UX design.
              Our expert team creates user-friendly, visually appealing, and
              high-performance web and mobile user interfaces.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Book a Call
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <FaPhoneAlt className="text-gray-900 text-sm" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Content - Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl flex gap-4">
              {/* Mobile mockup 1 */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-6 flex-1 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-xl">✈</span>
                  </div>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">
                    Content Creators
                  </h3>
                  <p className="text-purple-600 font-semibold text-base">
                    Make Businesses.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-2xl p-4 mt-8">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-lg">✈</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">Roshan Studio</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Roshan Studio is a multi-disciplinary creative agency
                    serving the Studio. We offer a full range of design and
                    marketing services to help brands Media Matters.
                  </p>
                  <p className="text-purple-400 text-xs mt-3">info@roshan...</p>
                </div>
              </div>

              {/* Mobile mockup 2 */}
              <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden p-6 flex-1 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-3xl">✈</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Roshan Studio
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandingHeroSection;
