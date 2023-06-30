import React from 'react'

import NestedListingCard from './NestedListingCard'

type NestedProps = {
    data: NestedListing[]
}

function NestedListing({ data }: NestedProps): React.ReactNode {
    return (
        <div className=''>
            {data.map((item, idx) => (
                <NestedListingCard key={item.id} data={item} isLast={idx === data.length - 1} />
            ))}
        </div>
    )
}

export default NestedListing