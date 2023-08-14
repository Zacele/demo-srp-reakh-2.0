'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { ISearchForm, ISearchResults } from 'types'

import PriceFilter from './components/PriceFilter'

const StyledBox = styled(Box)`
  margin-top: 10px;
`

const OtherFilters: React.FC<{ searchForm: ISearchForm; texts: ISearchResults['texts'] }> = ({
  searchForm,
  texts
}) => {
  const { texts: searchFormTexts } = searchForm
  return (
    <StyledBox>
      <PriceFilter searchForm={searchForm} texts={texts} searchFormTexts={searchFormTexts} />
    </StyledBox>
  )
}

export default OtherFilters
