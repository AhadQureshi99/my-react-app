import React from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaSearchPlus,
  FaPencilRuler,
  FaRocket,
} from "react-icons/fa";

const MobileAppWorkProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <FaFileAlt className="text-3xl" />,
      title: "Requirement gathering",
      description:
        "We kick things off with a discovery call or brief to understand your business, funding goals, audience, and unique story.",
    },
    {
      number: "02",
      icon: <FaSearchPlus className="text-3xl" />,
      title: "Requirement gathering",
      description:
        "We kick things off with a discovery call or brief to understand your business, funding goals, audience, and unique story.",
    },
    {
      number: "03",
      icon: <FaPencilRuler className="text-3xl" />,
      title: "Requirement gathering",
      description:
        "We kick things off with a discovery call or brief to understand your business, funding goals, audience, and unique story.",
    },
    {
      number: "04",
      icon: <FaRocket className="text-3xl" />,
      title: "Requirement gathering",
      description:
        "We kick things off with a discovery call or brief to understand your business, funding goals, audience, and unique story.",
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
          Our Work Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(to bottom right, #7de0fa, #58d4f8, #3ab8db)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-800">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-gray-800">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppWorkProcess;
