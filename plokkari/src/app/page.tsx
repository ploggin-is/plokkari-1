import Image from 'next/image'
import { Inter } from 'next/font/google'
import OpenStreetMap from './(components)/OpenStreetMap'
import CleanButton from './(components)/CleanButton'
import StartButton from './(components)/StartButton'
import GlassToolbar from './(components)/GlassBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <GlassToolbar>
      </GlassToolbar>
      <CleanButton />
      <div class="map-container">
        <OpenStreetMap center={[51.505, -0.09]} zoom={13} />
        <StartButton />
      </div>
    </main>
  )
}
