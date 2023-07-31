import { getListings } from 'api'
import { convertToNestedArray } from 'lib'
import { GetListingsTypes } from 'types'

import SearchLocationAutocomplete from './components/SearchLocationAutocomplete'

const SearchFilters = async () => {
  const listingData: Promise<GetListingsTypes.ISearchResults> = getListings()
  const { search_form } = await listingData

  console.log(
    'results: ',
    search_form && convertToNestedArray(search_form.popular_locations)
  )

  return (
    <div className="pt-3 mx-auto xl:container">
      <SearchLocationAutocomplete texts={search_form.texts} />
    </div>
  )
}

export default SearchFilters
