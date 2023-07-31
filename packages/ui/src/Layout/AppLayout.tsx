'use client'

import { Box } from '@mui/material'

const AppLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
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

export default AppLayout
