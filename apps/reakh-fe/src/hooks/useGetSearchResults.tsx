// @ts-nocheck
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
        order_by: searchParams?.order_by ?? 'relevance',
        price_min__lte: searchParams?.price_min__lte ?? '',
        price_min__gte: searchParams?.price_min__gte ?? '',
        land_area__gte: searchParams?.land_area__gte ?? '',
        land_area__lte: searchParams?.land_area__lte ?? '',
        floor_area__gte: searchParams?.floor_area__gte ?? '',
        floor_area__lte: searchParams?.floor_area__lte ?? '',
        garages__gte: searchParams?.garages__gte ?? ''
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
