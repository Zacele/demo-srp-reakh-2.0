const extractLocations = (locationsString: string | null) => {
  if (null) return []
  const locationRegex = /location:\s*([^;]+)/g
  const matches = typeof locationsString === 'string' && locationsString.match(locationRegex)

  if (matches) {
    const locations = matches.map((match) => match.replace('location: ', ''))
    return locations
  }

  return []
}

export default extractLocations
