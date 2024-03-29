import React from 'react'
import { ListingCardSkeleton } from 'ui'

const SearchResultsLoading = () => {
  return (
    <div className="container max-w-[1200px] px-6 pt-3 mx-auto">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          {Array.from(new Array(5)).map((_, idx) => {
            return <ListingCardSkeleton key={idx} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResultsLoading
