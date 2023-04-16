import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

const MapController = ({ fixedIconSize, RuIcon }) => {
    const map = useMap();
    const [currentZoomLevel, setCurrentZoomLevel] = useState(map.getZoom());
  
    useEffect(() => {
      const handleZoomEnd = () => {
        setCurrentZoomLevel(map.getZoom());
      };
  
      map.on('zoomend', handleZoomEnd);
  
      return () => {
        map.off('zoomend', handleZoomEnd);
      };
    }, [map]);
  
    if (currentZoomLevel >= 14) { // set the desired zoom level
      RuIcon.options.iconSize = [fixedIconSize, fixedIconSize]; // set the icon size to a fixed value
    }
  
    return null;
  };
  export default MapController;