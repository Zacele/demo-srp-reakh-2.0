const getPopularLocations = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/api/location-funnel/?popular_location=1&structured=True`
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getPopularLocations
