import { Layout } from 'ui'
import { getListings } from 'lib'
import { Suspense } from 'react';
import SearchResults from 'ui/components/layouts/SearchResults';
export default async function Page() {
  const listingData: Promise<SearchResult> = getListings();
  const data = await listingData;
  const results = data.results;
  return (
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults promise={results} />
      </Suspense>
    </Layout>
  )
}
