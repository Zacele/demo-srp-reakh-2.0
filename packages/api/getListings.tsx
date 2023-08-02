const getListings = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/portal/pages/results/?pathname=/buy`
  const res = await fetch(URL)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getListings
