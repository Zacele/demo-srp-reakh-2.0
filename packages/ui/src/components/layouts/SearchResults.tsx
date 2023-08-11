'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { useGetListingsData } from 'hooks/useGetListings'
import { ISearchResults } from 'types'

import { ListingCard } from '../SearchResults/Listing/ListingCard'

const SearchResults: React.FC<{
  searchResults: ISearchResults
}> = ({ searchResults }) => {
  const [isMap, setIsMap] = useState(true)
  const { getListingsData, isGetListingsLoading } = useGetListingsData({}, searchResults)
  return (
    <div className="mx-auto xl:container">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          {searchResults?.results.map((item) => (
            <ListingCard key={item.id} data={item} alt={item.title_img_alt} />
          ))}
        </div>
        <div
          className={clsx('bg-pink-300 md:inline-block', {
            'sm:flex-1': isMap,
            hidden: !isMap
          })}
        ></div>
      </div>
    </div>
  )
}

export default SearchResults
