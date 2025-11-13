"use client";

import { Marker } from '@react-google-maps/api';
import { UMKMData } from '@/data/UMKMType';

interface CustomMarkerProps {
  business: UMKMData;
  isSelected: boolean;
  onClick: (business: UMKMData) => void;
}

const getCategoryColor = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('food') || cat.includes('warung')) return '#f97316'; // orange-500
  if (cat.includes('cafe') || cat.includes('coffee')) return '#f59e0b'; // amber-500
  if (cat.includes('laundry')) return '#3b82f6'; // blue-500
  if (cat.includes('store')) return '#a855f7'; // purple-500
  return '#22c55e'; // brand-500 (green)
};

const getCategoryIcon = (category: string) => {
  // Simple circle icon for all categories
  return '●';
};

// Create SVG marker icon
const createMarkerIcon = (color: string, icon: string, isSelected: boolean) => {
  const size = isSelected ? 48 : 40;
  const iconSize = isSelected ? 24 : 20;
  
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="${size}" height="${size + 12}" viewBox="0 0 ${size} ${size + 12}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Main circle with shadow -->
        <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 4}" fill="${color}" stroke="white" stroke-width="3" filter="url(#shadow)"/>
        ${isSelected ? `<circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>` : ''}
        
        <!-- Simple inner circle -->
        <circle cx="${size/2}" cy="${size/2}" r="${iconSize/2}" fill="white" opacity="0.9"/>
        
        <!-- Pin point -->
        <path d="M ${size/2 - 6} ${size} L ${size/2} ${size + 10} L ${size/2 + 6} ${size} Z" fill="${color}"/>
      </svg>
    `)}`,
    scaledSize: new google.maps.Size(size, size + 12),
    anchor: new google.maps.Point(size / 2, size + 12),
  };
};

export function CustomMarker({ business, isSelected, onClick }: CustomMarkerProps) {
  const color = getCategoryColor(business.category);
  const icon = getCategoryIcon(business.category);

  return (
    <Marker
      position={business.coordinates}
      onClick={() => onClick(business)}
      icon={createMarkerIcon(color, icon, isSelected)}
      zIndex={isSelected ? 1000 : 1}
    />
  );
}
