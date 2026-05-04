import React from "react";
import { motion } from "framer-motion";

const CaseStudiesGrid = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Doctor App",
      category: "Mobile App",
      description:
        "Healthcare mobile application with intuitive patient-doctor interaction features.",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      image: "/Doctor App.png",
    },
    {
      id: 2,
      title: "Food Delivery App",
      category: "Mobile App",
      description:
        "Seamless food ordering experience with real-time tracking and easy checkout.",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      image: "/Food DELIVERY APP.png",
    },
    {
      id: 3,
      title: "Gaming App",
      category: "Mobile App",
      description:
        "Immersive gaming platform with engaging UI and smooth user experience.",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      image: "/Gaming App.png",
    },
    {
      id: 4,
      title: "Hiking App",
      category: "Mobile App",
      description:
        "Adventure companion app with trail maps, weather updates, and community features.",
      bgColor: "bg-green-500",
      textColor: "text-white",
      image: "/Hiking App.png",
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "UI/UX Design",
      description:
        "Modern social networking interface with engaging content discovery features.",
      bgColor: "bg-pink-500",
      textColor: "text-white",
      image: "/Social Media.png",
    },
    {
      id: 6,
      title: "Portfolio Showcase",
      category: "Branding",
      description:
        "Creative portfolio design showcasing professional work and achievements.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      image: "/Portfolio.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-16"
        >
          Have a look at our success stories
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${study.bgColor} rounded-3xl overflow-hidden cursor-pointer group`}
            >
              {/* Card Content */}
              <div className="p-6 md:p-8">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Company Logo/Name */}
                  <div className={`flex items-center gap-2 ${study.textColor}`}>
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {study.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium opacity-80">
                      {study.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    className={`text-2xl md:text-3xl font-light italic ${study.textColor} opacity-60`}
                  >
                    {study.category}
                  </span>
                </div>

                {/* Laptop Mockup */}
                <div className="relative mb-6">
                  <div className="relative mx-auto max-w-md">
                    {/* Laptop Screen */}
                    <div className="bg-gray-800 rounded-t-xl p-2 shadow-2xl">
                      <div className="bg-gray-900 rounded-lg overflow-hidden aspect-[16/10]">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="h-4 bg-gray-700 rounded-b-lg shadow-lg"></div>
                    <div className="h-1 bg-gray-600 rounded-b-lg mx-12"></div>
                  </div>
                </div>

                {/* Footer */}
                <div className={`${study.textColor}`}>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
