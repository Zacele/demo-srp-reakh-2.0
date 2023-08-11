export interface SearchFormInputsType {
  page_size: number
  search_languages: string
  order_by?: OrderBy
  q?: string
  page: number
  features?: string[]
  highlights?: string[]
  categories?: string[]
  active_tab: 'landmark' | 'popularLocations'
  search_type: 'sale' | 'rent'
  has_virtual_tour?: boolean
  location: string[]
  property_type: string
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
