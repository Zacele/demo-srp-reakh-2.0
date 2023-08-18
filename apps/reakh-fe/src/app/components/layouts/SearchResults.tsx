'use client'
import { useGetSearchResults } from '@src/hooks/useGetSearchResults'
import { Result as ListingResult, SearchFormInputsType } from 'types'
import { ListingCard } from 'ui'

const SearchResults: React.FC<{ searchParams: SearchFormInputsType }> = ({ searchParams }) => {
  const { getListingsResponse: listingData } = useGetSearchResults(searchParams, true)

  return (
    <div className="mx-auto xl:container">
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
