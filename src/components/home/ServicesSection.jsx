import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Pitch Deck Design",
      description:
        "Professional pitch decks that captivate investors and tell your story with impact.",
      bgColor: "bg-[#27ca93]",
      icon: "📊",
      features: ["Investor-Ready", "Visual Storytelling", "Data Visualization"],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user experiences that delight users and drive engagement.",
      bgColor: "bg-[#16acbc]",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      id: 3,
      title: "App Development",
      description:
        "Custom web and mobile applications built with modern technologies and best practices.",
      bgColor: "bg-[#0d9ad8]",
      icon: "💻",
      features: ["React/Next.js", "Mobile Apps", "API Integration"],
    },
    {
      id: 4,
      title: "Content Creation",
      description:
        "Compelling content that builds your brand story and connects with your audience.",
      bgColor: "bg-[#058af4]",
      icon: "✨",
      features: ["Brand Strategy", "Social Media", "Video Production"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Every great success story starts <br /> with one of these Four
            Things
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`group relative ${service.bgColor} rounded-3xl overflow-hidden cursor-pointer`}
            >
              {/* Card Content */}
              <div className="relative p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-4xl mb-3 block">
                        {service.icon}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white">
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaArrowRight className="text-gray-900 text-sm -rotate-45" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed mb-6 max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute right-4 top-4 w-20 h-20 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
