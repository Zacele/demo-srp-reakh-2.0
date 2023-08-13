'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { ISearchForm } from 'types'

import PriceFilter from './components/PriceFilter'

const StyledBox = styled(Box)`
  margin-top: 10px;
`

const OtherFilters: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const { texts } = searchForm
  return (
    <StyledBox>
      <PriceFilter searchForm={searchForm} />
    </StyledBox>
  )
}

export default OtherFilters
