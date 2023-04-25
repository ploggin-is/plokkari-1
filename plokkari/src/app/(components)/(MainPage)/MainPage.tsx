"use client"
import { useState } from 'react'
import OpenStreetMap from '../(OpenStreetMap)/OpenStreetMap'
import CleanButton from '../(CleanButton)/CleanButton'
import StartButton from '../(StartButton)/StartButton'
import TopToolbar from '../(TopToolbar)/TopToolbar'

const MainPage = () => 
{
  

  return (
    <main>
      <TopToolbar></TopToolbar> 
      {/* <CleanButton changeCleanButton={ isPressed => setIsPressed(isPressed)} isPressed={isPressed}/> */}
      <div className="map-container">
        <OpenStreetMap zoomLvl={18} />
        {/* <StartButton /> */}
      </div>
    </main>
  );
};
export default MainPage;