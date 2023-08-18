import queryString from 'query-string'
import { SearchFormInputsType } from 'types'

const getListings = async (payload: SearchFormInputsType) => {
  const {
    page_size = 1,
    search_languages = 'en,km,zh-hans,fr,th',
    order_by = 'relevance',
    q,
    page = 1,
    features,
    highlights,
    categories,
    active_tab = 'popularLocations',
    search_type = 'sale',
    price_min__gte,
    price_min__lte,
    location,
    property_type,
    has_virtual_tour
  } = payload
  const url = `${process.env.NEXT_PUBLIC_API_ROOT}/api/portal/pages/results`
  const fetchURL = queryString.stringifyUrl({
    url,
    query: {
      page,
      page_size,
      order_by,
      q,
      features,
      highlights,
      categories,
      search_languages,
      active_tab,
      search_type,
      has_virtual_tour,
      location,
      property_type,
      price_min__gte,
      price_min__lte
    }
  })
  const res = await fetch(fetchURL)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getListings
