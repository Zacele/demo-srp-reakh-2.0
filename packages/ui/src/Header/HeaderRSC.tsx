import React, { Suspense } from 'react'
import { getEssentialsData } from 'api'

import NavbarDesktop from './components/NavbarDesktop'
import TopHeader from './components/TopHeader'

const HeaderRsc = async () => {
  const essentialsData = await getEssentialsData()
  return (
    <Suspense fallback={null}>
      <TopHeader essentialsData={essentialsData} />
      <NavbarDesktop essentialsData={essentialsData} />
    </Suspense>
  )
}

export default HeaderRsc
