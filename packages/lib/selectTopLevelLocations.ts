import { PopularLocation } from 'types'

const selectTopLevelLocations = (
  popularLocations: PopularLocation[],
  locations: PopularLocation[]
) =>
  locations.filter((item) => {
    const location = popularLocations.find(({ id }) => id === item.id || id === item.name)
    if (!popularLocations.length || !location) return true
    return !locations.find(({ id }) => id === location.parent_id)
  })

export default selectTopLevelLocations
