import ThemeRegistry from './components/Theme/ThemeRegistry/ThemeRegistry'
import QueryClientProvider from './QueryClientProvider'

export default function RootLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <html data-theme="reakh" lang="en">
      <body>
        <ThemeRegistry>
          <QueryClientProvider>{children}</QueryClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
