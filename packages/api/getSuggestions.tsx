import throttle from 'lodash/throttle'

const getSuggestions = throttle(async (searchString) => {
  const URL = `${
    process.env.NEXT_PUBLIC_API_ROOT
  }/autocomplete/?q=${searchString}&autocomplete=1&pathname=${'buy'}`
  const res = await fetch(URL, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}, 200)

export default getSuggestions
