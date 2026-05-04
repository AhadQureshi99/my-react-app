import React from "react";
import { motion } from "framer-motion";

const OfficeCultureSection = () => {
  const cultureImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      alt: "Team collaboration",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      alt: "Office meeting",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
      alt: "Modern workspace",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      alt: "Team brainstorming",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      alt: "Creative team",
    },
  ];

  const duplicatedImages = [...cultureImages, ...cultureImages];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore Our Team
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Meet the people behind Growhm Tech  a team of designers, developers, and innovators dedicated to turning ideas into impactful digital solutions.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Growhm Tech, our culture is built on creativity, collaboration, and continuous growth. We believe great ideas come from strong teamwork and an environment that inspires innovation.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling Image Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-6 pl-6"
          animate={{
            x: [0, -(340 * cultureImages.length)],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[320px] h-[280px] rounded-3xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default OfficeCultureSection;
