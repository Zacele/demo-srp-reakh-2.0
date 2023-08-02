import { getListings, getPopularLocations } from 'api'
import { GetListingsTypes, GetPopularLocationsTypes } from 'types'

import SearchLocationAutocomplete from './components/SearchLocationAutocomplete'

const SearchFilters = async () => {
  const listingData: GetListingsTypes.ISearchResults = await getListings()
  const popularLocations: GetPopularLocationsTypes.PopularLocations =
    await getPopularLocations()

  const { search_form } = listingData

  return (
    <div className="pt-3 mx-auto xl:container">
      <SearchLocationAutocomplete
        popularLocations={popularLocations}
        texts={search_form.texts}
      />
    </div>
  )
}

export default SearchFilters
