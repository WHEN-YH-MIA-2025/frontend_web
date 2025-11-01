"use client";

import { motion } from "framer-motion";

export default function NotFoundAnimation() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-8xl md:text-9xl font-bold text-brand-600 dark:text-brand-400"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        404
      </motion.div>

      <motion.div
        className="relative w-32 h-32 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-brand-200 dark:bg-brand-900/30 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          🧭
        </div>
      </motion.div>
    </motion.div>
  );
}
