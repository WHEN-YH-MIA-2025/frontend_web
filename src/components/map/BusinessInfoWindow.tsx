"use client";

import { InfoWindow } from '@react-google-maps/api';
import { UMKMData } from '@/data/UMKM.type';
import { Star, MapPin, ExternalLink } from 'lucide-react';
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
        maxWidth: 280,
      }}
    >
      <div className="w-64 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <Link href={`/umkm/${business.id}`} className="block group">
          {/* Image Section */}
          {business.images[0] && (
            <div className="relative w-full h-36 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={business.images[0]}
                alt={business.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="280px"
              />
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
                {business.category}
              </div>

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-white dark:bg-gray-800 rounded flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-semibold text-gray-900 dark:text-white">
                  {business.rating.toFixed(1)}
                </span>
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-3 space-y-2">
            {/* Business Name */}
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight">
              {business.name}
            </h3>

            {/* Address */}
            <div className="flex items-start gap-1.5 text-gray-600 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span className="text-xs line-clamp-2 leading-relaxed">
                {business.address}
              </span>
            </div>

            {/* View Details Button */}
            <div className="pt-1 flex items-center justify-between text-blue-600 dark:text-blue-400">
              <span className="text-xs font-medium">View Details</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </InfoWindow>
  );
}