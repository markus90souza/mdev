import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Header } from '@/components/Header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
