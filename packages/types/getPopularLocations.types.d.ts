export type PopularLocations = PopularLocation[]

export interface PopularLocation {
  city_name: string
  value: string
  district: District[]
}

export interface District {
  district_name: string
  value: string
  commune: Commune[]
}

export interface Commune {
  commune_name: string
  value: string
}
