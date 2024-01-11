import type { Metadata } from 'next'
import './globals.css'
import ThemeContext from '@/contexts/ThemeContext'
import { inter } from '@/fonts'
import { defaultMetadata } from '@/metadata'


export const metadata: Metadata = {
  title: 'bdav.dev – David Berezowski',
  description: 'Homepage of David Berezowski',
  ...defaultMetadata(["Homepage", "Main page"])
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeContext>
        <body className={inter}>{children}</body>
      </ThemeContext>
    </html>
  )
}
