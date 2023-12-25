import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeContext from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'bdav.dev',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeContext>
        <body className={inter.className}>{children}</body>
      </ThemeContext>
    </html>
  )
}
