import React from "react";
import { motion } from "framer-motion";

const BlogsGrid = () => {
  const blogs = [
    {
      id: 1,
      title: "What is the 10/20/30 Rule for Pitch Decks?",
      category: "UI/UX Design",
      date: "Oct 30, 2025",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "How to Create a Winning Brand Strategy",
      category: "Branding",
      date: "Oct 25, 2025",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "The Future of Web Design in 2026",
      category: "Web Design",
      date: "Oct 20, 2025",
      image: "/blog3.jpg",
    },
    {
      id: 4,
      title: "Building User-Centric Mobile Experiences",
      category: "UI/UX Design",
      date: "Oct 15, 2025",
      image: "/blog4.jpg",
    },
    {
      id: 5,
      title: "Color Psychology in Brand Identity",
      category: "Branding",
      date: "Oct 10, 2025",
      image: "/blog5.jpg",
    },
    {
      id: 6,
      title: "Responsive Design Best Practices",
      category: "Web Design",
      date: "Oct 5, 2025",
      image: "/blog6.jpg",
    },
    {
      id: 7,
      title: "Creating Effective Call-to-Actions",
      category: "UI/UX Design",
      date: "Sep 30, 2025",
      image: "/blog7.jpg",
    },
    {
      id: 8,
      title: "The Art of Visual Storytelling",
      category: "Branding",
      date: "Sep 25, 2025",
      image: "/blog8.jpg",
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
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 italic"
        >
          Blogs
        </motion.h2>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 bg-green-400 overflow-hidden">
                {/* Placeholder laptop mockup illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Laptop body */}
                    <div className="w-24 h-16 md:w-32 md:h-20 border-4 border-gray-700 rounded-lg bg-green-400/80"></div>
                    {/* Laptop base */}
                    <div className="w-28 md:w-36 h-2 bg-gray-600 rounded-b-lg mx-auto -mt-1"></div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full border border-gray-300">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm">{blog.date}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsGrid;
