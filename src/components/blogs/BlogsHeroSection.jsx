import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const BlogsHeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our latest blogs
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
              Transform your digital experience with innovative UI & UX design.
              Our expert team creates user-friendly, visually appealing, and
              high-performance web and mobile user interfaces.
            </p>
          </motion.div>

          {/* Right CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden p-8 md:p-10">
              {/* Abstract shapes background */}
              <div className="absolute top-0 right-0 w-full h-32 overflow-hidden">
                <div className="absolute top-4 right-8 w-16 h-16 border-2 border-gray-700 rounded-lg transform rotate-12 opacity-60"></div>
                <div className="absolute top-8 right-24 w-12 h-12 border-2 border-purple-500/30 rounded-lg transform -rotate-6 opacity-60"></div>
                <div className="absolute top-2 right-40 w-20 h-20 border-2 border-gray-600 rounded-lg transform rotate-45 opacity-40"></div>
                <div className="absolute top-12 right-16 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg transform rotate-12"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Let's Build Your
                  <br />
                  Brand's Next Big Win
                </h2>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full font-medium group"
                >
                  <span>Book a Call</span>
                  <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <FaArrowRight className="text-white text-sm transform -rotate-45" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHeroSection;
