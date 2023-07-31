import ThemeRegistry from '../components/Theme/ThemeRegistry/ThemeRegistry'

export default function RootLayout({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <html data-theme="reakh" lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
