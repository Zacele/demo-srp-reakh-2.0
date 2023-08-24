import React, { Suspense } from 'react'
import { getEssentialsData, getListings } from 'api'
import { ISearchResults } from 'types'

import { IEssential } from '../types/essentialType'

import BottomFooter from './components/BottomFooter'
import Footer from './components/Footer'

const FooterRSC = async () => {
  const listingData: ISearchResults = await getListings({})
  const essentialData: IEssential = await getEssentialsData()
  return (
    <Suspense fallback={null}>
      <Footer listingData={listingData} />
      <BottomFooter essentialData={essentialData} />
    </Suspense>
  )
}

export default FooterRSC
