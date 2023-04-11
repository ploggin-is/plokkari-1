"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import VerifySelection from './(VerifySelection)/VerifySelection'


const OpenStreetMap = ({ center, zoom }) => {
  const [showVerifySelection, setShowVerifySelection] = useState(false);
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ width: "100%", height: "100vh", margin: '0'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <VerifySelection showPopup= {showVerifySelection} setShowPopup={setShowVerifySelection} center={[51.505, -0.09]} zoom={13}/>
    </MapContainer>
  );
};

export default OpenStreetMap;