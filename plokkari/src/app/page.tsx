"use client"
import { Inter } from 'next/font/google'
import OpenStreetMap from './(components)/(OpenStreetMap)/OpenStreetMap'
import CleanButton from './(components)/(CleanButton)/CleanButton'
import StartButton from './(components)/(StartButton)/StartButton'
import TopToolbar from './(components)/(TopToolbar)/TopToolbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
  )
}