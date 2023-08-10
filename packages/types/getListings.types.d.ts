export interface ISearchResults {
  texts: Texts
  search_form: SearchForm
  results: Result[]
  no_like_modal: NoLikeModal
  no_alert_modal: NoAlertModal
  bottom_menu: BottomMenu
  seo: Seo
  ads: Ads
  alert_options: AlertOption[]
  count: number
  last_page: number
  views: Views
  contact_form: ContactForm
  breadcrumbs: Breadcrumbs
  description: Description
}

export interface Texts {
  page_header: string
  results_status: string
  save_search: string
  save_this_search: string
  create_alert: string
  create_an_alert: string
  multi_enquiry: string
  call: string
  email: string
  listed: string
  updated: string
  alert_name: string
  name_your_alert: string
  name_your_search: string
  email_address: string
  alert_frequency: string
  sale_price: string
  rent_price: string
  call_agent: string
  name: string
  preferred_contact_method: string
  write_message: string
  contact_agents: string
  back: string
  next: string
  chat: string
  tickbox: string
  message_sent: string
  enquiry_submitted: string
  month: string
  what_budget: string
  phone_number: string
  secondary_contact: string
  rent_rate: string
  virtual_360_tours: string
  virtual_360_tours_description: string
  save: string
  enquiry_form_heading: string
}

export interface SearchForm {
  texts: Texts2
  popular_locations: PopularLocation[]
  quick_search_locations: QuickSearchLocation[]
  popular_landmarks: PopularLandmark[]
  popular_areas: any[]
  location_tabs: string[]
  property_type: string
  results: number
  currency: string
  price_sell_total: number[]
  price_rent_per_month: number[]
  property_types: PropertyType[]
  sell_path: string
  all_amenities: AllAmenity[]
  all_highlights: AllHighlight[]
  simplified_languages: string[]
  default_language: string
  sort_options: SortOption[]
  categories: any[]
  locations: any[]
  search_type: string
  floor_area: FloorArea[]
  land_area: LandArea[]
  landmarks: any[]
}

export interface Texts2 {
  [key: string]: string
  'All Types': string
  agencies: string
  agents: string
  amenities: string
  any: string
  bathrooms: string
  bedrooms: string
  borey: string
  boreys: string
  buy: string
  carSpaces: string
  clearFilters: string
  commercial: string
  condos: string
  'date-asc': string
  'date-desc': string
  highlights: string
  fetchingData: string
  fewerFilters: string
  filters: string
  'floor-area-asc': string
  'floor-area-desc': string
  'floor-level-asc': string
  'floor-level-desc': string
  floorArea: string
  formHeading: string
  foundCountResults: string
  keywords: string
  labelAnd: string
  labelFrom: string
  labelIn: string
  labelTo: string
  landArea: string
  landmarks: string
  locations: string
  max: string
  map_legend: string
  min: string
  mode: string
  more: string
  moreFilters: string
  noMaximum: string
  noMinimum: string
  noSuggestions: string
  offices: string
  popularAreas: string
  popularLocations: string
  price: string
  'price-asc': string
  'price-desc': string
  'price-sqm-asc': string
  'price-sqm-desc': string
  project: string
  projects: string
  propertyType: string
  properties: string
  recent: string
  relevance: string
  rent: string
  residential: string
  results: string
  searchPlaceholder: string
  sell: string
  setLocation: string
  showing: string
  sortLabel: string
  switch_to_list_view: string
  switch_to_map_view: string
  type: string
  update: string
}

export interface PopularLocation {
  id: string
  parent_id?: string
  name: string
  slug: string
  group?: string
  type?: string
}

export interface QuickSearchLocation {
  id: string
  parent_id?: string
  name: string
  slug: string
}

export interface PopularLandmark {
  city: string
  landmarks: Landmark[]
}

export interface Landmark {
  name: string
  display_name: string
  pathname_value: string
}

export interface PropertyType {
  tab: string
  tab_name: string
  label: string
  value: string
  url_value: string
  icon: string
  default_selected?: boolean
  display_mode?: string
}

export interface AllAmenity {
  label: string
  value: string
}

export interface AllHighlight {
  label: string
  value: string
}

export interface SortOption {
  label: string
  value: string
}

export interface FloorArea {
  label: string
  value: number
}

export interface LandArea {
  label: string
  value: number
}

export interface Result {
  id: number
  highlights: Highlight[]
  images: Image[]
  url: string
  owners: number[]
  agents: Agent[]
  offices: Office[]
  address: string
  nested: Nested[]
  upgrades: string[]
  display_price: string
  category_name: string
  title_img_alt: string
  headline: string
  has_online_chatter: boolean
  created_at: string
  price_is_displayed: boolean
  rent_is_displayed: boolean
  display_date: string
  listed_date: any
  display_rent: string
  specifications: Specifications2
  labels: Label[]
  has_video: boolean
  has_virtual_tour: boolean
  display_as_project: boolean
  chat_app_url: string
  currency_sign: string
  display_price_per_sqm_with_unit: string
  display_price_per_sqm: boolean
  display_rent_per_sqm_with_unit: string
  display_rent_per_sqm: boolean
  project: any
  whatsapp_url: string
  telegram_url: string
  wechat_url: string
  ribbon_key: string
  ribbon: string
  listing_type: string
  undermarket_price: string
  undermarket_rent: string
  undermarket_price_per_sqm: string
  undermarket_rent_per_sqm: string
  undermarket_price_diff: string
  undermarket_rent_diff: string
  undermarket_price_per_sqm_diff: string
  undermarket_rent_per_sqm_diff: string
}

export interface Highlight {
  label: string
  icon_charcode: string
}

export interface Image {
  id: number
  title: string
  url: string
  width: number
  thumbnails: Thumbnail[]
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface Agent {
  pk: number
  email: string
  image: Image2
  first_name: string
  last_name: string
  display_telephone: string
  award: any
}

export interface Image2 {
  url: string
  thumbnails: Thumbnail2[]
}

export interface Thumbnail2 {
  url: string
  width: number
  height: number
}

export interface Office {
  pk: number
  logo: Logo
  phone: string
  email?: string
  first_name: string
  url: string
  display_phone: string
  award: any
}

export interface Logo {
  url: string
  thumbnails: Thumbnail3[]
}

export interface Thumbnail3 {
  url: string
  width: number
  height: number
}

export interface Nested {
  id: number
  images: Image3[]
  url: string
  address: string
  display_price: string
  headline: string
  price_is_displayed: boolean
  rent_is_displayed: boolean
  listed_date: string
  display_rent: string
  specifications: Specifications
  chat_app_url: string
  currency_sign: string
  display_price_per_sqm_with_unit: string
  display_price_per_sqm: boolean
  display_rent_per_sqm_with_unit: string
  display_rent_per_sqm: boolean
  ribbon: string
  undermarket_price: string
  undermarket_rent: string
  undermarket_price_diff: string
  undermarket_rent_diff: string
}

export interface Image3 {
  id: number
  title: string
  url: string
  width: number
  thumbnails: Thumbnail4[]
}

export interface Thumbnail4 {
  url: string
  width: number
  height: number
}

export interface Specifications {
  general: any[]
  detail: Detail[]
}

export interface Detail {
  icon_charcode: string
  label: string
  short_label: string
}

export interface Specifications2 {
  general: General[]
  detail: Detail2[]
}

export interface General {
  icon_charcode: string
  label: string
  short_label: string
}

export interface Detail2 {
  icon_charcode: string
  label: string
  short_label: string
}

export interface Label {
  label: string
  kind: string
  translucent: boolean
}

export interface NoLikeModal {
  texts: Texts3
  login_url: string
  register_url: string
}

export interface Texts3 {
  header: string
  description: string
  login: string
  register: string
}

export interface NoAlertModal {
  texts: Texts4
  login_url: string
  register_url: string
}

export interface Texts4 {
  header: string
  description: string
  login: string
  register: string
}

export interface BottomMenu {
  data: Daum[]
}

export interface Daum {
  title: string
  data: Daum2[]
}

export interface Daum2 {
  title: string
  data: Daum3[]
}

export interface Daum3 {
  title: string
  url: string
}

export interface Seo {
  head: Head
}

export interface Head {
  title: string
  meta: Meum[]
  links: Link[]
  schema_org: SchemaOrg[]
}

export interface Meum {
  name: string
  content: string
}

export interface Link {
  href: string
  rel: string
  hreflang?: string
}

export interface SchemaOrg {
  '@context': string
  '@type': string
  itemListElement?: ItemListElement[]
  mainEntity?: MainEntity[]
}

export interface ItemListElement {
  '@type': string
  position: number
  name: string
  item: string
}

export interface MainEntity {
  '@type': string
  name: string
  acceptedAnswer: AcceptedAnswer
}

export interface AcceptedAnswer {
  '@type': string
  text: string
}

export interface Ads {
  headers: Header[]
  right_side: RightSide
  inline: Inline[]
}

export interface Header {
  slot: string
  size: string
  position: string
}

export interface RightSide {
  desktop: Desktop[]
  mobile: any[]
}

export interface Desktop {
  id: string
  width: number
  height: number
  src: string
  div: string
  size: Size
}

export interface Size {
  desktop: number[][]
  mobile: number[]
}

export interface Inline {
  mobile: Mobile[]
  desktop: Desktop2[]
}

export interface Mobile {
  id: string
  width: number
  height: number
  src: string
  div: string
  size: Size2
}

export interface Size2 {
  desktop: number[][]
  mobile: number[][]
}

export interface Desktop2 {
  id: string
  width: number
  height: number
  src: string
  div: string
  size: Size3
}

export interface Size3 {
  desktop: number[][]
  mobile: number[][]
}

export interface AlertOption {
  value: string
  label: string
}

export interface Views {
  texts: Texts5
  grid_url: string
  map_url: string
}

export interface Texts5 {
  map: string
  grid: string
  list: string
}

export interface ContactForm {
  fields: Fields
}

export interface Fields {
  name: Name
  email: Email
  message: Message
  contact: Contact
  phone: Phone
  texts: Texts6
}

export interface Name {
  type: string
  label: string
  validation_texts: ValidationTexts
  min_length: number
  max_length: number
}

export interface ValidationTexts {
  min_length: string
  max_length: string
  empty: string
}

export interface Email {
  type: string
  label: string
  validation_texts: ValidationTexts2
}

export interface ValidationTexts2 {
  empty: string
  invalid: string
}

export interface Message {
  type: string
  label: string
  validation_texts: ValidationTexts3
}

export interface ValidationTexts3 {
  empty: string
}

export interface Contact {
  type: string
  label: string
  validation_texts: ValidationTexts4
}

export interface ValidationTexts4 {
  empty: string
}

export interface Phone {
  type: string
  label: string
  validation_texts: ValidationTexts5
  min_length: number
}

export interface ValidationTexts5 {
  min_length: string
  empty: string
}

export interface Texts6 {
  phone_number: string
  secondary_contact: string
}

export interface Breadcrumbs {
  parts: Part[]
}

export interface Part {
  title: string
  url: string
}

export interface Description {
  text: string
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
  nested: NestedListing[]
  offices: object[]
  owners: number[]
  price_is_displayed: boolean
  rent_is_displayed: string
  ribbon: string
  ribbon_key: string
  specifications: Amenities
  title_img_alt: string
  upgrades: string[]
  url: string
}

type NestedListing = {
  id: number
  images?: ImageSet[]
  url?: string
  address?: string
  display_price?: string
  headline?: string
  price_is_displayed?: boolean
  rent_is_displayed?: boolean
  listed_date?: string
  display_rent?: string
  specifications?: Amenities
  chat_app_url?: string
  currency_sign?: string
  display_price_per_sqm_with_unit?: string
  display_price_per_sqm?: boolean
  display_rent_per_sqm_with_unit?: string
  display_rent_per_sqm?: boolean
  ribbon?: string
}

type Amenities = {
  general: AmenityItem[]
  detail: AmenityItem[]
}

type AmenityItem = {
  icon_charcode: string
  label: string
  short_label: string
}

type ImageSet = {
  id: number
  thumbnails: ImageSource[]
  title: string
  url: string
  width: number
  alt?: string
}
type ImageSource = {
  width: number
  height: number
  url: string
}
