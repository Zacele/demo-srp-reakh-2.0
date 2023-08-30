'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { ISearchForm, ISearchResults } from 'types'

import BedroomsFilter from './components/BedroomsFilter'
import BuyPriceFilter from './components/BuyPriceFilter'
import FeaturesFilter from './components/FeaturesFilter'
import MoreFilters from './components/MoreFilters/MoreFilters'
import PropertyTypeFilter from './components/PropertyTypeFilter'
import RentPriceFilter from './components/RentPriceFilter'

const StyledBox = styled(Box)`
  margin-top: 10px;
`

const FilterGroups: React.FC<{
  searchForm: ISearchForm
  texts: ISearchResults['texts']
  searchType: 'sale' | 'rent'
}> = ({ searchForm, texts, searchType }) => {
  const { texts: searchFormTexts } = searchForm
  return (
    <StyledBox>
      <BedroomsFilter searchForm={searchForm} />
      {searchType === 'sale' ? (
        <BuyPriceFilter searchForm={searchForm} texts={texts} searchFormTexts={searchFormTexts} />
      ) : (
        <RentPriceFilter searchForm={searchForm} texts={texts} searchFormTexts={searchFormTexts} />
      )}
      <PropertyTypeFilter searchForm={searchForm} />
      <FeaturesFilter searchForm={searchForm} />
      <MoreFilters searchForm={searchForm} />
    </StyledBox>
  )
}

export default FilterGroups
