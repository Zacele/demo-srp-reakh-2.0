import React from 'react'
import { getEssentialsData } from 'api'

import NavbarDesktop from './components/NavbarDesktop'
import TopHeader from './components/TopHeader'

const HeaderRsc = async () => {
  const essentialsData = await getEssentialsData()
  return (
    <React.Fragment>
      <TopHeader essentialsData={essentialsData} />
      <NavbarDesktop />
    </React.Fragment>
  )
}

export default HeaderRsc
