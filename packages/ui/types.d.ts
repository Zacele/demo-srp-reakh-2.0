type SearchResult = {
  texts: object
  search_form: object
  results: object
  no_like_modal: object
  no_alert_modal: object
  bottom_menu: object
  seo: object
  ads: object
  alert_options: array
  count: number
  last_page: number
  views: object
  contact_form: object
  breadcrumbs: object
  description: { text: string }
}

type ListingData = {
  address: string
  category_name: string
  created_at: string
  currency_sign: string
  display_as_project: boolean
  display_date: string
  display_price: string
  display_price_per_sqm: boolean
  display_price_per_sqm_with_unit: string
  display_rent: string | boolean
  display_rent_per_sqm: string
  display_rent_per_sqm_with_unit: string
  has_online_chatter: boolean
  has_video: boolean
  has_virtual_tour: boolean
  headline: string
  highlights: object
  id: number | string
  images: ImageSet[]
  labels: object[]
  listed_date: string
  listing_type: string
  nested: object[]
  offices: object[]
  owners: number[]
  price_is_displayed: boolean
  rent_is_displayed: string
  ribbon: string
  ribbon_key: string
  specifications: object
  title_img_alt: string
  upgrades: string[]
  url: string
}

type ImageSet = {
  id: number
  thumbnails: ImageSource[]
  title: string,
  url: string,
  width: number
  alt?: string
}
type ImageSource = {
  width: number
  height: number
  url: string
}
