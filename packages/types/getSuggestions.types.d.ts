export interface Suggestions {
  keywords: Keyword[]
  locations: Location[]
  areas: any[]
  landmarks: Landmark[]
  projects: Condo[]
  condos: Condo[]
  boreys: any[]
  offices: Office[]
  agents: any[]
  listings: Listing[]
}

export interface Condo {
  id: number
  name: string
  redirect_url: string
}

export interface Keyword {
  query: string
}

export interface Landmark {
  full_name: string
  name: string
  pathname_value: string
}

export interface Listing {
  id: number
  name: string
  address: string
  property_type: PropertyType
  is_project: boolean
  image: string
  redirect_url: string
}

export enum PropertyType {
  Land = 'land',
  Residential = 'residential'
}

export interface Location {
  full_name: string
  name: string
  slug: string
}

export interface Office {
  full_name: string
  url: string
}
