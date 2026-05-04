import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaChartLine,
  FaPalette,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const BrandingWhyChoose = () => {
  const services = [
    {
      icon: <FaBullseye className="text-3xl" />,
      title: "Conversion rate",
      description:
        "We craft powerful, visually compelling pitch decks that impress investors and drive conversions. Every slide tells a story with clarity and impact.",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Growth strategy",
      description:
        "As a top-notch pitch deck design agency, we create decks that inspire investors and close deals. Every slide engages your audience with purpose.",
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Modern design",
      description:
        "We deliver innovative, visually stunning pitch decks that attract investors and make waves. Every slide showcases your brand's unique style and story.",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "On time delivery",
      description:
        "We provide efficient, timely pitch deck solutions that meet your deadlines and exceed expectations. Every slide reflects our commitment to quality and impact.",
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 communication",
      description:
        "Our responsive team is available around the clock to assist with your pitch deck needs. Every interaction is focused on clarity and exceptional service.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Why choose our services
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 cards (wider) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingWhyChoose;
