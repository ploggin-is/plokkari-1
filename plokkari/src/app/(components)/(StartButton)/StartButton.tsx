"use client"
import { useEffect, useRef, useState } from 'react';
import './style.css'
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import HexagonTypeButton from '../(CleanButton)/CleanButton';
import { Turret_Road } from 'next/font/google';
import { BiShapePolygon } from 'react-icons/bi';
import VerifySelection from '../(VerifySelection)/VerifySelection';
import { LatLng } from 'leaflet';

import './style.css'

function StartButton(props) {

  const [text, setText] = useState("Start");

  const featureGroupRef = useRef(null);
  // const resetDrawHexFunction = useRef(null);

  const editRef = useRef();
    // const [zoomLvl, setZoom ] = useState(13)
    const [isPressed, setIsPressed] = useState(false);

    const h3 = require("h3-js");
    const [data, setData] = useState([]);  
    const map = useMap();
    const [draw, setDraw] = useState({
      circlemarker: false,
      marker: false,
      polyline: false,
      polygon: {
        icon: <BiShapePolygon />
      },
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

    const _onCreated = (e) => {
      let geometry = e.layer.getLatLngs()[0].map(points  => Object.values(points));
      console.log(h3)
      const data = h3.polygonToCells(geometry, 12) //#polyfill(geometry, 12);
      // getData(data);
      const coordinates = h3.cellsToMultiPolygon(data, false);
      setData(coordinates)
      _onDrawStart()
    }

    useEffect(() => {
      // resetDrawHexFunction.current = resetDrawing;
      map.on('zoom', function(e) { 
        if (e.sourceTarget.getZoom() < 16) {
          setDraw(prevInfo => ({...prevInfo, polygon: false, }))
        } else {
          setDraw(prevInfo => ({...prevInfo, polygon: true, }))
        }
      })
    }, [map]);
    
  const [drawing, setDrawing] = useState(false);

  // const changeTextAndZoomLvl = () => {

  //   if (!drawing) {
  //     editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
  //   } else {
  //       editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
  //       editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
  //   }

  //   if (text === "Start") {
  //       setText("End");
  //       // props.changeZoomLvl(18)
  //       setIsPressed(true)
  //       setDrawing(true)
  //       map.flyTo(map.getCenter(), 18)
  //   } else {
  //       setText("Start");
  //       setIsPressed(false);
  //       // props.changeZoomLvl(13)
  //       setDrawing(false)
  //       map.flyTo(map.getCenter(), 13)
  //   }
  // };
  console.log(editRef.current)

  const handleClick = () => {
        
    //Edit this method to perform other actions
    if(editRef.current && editRef.current.leafletElement){
      if (!drawing) {
          editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
      } else {
          editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
          editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
      }
      setDrawing(!drawing)
    }
}

const onShapeDrawn = (e) => {
  setDrawing(false)

  e.layer.on('click', () => {
      editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
  })
  e.layer.on('contextmenu', () => {
      //do some contextmenu action here
  })
  e.layer.bindTooltip("Text", 
      {
        className: 'leaflet-draw-tooltip:before leaflet-draw-tooltip leaflet-draw-tooltip-visible',
        sticky: true,
        direction: 'right'
      }
  );
}

  
  return (
    <>
      {renderedPolygon}
      {/* <FeatureGroup ref={featureGroupRef}>
        <EditControl
            position="bottomright"
            onDrawStart={_onDrawStart}
            onCreated={_onCreated}
            draw={draw}
            edit={edit}
          />
      </FeatureGroup> */}
      <FeatureGroup >
        <EditControl
          ref={editRef}
          position='topright'
          onCreated={onShapeDrawn}
          //here you can specify your shape options and which handler you want to enable
          draw={{
              rectangle: false,
              circle: false,
              polyline: false,
              circlemarker: false,
              marker: false,
              polygon: {
                  allowIntersection: false,
                  shapeOptions: {
                      color: "#ff0000"
                  },
              }
          }}
          />
      </FeatureGroup>

    <HexagonTypeButton changeCleanButton={setIsPressed} isPressed={isPressed}/>

    <button
      className="start-button"
      onClick={handleClick}
      style={{background: isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}
      >
    {text}
    </button>

    {/* <VerifySelection /> */}
      </>
  );
};

export default StartButton;