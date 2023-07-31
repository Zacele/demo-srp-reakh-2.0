export interface IGetEssentials {
  social_profiles: SocialProfiles
  opportunity_button: OpportunityButton
  sidebar: Sidebar[]
  app: App
  phone_number: string
  telegram_register_url: string
  menu: Menu[]
  drop_menu: DropMenu
  currencies: Currency[]
  languages: Language[]
  actions: Action[]
  likes: Likes
  add_property_action: AddPropertyAction
  texts: Texts3
  footer: Footer
  ga: Ga
  deep_link_modal: DeepLinkModal
  app_modal: AppModal
  login_settings: LoginSettings
}

export interface SocialProfiles {
  facebook: Facebook
  youtube: Youtube
  linkedin: Linkedin
  twitter: Twitter
  instagram: Instagram
  weechat: Weechat
  'mini-program': MiniProgram
}

export interface Facebook {
  url: string
}

export interface Youtube {
  url: string
}

export interface Linkedin {
  url: string
}

export interface Twitter {
  url: string
}

export interface Instagram {
  url: string
}

export interface Weechat {
  image: Image
}

export interface Image {
  url: string
  thumbnails: Thumbnail[]
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface MiniProgram {
  image: Image2
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

export interface OpportunityButton {
  icon: string
  ariaLabel: string
}

export interface Sidebar {
  action: string
  icon?: string
  aria_label?: string
  content_text?: string
  content_image?: string
}

export interface App {
  texts: Texts
  android: string
  ios: string
  data: Daum[]
}

export interface Texts {
  app: string
  'google play': string
  'app store': string
}

export interface Daum {
  store: string
  name: string
  url: string
  image: string
  image_alt: string
}

export interface Menu {
  name: string
  path: string
  key: string
}

export interface DropMenu {
  menus: Menus
}

export interface Menus {
  buy: Buy
  rent: Rent
  new_developments: NewDevelopments
  condo: Condo
  boreys: Boreys
  land: Land
  commercial: Commercial
  news: News
  more: More
}

export interface Buy {
  menu_type: string
  data: Daum2[]
}

export interface Daum2 {
  title: string
  links: Link[]
}

export interface Link {
  name: string
  path: string
}

export interface Rent {
  menu_type: string
  data: Daum3[]
}

export interface Daum3 {
  title: string
  links: Link2[]
}

export interface Link2 {
  name: string
  path: string
}

export interface NewDevelopments {
  menu_type: string
  data: Daum4[]
}

export interface Daum4 {
  title: string
  links?: Link3[]
}

export interface Link3 {
  name: string
  path: string
}

export interface Condo {
  menu_type: string
  data: Daum5[]
}

export interface Daum5 {
  title: string
  links?: Link4[]
}

export interface Link4 {
  name: string
  path: string
}

export interface Boreys {
  menu_type: string
  data: Daum6[]
}

export interface Daum6 {
  title: string
  links?: Link5[]
}

export interface Link5 {
  name: string
  path: string
}

export interface Land {
  menu_type: string
  data: Daum7[]
}

export interface Daum7 {
  title: string
  links?: Link6[]
}

export interface Link6 {
  name: string
  path: string
}

export interface Commercial {
  menu_type: string
  data: Daum8[]
}

export interface Daum8 {
  title: string
  links?: Link7[]
}

export interface Link7 {
  name: string
  path: string
}

export interface News {
  menu_type: string
  data: Daum9[]
}

export interface Daum9 {
  title: string
  view_more: ViewMore
  news_links?: NewsLink[]
  custom_links?: CustomLink[]
}

export interface ViewMore {
  url: string
  label: string
}

export interface NewsLink {
  title: string
  publish_at?: string
  image: Image3
  url: string
  short_content?: string
}

export interface Image3 {
  url: string
  thumbnails: Thumbnail3[]
}

export interface Thumbnail3 {
  url: string
  width: number
  height: number
}

export interface CustomLink {
  title: string
  image: string
  url: string
}

export interface More {
  menu_type: string
  data: Daum10[]
}

export interface Daum10 {
  title: string
  links: Link8[]
}

export interface Link8 {
  name: string
  path: string
}

export interface Currency {
  code: string
  name: string
}

export interface Language {
  language_code: string
  country_code: string
  name: string
}

export interface Action {
  name: string
  path: string
}

export interface Likes {
  texts: Texts2
}

export interface Texts2 {
  register_now: string
  register_now_description: string
}

export interface AddPropertyAction {
  name: string
  path: string
}

export interface Texts3 {
  register_or_login: string
  access_more_content: string
  access_more_content_description: string
  login: string
  register: string
  by_continuing: string
  privacy_policy: string
  more: string
  partner_sites: string
}

export interface Footer {
  links: Link9[]
  mobile_links: MobileLink[]
  partner_sites: PartnerSite[]
  copyright: string
  texts: Texts4
  contact: Contact
  images: string[]
}

export interface Link9 {
  id: string
  name: string
  path: string
}

export interface MobileLink {
  id: string
  name: string
  path: string
}

export interface PartnerSite {
  name: string
  path: string
}

export interface Texts4 {
  weAccept: string
}

export interface Contact {
  name: string
  address: string
  phone_number: string
}

export interface Ga {
  key: string
}

export interface DeepLinkModal {
  texts: Texts5
  apps: Apps
  sell_url: SellUrl
  map_url: MapUrl
  sign_in_url: SignInUrl
  register_url: RegisterUrl
}

export interface Texts5 {
  title: string
  items: string[]
  link_text: string
}

export interface Apps {
  texts: Texts6
  android: string
  ios: string
  data: Daum11[]
}

export interface Texts6 {
  app: string
  'google play': string
  'app store': string
}

export interface Daum11 {
  store: string
  name: string
  url: string
  image: string
  image_alt: string
}

export interface SellUrl {
  mobile: string
  web: string
}

export interface MapUrl {
  mobile: string
  web: string
}

export interface SignInUrl {
  mobile: string
  web: string
}

export interface RegisterUrl {
  mobile: string
  web: string
}

export interface AppModal {
  texts: Texts7
}

export interface Texts7 {
  title: string
  items: string[]
  link_text: string
}

export interface LoginSettings {
  enable_pdp_blur: boolean
  enable_blur_project_content: boolean
  enable_srp_blur: boolean
  enable_forced_login_to_send_enquiry: boolean
}
