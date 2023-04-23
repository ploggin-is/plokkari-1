"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Image from 'next/image'
import React, { useEffect, useState} from 'react';
import 'leaflet/dist/leaflet.css';
import Loading from '../(Loading)/Loading';
import './style.css'
import L from "leaflet";


function SetViewOnClick({zoom}) {
  const map = useMap();
  map.flyTo(map.getCenter(),zoom,{
    animate: true,
    duration: 1 // in seconds
  });
  return null;
}

function Centralcircle({}) {
  const map = useMap();
  let circle = L.circleMarker(map.getCenter(), {
    radius: 20,
    color: 'green',
    fillOpacity: 0.2,
  }).addTo(map);

  map.on('move',function(e){
  circle.setLatLng(map.getCenter());
  map._renderer._update();
  });
  }



const OpenStreetMap = ({ zoom }) => {
  const [mapCenter, setMapCenter] = useState(null);
  const [CurrentZoomLevel, setCurrentZoomLevel] = useState(null);

  const RuIcon = new L.Icon({
    iconUrl: "/RU_logo_no_text.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25]
  });
  

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
  return <Loading />;
}
const { latitude, longitude } = mapCenter;

return (
  <MapContainer 
    center={[latitude, longitude]} 
    zoom={zoom} scrollWheelZoom={true} 
    style={{ width: "100%", height: "100vh", margin: '0'}} 
    zoomControl={false} 
    onZoomEnd={() => setCurrentZoomLevel(useMap().getZoom())}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
      contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={RuIcon} position={[64.123721, -21.926725]}>
      <Popup>
        <Image 
          src="/RU_logo.png" 
          width={200} 
          height={0} />   
        Reykjavík University <br /> Where it all began.
      </Popup>
    </Marker>
    <SetViewOnClick zoom={zoom} />
    <Centralcircle />
  </MapContainer>
);
};

export default OpenStreetMap;