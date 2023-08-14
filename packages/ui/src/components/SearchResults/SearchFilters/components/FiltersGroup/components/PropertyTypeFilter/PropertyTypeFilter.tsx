'use client'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Button, Grid, styled } from '@mui/material'
import Box from '@mui/material/Box'
import CheckBox from '@mui/material/Checkbox'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const SingleToggleButton = styled(ToggleButton)({
  borderRadius: '20px',
  textTransform: 'none',
  color: '#203C3E',
  textAlign: 'center',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  backgroundColor: '#DFDFDF',
  border: 'none',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#77C232'
  },
  '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
    borderRadius: '20px !important'
  },
  '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    borderRadius: '20px !important'
  }
})

const CheckboxButton = styled(Button)({
  borderRadius: '20px',
  textTransform: 'none',
  background: '#fff',
  border: '1px solid #DFDFDF',
  height: '26px',
  color: '#203C3E'
})

const FeaturesFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const [alignment, setAlignment] = React.useState('residential')
  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }

  return (
    <PopOverComponent filterId="property-type-filter" buttonText={searchForm.texts.propertyType}>
      <Box sx={{ width: 450, px: 2, py: 2 }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          fullWidth
          onChange={handleChange}
          aria-label="property-type-filter"
          sx={{ backgroundColor: '#DFDFDF', borderRadius: '20px', height: '26px' }}
        >
          <SingleToggleButton value="residential" onChange={() => setAlignment('residential')}>
            {searchForm.texts.residential}
          </SingleToggleButton>
          <SingleToggleButton value="commercial" onChange={() => setAlignment('commercial')}>
            {searchForm.texts.commercial}
          </SingleToggleButton>
        </ToggleButtonGroup>{' '}
        {alignment === 'residential' && (
          <Grid sx={{ my: 1 }} container spacing={1}>
            {searchForm.property_types
              .filter((item) => item.tab === 'residential')
              .map((type) => (
                <Grid key={type.label} item xs={6}>
                  <CheckboxButton
                    size="small"
                    fullWidth
                    startIcon={<CheckBox icon={icon} checkedIcon={checkedIcon} />}
                  >
                    {type.label}
                  </CheckboxButton>
                </Grid>
              ))}
          </Grid>
        )}
        {alignment === 'commercial' && (
          <Grid sx={{ my: 1 }} container spacing={1}>
            {searchForm.property_types
              .filter((item) => item.tab === 'commercial')
              .map((type) => (
                <Grid key={type.label} item xs={6}>
                  <CheckboxButton
                    size="small"
                    fullWidth
                    startIcon={<CheckBox icon={icon} checkedIcon={checkedIcon} />}
                  >
                    {type.label}{' '}
                  </CheckboxButton>
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </PopOverComponent>
  )
}

export default FeaturesFilter
