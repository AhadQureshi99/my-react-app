import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What is the 10/20/30 Rule for Pitch Decks?",
      category: "UI/UX Design",
      date: "Oct 30, 2025",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "What is the 10/20/30 Rule for Pitch Decks?",
      category: "UI/UX Design",
      date: "Oct 30, 2025",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "What is the 10/20/30 Rule for Pitch Decks?",
      category: "UI/UX Design",
      date: "Oct 30, 2025",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "What is the 10/20/30 Rule for Pitch Decks?",
      category: "UI/UX Design",
      date: "Oct 30, 2025",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

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
          Our latest blog posts
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-[#4ADE80] rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Laptop Illustration */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-[180px]">
                    {/* Laptop Screen */}
                    <div className="bg-gray-800/80 rounded-lg aspect-[4/3] border-4 border-gray-700/80 flex items-center justify-center">
                      <div className="w-3/4 h-1/2 border-2 border-gray-600/60 rounded-md"></div>
                    </div>
                    {/* Laptop Base */}
                    <div className="h-2 bg-gray-600/60 rounded-b-lg mx-4 mt-1"></div>
                    {/* Decorative Line Above */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-gray-700/50 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
