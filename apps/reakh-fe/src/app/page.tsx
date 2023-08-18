import getQueryClient from '@src/app/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getListings } from 'api'
import { Metadata } from 'next'
import { AppLayout } from 'ui'

import SearchResults from './components/layouts/SearchResults'
import SearchFilters from './components/SearchResults/SearchFilters'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const data = await getListings({ ...searchParams, page_size: 1, page: 1 })
  return {
    title: data.seo.head.title
  }
}

export default async function SearchResultsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['listings/data'],
    queryFn: () => getListings({ ...searchParams } || {})
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <AppLayout>
      <HydrationBoundary state={dehydratedState}>
        <SearchFilters searchParams={searchParams} />
        <SearchResults searchParams={searchParams} />
      </HydrationBoundary>
    </AppLayout>
  )
}
