import type { Metadata } from 'next'
import './globals.css'
import ThemeContext from '@/contexts/ThemeContext'
import { inter } from '@/fonts'

export const metadata: Metadata = {
  title: 'bdav.dev – David Berezowski',
  description: '',
  creator: 'David Berezowski',
  authors: [{name: 'David Berezowski'}],
  publisher: 'David Berezowski',
  keywords: ['code', 'bdav-dev', 'bdav.dev', 'David Berezowski', 'bdav', 'davidb.3d', 'davidb-3d', 'davidb 3d']
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
