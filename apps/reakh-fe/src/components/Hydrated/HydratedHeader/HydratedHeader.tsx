import { getAppEssentialData } from '@src/apis/shared'
import getQueryClient from '@src/app/getQueryClient'
import { Header } from '@src/components/Header'
import { dehydrate, Hydrate } from '@tanstack/react-query'

const HydratedHeader = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['essential_data'], getAppEssentialData)
  const dehydratedState = dehydrate(queryClient)

  return (
    /* @ts-expect-error Server Component */
    <Hydrate state={dehydratedState}>
      <Header />
    </Hydrate>
  )
}

export default HydratedHeader
