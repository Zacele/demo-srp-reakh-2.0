export interface SearchFormInputsType {
  page_size?: number
  search_languages?: string
  order_by?: OrderBy
  q?: string
  page?: number
  features?: string[]
  highlights?: string[]
  categories?: string[]
  active_tab?: 'landmark' | 'popularLocations'
  search_type?: 'sale' | 'rent'
  has_virtual_tour?: boolean
  location?: string[]
  property_type?: string
  price_min__gte?: string
  price_min__lte?: string
  floor_area__lte?: string
  floor_area__gte?: string
  land_area__lte?: string
  land_area__gte?: string
  garages__gte?: string
  garages__lte?: string
  bedrooms__gte?: string
  bedrooms__lte?: string
}

type OrderBy =
  | 'date-asc'
  | 'date-desc'
  | 'price-asc'
  | 'price-desc'
  | 'relevance'
  | 'floor-area-asc'
  | 'floor-area-desc'
  | 'price-sqm-desc'
  | 'price-sqm-asc'
  | 'price-negotiable'
  | 'urgent-sale'
  | 'price_reduced'
  | 'luxury_property'
  | 'under_market_value'
  | 'ready_to_move_in'
