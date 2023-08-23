import React, { Suspense } from 'react'
import { getListings } from 'api'

import Footer from './components/Footer'

const FooterRSC = async () => {
  const listingData = await getListings({})
  return (
    <Suspense fallback={null}>
      <Footer listingData={listingData} />
    </Suspense>
  )
}

export default FooterRSC
