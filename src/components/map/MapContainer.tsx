"use client";

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { UMKMData } from '@/data/UMKM.type';
import { universities } from '@/data/University.type';
import { CustomMarker } from './CustomMarker';
import { MapControls } from './MapControls';
import { MapSidebar } from './MapSidebar';
import { BusinessInfoWindow } from './BusinessInfoWindow';
import { MapLoadingSkeleton } from './MapLoadingSkeleton';

const libraries: ("places" | "geometry")[] = ["places", "geometry"];

// Jakarta center (fallback if geolocation denied)
const JAKARTA_CENTER = {
  lat: -6.2088,
  lng: 106.8456
};

const MAP_STYLES = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  }
];

interface MapContainerProps {
  businesses: UMKMData[];
  apiKey: string;
}

export function MapContainer({ businesses, apiKey }: MapContainerProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<UMKMData | null>(null);
  const [filteredCategory, setFilteredCategory] = useState<string>('all');
  const [filteredUniversity, setFilteredUniversity] = useState<string>('all');
  const [filteredCity, setFilteredCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationPermission, setLocationPermission] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  const hasInitialPositionRef = useRef(false);
  const watchIdRef = useRef<number | undefined>(undefined);
  const mapRef = useRef<google.maps.Map | null>(null);
  
  // Store initial center separately - compute ONCE and never change
  const initialCenter = useRef(JAKARTA_CENTER);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  // Request geolocation ONCE on mount
  useEffect(() => {
    if (!isLoaded) return;
    if (watchIdRef.current !== undefined) return;
    
    if ('geolocation' in navigator) {
      console.log('Requesting geolocation permission...');
      
      const timer = setTimeout(() => {
        watchIdRef.current = navigator.geolocation.watchPosition(
          (position) => {
            console.log('Geolocation update:', position.coords, 'Accuracy:', position.coords.accuracy, 'meters');
            const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setUserLocation(location);
            setLocationPermission('granted');
            
            // Only pan map on FIRST position update
            if (!hasInitialPositionRef.current && mapRef.current) {
              hasInitialPositionRef.current = true;
              initialCenter.current = location; // Update initial center
              mapRef.current.panTo(location);
              mapRef.current.setZoom(15);
            }
          },
          (error) => {
            console.log('Geolocation denied or error:', error.message);
            setLocationPermission('denied');
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
          }
        );
      }, 500);
      
      return () => {
        clearTimeout(timer);
        if (watchIdRef.current !== undefined) {
          navigator.geolocation.clearWatch(watchIdRef.current);
        }
      };
    } else {
      console.log('Geolocation not available in this browser');
      setLocationPermission('denied');
    }
  }, [isLoaded]);

  // Use initialCenter ref instead of computed center
  const center = useMemo(() => initialCenter.current, []);

  // Extract unique cities from businesses
  const uniqueCities = useMemo(() => {
    const citiesSet = new Set<string>();
    businesses.forEach(business => {
      if (business.city) {
        citiesSet.add(business.city);
      }
    });
    return Array.from(citiesSet).sort();
  }, [businesses]);

  // Filter businesses
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const matchesCategory = filteredCategory === 'all' || business.category.toLowerCase() === filteredCategory.toLowerCase();
      const matchesUniversity = filteredUniversity === 'all' || business.university?.code === filteredUniversity;
      const matchesCity = filteredCity === 'all' || business.city === filteredCity;
      const matchesSearch = searchQuery === '' || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesUniversity && matchesCity && matchesSearch;
    });
  }, [businesses, filteredCategory, filteredUniversity, filteredCity, searchQuery]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
    mapRef.current = null;
  }, []);

  const handleMarkerClick = useCallback((business: UMKMData) => {
    setSelectedBusiness(business);
    if (map) {
      map.panTo(business.coordinates);
      map.setZoom(16);
    }
  }, [map]);

  const handleCloseInfoWindow = useCallback(() => {
    setSelectedBusiness(null);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setFilteredCategory(category);
  }, []);

  const handleUniversityChange = useCallback((university: string) => {
    setFilteredUniversity(university);
  }, []);

  const handleCityChange = useCallback((city: string) => {
    setFilteredCity(city);
  }, []);

  const handleUniversityMarkerClick = useCallback((university: typeof universities[0]) => {
    if (map) {
      map.panTo(university.coordinates);
      map.setZoom(15);
    }
  }, [map]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleBusinessSelect = useCallback((business: UMKMData) => {
    handleMarkerClick(business);
    setIsSidebarOpen(false);
  }, [handleMarkerClick]);

  const handleRecenter = useCallback(() => {
    if (map) {
      const targetCenter = userLocation || center;
      map.panTo(targetCenter);
      map.setZoom(14);
    }
  }, [map, center, userLocation]);

  if (loadError) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h2 className="text-2xl font-bold text-destructive mb-2">Error loading maps</h2>
          <p className="text-muted-foreground">Please check your API key and try again.</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return <MapLoadingSkeleton />;
  }

  return (
    <div className="relative h-screen w-full">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: MAP_STYLES,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: 'greedy',
        }}
      >
        {/* User Location Marker - Blue pulsing dot */}
        {userLocation && (
          <>
            {/* Accuracy circle (light blue transparent) */}
            <Marker
              position={userLocation}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 25,
                fillColor: '#4285F4',
                fillOpacity: 0.1,
                strokeColor: '#4285F4',
                strokeOpacity: 0.3,
                strokeWeight: 1,
              }}
              zIndex={998}
            />
            {/* Main blue dot with white border */}
            <Marker
              position={userLocation}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#4285F4',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
              }}
              zIndex={999}
              animation={google.maps.Animation.DROP}
            />
          </>
        )}

        {/* University Markers */}
        {universities.map((university) => {
          const size = 44;
          const fontSize = 24;
          const universityIcon = {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="${size}" height="${size + 12}" viewBox="0 0 ${size} ${size + 12}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="uni-shadow" x="-50%" y="-50%" width="200%" height="200%">
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
                <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 4}" fill="#6366f1" stroke="white" stroke-width="3" filter="url(#uni-shadow)"/>
                
                <!-- Outer ring for emphasis -->
                <circle cx="${size/2}" cy="${size/2}" r="${size/2 + 2}" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.3"/>
                
                <!-- Graduation cap emoji -->
                <text x="${size/2}" y="${size/2}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="central">🎓</text>
                
                <!-- Pin point -->
                <path d="M ${size/2 - 6} ${size} L ${size/2} ${size + 10} L ${size/2 + 6} ${size} Z" fill="#6366f1" stroke="white" stroke-width="1"/>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(size, size + 12),
            anchor: new google.maps.Point(size / 2, size + 12),
          };

          return (
            <Marker
              key={university.id}
              position={university.coordinates}
              icon={universityIcon}
              onClick={() => handleUniversityMarkerClick(university)}
              title={university.name}
              zIndex={997}
            />
          );
        })}

        {/* Custom Markers */}
        {filteredBusinesses.map((business) => (
          <CustomMarker
            key={business.id}
            business={business}
            isSelected={selectedBusiness?.id === business.id}
            onClick={handleMarkerClick}
          />
        ))}
        
        {/* Info Window */}
        {selectedBusiness && (
          <BusinessInfoWindow
            business={selectedBusiness}
            onClose={handleCloseInfoWindow}
          />
        )}
      </GoogleMap>

      {/* Map Controls Overlay */}
      <MapControls
        filteredCategory={filteredCategory}
        onCategoryChange={handleCategoryChange}
        filteredUniversity={filteredUniversity}
        onUniversityChange={handleUniversityChange}
        filteredCity={filteredCity}
        onCityChange={handleCityChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onRecenter={handleRecenter}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        businessCount={filteredBusinesses.length}
        universities={universities}
        cities={uniqueCities}
        onUniversityMarkerClick={handleUniversityMarkerClick}
      />

      {/* Sidebar with business list */}
      <MapSidebar
        isOpen={isSidebarOpen}
        businesses={filteredBusinesses}
        onBusinessSelect={handleBusinessSelect}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}