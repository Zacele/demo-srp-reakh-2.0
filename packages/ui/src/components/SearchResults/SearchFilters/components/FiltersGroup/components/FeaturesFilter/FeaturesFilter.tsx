'use client'
import React from 'react'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const FeaturesFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  return (
    <PopOverComponent filterId="property-type-filter" buttonText={searchForm.texts.propertyType}>
      <Box sx={{ width: 450, px: 5, py: 2 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, color: '#203C3E' }}>
          {searchForm.texts.amenities}
        </Typography>
        <Grid container spacing={1}>
          {searchForm.all_amenities.map((amenity) => (
            <Grid key={amenity.label} item xs={6}>
              <FormControlLabel label={amenity.label} control={<Checkbox />} />
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ fontSize: 18, fontWeight: 700, color: '#203C3E', mt: 3 }}>
          {searchForm.texts.highlights}
        </Typography>
        <Grid container spacing={1}>
          {searchForm.all_highlights.map((highlight) => (
            <Grid key={highlight.label} item xs={6}>
              <FormControlLabel label={highlight.label} control={<Checkbox />} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PopOverComponent>
  )
}

export default FeaturesFilter
