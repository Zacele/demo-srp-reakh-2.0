import { getListings } from 'api'
import { ISearchResults, Result as ListingResult } from 'types'
import { ListingCard, Pagination, SortFilter } from 'ui'

const SearchResults = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const searchResults: Promise<ISearchResults> = getListings(searchParams || {})
  const listingData = await searchResults

  return (
    <div className="container max-w-[1200px] px-6 pt-3 mx-auto">
      <div className={`flex p-2`}>
        <div className="w-full sm:min-w-[639px] sm:max-w-[900px] relative">
          <div className="flex items-center justify-between pt-4.5">
            <div>
              <h1 className="pt-2 text-[32px] leading-5 text-[#203C3E] font-bold">
                {listingData.texts.page_header}
              </h1>
              <h2 className="pb-4 text-base font-normal">{listingData.texts.results_status}</h2>
            </div>
            <div className="min-w-40">
              <SortFilter searchForm={listingData.search_form} />
            </div>
          </div>
          {listingData.results.map((item: ListingResult) => (
            <ListingCard
              texts={listingData.texts}
              key={item.id}
              data={item}
              alt={item.title_img_alt}
            />
          ))}
          <div className="flex items-center justify-center pt-11">
            <Pagination
              totalCount={listingData.last_page}
              currentPage={searchParams?.page?.toString() ?? '1'}
            />
          </div>
          <div
            className="pt-8"
            dangerouslySetInnerHTML={{ __html: listingData.description.text }}
          />
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
