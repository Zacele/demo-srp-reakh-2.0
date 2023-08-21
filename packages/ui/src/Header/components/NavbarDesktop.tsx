'use client'

import * as React from 'react'
import { Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const NavbarDesktop: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_ROOT}/static/img/logo.svg`}
              alt="logo"
              width={200}
              height={80}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavbarDesktop
