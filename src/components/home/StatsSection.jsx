import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      id: 1,
      number: 20,
      suffix: "+",
      label: "Industries Served",
      icon: "📊",
    },
    {
      id: 2,
      number: 40,
      suffix: "%",
      label: "Boost In Engagement",
      icon: "📈",
    },
    {
      id: 3,
      number: 150,
      suffix: "+",
      label: "Projects Delivered",
      icon: "✓",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        stat1: Math.floor(stats[0].number * progress),
        stat2: Math.floor(stats[1].number * progress),
        stat3: Math.floor(stats[2].number * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, idx) => {
            const currentCount =
              idx === 0
                ? counts.stat1
                : idx === 1
                ? counts.stat2
                : counts.stat3;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-12 text-center hover:border-gray-300 transition-all duration-300">
                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
                  >
                    {currentCount}
                    {stat.suffix}
                  </motion.div>

                  {/* Label */}
                  <p className="text-gray-700 text-lg md:text-xl font-semibold">
                    {stat.label}
                  </p>

                  {/* Icon Accent */}
                  <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default StatsSection;
