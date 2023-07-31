'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { ISearchResults } from 'types'

import { ListingCard } from '../SearchResults/Listing/ListingCard'

const SearchResults: React.FC<{ searchResults: ISearchResults['results'] }> = ({
  searchResults
}) => {
  const [isMap, setIsMap] = useState(true)
  return (
    <div className="mx-auto xl:container">
      <div className="flex items-center w-full h-10 p-2 ">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Map Toggle:</span>
            <input
              type="checkbox"
              className="ml-2 toggle toggle-primary"
              checked={isMap}
              onChange={(e) => setIsMap(!isMap)}
            />
          </label>
        </div>
      </div>
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          {searchResults?.map((item) => (
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
