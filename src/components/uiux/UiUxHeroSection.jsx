import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { PopupModal } from "react-calendly";
import { useCalendly } from "../../hooks/useCalendly";

const UiUxHeroSection = () => {
  const { isCalendlyOpen, openCalendly, closeCalendly, CALENDLY_URL } = useCalendly();
  return (
    <section className="relative min-h-[380px] bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-[40px] mx-4 mt-24 mb-8 overflow-hidden">
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
              Ui/UX Design
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Transform your digital experience with innovative UI & UX design.
              Our expert team creates user-friendly, visually appealing, and
              high-performance web and mobile user interfaces.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendly}
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
              {/* Browser Mockup Frame */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white rounded-full px-4 py-1 text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-gray-400">🔒</span>
                      <span>cloudwise.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xs">☰</span>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white p-8 min-h-[400px]">
                  {/* Hero Text */}
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                      Your Remote <span className="text-green-500">Team's</span>
                    </h2>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      New Best Friend
                    </h3>
                    <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm">
                      Get started for free
                    </div>
                  </div>

                  {/* Task Card */}
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">My Tasks</h4>
                      <div className="flex gap-2">
                        <span className="text-xs text-gray-500">≡</span>
                        <span className="text-xs text-gray-500">⋮</span>
                      </div>
                    </div>

                    {/* Task Items */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-600">
                          🎯 Last call review
                        </span>
                        <span className="ml-auto text-orange-500 font-semibold">
                          01/02
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          className="w-4 h-4"
                        />
                        <span className="text-gray-400 line-through">
                          Finish design
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-600">Review project</span>
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex gap-2 mt-4 justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  {/* Additional UI Elements */}
                  <div className="mt-6 flex justify-end">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
                      + New Task
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Popup Modal */}
      <PopupModal
        url={CALENDLY_URL}
        onModalClose={closeCalendly}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </section>
  );
};

export default UiUxHeroSection;
