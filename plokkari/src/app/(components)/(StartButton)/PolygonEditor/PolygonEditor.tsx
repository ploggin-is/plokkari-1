import React, { useEffect, useRef, useState } from "react";

import { Map, FeatureGroup, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet"

import "./style.css"

// Material components



export const PolygonEditor = (props) => {

    const editRef = useRef();
    
    const [drawing, setDrawing] = useState(false);

    const polygonHandlerRef = useRef(null);

    useEffect(() => {
        if (editRef.current && editRef.current._toolbars.draw) {
            const polygonHandler = editRef.current._toolbars.draw._modes.polygon.handler;
            polygonHandlerRef.current = polygonHandler;
        }
    }, [editRef]);
  
    const handleClick = () => {
        if (!editRef.current) { return; }
        const polygonHandler = polygonHandlerRef.current;
        if (polygonHandler) {
            if (!drawing) {
                polygonHandler.enable();
            } else {
                polygonHandler.completeShape();
                polygonHandler.disable();
            }
        }
        setDrawing(!drawing);
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

    console.log(editRef)
    return (
        <div>
            
            <div >
                <h1> Custom button react-leaflet-draw Demo </h1>
            </div>
            
            
            <FeatureGroup >
                <EditControl
                onMounted={ mapInstance => { console.log("ASDASDA");editRef.current = mapInstance } }

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
                
                

            <div style={{zIndex: '19999999', position: 'absolute', bottom:'10px', marginLeft:'30%', marginBottom:'8%', transform: "translateX(-50%)"}} >
                <button color="yellow"
                    onClick={() => {handleClick(editRef)} }>
                    
                    {
                        //display the correct text regarding the state
                        drawing ? "Save draw" : "Start draw" 
                    
                    }
                </button>
            </div>
            
        </div>
            
    )};

export default PolygonEditor;