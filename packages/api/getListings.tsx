import queryString from 'query-string'
import { SearchFormInputsType } from 'types'

const getListings = async (payload: SearchFormInputsType) => {
  const url = `${process.env.NEXT_PUBLIC_API_ROOT}/api/portal/pages/results`
  const fetchURL = queryString.stringifyUrl({
    url,
    query: {
      ...payload,
      page: payload.page || 1,
      page_size: 20,
      order_by: payload.order_by || 'relevance',
      search_languages: payload.search_languages || 'en,km,zh-hans,fr,th',
      active_tab: payload.active_tab || 'popularLocations',
      search_type: payload.search_type || 'sale'
    }
  })

  const res = await fetch(fetchURL)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getListings
