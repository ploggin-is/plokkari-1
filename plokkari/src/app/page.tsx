import Image from 'next/image'
import { Inter } from 'next/font/google'
import OpenStreetMap from './(components)/OpenStreetMap'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <OpenStreetMap center={[51.505, -0.09]} zoom={13} />
    </main>
  )
}
