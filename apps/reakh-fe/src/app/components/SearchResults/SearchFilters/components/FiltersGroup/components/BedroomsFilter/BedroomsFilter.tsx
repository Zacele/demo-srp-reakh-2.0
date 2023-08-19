'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useOnSubmitFilter } from '@src/hooks/useOnSubmitFilter'
import clsx from 'clsx'
import inRange from 'lodash/inRange'
import { useSearchParams } from 'next/navigation'
import { ISearchForm } from 'types'

import PopOverComponent from '../FilterPopoverWrapper'

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

const BedroomsFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const { setValue, register, handleSubmit, getValues } = useFormContext()
  const { onSubmit } = useOnSubmitFilter()
  const searchParams = useSearchParams()
  const bedroomsSearchParamsMin = searchParams.get('bedrooms__gte')
  const bedroomsSearchParamsMax = searchParams.get('bedrooms__lte')
  const formValues = getValues()
  const bedroomsInFormMin = formValues['bedrooms__gte']
  const bedroomsInFormMax = formValues['bedrooms__lte']

  React.useEffect(() => {
    register('bedrooms__gte')
    register('bedrooms__lte')
  }, [register])

  React.useEffect(() => {
    if (bedroomsSearchParamsMin) setValue('bedrooms__gte', bedroomsSearchParamsMin)
    if (bedroomsSearchParamsMax) setValue('bedrooms__lte', bedroomsSearchParamsMin)
  }, [])

  const onButtonClick = (value: number) => {
    if (!bedroomsSearchParamsMin && !bedroomsSearchParamsMax) {
      setValue('bedrooms__gte', value)
      setValue('bedrooms__lte', value)
      handleSubmit(onSubmit)()
      return
    }

    if (inRange(value, Number(bedroomsSearchParamsMin), Number(bedroomsSearchParamsMax))) {
      setValue('bedrooms__gte', value)
      setValue('bedrooms__lte', value)
      handleSubmit(onSubmit)()
      return
    }

    if (bedroomsSearchParamsMax && value < Number(bedroomsSearchParamsMax)) {
      setValue('bedrooms__gte', value)
      setValue('bedrooms__lte', bedroomsSearchParamsMax)
      handleSubmit(onSubmit)()
      return
    }

    if (bedroomsSearchParamsMin && value > Number(bedroomsSearchParamsMin)) {
      setValue('bedrooms__gte', bedroomsSearchParamsMin)
      setValue('bedrooms__lte', value)
      handleSubmit(onSubmit)()
      return
    }
  }

  const onAnyButtonClick = () => {
    setValue('bedrooms__gte', '')
    setValue('bedrooms__lte', '')
    handleSubmit(onSubmit)()
  }

  return (
    <PopOverComponent filterId="bedrooms-filter" buttonText={searchForm.texts.bedrooms}>
      <Box sx={{ width: 310, height: 95, mt: 1, mx: 2 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, color: '#203C3E', pb: 1 }}>
          {searchForm.texts.bedrooms}
        </Typography>
        <Box
          display={'flex'}
          sx={{ width: '100%', justifyContent: 'space-evenly', position: 'relative' }}
        >
          <RoundedButton
            variant="outlined"
            className={clsx({
              active: !bedroomsInFormMin && !bedroomsInFormMax
            })}
            onClick={onAnyButtonClick}
          >
            {searchForm.texts.any}
          </RoundedButton>
          {Array.from(Array(5).keys()).map((value) => (
            <RoundedButton
              key={value}
              onClick={() => onButtonClick(value + 1)}
              variant="outlined"
              value={value + 1}
              className={clsx({
                active: inRange(value + 1, Number(bedroomsInFormMin), Number(bedroomsInFormMax) + 1)
              })}
            >
              {value + 1} {value === 4 && '+'}
            </RoundedButton>
          ))}
        </Box>
      </Box>
    </PopOverComponent>
  )
}

export default BedroomsFilter
