import React, { Suspense } from 'react'
import { getEssentialsData } from 'api'
import { ISearchResults } from 'types'

import { IEssential } from '../types/essentialType'

import BottomFooter from './components/BottomFooter'
import Footer from './components/Footer'

const FooterRSC = async ({ searchResults }: { searchResults: Promise<ISearchResults> }) => {
  const listingData: ISearchResults = await searchResults
  const essentialData: IEssential = await getEssentialsData()
  return (
    <Suspense fallback={null}>
      <Footer listingData={listingData} />
      <BottomFooter essentialData={essentialData} />
    </Suspense>
  )
}

export default FooterRSC
