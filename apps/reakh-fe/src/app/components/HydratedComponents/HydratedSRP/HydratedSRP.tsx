'use client'

import getQueryClient from '@src/app/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getListings } from 'api'

import SearchResults from '../../layouts/SearchResults'

export default async function HydratedSRP({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['listings/data'],
    queryFn: () => getListings(searchParams || {})
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      {/* @ts-expect-error Server Component */}
      <SearchResults searchParams={searchParams} />
    </HydrationBoundary>
  )
}
