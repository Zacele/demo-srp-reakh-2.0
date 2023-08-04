import { GetListingsTypes } from 'types'

const selectTopLocations = (popularLocations: GetListingsTypes.PopularLocation[], locations: GetListingsTypes.PopularLocation[]) =>
  locations.filter((item) => {
    const location = popularLocations.find(({ id }) => id === item.id || id === item.name)
    if (!popularLocations.length || !location) return true
    return !locations.find(({ id }) => id === location.parent_id)
  })

export default selectTopLocations
