const getListings = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/pages/results/?pathname=/buy`
  const res = await fetch(URL, { next: { revalidate: 10 }, cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default getListings
