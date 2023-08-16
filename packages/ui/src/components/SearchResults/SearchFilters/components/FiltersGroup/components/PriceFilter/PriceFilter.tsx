'use client'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Button, InputLabel, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useOnSubmitFilter } from 'hooks/useOnSubmitFilter'
import { getPrice, makeCurrencyFormat } from 'lib'
import { useSearchParams } from 'next/navigation'
import { ISearchForm, ISearchResults } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const Separator = styled('div')`
  padding: 0 16px;
  font-size: 24px;
`

const PriceFilter: React.FC<{
  searchForm: ISearchForm
  texts: ISearchResults['texts']
  searchFormTexts: ISearchForm['texts']
}> = ({ searchForm, texts, searchFormTexts }) => {
  const { watch, setValue, control, handleSubmit, register } = useFormContext()
  const { onSubmit } = useOnSubmitFilter()
  const searchParams = useSearchParams()
  const priceMinValue = watch('price_min__gte')
  const priceMaxValue = watch('price_min__lte')
  const priceMinSearchFilters = searchParams.get('price_min__gte')
  const priceMaxSearchFilters = searchParams.get('price_min__lte')

  React.useEffect(() => {
    register('price_min__gte')
    register('price_min__lte')
  }, [register])

  React.useEffect(() => {
    // Update price_min__gte and price_min__lte values when priceMinValue or priceMaxValue changes
    if (priceMinValue && priceMaxValue) {
      setValue('price_min__gte', Math.min(Number(priceMinValue), Number(priceMaxValue)))
      setValue('price_min__lte', Math.max(Number(priceMinValue), Number(priceMaxValue)))
      handleSubmit(onSubmit)()
    }

    // Update priceMinValue value when priceMinValue
    if (priceMinValue && !priceMaxValue) {
      setValue('price_min__gte', priceMinValue)
      handleSubmit(onSubmit)()
    }

    // Update priceMaxValue value when priceMaxValue
    if (priceMaxValue && !priceMinValue) {
      setValue('price_min__lte', priceMaxValue)
      handleSubmit(onSubmit)()
    }

    // Update priceMinValue and priceMaxValue values when priceMinValue and priceMaxValue are empty
    if (!priceMinValue && !priceMaxValue && (priceMinSearchFilters || priceMaxSearchFilters)) {
      setValue('price_min__gte', '')
      setValue('price_min__lte', '')
      handleSubmit(onSubmit)()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceMinValue, priceMaxValue])

  const price = getPrice(searchForm)
  const currencyFullFormat = makeCurrencyFormat(searchForm.currency, false)
  const renderSuffix = () => {
    if (searchForm.search_type === 'rent') return texts.rent_rate
    return ''
  }

  return (
    <PopOverComponent filterId="price-filter" buttonText={searchForm.texts.price}>
      <React.Fragment>
        <Box sx={{ marginLeft: '80%', height: '20px' }}>
          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: '#77C232',
              cursor: 'pointer',
              textDecoration: 'underline',
              textTransform: 'none'
            }}
            onClick={() => {
              setValue('price_min__gte', '')
              setValue('price_min__lte', '')
              handleSubmit(onSubmit)()
            }}
          >
            Resets
          </Button>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography id="input-slider" gutterBottom>
            {searchForm.texts.price}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Controller
                name="price_min__gte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="from-price">{searchForm.texts.labelFrom}</InputLabel>
                    <Select
                      {...field}
                      labelId="from-price"
                      id="from-price"
                      label={searchForm.texts.labelFrom}
                      native
                    >
                      <MenuItem value="">
                        <em>{searchFormTexts.noMinimum}</em>
                      </MenuItem>
                      {price &&
                        price.map((price) => (
                          <MenuItem key={price} value={price}>
                            {currencyFullFormat(JSON.stringify(price)) + renderSuffix()}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Separator>&nbsp;&mdash;&nbsp;</Separator>
            <Grid item>
              <Controller
                name="price_min__lte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="to-price">{searchForm.texts.labelTo}</InputLabel>
                    <Select
                      {...field}
                      labelId="to-price"
                      id="to-price"
                      label={searchForm.texts.labelTo}
                    >
                      <MenuItem value="">{searchFormTexts.noMaximum}</MenuItem>
                      {price &&
                        price.map((price) => (
                          <MenuItem key={price} value={price}>
                            {currencyFullFormat(JSON.stringify(price)) + renderSuffix()}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    </PopOverComponent>
  )
}

export default PriceFilter
