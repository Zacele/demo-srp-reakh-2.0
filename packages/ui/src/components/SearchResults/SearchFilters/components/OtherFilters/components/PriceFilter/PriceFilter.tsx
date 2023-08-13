'use client'

import React from 'react'
import { NativeSelect } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MuiInput from '@mui/material/Input'
import { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const Input = styled(MuiInput)`
  width: 42px;
`

const PriceFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <PopOverComponent filterId="price-filter" buttonText={searchForm.texts.price}>
      <Box sx={{ width: 250, mx: 4, my: 1 }}>
        <Typography id="input-slider" gutterBottom>
          {searchForm.texts.price}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FormControl sx={{ m: 1 }}>
              <NativeSelect inputProps={{ 'aria-label': 'Without label' }}>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>{' '}
          </Grid>

          <Grid item>
            <FormControl sx={{ m: 1 }}>
              <NativeSelect inputProps={{ 'aria-label': 'Without label' }}>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>{' '}
          </Grid>
        </Grid>
      </Box>
    </PopOverComponent>
  )
}

export default PriceFilter
