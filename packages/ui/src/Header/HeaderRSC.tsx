import React from 'react'
import { getEssentialsData } from 'api'

import TopHeader from './components/TopHeader'

const HeaderRsc = async () => {
  const essentialsData = await getEssentialsData()
  return (
    <React.Fragment>
      <TopHeader essentialsData={essentialsData} />
    </React.Fragment>
  )
}

export default HeaderRsc
