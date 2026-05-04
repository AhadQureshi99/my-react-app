import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServicesHeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Explore our
              <br />
              creative case studies
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Transform your digital experience with Innovative UI & UX design.
              Our expert team creates user-friendly, visually appealing, and
              high-performance web and mobile user interfaces.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden w-full max-w-md">
              {/* Background Glass/Abstract Shapes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl rotate-12 blur-sm"></div>
                <div className="absolute right-10 top-5 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl -rotate-12 blur-sm"></div>
                <div className="absolute right-0 top-0 w-32 h-32">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full opacity-20"
                  >
                    <polygon
                      points="50,10 90,90 10,90"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <polygon
                      points="50,30 75,80 25,80"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Let's Build Your
                  <br />
                  Brand's Next Big Win
                </h2>
                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Book a Call
                  <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <FaArrowRight className="text-white text-sm -rotate-45" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
