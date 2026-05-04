import React from "react";
import { motion } from "framer-motion";

const TeamHeroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
        

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Main Team Photo */}
              <img
                src="/Team.png"
                alt="Growhm Team"
                className="w-full h-auto object-cover"
              />
              {/* Reflection Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
