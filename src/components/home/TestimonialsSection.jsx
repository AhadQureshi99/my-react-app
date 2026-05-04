import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Growhm transformed our pitch deck into a powerful storytelling tool that helped us secure $1M in funding. Their attention to detail and strategic approach made all the difference.",
      name: "Nnaemeka Mezue",
      position: "Union Atlantic All Stars",
      image: "/satisfiedcustomer1.jpeg",
    },
    {
      id: 2,
      quote:
        "Working with Growhm was a game-changer for our startup. They delivered a brand identity that perfectly captures our vision and resonates with our target audience.",
      name: "Renee Ontchangalt",
      position: "Miss Pravala",
      image: "/satisfiedcustomer2.jpeg",
    },
    {
      id: 3,
      quote:
        "The team at Growhm exceeded our expectations. Their creative approach and professional execution helped us stand out in a crowded market.",
      name: "Dr. Richard",
      position: "",
      image: "/satisfiedcustomer3.jpeg",
    },
  ];

  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center"
        >
          What our clients say
        </motion.h2>
      </div>

      {/* Infinite Scrolling Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-6 pl-6"
          animate={{
            x: [0, -(506 * testimonials.length)],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] md:w-[500px] bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    {testimonial.name} - {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
