import { Suspense } from 'react'
import { getListings } from 'api'
import { ISearchResults } from 'types'
import { Layout } from 'ui'
import SearchResults from 'ui/src/components/layouts/SearchResults'

export default async function Page() {
  const listingData: Promise<ISearchResults> = getListings()
  const data = await listingData
  const { results } = data

  return (
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults searchResults={results} />
      </Suspense>
    </Layout>
  )
}
