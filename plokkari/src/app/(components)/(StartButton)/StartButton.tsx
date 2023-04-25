"use client"
import { useRef, useState } from 'react';
import './style.css'
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';



function StartButton(props) {

  const [text, setText] = useState("Start");

  const featureGroupRef = useRef(null);

    const [zoomLvl, setZoom ] = useState(13)
    const [isPressed, setIsPressed] = useState(false);

    const h3 = require("h3-js");
    const [data, setData] = useState([]);  
    const map = useMap();
    const [draw, setDraw] = useState({
      circlemarker: false,
      marker: false,
      polyline: false,
      rectangle: false,
      circle: false
    })

    const edit={
      edit: false,
      remove: false
    }

    // const { getData, resetDrawHexFunction } = props;
    // const { isPressed, }
    
    const _onDrawStart = () => featureGroupRef.current.clearLayers();

    var renderedPolygon = data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>)
    

    function resetDrawing() {
      // here we delete the current shape the user is drawing
      setData([])
    }

    const _onCreated = (e) => {
      let geometry = e.layer.getLatLngs()[0].map(points => Object.values(points));
      const data = h3.polyfill(geometry, 12);
      // getData(data);
      const coordinates = h3.h3SetToMultiPolygon(data, false);
      setData(coordinates)
      _onDrawStart()
    }




  const changeTextAndZoomLvl = () => {
    if (text === "Start") {
        setText("End");
        // props.changeZoomLvl(18)
        map.flyTo(map.getCenter(), 18)
    } else {
        setText("Start");
        // props.changeZoomLvl(13)
        map.flyTo(map.getCenter(), 13)
    }
  };
  
  
  return (
    <>
      {renderedPolygon}
      <FeatureGroup ref={featureGroupRef}>
        <EditControl
            position="topleft"
            onDrawStart={_onDrawStart}
            onCreated={_onCreated}
            draw={draw}
            edit={edit}
          />
      </FeatureGroup>

    <button
      className="start-button"
      onClick={changeTextAndZoomLvl}
      style={{background: props.isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}
      >
    {text}
    </button>
      </>
  );
};

export default StartButton;