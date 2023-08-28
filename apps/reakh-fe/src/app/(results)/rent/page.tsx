import { Fragment, Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults } from 'types'

import SearchResults from '../../components/layouts/SearchResults'
import SearchResultsLoading from '../../components/layouts/SearchResults.loading'
import SearchFilters from '../../components/SearchResults/SearchFilters'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const listingData: ISearchResults = await getListings({
    q: JSON.stringify(searchParams.q),
    page_size: 1,
    search_type: 'rent'
  })
  const { seo } = listingData

  return {
    title: seo.head.title
  }
}

export default async function RentSearchResultsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const searchResults: Promise<ISearchResults> = getListings(
    { ...searchParams, search_type: 'rent' } || {}
  )

  const listingData = await searchResults
  // @ts-ignore
  const querySearch = new URLSearchParams(searchParams)

  return (
    <Fragment>
      <SearchFilters searchParams={searchParams} listingData={listingData} />
      <Suspense key={querySearch.toString()} fallback={<SearchResultsLoading />}>
        {/* @ts-expect-error Server Component */}
        <SearchResults searchParams={{ ...searchParams, search_type: 'rent' }} />
      </Suspense>
    </Fragment>
  )
}
