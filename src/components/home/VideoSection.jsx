import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* Video Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              src="/homevid.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
