import { Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults } from 'types'
import { AppLayout } from 'ui'
import SearchResults from 'ui/src/components/layouts/SearchResults'
import SearchResultsLoading from 'ui/src/components/layouts/SearchResults.loading'
import SearchFiltersWrapper from 'ui/src/components/SearchResults/SearchFilters/components/SearchFiltersWrapper'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const listingData: ISearchResults = await getListings({
    q: JSON.stringify(searchParams.q),
    page_size: 1
  })
  const { seo } = listingData

  return {
    title: seo.head.title
  }
}

const SearchResultsPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  // @ts-ignore
  const querySearch = new URLSearchParams(searchParams)
  return (
    <AppLayout>
      {/* @ts-ignore */}
      <SearchFiltersWrapper searchParams={searchParams} />
      <Suspense key={querySearch.toString()} fallback={<SearchResultsLoading />}>
        {/* @ts-expect-error Server Component */}
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </AppLayout>
  )
}

export default SearchResultsPage
