"use client";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Button } from "@/components/common/Button";
import {
  Sparkles,
  Search,
  MapPin,
  Coffee,
  ShoppingBag,
  Utensils,
  Zap,
  Heart,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// ----------------------
// Floating icons config with spread positions
// ----------------------
const floatingIcons = [
  { Icon: Coffee, delay: 0, color: "text-amber-300", id: "coffee", duration: 15, startX: 10, startY: 20 },
  { Icon: ShoppingBag, delay: 0.5, color: "text-pink-300", id: "shopping", duration: 17, startX: 85, startY: 15 },
  { Icon: Utensils, delay: 1, color: "text-orange-300", id: "utensils", duration: 19, startX: 15, startY: 70 },
  { Icon: Zap, delay: 1.5, color: "text-yellow-300", id: "zap", duration: 21, startX: 80, startY: 65 },
  { Icon: Heart, delay: 2, color: "text-red-300", id: "heart", duration: 23, startX: 50, startY: 10 },
  { Icon: Star, delay: 2.5, color: "text-purple-300", id: "star", duration: 25, startX: 90, startY: 85 },
];

// ----------------------
// Fun rotating messages
// ----------------------
const funMessages = [
  "No more getting lost finding that laundry place 🧺",
  "Late-night munchies? We got you covered 🍕",
  "Supporting local = supporting your neighbor 🤝",
  "Your campus, your community, your go-to guide 🎯",
];

export function HeroSection() {
  const [messageIndex, setMessageIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ----------------------
  // Rotate fun messages
  // ----------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <header
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      role="banner"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-600 via-brand-500 to-brand-700 dark:from-brand-800 dark:via-brand-700 dark:to-brand-900">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-400/30 blur-3xl"
          animate={{ x: ["-20%", "120%"], y: ["0%", "80%", "20%"], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-400/30 blur-3xl"
          animate={{ x: ["100%", "-20%"], y: ["80%", "20%", "60%"], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-yellow-300/20 blur-3xl"
          animate={{ x: ["50%", "80%", "20%"], y: ["20%", "70%", "30%"], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ x: ["10%", "60%", "30%"], y: ["60%", "10%", "70%"], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating icons spread evenly */}
      {floatingIcons.map((item) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.color} opacity-20 hidden lg:block pointer-events-none`}
            style={{
              left: `${item.startX}%`,
              top: `${item.startY}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
        );
      })}

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="text-sm font-medium">By Students, for Students ✨</span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block mb-3"
              >
                Stop asking
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-pink-200 to-purple-200 animate-gradient"
              >
                "where's the nearest...?"
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Rotating fun messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-10 h-16 md:h-20 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -90 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium max-w-2xl px-4"
              >
                {funMessages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/umkm">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="xl"
                  variant="glass"
                  className="text-white border-white/50 hover:bg-white/30 shadow-2xl backdrop-blur-xl"
                >
                  <Search className="w-5 h-5 mr-2" />
                  <span>Start Exploring</span>
                </Button>
              </motion.div>
            </Link>

            <Link href="/maps">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="xl"
                  variant="outline"
                  className="bg-white/95 text-brand-600 border-white hover:bg-white shadow-2xl backdrop-blur-xl"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View Map
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Feature highlights - clean minimal design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Coffee, text: "Food & Drinks", id: "food" },
              { icon: ShoppingBag, text: "Shopping", id: "shopping" },
              { icon: Star, text: "Student Rated", id: "rated" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md bg-white/15 border border-white/25 shadow-lg"
                >
                  <Icon className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </header>
  );
}