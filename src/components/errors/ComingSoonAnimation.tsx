"use client";

import { motion } from "framer-motion";

export default function ComingSoonAnimation() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon / Illustration */}
      <motion.div
        className="relative w-32 h-32 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-brand-200 dark:bg-brand-900/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          🚀
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-brand-700 dark:text-brand-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Coming Soon
      </motion.h1>

      {/* Animated pulse line */}
      <motion.div
        className="mt-4 w-24 h-1 bg-brand-500 rounded-full"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
