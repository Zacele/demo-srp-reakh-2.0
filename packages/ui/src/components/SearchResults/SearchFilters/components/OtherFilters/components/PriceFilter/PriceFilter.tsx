'use client'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputLabel, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MuiInput from '@mui/material/Input'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useOnSubmitFilter } from 'hooks/useOnSubmitFilter'
import { getPrice, makeCurrencyFormat } from 'lib'
import { ISearchForm, ISearchResults } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const Input = styled(MuiInput)`
  width: 42px;
`

const Separator = styled('div')`
  padding: 0 16px;
  font-size: 24px;
`

const PriceFilter: React.FC<{
  searchForm: ISearchForm
  texts: ISearchResults['texts']
  searchFormTexts: ISearchForm['texts']
}> = ({ searchForm, texts, searchFormTexts }) => {
  const { watch, setValue, control, handleSubmit, getValues } = useFormContext()
  const { onSubmit } = useOnSubmitFilter()
  const priceMinValue = watch('price_min__gte')
  const priceMaxValue = watch('price_min__lte')

  React.useEffect(() => {
    if (priceMinValue && priceMaxValue) {
      setValue('price_min__gte', Math.min(Number(priceMinValue), Number(priceMaxValue)))
      setValue('price_min__lte', Math.max(Number(priceMinValue), Number(priceMaxValue)))
    }
    handleSubmit((data) => onSubmit(data))()

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
      <Box sx={{ mx: 4, my: 1 }}>
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
                  >
                    <MenuItem value="">
                      <em>{searchFormTexts.noMinimum}</em>
                    </MenuItem>
                    {price &&
                      price.map((price) => (
                        <MenuItem key={price} value={price}>
                          {currencyFullFormat(price) + renderSuffix()}
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
                          {currencyFullFormat(price) + renderSuffix()}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </PopOverComponent>
  )
}

export default PriceFilter
