import { Suspense } from 'react';
import { getListings } from 'lib'
import { Layout } from 'ui'
import SearchResults from 'ui/src/components/layouts/SearchResults';

export default async function Page() {
  const listingData: Promise<SearchResult> = getListings();
  const data = await listingData;
  const results = data.results;
  return (
    <Layout>
      {/* <Suspense fallback={<h2>Loading...</h2>}> */}
      <SearchResults promise={results} />
      {/* </Suspense> */}
    </Layout>
  )
}
