import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to design a pitch deck?",
      answer:
        "We typically deliver the first version within 3-5 business days, depending on complexity and how quickly we receive your content. Need it faster? We offer express options too.",
    },
    {
      id: 2,
      question: "What's included in your branding packages?",
      answer:
        "Our branding packages include logo design, color palette, typography, brand guidelines, and various collateral designs. We tailor each package to meet your specific needs.",
    },
    {
      id: 3,
      question: "Do you offer revisions on your designs?",
      answer:
        "Yes! We offer multiple rounds of revisions to ensure you're completely satisfied with the final product. Our goal is to bring your vision to life perfectly.",
    },
    {
      id: 4,
      question: "Can you work with existing brand guidelines?",
      answer:
        "Absolutely. We can work within your existing brand guidelines or help you refine and expand them. Consistency is key to effective branding.",
    },
    {
      id: 5,
      question: "What industries do you specialize in?",
      answer:
        "We've worked across 20+ industries including tech, finance, healthcare, e-commerce, and more. Our diverse experience helps us bring fresh perspectives to every project.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - FAQ Watermark */}
            <div className="relative flex items-center justify-center">
              <span className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-gray-200 select-none leading-none">
                FAQ
              </span>
            </div>

            {/* Right Side - Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-amber-500 font-semibold text-sm">
                        {String(faq.id).padStart(2, "0")}
                      </span>
                      <span className="text-gray-900 font-medium text-sm md:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-600 text-sm leading-relaxed pl-10">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
