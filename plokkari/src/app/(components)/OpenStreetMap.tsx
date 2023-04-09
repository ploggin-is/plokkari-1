"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const OpenStreetMap = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ width: "100%", height: "100vh", margin: '0'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default OpenStreetMap;