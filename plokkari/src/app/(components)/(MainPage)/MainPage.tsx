"use client"
import { useState } from 'react'
import OpenStreetMap from '../(OpenStreetMap)/OpenStreetMap'
import CleanButton from '../(CleanButton)/CleanButton'
import StartButton from '../(StartButton)/StartButton'
import TopToolbar from '../(TopToolbar)/TopToolbar'

const MainPage = () => 
{
  const [zoomLvl, setZoom ] = useState(13)
  const [isPressed, setIsPressed] = useState(false);

  return (
    <main>
      <TopToolbar></TopToolbar> 
      <CleanButton changeCleanButton={ isPressed => setIsPressed(isPressed)} isPressed={isPressed}/>
      <div className="map-container">
        <OpenStreetMap zoomLvl={zoomLvl} isPressed={isPressed}/>
        <StartButton changeZoomLvl={ zoomLvl => setZoom(zoomLvl)} isPressed={isPressed}/>
      </div>
    </main>
  );
};
export default MainPage;