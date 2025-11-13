"use client";

import { InfoWindow } from '@react-google-maps/api';
import { UMKMData } from '@/data/UMKMType';
import { Star, MapPin, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BusinessInfoWindowProps {
  business: UMKMData;
  onClose: () => void;
}

export function BusinessInfoWindow({ business, onClose }: BusinessInfoWindowProps) {
  return (
    <InfoWindow
      position={business.coordinates}
      onCloseClick={onClose}
      options={{
        pixelOffset: new google.maps.Size(0, -45),
        maxWidth: 300,
      }}
    >
      <div className="overflow-hidden rounded-xl">
        <Link href={`/umkm/${business.id}`} className="block group">
          {/* Image with gradient overlay */}
          {business.images[0] && (
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={business.images[0]}
                alt={business.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="300px"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Rating badge - floating style */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 flex items-center gap-1 shadow-2xl border border-white/60 dark:border-white/30">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  {business.rating.toFixed(1)}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full backdrop-blur-xl bg-brand-500/90 text-white text-xs font-semibold shadow-lg">
                {business.category}
              </div>

              {/* Content overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-base text-white mb-1 line-clamp-2 drop-shadow-lg">
                  {business.name}
                </h3>
                <div className="flex items-center gap-1.5 text-white/90 text-xs">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1 drop-shadow">{business.address.split(',')[0]}</span>
                </div>
              </div>
            </div>
          )}

          {/* CTA Bar - Glassmorphism */}
          <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-t border-white/60 dark:border-white/10 px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">View Details</span>
              <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                <span className="text-xs font-medium">Open</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </InfoWindow>
  );
}
