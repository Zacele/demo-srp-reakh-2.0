import type { Metadata } from 'next'

import ThemeRegistry from '../components/Theme/ThemeRegistry/ThemeRegistry'

import QueryClientProvider from './QueryClientProvider'

import 'ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reakh 2.0',
  description: 'Real estate cambodia 2.0'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="reakh" lang="en">
      <body>
        {/* @ts-ignore */}
        <ThemeRegistry>
          <QueryClientProvider>{children}</QueryClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
