import { Suspense } from 'react'
import { AppHeader } from 'ui'

import ThemeRegistry from './components/Theme/ThemeRegistry'
import QueryClientProvider from './QueryClientProvider'

const HeaderLoading = () => {
  return <div className="h-8 background-[#E8E8E8]"></div>
}

export default function RootLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <html data-theme="reakh" lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            <Suspense fallback={<HeaderLoading />}>
              {/* @ts-expect-error Server Component */}
              <AppHeader />
            </Suspense>
            {children}
          </ThemeRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
