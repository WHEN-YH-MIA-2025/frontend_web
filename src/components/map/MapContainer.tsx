"use client";

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { UMKMData } from '@/data/UMKMType';
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationPermission, setLocationPermission] = useState<'prompt' | 'granted' | 'denied'>('prompt');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  // Request geolocation on mount - must happen after map loads
  useEffect(() => {
    if (!isLoaded) return;
    
    if ('geolocation' in navigator) {
      console.log('Requesting geolocation permission...');
      
      let watchId: number;
      let hasInitialPosition = false;
      
      // Add a small delay to ensure the page is fully interactive
      const timer = setTimeout(() => {
        // Use watchPosition for continuous tracking and better accuracy
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            console.log('Geolocation update:', position.coords, 'Accuracy:', position.coords.accuracy, 'meters');
            const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setUserLocation(location);
            setLocationPermission('granted');
            
            // Only pan map on first position update
            if (map && !hasInitialPosition) {
              hasInitialPosition = true;
              map.panTo(location);
              map.setZoom(15);
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
        if (watchId !== undefined) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    } else {
      console.log('Geolocation not available in this browser');
      setLocationPermission('denied');
    }
  }, [isLoaded, map]);

  // Calculate initial center: user location > Jakarta
  const center = useMemo(() => {
    if (userLocation) return userLocation;
    return JAKARTA_CENTER;
  }, [userLocation]);

  // Filter businesses
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const matchesCategory = filteredCategory === 'all' || business.category.toLowerCase() === filteredCategory.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [businesses, filteredCategory, searchQuery]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = useCallback((business: UMKMData) => {
    setSelectedBusiness(business);
    // Pan to marker
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
      {/* Google Map */}
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

      {/* Custom Markers */}
      {filteredBusinesses.map((business) => (
        <CustomMarker
          key={business.id}
          business={business}
          isSelected={selectedBusiness?.id === business.id}
          onClick={handleMarkerClick}
        />
      ))}        {/* Info Window */}
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
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onRecenter={handleRecenter}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        businessCount={filteredBusinesses.length}
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
