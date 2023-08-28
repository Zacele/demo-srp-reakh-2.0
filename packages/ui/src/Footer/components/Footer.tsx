'use client'

import React from 'react'
import { Grid, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import forEach from 'lodash/forEach'
import isObject from 'lodash/isObject'
import Link from 'next/link'
import { Daum2, Daum3, ISearchResults } from 'types'

import CustomTabPanel from './TabPanel'

function a11yPropsSearchType(index: number) {
  return {
    id: `search-type-tab-${index}`,
    'aria-controls': `search-type-tabpanel-${index}`
  }
}

function a11yPropsPropertyType(index: number) {
  return {
    id: `property-tye-tab-${index}`,
    'aria-controls': `property-type-tabpanel-${index}`
  }
}

function getNestedLayerCount(obj: {}, count = 0) {
  let maxNestedCount = count

  forEach(obj, (value) => {
    if (isObject(value)) {
      const nestedCount = getNestedLayerCount(value, count + 1)
      maxNestedCount = Math.max(maxNestedCount, nestedCount)
    }
  })

  return maxNestedCount
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
  const nestedBottomMenuCount = getNestedLayerCount(listingData.bottom_menu.data)

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
            <Tab key={item.title} label={item.title} {...a11yPropsSearchType(idx)} />
          ))}
        </StyledTabs>
      </Box>
      {nestedBottomMenuCount === 5 && (
        <Box
          sx={{
            borderBottom: 1,
            borderColor: '#77C232',
            maxWidth: '1200px',
            margin: 'auto'
          }}
        >
          <CustomTabPanel value={valueType} index={valueType}>
            <StyledTabs
              value={valuePropertyType}
              onChange={handlePropertyType}
              aria-label="property-tab-type"
            >
              {listingData.bottom_menu.data[valueType].data.map((item: Daum2, idx: number) => (
                <Tab key={item.title} label={item.title} {...a11yPropsPropertyType(idx)} />
              ))}
            </StyledTabs>
          </CustomTabPanel>
        </Box>
      )}
      {nestedBottomMenuCount === 3 && (
        <Box sx={{ borderBottom: 1, borderColor: '#77C232' }}>
          <CustomTabPanel value={valueType} index={valueType}>
            <Grid container spacing={2} sx={{ p: 2, px: 5 }}>
              {/* These tabs are map to the top tab navigation above. */}
              {listingData.bottom_menu.data[valueType].data.map((item: Daum3) => (
                <Grid
                  key={item.title}
                  item
                  xs={3}
                  sx={{ color: '#fff', fontSize: '16px', fontWeight: 400 }}
                >
                  <Link target="_blank" href={item.url}>
                    {item.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </CustomTabPanel>
        </Box>
      )}

      {nestedBottomMenuCount === 5 && (
        <Box sx={{ borderBottom: 1, borderColor: '#77C232' }}>
          <CustomTabPanel value={valueType} index={valueType}>
            <Grid container spacing={2} sx={{ p: 2, px: 5 }}>
              {/* These tabs are map to the top tab navigation above. */}
              {listingData.bottom_menu.data[valueType].data[valuePropertyType].data.map(
                (item: Daum3) => (
                  <Grid
                    key={item.title}
                    item
                    xs={3}
                    sx={{ color: '#fff', fontSize: '16px', fontWeight: 400 }}
                  >
                    <Link target="_blank" href={item.url}>
                      {item.title}
                    </Link>
                  </Grid>
                )
              )}
            </Grid>
          </CustomTabPanel>
        </Box>
      )}
    </Box>
  )
}

export default Footer
