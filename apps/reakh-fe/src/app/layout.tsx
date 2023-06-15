import type { Metadata } from 'next'
import { Harmattan as SansFont } from 'next/font/google'
import 'ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reakh 2.0',
  description: 'Real estate cambodia 2.0'
}

const harmattan = SansFont({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="reakh" lang="en" className={harmattan.className}>
      <body>{children}</body>
    </html>
  )
}
