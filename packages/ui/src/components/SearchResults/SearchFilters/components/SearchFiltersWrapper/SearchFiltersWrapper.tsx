import { getListings } from 'api'
import { ISearchResults } from 'types'

import SearchFilters from '../../SearchFilters'

const SearchFiltersWrapper = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const promiseListingData: Promise<ISearchResults> = getListings(searchParams || {})
  const listingData = await promiseListingData

  return <SearchFilters listingData={listingData} />
}

export default SearchFiltersWrapper
