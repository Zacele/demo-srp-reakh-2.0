import { getListings } from 'api'
import { ISearchResults, Result as ListingResult } from 'types'
import { ListingCard } from 'ui'

const SearchResults = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const searchResults: Promise<ISearchResults> = getListings(searchParams || {})
  const listingData = await searchResults

  return (
    <div className="mx-auto xl:container">
      <div className={`flex p-2`}>
        <div className={`w-full sm:min-w-[639px] sm:max-w-[900px] relative`}>
          <div className={'pt-4.5'}>
            <p className="pt-2 text-[32px] leading-5 text-[#203C3E] font-bold">
              {listingData.texts.page_header}
            </p>
            <p className="pb-4 text-base font-normal">{listingData.texts.results_status}</p>
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
