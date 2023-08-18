import HydratedSRP from '@src/app/components/HydratedComponents/HydratedSRP'
import { getListings } from 'api'
import { Metadata } from 'next'
import { ISearchResults } from 'types'
import { AppLayout } from 'ui'
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
      {/* <Suspense key={querySearch.toString()} fallback={<SearchResultsLoading />}> */}
      {/* <SearchResults searchParams={searchParams} /> */}
      {/* </Suspense> */}
      {/* @ts-expect-error Server Component */}
      <HydratedSRP searchParams={searchParams} />
    </AppLayout>
  )
}

export default SearchResultsPage
