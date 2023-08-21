import { useQuery } from '@tanstack/react-query'
import { getListings } from 'api'
import { Result as ListingResult, SearchFormInputsType } from 'types'

import { ListingCard } from '../SearchResults/Listing/ListingCard'

const SearchResults = async ({ searchParams }: { searchParams: SearchFormInputsType }) => {
  const { data: listingData } = useQuery({
    queryKey: ['listings/data'],
    queryFn: () => getListings(searchParams || {})
  })

  return (
    <div className="container max-w-[1200px] px-6 pt-3 mx-auto">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          <div className={'pt-4.5'}>
            <p>alo</p>
          </div>
          {listingData.results.map((item: ListingResult) => (
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
