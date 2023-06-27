'use client'
import React from 'react'
import { Box } from '@mui/material'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#E8E8E8',
        height: '32px'
      }}
    >
      {children}
    </Box>
  )
}

export default Layout
