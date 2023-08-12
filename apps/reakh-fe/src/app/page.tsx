import { Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults, SearchFormInputsType } from 'types'
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

export const SearchResultsPage = async ({
  searchParams
}: {
  searchParams: SearchFormInputsType
}) => {
  const initialListingData: ISearchResults = await getListings(searchParams || {})
  const { search_form } = initialListingData

  return (
    <AppLayout>
      <SearchFilters searchForm={search_form} />
      <Suspense fallback={<h1>Loading......</h1>}>
        <SearchResults initialListingData={initialListingData} />
      </Suspense>
    </AppLayout>
  )
}

export default SearchResultsPage
