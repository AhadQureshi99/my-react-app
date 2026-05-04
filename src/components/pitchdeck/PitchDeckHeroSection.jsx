import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const PitchDeckHeroSection = () => {
  return (
    <section className="relative min-h-[380px] bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-[40px] mx-4 mt-24 mb-8 overflow-hidden">
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
              Pitch Deck Design
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
            <div className="relative w-full max-w-2xl">
              {/* Presentation Slides Mockup */}
              <div className="relative">
                {/* Main slide */}
                <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 p-8">
                  {/* Event Overview Slide */}
                  <div className="mb-6">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      EVENT
                    </h3>
                    <h4 className="text-purple-400 text-xl mb-3">OVERVIEW</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Join us for an incredible event showcasing innovation and
                      growth opportunities in the digital space.
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <p className="text-purple-400 text-sm mb-1">
                        Total Investment
                      </p>
                      <p className="text-white text-2xl font-bold">$30M+</p>
                      <p className="text-gray-400 text-xs">Last year growth</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-4">
                      <p className="text-white text-sm mb-1">Revenue</p>
                      <p className="text-white text-3xl font-bold">$7.5M</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-4">
                      <p className="text-gray-900 text-sm mb-1">Active Users</p>
                      <p className="text-gray-900 text-2xl font-bold">146M</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-lg p-4">
                      <p className="text-gray-900 text-sm mb-1">Profit</p>
                      <p className="text-gray-900 text-2xl font-bold">$2.1M</p>
                    </div>
                  </div>

                  {/* Footer text */}
                  <div className="mt-6">
                    <h5 className="text-white text-lg font-semibold">
                      Massive Growth
                    </h5>
                    <p className="text-gray-400 text-sm">In Our Market</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PitchDeckHeroSection;
