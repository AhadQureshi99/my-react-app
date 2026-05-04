import React from "react";
import { motion } from "framer-motion";

const BrandsSlider = () => {
  const brands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
    { id: 4, name: "Brand 4" },
    { id: 5, name: "Brand 5" },
    { id: 6, name: "Brand 6" },
  ];

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden w-full">
      <p className="text-center text-gray-700 text-3xl font-bold mb-12 px-4">
        Top brands who trust us
      </p>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16 items-center pl-16"
          animate={{ x: [0, -(224 * brands.length)] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Original Brands */}
          {brands.map((brand) => (
            <motion.div
              key={`original-${brand.id}`}
              className="flex-shrink-0 h-20 w-40 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`/brand${brand.id}.avif`}
                alt={brand.name}
                className="max-h-16 max-w-full object-contain hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}

          {/* Duplicated Brands for Seamless Loop */}
          {brands.map((brand) => (
            <motion.div
              key={`duplicate-${brand.id}`}
              className="flex-shrink-0 h-20 w-40 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`/brand${brand.id}.avif`}
                alt={brand.name}
                className="max-h-16 max-w-full object-contain hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default BrandsSlider;
