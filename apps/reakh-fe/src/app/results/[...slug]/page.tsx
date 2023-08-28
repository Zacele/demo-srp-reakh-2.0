import { Fragment, Suspense } from 'react'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults } from 'types'
import { AppFooter } from 'ui'

import SearchResults from '../../components/layouts/SearchResults'
import SearchResultsLoading from '../../components/layouts/SearchResults.loading'
import SearchFilters from '../../components/SearchResults/SearchFilters'

type Props = {
  params: { slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  searchParams,
  params: { slug }
}: Props): Promise<Metadata> {
  const listingData: ISearchResults = await getListings({
    q: JSON.stringify(searchParams.q),
    page_size: 1,
    search_type: 'sale',
    pathname: slug.length > 1 ? slug.join('/') : ''
  })
  const { seo } = listingData

  return {
    title: seo.head.title
  }
}

export default async function BuySearchResultsPage({
  params: { slug },
  searchParams
}: {
  params: { slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const saleType = slug[0] === 'buy' ? 'sale' : 'rent'
  const searchResults: Promise<ISearchResults> = getListings(
    { ...searchParams, search_type: saleType, pathname: slug.length > 1 ? slug.join('/') : '' } ||
      {}
  )

  const listingData = await searchResults
  // @ts-ignore
  const querySearch = new URLSearchParams(searchParams)

  return (
    <Fragment>
      <SearchFilters searchParams={searchParams} listingData={listingData} />
      <Suspense key={querySearch.toString()} fallback={<SearchResultsLoading />}>
        {/* @ts-expect-error Server Component */}
        <SearchResults
          searchParams={{
            ...searchParams,
            search_type: saleType,
            pathname: slug.length > 1 ? slug.join('/') : ''
          }}
        />
      </Suspense>
      <Suspense fallback={null}>
        {/* @ts-expect-error Server Component */}
        <AppFooter searchResults={searchResults} />
      </Suspense>
    </Fragment>
  )
}
