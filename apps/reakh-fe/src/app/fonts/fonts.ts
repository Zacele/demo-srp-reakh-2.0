// Fonts Example
import { Harmattan as HarmattanFont } from 'next/font/google'

const harmattan = HarmattanFont({
  subsets: ['latin'],
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['400', '700'],
  display: 'swap'
})

export default harmattan

// Local Fonts example
// more details here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
// import localFont from 'next/font/local';
// const LocalFont = localFont({src: [{path: './path-of-font-file-regular.woff', weight: '400', style: 'normal'}], fallback: ['Arial', 'sans-serif']})
// export default LocalFont;
