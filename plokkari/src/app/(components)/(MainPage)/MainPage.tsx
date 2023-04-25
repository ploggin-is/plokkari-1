"use client"
import { useState } from 'react'
import OpenStreetMap from '../(OpenStreetMap)/OpenStreetMap'
import CleanButton from '../(CleanButton)/CleanButton'
import StartButton from '../(StartButton)/StartButton'
import TopToolbar from '../(TopToolbar)/TopToolbar'


const MainPage = () => 
{

  const [zoomLvl, setZoom ] = useState(13)
  

  return (
    <main>
      <TopToolbar></TopToolbar> 
      <CleanButton/>
      <div className="map-container">
        <OpenStreetMap zoom={zoomLvl} />
        <StartButton changeZoomLvl={ zoomLvl => setZoom(zoomLvl)}/>
      </div>
    </main>
  );
};
export default MainPage;