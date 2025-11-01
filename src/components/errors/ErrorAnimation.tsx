"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { RefreshCw } from "lucide-react";

export default function ErrorAnimation({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Error Code */}
      <motion.div
        className="text-8xl md:text-9xl font-bold text-red-600 dark:text-red-400"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        500
      </motion.div>

      {/* Title & Description */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Something Went Wrong
      </motion.h1>
      <motion.p
        className="text-base text-muted-foreground mt-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Don’t worry — it’s not you, it’s us. We’re already working to fix the issue.
      </motion.p>

      {/* Illustration */}
      <motion.div
        className="relative w-32 h-32 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 bg-red-200 dark:bg-red-900/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          ⚠️
        </div>
      </motion.div>

      {/* Retry Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button size="lg" variant="gradient" onClick={reset}>
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </Button>
      </motion.div>

      {/* Dev-Only Error Message */}
      {process.env.NODE_ENV === "development" && error.message && (
        <motion.div
          className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg text-left max-w-md w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-red-800 dark:text-red-400 font-mono">
            {error.message}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
