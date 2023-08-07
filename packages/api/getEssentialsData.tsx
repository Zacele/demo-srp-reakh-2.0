const getEssentialsData = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/api/portal/essentials`
  const res = await fetch(URL)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getEssentialsData
