import Image from 'next/image'
import { Inter } from 'next/font/google'
import OpenStreetMap from './(components)/OpenStreetMap'
import StartButton from './(components)/StartButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div class="map-container">
        <OpenStreetMap center={[51.505, -0.09]} zoom={13} />
        <StartButton />
      </div>
      
    </main>
  )
}
