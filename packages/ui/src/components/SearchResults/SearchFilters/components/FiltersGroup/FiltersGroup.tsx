'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { ISearchForm, ISearchResults } from 'types'

import FeaturesFilter from './components/FeaturesFilter'
import PriceFilter from './components/PriceFilter'
import PropertyTypeFilter from './components/PropertyTypeFilter'

const StyledBox = styled(Box)`
  margin-top: 10px;
`

const FilterGroups: React.FC<{ searchForm: ISearchForm; texts: ISearchResults['texts'] }> = ({
  searchForm,
  texts
}) => {
  const { texts: searchFormTexts } = searchForm
  return (
    <StyledBox>
      <PriceFilter searchForm={searchForm} texts={texts} searchFormTexts={searchFormTexts} />
      <PropertyTypeFilter searchForm={searchForm} />
      <FeaturesFilter searchForm={searchForm} />
    </StyledBox>
  )
}

export default FilterGroups
