import { getListings } from 'api'
import { GetListingsTypes } from 'types'

import SearchLocationAutocomplete from './components/SearchLocationAutocomplete'

const SearchFilters = async () => {
  const listingData: GetListingsTypes.ISearchResults = await getListings()

  const { search_form } = listingData

  return (
    <div className="pt-3 mx-auto xl:container">
      <SearchLocationAutocomplete searchForm={search_form} />
    </div>
  )
}

export default SearchFilters
