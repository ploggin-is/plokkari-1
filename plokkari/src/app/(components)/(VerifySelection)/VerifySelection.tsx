"use client"
import { Button, Modal } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import DropdownBox from "./DropDownBox";
import './style.css'
import "leaflet/dist/leaflet.css";

interface PopupMapProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const VerifySelection: React.FC<PopupMapProps> = ({showPopup, setShowPopup, center, zoom }) => {
  const handleClose = () => setShowPopup(false);
  return (
    <Modal show={showPopup} onHide={handleClose}>
      <Modal.Body>
        <div className="verify-selection-popup ">
          <div className="map-container" >
          <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} zoomControl= {false}  style={{ width: "100%", height: "100%", margin: '0'}}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
              contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          </div>
          <div className="info-container">
            <h3>Confirm selection</h3>
            <p  style={{ color: 'dimgray' }}>
              Please confirm your selection below:
            </p>
            <DropdownBox></DropdownBox>
            <div>
              <Button style={{backgroundColor: 'gray'}} onClick={handleClose}>Edit</Button>
              <Button onClick={handleClose}>Confirm</Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VerifySelection;