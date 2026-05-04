import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PopupModal } from "react-calendly";
import { useCalendly } from "../../hooks/useCalendly";

const Hero = () => {
  const { isCalendlyOpen, openCalendly, closeCalendly, CALENDLY_URL } = useCalendly();
  const heading1 = "Growth Happens";
  const heading2 = "when idea became action";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: custom * 0.2,
      },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative  flex items-center justify-center pt-28 pb-8 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
            {/* First Line - Growhm Design */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="block text-gray-900 mb-2"
            >
              {heading1.split("").map((letter, idx) => (
                <motion.span key={idx} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Second Line - with Gradient on "action" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-gray-900"
            >
              when idea became{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                action
              </span>
            </motion.div>
          </h1>

          {/* CTA and Customer Avatar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {/* Book a Call Button */}
            <button onClick={openCalendly} className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all flex items-center gap-3 border border-gray-200 shadow-md">
              Book a Call
              <FaArrowRight size={14} />
            </button>

            {/* Customer Avatars Section */}
            <div className="flex items-center gap-4">
              {/* Avatar Stack with Gradient Background */}
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="/satisfiedcustomer1.jpeg"
                    alt="Customer 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="/satisfiedcustomer2.jpeg"
                    alt="Customer 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src="/satisfiedcustomer3.jpeg"
                    alt="Customer 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    <button
                      onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full h-full flex items-center justify-center text-white text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
              </div>

              {/* Text */}
              <span className="text-gray-600 text-sm font-medium">
                200+ Satisfied Customer
              </span>
            </div>
          </motion.div>
        </motion.div>
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

export default Hero;
