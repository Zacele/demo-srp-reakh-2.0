import { GetPopularLocationsTypes } from 'types'

interface Location {
  label: string
  value: string
  checked: boolean
  children?: District[]
  expanded?: boolean
}

interface District {
  label: string
  value: string
  checked: boolean
  children?: Commune[]
  expanded?: boolean
}

interface Commune {
  label: string
  value: string
  checked: boolean
}

const convertLocations = (
  locations: GetPopularLocationsTypes.PopularLocations
) => {
  return locations.map((item) => {
    const districtChildren = item.district?.map((district) => {
      const communeChildren = district.commune?.map((commune) => {
        return {
          label: commune.commune_name,
          value: commune.value,
          checked: false
        }
      })
      return Object.assign(
        {
          label: district.district_name,
          value: district.value,
          checked: false,
          expanded: true
        },
        communeChildren?.length && { children: communeChildren }
      )
    })
    return Object.assign(
      {
        label: item.city_name,
        value: item.value,
        expanded: districtChildren?.length,
        checked: false
      },
      districtChildren?.length && { children: districtChildren }
    )
  })
}

export default convertLocations
