import React from "react";
import { motion } from "framer-motion";

const TeamExpertsSection = () => {
  const teamMembers = [
    { name: "Hammad", position: "CEO", image: "/5.png" },
    { name: "Shehzad Ahmed", position: "COO", image: "/8.png" },
    { name: "Abdul Rafay", position: "Project Manager", image: "/6.png" },
    { name: "Um E Habiba", position: "Hr Manager", image: "/7.png" },
    { name: "Azhar Usama", position: "AI Engineer", image: "/9.png" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-16"
        >
          Our team of experts
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-300 rounded-2xl overflow-hidden aspect-[3/4] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
                  <h3 className="text-white font-semibold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamExpertsSection;
