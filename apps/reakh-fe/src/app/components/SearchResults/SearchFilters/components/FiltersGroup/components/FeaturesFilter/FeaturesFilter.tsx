'use client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Button, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import CheckBox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import { useOnSubmitFilter } from '@src/hooks/useOnSubmitFilter'
import { useSearchParams } from 'next/navigation'
import { AllAmenity, AllHighlight, ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

const CheckboxButton = styled(Button)({
  borderRadius: '20px',
  textTransform: 'none',
  background: '#fff',
  border: '1px solid #DFDFDF',
  height: '26px',
  color: '#203C3E',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  justifyContent: 'unset',
  width: '200px'
})

const FeaturesFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const { setValue, control, handleSubmit, register, getValues } = useFormContext()
  const { onSubmit } = useOnSubmitFilter()
  const params = useSearchParams()
  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />
  const featuresParams = params.getAll('features')
  const highlightsParams = params.getAll('highlights')
  const values = getValues()
  const featuresInForm = values['features']
  const highlightsInForm = values['highlights']

  React.useEffect(() => {
    if (featuresParams && featuresParams.length > 0) {
      setValue('features', featuresParams)
    }

    if (highlightsParams && highlightsParams.length > 0) {
      setValue('highlights', highlightsParams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    value: AllAmenity['value'] | AllHighlight['value'],
    type: 'features' | 'highlights'
  ) => {
    if (type === 'features') {
      if (featuresInForm.includes(value)) {
        const newValues = featuresInForm.filter((item: AllAmenity['value']) => item !== value)
        setValue(type, newValues)
      } else {
        setValue(type, [...featuresInForm, value])
      }
      handleSubmit(onSubmit)()
      return
    }
    if (highlightsInForm.includes(value)) {
      const newValues = highlightsInForm.filter((item: AllHighlight['value']) => item !== value)
      setValue(type, newValues)
    } else {
      setValue(type, [...highlightsInForm, value])
    }
    handleSubmit(onSubmit)()
  }

  React.useEffect(() => {
    register('features')
    register('highlights')
  }, [register])

  return (
    <PopOverComponent
      filterId="features-filter"
      buttonText={searchForm.texts.features || 'Features'}
    >
      <Box sx={{ marginLeft: '80%', mt: 1, height: '20px' }}>
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: '#77C232',
            cursor: 'pointer',
            textDecoration: 'underline',
            textTransform: 'none'
          }}
          onClick={() => {
            setValue('features', [])
            setValue('highlights', [])
            handleSubmit(onSubmit)()
          }}
        >
          Resets
        </Button>
      </Box>
      <Box sx={{ width: 500, px: 4, pb: 2 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, color: '#203C3E' }}>
          {searchForm.texts.amenities}
        </Typography>
        <Controller
          name="features"
          control={control}
          render={() => {
            return (
              <Grid container spacing={1}>
                {searchForm.all_amenities.map((amenity) => (
                  <Grid key={amenity.label} item xs={6}>
                    <CheckboxButton
                      size="small"
                      value={amenity.label}
                      fullWidth
                      onClick={(e) => onButtonChange(e, amenity.value, 'features')}
                      startIcon={
                        <CheckBox
                          checked={featuresInForm.includes(amenity.value)}
                          icon={icon}
                          checkedIcon={checkedIcon}
                          onClick={(e) => onButtonChange(e, amenity.value, 'features')}
                        />
                      }
                    >
                      {amenity.label}
                    </CheckboxButton>
                  </Grid>
                ))}
              </Grid>
            )
          }}
        />

        <Typography sx={{ fontSize: 18, fontWeight: 700, color: '#203C3E', mt: 3 }}>
          {searchForm.texts.highlights}
        </Typography>
        <Controller
          name="highlights"
          control={control}
          render={() => {
            return (
              <Grid container spacing={1}>
                {searchForm.all_highlights.map((highlight) => (
                  <Grid key={highlight.label} item xs={6}>
                    <CheckboxButton
                      size="small"
                      value={highlight.label}
                      fullWidth
                      onClick={(e) => onButtonChange(e, highlight.value, 'highlights')}
                      startIcon={
                        <CheckBox
                          checked={highlightsInForm.includes(highlight.value)}
                          icon={icon}
                          checkedIcon={checkedIcon}
                          onClick={(e) => onButtonChange(e, highlight.value, 'highlights')}
                        />
                      }
                    >
                      {highlight.label}
                    </CheckboxButton>
                  </Grid>
                ))}
              </Grid>
            )
          }}
        />
      </Box>
    </PopOverComponent>
  )
}

export default FeaturesFilter
