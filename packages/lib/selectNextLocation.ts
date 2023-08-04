import difference from 'lodash/difference'
import uniq from 'lodash/uniq'
import xorBy from 'lodash/xorBy'
import { GetListingsTypes } from 'types'

const selectAncestors = (popularLocations, locationId, prevChildren = []) =>
  popularLocations.reduce((acc, currentLocation) => {
    if (currentLocation.id !== locationId) return acc
    return selectAncestors(popularLocations, currentLocation.parent_id, acc.concat(currentLocation))
  }, prevChildren)

const selectChildren = (popularLocations: GetListingsTypes.SearchForm['popular_locations'], locationId, prevChildren = []) =>
  popularLocations.reduce((acc, currentLocation) => {
    if (currentLocation.parent_id !== locationId) return acc
    return selectChildren(popularLocations, currentLocation.id, acc.concat(currentLocation))
  }, prevChildren)

const selectNextLocation = (location, selectedLocations, popularLocations) => {
  if (!popularLocations.length) return xorBy(selectedLocations, [location], ({ id }) => id)

  const popularLocationBySlug = location.slug && popularLocations.find(({ slug }) => slug === location.slug)
  const locationId = popularLocationBySlug ? popularLocationBySlug.id : location.id

  const isSelected = !!selectedLocations.find(({ id }) => id === locationId)

  const ancestors = selectAncestors(popularLocations, locationId)
  const children = selectChildren(popularLocations, locationId)

  if (isSelected) return difference(selectedLocations, [...children, ...ancestors, location])

  return uniq([...selectedLocations, popularLocationBySlug || location, ...children])
}

export default selectNextLocation
