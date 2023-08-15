'use client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Button, Grid, styled } from '@mui/material'
import Box from '@mui/material/Box'
import CheckBox from '@mui/material/Checkbox'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useOnSubmitFilter } from 'hooks/useOnSubmitFilter'
import { useSearchParams } from 'next/navigation'
import { AllAmenity, AllHighlight, ISearchForm } from 'types'

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
  color: '#203C3E',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  justifyContent: 'unset',
  width: '200px'
})

const FeaturesFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const [alignment, setAlignment] = React.useState<'residential' | 'commercial'>('residential')
  const searchParams = useSearchParams()
  const { watch, setValue, control, handleSubmit, getValues } = useFormContext()
  const formValues = getValues()
  const { onSubmit } = useOnSubmitFilter()
  const paramsPropertyType = searchParams.get('property_type')
  const paramsCategories = searchParams.getAll('categories')
  const paramsSearchType = searchParams.get('search_type')

  React.useEffect(() => {
    if (paramsPropertyType) {
      setAlignment(paramsPropertyType as 'residential' | 'commercial')
      return
    }
    setAlignment('residential')
  }, [paramsPropertyType])

  React.useEffect(() => {
    if (paramsCategories && paramsCategories.length > 0) {
      setValue('categories', paramsCategories)
      return
    }
  }, [paramsCategories, setValue])

  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: 'residential' | 'commercial'
  ) => {
    setAlignment(newAlignment)
    setValue('categories', [])
    setValue('property_type', newAlignment)
    handleSubmit((data) => onSubmit(data))()
  }

  const onButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    value: AllAmenity['value'] | AllHighlight['value']
  ) => {
    if (value === 'residential' || value === 'commercial') {
      setValue('categories', [])
      handleSubmit((data) => onSubmit(data))()
      return
    }
    if (paramsCategories.includes(value)) {
      setValue(
        'categories',
        paramsCategories.filter((item) => item !== value)
      )
      handleSubmit((data) => onSubmit(data))()
      return
    }
    setValue('categories', [...paramsCategories, value])
    handleSubmit((data) => onSubmit(data))()
  }

  const checkBoxChecked = (item: AllAmenity | AllHighlight) => {
    if (
      (paramsCategories.length === 0 && item.value === 'residential') ||
      item.value === 'commercial'
    ) {
      return true
    }
    if (paramsCategories.includes(item.value)) return true
    return false
  }

  return (
    <PopOverComponent filterId="property-type-filter" buttonText={searchForm.texts.propertyType}>
      <Box sx={{ width: 450, px: 2, py: 2 }}>
        <Controller
          name="property_type"
          control={control}
          render={() => {
            return (
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                fullWidth
                onChange={handleChange}
                aria-label="property-type-filter"
                sx={{ backgroundColor: '#DFDFDF', borderRadius: '20px', height: '26px' }}
              >
                <SingleToggleButton
                  value="residential"
                  onChange={() => {
                    setValue('property_type', 'residential')
                    setAlignment('residential')
                    handleSubmit((data) => onSubmit(data))()
                  }}
                >
                  {searchForm.texts.residential}
                </SingleToggleButton>
                <SingleToggleButton
                  value="commercial"
                  onChange={() => {
                    setValue('property_type', 'commercial')
                    setAlignment('commercial')
                    handleSubmit((data) => onSubmit(data))()
                  }}
                >
                  {searchForm.texts.commercial}
                </SingleToggleButton>
              </ToggleButtonGroup>
            )
          }}
        />
        <Controller
          name="categories"
          control={control}
          render={() => {
            if (alignment === 'residential') {
              return (
                <Grid sx={{ my: 1 }} container spacing={1}>
                  {searchForm.property_types
                    .filter((item) => item.tab === 'residential')
                    .filter((item) =>
                      paramsSearchType === 'sale'
                        ? item.display_mode === null
                        : item.display_mode === null || item.display_mode === 'rent'
                    )
                    .map((type) => (
                      <Grid key={type.label} item xs={6}>
                        <CheckboxButton
                          size="small"
                          value={type.label}
                          fullWidth
                          onClick={(e) => onButtonChange(e, type.value)}
                          startIcon={
                            <CheckBox
                              checked={checkBoxChecked(type)}
                              icon={icon}
                              checkedIcon={checkedIcon}
                              onClick={(e) => onButtonChange(e, type.value)}
                            />
                          }
                        >
                          {type.label}
                        </CheckboxButton>
                      </Grid>
                    ))}
                </Grid>
              )
            }
            return (
              <Grid sx={{ my: 1 }} container spacing={1}>
                {searchForm.property_types
                  .filter((item) => item.tab === 'commercial')
                  .map((type) => (
                    <Grid key={type.label} item xs={6}>
                      <CheckboxButton
                        size="small"
                        fullWidth
                        value={type.label}
                        onClick={(e) => onButtonChange(e, type.value)}
                        startIcon={
                          <CheckBox
                            checked={checkBoxChecked(type)}
                            icon={icon}
                            checkedIcon={checkedIcon}
                            onClick={(e) => onButtonChange(e, type.value)}
                          />
                        }
                      >
                        {type.label}
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
