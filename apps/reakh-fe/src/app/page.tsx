import { Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults } from 'types'
import { AppLayout } from 'ui'
import SearchResults from 'ui/src/components/layouts/SearchResults'
import SearchFilters from 'ui/src/components/SearchResults/SearchFilters'

export async function generateMetadata(): Promise<Metadata> {
  const listingData: ISearchResults = await getListings({})
  const { seo } = listingData

  return {
    title: seo.head.title
  }
}

const SearchResultsPage = async ({ searchParams }) => {
  const promiseListingData: Promise<ISearchResults> = getListings(searchParams || {})
  const querySearch = new URLSearchParams(searchParams)
  const listingData = await promiseListingData
  return (
    <AppLayout>
      <SearchFilters listingData={listingData} />
      <Suspense key={querySearch.toString()} fallback={<h1>Loading......</h1>}>
        {/* @ts-expect-error Server Component */}
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </AppLayout>
  )
}

export default SearchResultsPage
