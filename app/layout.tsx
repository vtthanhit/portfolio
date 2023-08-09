import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticlesBg from './components/particles-bg'
import Nav from './components/nav'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vo Trong Thanh - Web Developer',
  description: 'Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBg />
        <div className="flex flex-col flex-wrap w-full min-h-screen justify-between">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
