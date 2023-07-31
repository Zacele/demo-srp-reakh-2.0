import { Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { GetListingsTypes } from 'types'
import { AppLayout } from 'ui'
import SearchResults from 'ui/src/components/layouts/SearchResults'
import SearchFilters from 'ui/src/components/SearchResults/SearchFilters'

export async function generateMetadata(): Promise<Metadata> {
  const listingData: Promise<GetListingsTypes.ISearchResults> = getListings()
  const data = await listingData
  const { seo } = data

  return {
    title: seo.head.title
  }
}

export const SearchResultsPage = async () => {
  const listingData: Promise<GetListingsTypes.ISearchResults> = getListings()
  const data = await listingData
  const { results } = data

  return (
    <AppLayout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchFilters />
        <SearchResults searchResults={results} />
      </Suspense>
    </AppLayout>
  )
}

export default SearchResultsPage
