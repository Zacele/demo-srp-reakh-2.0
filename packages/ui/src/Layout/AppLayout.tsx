'use client'

import React, { Suspense } from 'react'
import { Box } from '@mui/material'

import AppHeader from '../Header'

const HeaderLoading = () => {
  return <Box sx={{ height: '32px', backgroundColor: '#E8E8E8' }}></Box>
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Suspense fallback={<HeaderLoading />}>
        {/* @ts-expect-error Server Component */}
        <AppHeader />
      </Suspense>
      {children}
    </React.Fragment>
  )
}

export default AppLayout
