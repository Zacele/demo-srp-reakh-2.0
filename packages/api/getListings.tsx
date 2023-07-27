export async function getListings() {
  const URL = `${process.env.NEXT_PUBLIC_API_ROOT}/pages/results/?pathname=/buy`
  const res = await fetch(URL)
  if (!res.ok) {
    throw new Error('Failed to fetch data') // this will be caught by the error page and passed to the page as props
  }
  return await res.json()
}
