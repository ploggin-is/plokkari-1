"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import React, { useEffect, useState} from "react";
import "leaflet/dist/leaflet.css";



const OpenStreetMap = ({ zoom }) => {
  var [mapCenter, setMapCenter] = useState(null);

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        // Save the location
        setMapCenter({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

      },
      (error: GeolocationPositionError) => {
        console.log("Error getting location")

        // In case of an error, show Reykjavík University
        setMapCenter({
          latitude: 64.124025,
          longitude: -21.925479
        });
      },
      options
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
    // In case of an error, show Reykjavík University
    setMapCenter({
      latitude: 64.124025,
      longitude: -21.925479
    });
  }
}, []);

// Wait while geting location
if (!mapCenter) {
  // ToDo: Make nicer loading-screen
  return <p>Loading...</p>;
}
const { latitude, longitude } = mapCenter;
return (
  <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={true} style={{ width: "100%", height: "100vh", margin: '0'}}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
      contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);
};

export default OpenStreetMap;