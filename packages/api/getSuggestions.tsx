const getSuggestions = async (searchString: any) => {
  const URL = `${
    process.env.NEXT_PUBLIC_API_ROOT
  }/autocomplete/?q=${searchString}&autocomplete=1&pathname=${'buy'}`
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getSuggestions
