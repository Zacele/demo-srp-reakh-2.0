'use client'

import * as React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import Link from 'next/link'
import { IGetEssentials, Menu } from 'types/getEssentials.types'

import { SolidButton, StrongButton } from '../../VariantsButton'

const MenuButton: React.FC<{ menuItem: Menu }> = ({ menuItem }) => {
  return (
    <Button sx={{ color: '#203C3E', fontWeight: 700, fontSize: 18 }} color="inherit">
      {menuItem.name}
    </Button>
  )
}

const NavbarDesktop: React.FC<{ essentialsData: IGetEssentials }> = ({ essentialsData }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Link href={'/'} passHref>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_ROOT}/static/img/logo.svg`}
                  alt="logo"
                  width={200}
                  height={80}
                  style={{ paddingRight: '20px' }}
                />
              </Link>
              {essentialsData.menu.slice(0, 8).map((menuItem) => (
                <MenuButton key={menuItem.key} menuItem={menuItem} />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <StrongButton
                size="small"
                onClick={() => (window.location.href = `${essentialsData.actions[0].path}`)}
              >
                {essentialsData.actions[0].name}
              </StrongButton>
              <SolidButton
                size="small"
                onClick={() =>
                  (window.location.href = `${essentialsData.add_property_action.path}`)
                }
              >
                <FileUploadOutlinedIcon />
                {essentialsData.add_property_action.name}
              </SolidButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavbarDesktop
