"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback, useState } from "react";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  businessName: string;
  onClose: () => void;
}

export function ImageViewer({ images, initialIndex, businessName, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goToPrevious, goToNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close button - Positioned below navbar on all devices */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="absolute top-20 right-4 sm:top-20 sm:right-6 md:top-20 md:right-8 lg:top-24 lg:right-8 z-10000 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 group shadow-lg"
        >
          <X className="w-6 h-6 sm:w-6 sm:h-6 text-white" />
        </motion.button>

        {/* Image counter - Positioned below navbar on all devices */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 sm:top-20 md:top-20 lg:top-24 z-10000 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        >
          <span className="text-white text-sm sm:text-base font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </motion.div>

        {/* Navigation buttons - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            {/* Previous button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 sm:left-4 md:left-8 z-10 p-2 sm:p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 md:right-8 z-10 p-2 sm:p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </motion.button>
          </>
        )}

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative w-full h-full max-w-7xl mx-auto px-4 pt-32 pb-32 sm:pt-32 sm:pb-36 md:pt-32 md:pb-28 lg:pt-36 lg:pb-28 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-h-[70vh] sm:max-h-[80vh] md:max-h-[85vh]"
            >
              <Image
                src={images[currentIndex]}
                alt={`${businessName} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Thumbnail strip - Positioned above bottom navigation bar */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-24 md:bottom-6 z-10000 w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl px-4"
          >
            <div className="flex gap-2 p-2 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-x-auto shadow-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-white scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
