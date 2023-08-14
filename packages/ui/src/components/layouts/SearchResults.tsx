import { ISearchResults } from 'types'

import { ListingCard } from '../SearchResults/Listing/ListingCard'

const SearchResults: React.FC<{
  initialListingData: ISearchResults
}> = ({ initialListingData }) => {
  return (
    <div className="mx-auto xl:container">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          {initialListingData.results.map((item) => (
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
