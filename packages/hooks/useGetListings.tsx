import { useQuery } from '@tanstack/react-query'
import { getListings } from 'api'
import { ISearchResults, SearchFormInputsType } from 'types'

export const useGetListingsData = (payload: SearchFormInputsType, initialData?: ISearchResults) => {
  const { data: getListingsData, isLoading: isGetListingsLoading } = useQuery<ISearchResults>({
    queryKey: ['listing/data', payload, initialData],
    queryFn: () => getListings(payload),
    initialData
  })

  return { getListingsData, isGetListingsLoading }
}
