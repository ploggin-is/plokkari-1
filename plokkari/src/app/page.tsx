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
  return (
    <main>
      <TopToolbar></TopToolbar> 
      <CleanButton/>
      <div className="map-container">
        <OpenStreetMap zoom={zoomLvl} />
        <StartButton changeZoomLvl={ zoomLvl =>setZoom(zoomLvl) }/>
      </div>
    </main>
  )
}