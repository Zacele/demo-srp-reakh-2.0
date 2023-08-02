'use client'

import { createTheme } from '@mui/material/styles'

import HarmattanFont from '../../../app/fonts/fonts'

// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#77c232'
    }
  },
  typography: {
    fontFamily: HarmattanFont.style.fontFamily,
    body1: { fontFamily: HarmattanFont.style.fontFamily },
    body2: { fontFamily: HarmattanFont.style.fontFamily }
  }
})

export default defaultTheme
