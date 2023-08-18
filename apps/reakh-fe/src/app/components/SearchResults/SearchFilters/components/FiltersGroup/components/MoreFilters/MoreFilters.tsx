'use client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, Grid, InputLabel, MenuItem, Select, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useOnSubmitFilter } from '@src/hooks/useOnSubmitFilter'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const Separator = styled('div')`
  padding: 0 16px;
  font-size: 24px;
`

const RoundedButton = styled(Button)(({ theme }) => ({
  width: '36px',
  height: '36px',
  minWidth: 'unset',
  minHeight: 'unset',
  padding: 0,
  borderRadius: '50%',
  color: '#203C3E',
  fontWeight: 400,
  lineHeight: 'normal',
  fontSize: '16px',
  textTransform: 'none',
  border: '1px solid #BEBEBE',
  '&.active': {
    background: `${theme.palette.primary.main}`,
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main}`
  },
  '&:hover': {
    background: `${theme.palette.primary.main}`,
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main}`,
    opacity: 0.6
  }
}))

const ButtonGroupWrapper = styled(ButtonGroup)`
  border-radius: 11px;
  text-transform: none;
`

const ButtonWrapper = styled(Button)`
  border-radius: 11px;
  color: #203c3e;
  border: 1px solid #77c232;

  &.MuiButton-contained {
    color: #fff;
  }
`

const MoreFilters: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const { setValue, register, handleSubmit, control, watch } = useFormContext()
  const { onSubmit } = useOnSubmitFilter()
  const searchParams = useSearchParams()
  const bathroomsMinInParams = searchParams.get('bathrooms__gte')
  const garageMinInParams = searchParams.get('garages__gte')
  const floorAreaMinInParams = searchParams.get('floor_area__gte')
  const floorAreaMaxInParams = searchParams.get('floor_area__lte')
  const landAreaMinInParams = searchParams.get('land_area__gte')
  const landAreaMaxInParams = searchParams.get('land_area__lte')

  const floorAreaMinValue = watch('floor_area__gte')
  const floorAreaMaxValue = watch('floor_area__lte')
  const landAreaMinValue = watch('land_area__gte')
  const landAreaMaxValue = watch('land_area__lte')

  React.useEffect(() => {
    register('bathrooms__gte')
    register('garages__gte')
    register('floor_area__gte')
    register('floor_area__lte')
    register('land_area__gte')
    register('land_area__lte')
  }, [register])

  React.useEffect(() => {
    if (!floorAreaMinInParams) setValue('floor_area__gte', '')
    if (!floorAreaMaxInParams) setValue('floor_area__lte', '')
    if (!landAreaMinInParams) setValue('land_area__gte', '')
    if (!landAreaMaxInParams) setValue('land_area__lte', '')
  }, [
    setValue,
    floorAreaMinInParams,
    floorAreaMaxInParams,
    landAreaMinInParams,
    landAreaMaxInParams
  ])

  React.useEffect(() => {
    // Update floor_area__gte and floor_area__lte values when floorAreaMinValue or floorAreaMaxValue changes
    if (floorAreaMinValue && floorAreaMaxValue) {
      setValue('floor_area__gte', Math.min(Number(floorAreaMinValue), Number(floorAreaMaxValue)))
      setValue('floor_area__lte', Math.max(Number(floorAreaMinValue), Number(floorAreaMaxValue)))
      handleSubmit(onSubmit)()
    }

    // Update priceMinValue value when priceMinValue
    if (floorAreaMinValue && !floorAreaMaxValue) {
      setValue('floor_area__gte', floorAreaMinValue)
      handleSubmit(onSubmit)()
    }

    // Update floorAreaMaxValue value when floorAreaMaxValue
    if (floorAreaMaxValue && !floorAreaMinValue) {
      setValue('floor_area__lte', floorAreaMaxValue)
      handleSubmit(onSubmit)()
    }

    // Update floorAreaMinValue and floorAreaMaxValue values when floorAreaMinValue and floorAreaMaxValue are empty
    if (
      !floorAreaMinValue &&
      !floorAreaMaxValue &&
      (floorAreaMinInParams || floorAreaMaxInParams)
    ) {
      setValue('floor_area__gte', '')
      setValue('floor_area__lte', '')
      handleSubmit(onSubmit)()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [floorAreaMinValue, floorAreaMaxValue])

  // Write the same react useEffect but for land area related values
  React.useEffect(() => {
    // Update land_area__gte and land_area__lte values when landAreaMinValue or landAreaMaxValue changes
    if (landAreaMinValue && landAreaMaxValue) {
      setValue('land_area__gte', Math.min(Number(landAreaMinValue), Number(landAreaMaxValue)))
      setValue('land_area__lte', Math.max(Number(landAreaMinValue), Number(landAreaMaxValue)))
      handleSubmit(onSubmit)()
    }

    // Update landAreaMinValue value when landAreaMinValue
    if (landAreaMinValue && !landAreaMaxValue) {
      setValue('land_area__gte', landAreaMinValue)
      handleSubmit(onSubmit)()
    }

    // Update landAreaMaxValue value when landAreaMaxValue
    if (landAreaMaxValue && !landAreaMinValue) {
      setValue('land_area__lte', landAreaMaxValue)
      handleSubmit(onSubmit)()
    }

    // Update landAreaMinValue and landAreaMaxValue values when landAreaMinValue and landAreaMaxValue are empty
    if (!landAreaMinValue && !landAreaMaxValue && (landAreaMinInParams || landAreaMaxInParams)) {
      setValue('land_area__gte', '')
      setValue('land_area__lte', '')
      handleSubmit(onSubmit)()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landAreaMinValue, landAreaMaxValue])

  const onBathroomsClick = (value: number) => {
    if (!bathroomsMinInParams) {
      setValue('bathrooms__gte', value)
      handleSubmit(onSubmit)()
      return
    }
    setValue('bathrooms__gte', value)
    handleSubmit(onSubmit)()
  }

  const onAnyBathroomsButtonClick = () => {
    setValue('bathrooms__gte', '')
    handleSubmit(onSubmit)()
  }

  const onGaragesClick = (value: number) => {
    if (!bathroomsMinInParams) {
      setValue('garages__gte', value)
      handleSubmit(onSubmit)()
      return
    }
    setValue('garages__gte', value)
    handleSubmit(onSubmit)()
  }

  const onAnyGaragesClick = () => {
    setValue('garages__gte', '')
    handleSubmit(onSubmit)()
  }

  return (
    <PopOverComponent filterId="more-filters" buttonText={searchForm.texts.moreFilters}>
      <Box sx={{ mx: 3, my: 2, height: 650, width: 350 }}>
        <ButtonGroupWrapper fullWidth aria-label="search type select">
          <ButtonWrapper variant="outlined">{searchForm.texts.buy}</ButtonWrapper>
          <ButtonWrapper variant="outlined">{searchForm.texts.rent}</ButtonWrapper>
        </ButtonGroupWrapper>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              color: '#203C3E',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal'
            }}
          >
            {searchForm.texts.bathrooms}
          </Typography>
          <Box
            display={'flex'}
            sx={{ width: '100%', justifyContent: 'space-evenly', position: 'relative' }}
          >
            <RoundedButton
              variant="outlined"
              className={clsx({
                active: !bathroomsMinInParams
              })}
              onClick={onAnyBathroomsButtonClick}
            >
              {searchForm.texts.any}
            </RoundedButton>
            {Array.from(Array(5).keys()).map((value, idx) => (
              <RoundedButton
                key={idx + 'bathrooms'}
                onClick={() => onBathroomsClick(value + 1)}
                variant="outlined"
                value={value + 1}
                className={clsx({
                  active: value + 1 === Number(bathroomsMinInParams)
                })}
              >
                {value + 1} {'+'}
              </RoundedButton>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              color: '#203C3E',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal'
            }}
          >
            {searchForm.texts.carSpaces}
          </Typography>
          <Box
            display={'flex'}
            sx={{ width: '100%', justifyContent: 'space-evenly', position: 'relative' }}
          >
            <RoundedButton
              variant="outlined"
              className={clsx({
                active: !garageMinInParams
              })}
              onClick={onAnyGaragesClick}
            >
              {searchForm.texts.any}
            </RoundedButton>
            {Array.from(Array(5).keys()).map((value, idx) => (
              <RoundedButton
                key={idx + 'bathrooms'}
                onClick={() => onGaragesClick(value + 1)}
                variant="outlined"
                value={value + 1}
                className={clsx({
                  active: value + 1 === Number(garageMinInParams)
                })}
              >
                {value + 1} {'+'}
              </RoundedButton>
            ))}
          </Box>
        </Box>

        {/* Floor area */}
        <Box sx={{ m: 1 }}>
          <Typography id="input-slider" gutterBottom>
            {searchForm.texts.floorArea}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Controller
                name="floor_area__gte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="from-land-area">{searchForm.texts.labelFrom}</InputLabel>
                    <Select
                      {...field}
                      labelId="from-land-area"
                      id="from-land-area"
                      label={searchForm.texts.labelFrom}
                    >
                      <MenuItem value="">
                        <em>{searchForm.texts.any}</em>
                      </MenuItem>
                      {searchForm.floor_area &&
                        searchForm.floor_area.map((landAreaItem) => (
                          <MenuItem key={landAreaItem.label} value={landAreaItem.value}>
                            {landAreaItem.label}
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
                name="floor_area__lte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="to-floor-area">{searchForm.texts.labelTo}</InputLabel>
                    <Select
                      {...field}
                      labelId="to-floor-area"
                      id="to-floor-area"
                      label={searchForm.texts.labelTo}
                    >
                      <MenuItem value="">{searchForm.texts.any}</MenuItem>
                      {searchForm.floor_area &&
                        searchForm.floor_area.map((landAreaItem) => (
                          <MenuItem key={landAreaItem.label} value={landAreaItem.value}>
                            {landAreaItem.label}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Land area */}
        <Box sx={{ m: 1 }}>
          <Typography id="input-slider" gutterBottom>
            {searchForm.texts.landArea}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Controller
                name="land_area__gte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="from-land-area">{searchForm.texts.labelFrom}</InputLabel>
                    <Select
                      {...field}
                      labelId="from-land-area"
                      id="from-land-area"
                      label={searchForm.texts.labelFrom}
                    >
                      <MenuItem value="">
                        <em>{searchForm.texts.any}</em>
                      </MenuItem>
                      {searchForm.land_area &&
                        searchForm.land_area.map((landAreaItem) => (
                          <MenuItem key={landAreaItem.label} value={landAreaItem.value}>
                            {landAreaItem.label}
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
                name="land_area__lte"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel htmlFor="to-floor-area">{searchForm.texts.labelTo}</InputLabel>
                    <Select
                      {...field}
                      labelId="to-floor-area"
                      id="to-floor-area"
                      label={searchForm.texts.labelTo}
                    >
                      <MenuItem value="">{searchForm.texts.any}</MenuItem>
                      {searchForm.land_area &&
                        searchForm.land_area.map((landAreaItem) => (
                          <MenuItem key={landAreaItem.label} value={landAreaItem.value}>
                            {landAreaItem.label}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PopOverComponent>
  )
}

export default MoreFilters
