# Google Maps Integration

This directory contains a comprehensive Google Maps implementation with custom markers, interactive UI, and smooth animations.

## Components

### MapContainer
The main container component that orchestrates the entire map experience.
- Loads Google Maps API with react-google-maps/api
- Manages map state (selected business, filters, search)
- Calculates center from business coordinates
- Handles marker clicks and info window display

### CustomMarker
Beautiful custom map markers with category-specific styling.
- **Color-coded pins** by category (Food: orange, Cafe: amber, Laundry: blue, etc.)
- **Animated interactions** with hover and selection states
- **Pulse animation** for selected markers
- **Business name label** appears on selection
- **Pin-style design** with shadow for depth

### BusinessInfoWindow
Rich info window that appears when clicking markers.
- **Business image** with rating badge
- **Quick info** (name, category, description, address, phone)
- **Click-through to detail page** with smooth hover effects
- **Mobile-optimized** layout

### MapControls
Comprehensive overlay controls for filtering and navigation.
- **Search bar** with real-time filtering
- **Category filter** dropdown with glassmorphism design
- **Sidebar toggle** to show business list
- **Recenter button** to reset map view
- **Results count** display
- **Mobile-responsive** with touch-optimized buttons

### MapSidebar
Slide-out sidebar with scrollable business list.
- **Animated entry** from left side
- **Business cards** with images, ratings, and info
- **Click to focus** on map marker
- **Mobile backdrop** overlay for better UX
- **Empty state** handling

### MapLoadingSkeleton
Loading state with animated spinner while map initializes.

## Features

✨ **Custom Markers**
- Category-specific colors and icons
- Smooth scale animations on hover/select
- Pulse effect for active markers
- Drop shadow for depth perception

🎨 **Glassmorphism UI**
- Frosted glass effect on all controls
- Matches the app's design language
- Dark mode support throughout

🔍 **Smart Filtering**
- Real-time search across name, category, subcategory
- Category-based filtering
- Results count display
- Filter state persistence

📱 **Mobile Optimized**
- Touch-friendly controls
- Responsive sidebar with backdrop
- Proper z-index management with navbar
- Bottom navigation safe area

🗺️ **Map Features**
- Clean map styling (POI labels hidden)
- Smooth pan and zoom
- Info windows with rich content
- Recenter functionality

## Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)

2. Enable required APIs:
   - Maps JavaScript API
   - Places API (for future features)

3. Create `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. The map will automatically load on `/maps` page

## Usage

The map is full-screen and works alongside the existing navbar:
- **Desktop**: Top navbar visible, map fills remaining space
- **Mobile**: Top navbar + bottom pill navigation visible, map in between

## Customization

### Marker Colors
Edit `getCategoryColor()` in `CustomMarker.tsx` to change category colors.

### Map Styling
Modify `MAP_STYLES` array in `MapContainer.tsx` for different map appearance.

### Default Center
Update `DEFAULT_CENTER` constant if your businesses are in a different location.

## Performance

- **Lazy loading**: Google Maps API only loads on maps page
- **Optimized markers**: Using OverlayView for custom HTML markers
- **Filtered rendering**: Only displays markers matching current filters
- **Memoized calculations**: Uses useMemo for expensive operations

## Future Enhancements

- [ ] Clustering for dense business areas
- [ ] Directions integration
- [ ] User location tracking
- [ ] Distance-based filtering
- [ ] Heat map view
- [ ] Save favorite locations
