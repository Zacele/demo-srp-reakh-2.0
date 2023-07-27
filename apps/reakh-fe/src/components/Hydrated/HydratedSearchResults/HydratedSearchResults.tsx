import getQueryClient from '@src/app/getQueryClient'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { getListings } from 'api'
import { SearchResults } from 'ui'

const HydrateSearchResults: React.FC = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['search_results'], getListings)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <SearchResults />
    </Hydrate>
  )
}

export default HydrateSearchResults
