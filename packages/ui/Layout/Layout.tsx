'use client'
import React from 'react'
import { Box, Container } from '@mui/material'
import { Header } from '../../../apps/reakh-fe/src/components/Header'

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
