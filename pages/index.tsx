import Image from 'next/image'
import { Inter } from 'next/font/google'
import CamelCaseInput from '@/components/CamelCaseInput'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <CamelCaseInput />
    </main>
  )
}