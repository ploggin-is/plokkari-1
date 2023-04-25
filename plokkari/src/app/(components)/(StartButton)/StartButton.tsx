"use client"
import { forwardRef, useEffect, useRef, useState } from 'react';
import './style.css'
import { FeatureGroup, Polygon, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import CleanButton from '../(CleanButton)/CleanButton';
import L from "leaflet";

import "./PolygonEditor/style.css"

function StartButton(props) {

    const [polygonStuff, setPolygonStuff] = useState(null)
    const [isPressed, setIsPressed] = useState(false);
    const h3 = require("h3-js");
    const editRef = useRef();
    const polygonHandlerRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    useEffect(() => {
      if (editRef.current && editRef.current._toolbars.draw) {
        const polygonHandler = editRef.current._toolbars.draw._modes.polygon.handler;
        polygonHandlerRef.current = polygonHandler;
      }
      var cb = document.getElementsByClassName('leaflet-draw-draw-polygon');
      console.log(cb)
      setPolygonStuff(cb[0])
    }, []);
  
    const handleClick = (e) => {
      const polygonHandler = polygonHandlerRef.current;
      e.preventDefault()
        setDrawing(!drawing)
        if(!drawing){
          var event = document.createEvent('Event');
          event.initEvent('click', true, true);
          polygonStuff.dispatchEvent(event);
        } else {
          try {
            polygonHandler.completeShape();
            polygonHandler.disable();
          }
          catch(ex){
          console.log(ex);
        }
        }
      };

    const onShapeDrawn = (e) => {
        if(!editRef.current) { return; }
        setDrawing(false)
        e.layer.on('click', () => {
            editRef.current._toolbars.edit._modes.edit.handler.enable()
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
            <CleanButton changeCleanButton={setIsPressed} isPressed={isPressed} />
            <FeatureGroup >
              <EditControl
                onMounted={  mapInstance => { editRef.current= mapInstance } }
                position='bottomleft'
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
            <div
              ref={(ref) => {
                if (!ref) return;
                L.DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref);
              }}
              >
              <button
                className="start-button"
                onClick={handleClick}
                style={{background: drawing ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}
                >
                  {drawing? "End" : "Start" }
                </button>
            </div>
        </>
    );
};

export default StartButton;