import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const MobileAppHeroSection = () => {
  return (
    <section
      className="relative min-h-[380px] rounded-[40px] mx-4 mt-24 mb-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #58d4f8, #3ab8db, #2a9ec4)",
      }}
    >
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
              Mobile App Development
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
              {/* Mobile App Mockup */}
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* App Interface */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Dashboard
                      </h3>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#58d4f8" }}
                      >
                        <span className="text-white text-xl">📱</span>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "#58d4f8" }}
                      >
                        <p className="text-white text-sm mb-1">Downloads</p>
                        <p className="text-white text-3xl font-bold">250K+</p>
                      </div>
                      <div className="bg-purple-500 rounded-xl p-4">
                        <p className="text-white text-sm mb-1">Users</p>
                        <p className="text-white text-3xl font-bold">180K</p>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 mb-4">
                      <p className="text-gray-600 text-sm mb-2">
                        Active Sessions
                      </p>
                      <div className="flex items-end gap-1 h-20">
                        <div className="bg-gray-300 rounded w-8 h-12"></div>
                        <div
                          className="rounded w-8 h-16"
                          style={{ backgroundColor: "#58d4f8" }}
                        ></div>
                        <div className="bg-gray-300 rounded w-8 h-10"></div>
                        <div
                          className="rounded w-8 h-20"
                          style={{ backgroundColor: "#58d4f8" }}
                        ></div>
                        <div className="bg-gray-300 rounded w-8 h-14"></div>
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ backgroundColor: "#e6f9ff" }}
                    >
                      <div>
                        <p className="text-gray-600 text-xs">Engagement Rate</p>
                        <p className="text-gray-900 text-xl font-bold">94.5%</p>
                      </div>
                      <div className="text-3xl">📈</div>
                    </div>
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

export default MobileAppHeroSection;
