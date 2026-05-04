import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaSearch, FaPencilRuler, FaRocket } from "react-icons/fa";

const WorkProcessSection = () => {
  const processes = [
    {
      id: 1,
      step: "01",
      title: "Requirement gathering",
      description:
        "We kick things off with a discovery call or brief to understand your business, funding goals, audience, and unique story.",
      bgColor: "bg-purple-400",
      icon: FaFileAlt,
    },
    {
      id: 2,
      step: "02",
      title: "Research & Strategy",
      description:
        "We dive deep into market research and competitor analysis to craft a winning strategy tailored to your goals.",
      bgColor: "bg-orange-400",
      icon: FaSearch,
    },
    {
      id: 3,
      step: "03",
      title: "Design & Development",
      description:
        "Our creative team brings your vision to life with stunning designs and seamless development execution.",
      bgColor: "bg-green-400",
      icon: FaPencilRuler,
    },
    {
      id: 4,
      step: "04",
      title: "Launch & Support",
      description:
        "We ensure a smooth launch and provide ongoing support to help your brand continue to grow and succeed.",
      bgColor: "bg-cyan-400",
      icon: FaRocket,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-16 italic"
        >
          Our work process
        </motion.h2>

        {/* Process Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processes.map((process) => {
            const IconComponent = process.icon;
            return (
              <motion.div
                key={process.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${process.bgColor} rounded-2xl p-6 md:p-8 cursor-pointer group min-h-[280px] flex flex-col`}
              >
                {/* Top Row - Icon & Step Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gray-900/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-gray-900 text-xl" />
                  </div>
                  <span className="text-gray-900/40 text-2xl font-bold">
                    {process.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
