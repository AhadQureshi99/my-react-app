import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-medium text-gray-900 mb-8">
          Who we are
        </h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Growhm Tech is a design and development agency built for startups and growing businesses that need products that perform, not just impress.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We specialize in UI/UX design, branding, and web development, creating solutions that drive real results  from launching products to improving conversions.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our process is fast, transparent, and collaborative, with a dedicated team focused on delivering quality and meeting your goals.
          </p>
          <p className="text-gray-900 text-lg font-semibold leading-relaxed">
            Turning ideas into action and action into growth.
          </p>
        </motion.div>

        {/* Team Image Container */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl"
          >
            <img
              src="/Team.png"
              alt="Team"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
