'use client'

import React from 'react'
import { Grid, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Link from 'next/link'
import { ISearchResults } from 'types'

import CustomTabPanel from './TabPanel'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '.MuiButtonBase-root': {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '21px',
    color: '#fff',
    '&.Mui-selected': {
      backgroundColor: '#77C232',
      color: '#fff'
    }
  }
}))

const Footer: React.FC<{ listingData: ISearchResults }> = ({ listingData }) => {
  const [valueType, setValueType] = React.useState(0)
  const [valuePropertyType, setValuePropertyType] = React.useState(0)

  const handleTabType = (event: React.SyntheticEvent, newValue: number) => {
    setValuePropertyType(0)
    setValueType(newValue)
  }

  const handlePropertyType = (event: React.SyntheticEvent, newValue: number) => {
    setValuePropertyType(newValue)
  }

  return (
    <Box sx={{ width: '100%', mt: 5, backgroundColor: '#203C3E' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#77C232' }} px={3}>
        <StyledTabs value={valueType} onChange={handleTabType} aria-label="tab-type">
          {listingData.bottom_menu.data.map((item, idx) => (
            <Tab key={item.title} label={item.title} {...a11yProps(idx)} />
          ))}
        </StyledTabs>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: '#77C232', maxWidth: '1200px', margin: 'auto' }}>
        <CustomTabPanel value={valueType} index={valueType}>
          <StyledTabs value={valuePropertyType} onChange={handlePropertyType} aria-label="tab-type">
            {listingData.bottom_menu.data[valueType].data.map((item, idx) => (
              <Tab key={item.title} label={item.title} {...a11yProps(idx)} />
            ))}
          </StyledTabs>
        </CustomTabPanel>
      </Box>

      <CustomTabPanel value={valueType} index={valueType}>
        <Grid container spacing={2}>
          {listingData.bottom_menu.data[valueType].data[valuePropertyType].data.map((item) => (
            <Grid key={item.title} item xs={3}>
              <Link href={item.url}>{item.title}</Link>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
    </Box>
  )
}

export default Footer
