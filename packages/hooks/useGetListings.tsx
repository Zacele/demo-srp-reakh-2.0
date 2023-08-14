import { useQuery } from '@tanstack/react-query'
import { getListings } from 'api'
import { ISearchResults, SearchFormInputsType } from 'types'

export const useGetListingsData = () => {
  const { data: getListingsData, isLoading: isGetListingsLoading } = useQuery<ISearchResults>({
    // @ts-ignore
    queryKey: ['listing/data'],
    queryFn: (payload: SearchFormInputsType) => getListings(payload)
  })

  return { getListingsData, isGetListingsLoading }
}
