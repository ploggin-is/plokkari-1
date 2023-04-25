"use client"
import { useEffect, useRef, useState } from 'react';
import './style.css'
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import CleanButton from '../(CleanButton)/CleanButton';
import L from "leaflet";


function StartButton(props) {

  const [text, setText] = useState("Start");

  const featureGroupRef = useRef(null);
  const resetDrawHexFunction = useRef(null);

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
    
    const _onDrawStart = () => featureGroupRef.current.clearLayers();

    var renderedPolygon = data.map(coordinateSet => <Polygon key={data.indexOf(coordinateSet)} color="green" positions={coordinateSet}/>)
    

    function resetDrawing() {
      // here we delete the current shape the user is drawing
      setData([])
    }

    const _onCreated = (e :Event) => {
      let geometry = e.layer.getLatLngs()[0].map(points => Object.values(points));
      console.log(h3)
      const data = h3.polygonToCells(geometry, 12) //#polyfill(geometry, 12);
      // getData(data);
      const coordinates = h3.cellsToMultiPolygon(data, false);
      setData(coordinates)
      _onDrawStart()
    }

    useEffect(() => {
      resetDrawHexFunction.current = resetDrawing;
      map.on('zoom', function(e) { 
        if (e.sourceTarget.getZoom() < 16) {
          setDraw(prevInfo => ({...prevInfo, polygon: false, }))
        } else {
          setDraw(prevInfo => ({...prevInfo, polygon: true, }))
        }
      })
    }, []);


  const changeTextAndZoomLvl = () => {
    if (text === "Start") {
        setText("End");
        // props.changeZoomLvl(18)
        setIsPressed(true)
        map.flyTo(map.getCenter(), 18)
    } else {
        setText("Start");
        setIsPressed(false);
        // props.changeZoomLvl(13)
        map.flyTo(map.getCenter(), 13)
    }
  };
  
  
  return (
    <>
      {renderedPolygon}
      <FeatureGroup ref={featureGroupRef}>
        <EditControl
            position="bottomright"
            onDrawStart={_onDrawStart}
            onCreated={_onCreated}
            draw={draw}
            edit={edit}
          />
      </FeatureGroup>

      <CleanButton changeCleanButton={setIsPressed} />
      <div
      ref={(ref) => {
        if (!ref) return;
        /** import L from "leaflet"; */
        L.DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref);
      }}
      >
        <button
          className="start-button"
          onClick={changeTextAndZoomLvl}
          style={{background: props.isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}
          >
        {text}
        </button>
      </div>
    </>
  );
};

export default StartButton;