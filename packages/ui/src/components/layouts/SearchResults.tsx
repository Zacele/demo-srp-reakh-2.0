import { getListings } from 'api'
import { ISearchResults, SearchFormInputsType } from 'types'

import { ListingCard } from '../SearchResults/Listing/ListingCard'

const SearchResults = async ({ searchParams }: { searchParams: SearchFormInputsType }) => {
  const promiseListingData: Promise<ISearchResults> = getListings(searchParams || {})
  const listingData = await promiseListingData
  return (
    <div className="mx-auto xl:container">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          <div className={'pt-4.5'}>
            <p>alo</p>
          </div>
          {listingData.results.map((item) => (
            <ListingCard key={item.id} data={item} alt={item.title_img_alt} />
          ))}
        </div>
        {/* <div
          className={clsx('bg-pink-300 md:inline-block', {
            'sm:flex-1': isMap,
            hidden: !isMap
          })}
        ></div> */}
      </div>
    </div>
  )
}

export default SearchResults
