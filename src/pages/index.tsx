import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar/Navbar'
import Layout from '@/component/Layout/Layout'
import Herobanner from '@/component/Herobanner/Herobanner'
import Collection from '@/component/Collection/Collection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar />
      <Herobanner />
      <Collection />
    </main>
  )
}
