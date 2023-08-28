import React from 'react'
import { NestedListing } from 'types'

import NestedListingCard from './NestedListingCard'

type NestedProps = {
  data: NestedListing[]
  displayRent?: boolean
}

function NestedListing({ data, displayRent }: NestedProps): React.ReactNode {
  return (
    <React.Fragment>
      {data.map((item, idx) => (
        <NestedListingCard
          displayRent={displayRent}
          key={item.id}
          data={item}
          isLast={idx === data.length - 1}
        />
      ))}
    </React.Fragment>
  )
}

export default NestedListing
