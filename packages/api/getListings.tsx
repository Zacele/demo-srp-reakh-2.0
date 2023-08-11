const getListings = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/api/portal/pages/results/?pathname=/buy`
  const res = await fetch(URL, { next: { revalidate: 10 * 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getListings
