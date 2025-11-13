"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UMKMData } from "@/data/UMKMType";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { ImageViewer } from "../components/ImageViewer";

interface GallerySectionProps {
  business: UMKMData;
}

export function GallerySection({ business }: GallerySectionProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!business.images || business.images.length === 0) {
    return null;
  }

  // Limit displayed images: 6 on desktop, 4 on mobile
  const maxDisplayDesktop = 6;
  const maxDisplayMobile = 4;
  const totalImages = business.images.length;
  const remainingImagesDesktop = Math.max(0, totalImages - maxDisplayDesktop);
  const remainingImagesMobile = Math.max(0, totalImages - maxDisplayMobile);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-transparent to-orange-500/5 dark:from-pink-400/10 dark:to-orange-400/10" />
        
        <div className="relative">
          {/* Section header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-pink-500/10 dark:bg-pink-400/20">
                <ImageIcon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Gallery</h2>
            </div>
            <span className="text-sm text-muted-foreground">
              {totalImages} {totalImages === 1 ? "photo" : "photos"}
            </span>
          </div>

          {/* Gallery grid - Mobile (2x2 = 4 images max) */}
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {business.images.slice(0, maxDisplayMobile).map((image, index) => {
              const isLast = index === maxDisplayMobile - 1 && remainingImagesMobile > 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="relative w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src={image}
                      alt={`${business.name} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="50vw"
                    />
                    {/* Overlay for last image showing remaining count */}
                    {isLast && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-3xl font-bold text-white">+{remainingImagesMobile}</span>
                          <p className="text-sm text-white/80 mt-1">more</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Gallery grid - Desktop (3x2 = 6 images max) */}
          <div className="hidden sm:grid grid-cols-3 gap-4">
            {business.images.slice(0, maxDisplayDesktop).map((image, index) => {
              const isLast = index === maxDisplayDesktop - 1 && remainingImagesDesktop > 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="relative w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src={image}
                      alt={`${business.name} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Overlay for last image showing remaining count */}
                    {isLast && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-4xl font-bold text-white">+{remainingImagesDesktop}</span>
                          <p className="text-base text-white/80 mt-1">more photos</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageViewer
          images={business.images}
          initialIndex={selectedImageIndex}
          businessName={business.name}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </>
  );
}
