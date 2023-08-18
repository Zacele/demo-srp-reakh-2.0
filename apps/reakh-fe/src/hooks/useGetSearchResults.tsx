import { useQuery } from '@tanstack/react-query'
import { getListings } from 'api'
import { ISearchResults } from 'types'

export const useGetSearchResults = (searchParams = {}, enabled = false) => {
  const {
    data: getListingsResponse,
    isLoading: getListingsLoading,
    isSuccess: getListingsSuccess
  } = useQuery<ISearchResults>({
    queryKey: ['listings/data'],
    queryFn: () =>
      getListings({
        ...searchParams,
        search_type: searchParams?.search_type ?? 'sale',
        order_by: searchParams?.order_by ?? 'relevance'
      }),
    enabled,
    staleTime: 36000 // 1  hours in milliseconds
  })

  return {
    getListingsResponse,
    getListingsLoading,
    getListingsSuccess
  }
}
