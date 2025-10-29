"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export function GoogleMap() {
  const position = { lat: 34.052235, lng: -118.243683 }; // Dummy location (Los Angeles)

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
        Google Maps API key is not configured.
      </div>
    );
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={position}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="mhenterprise_map"
      >
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}
