import { Inter } from 'next/font/google'
import OpenStreetMap from './(components)/(OpenStreetMap)/OpenStreetMap'
import CleanButton from './(components)/(CleanButton)/CleanButton'
import StartButton from './(components)/(StartButton)/StartButton'
import TopToolbar from './(components)/(TopToolbar)/TopToolbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <TopToolbar></TopToolbar> 
      <CleanButton/>
      <div class="map-container">
        <OpenStreetMap zoom={13} />
        <StartButton />
      </div>
    </main>
  )
}
