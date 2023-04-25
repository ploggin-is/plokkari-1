import { Inter } from 'next/font/google'
import MainPage from './(components)/(MainPage)/MainPage'
import CleanButton from './(components)/(CleanButton)/CleanButton'
import StartButton from './(components)/(StartButton)/StartButton'
import TopToolbar from './(components)/(TopToolbar)/TopToolbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() { 

  return (
    <MainPage />
  )
}