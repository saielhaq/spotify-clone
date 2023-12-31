import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'not Spotify',
  description: 'Made by Saad SAI EL HAQ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
