export interface IEssential {
  social_profiles?: SocialProfiles
  opportunity_button?: OpportunityButton
  sidebar?: Sidebar[]
  app?: App
  phone_number?: string
  menu?: Menu[]
  drop_menu?: DropMenu
  currencies?: Currency[]
  languages?: Language[]
  actions?: AddPropertyAction[]
  likes?: Likes
  add_property_action?: AddPropertyAction
  texts?: WelcomeTexts
  footer?: Footer
  ga?: Ga
  deep_link_modal?: DeepLinkModal
  app_modal?: AppModal
  login_settings?: LoginSettings
}

export interface AddPropertyAction {
  name?: string
  path?: string
}

export interface App {
  texts?: AppTexts
  android?: string
  ios?: string
  data?: AppDatum[]
}

export interface AppDatum {
  store?: string
  name?: string
  url?: string
  image?: string
  image_alt?: string
}

export interface AppTexts {
  app?: string
  'google play'?: string
  'app store'?: string
}

export interface AppModal {
  texts?: AppModalTexts
}

export interface AppModalTexts {
  title?: string
  items?: string[]
  link_text?: string
}

export interface Currency {
  code?: string
  name?: string
}

export interface DeepLinkModal {
  texts?: AppModalTexts
  apps?: App
  sell_url?: URL
  map_url?: URL
  sign_in_url?: URL
  register_url?: URL
}

export interface URL {
  mobile?: string
  web?: string
}

export interface DropMenu {
  menus?: Menus
}

export interface Menus {
  buy?: Boreys
  rent?: Boreys
  new_developments?: Boreys
  condo?: Boreys
  boreys?: Boreys
  land?: Boreys
  commercial?: Boreys
  news?: News
  more?: Boreys
}

export interface Boreys {
  menu_type?: string
  data?: BoreysDatum[]
}

export interface BoreysDatum {
  title?: string
  links?: AddPropertyAction[]
}

export interface News {
  menu_type?: string
  data?: NewsDatum[]
}

export interface NewsDatum {
  title?: string
  view_more?: ViewMore
  news_links?: NewsLink[]
  custom_links?: CustomLink[]
}

export interface CustomLink {
  title?: string
  image?: string
  url?: string
}

export interface NewsLink {
  title?: string
  publish_at?: Date
  image?: Image
  url?: string
  short_content?: null | string
}

export interface Image {
  url?: string
  thumbnails?: Thumbnail[]
}

export interface Thumbnail {
  url?: string
  width?: number
  height?: number
}

export interface ViewMore {
  url?: string
  label?: string
}

export interface Footer {
  links?: Link[]
  mobile_links?: Link[]
  partner_sites?: AddPropertyAction[]
  copyright?: string
  texts?: FooterTexts
  contact?: Contact
  images?: string[]
}

export interface Contact {
  name?: string
  address?: string
  phone_number?: string
}

export interface Link {
  id?: string
  name?: string
  path?: string
}

export interface FooterTexts {
  weAccept?: string
}

export interface Ga {
  key?: string
}

export interface Language {
  language_code?: string
  country_code?: string
  name?: string
}

export interface Likes {
  texts?: LikesTexts
}

export interface LikesTexts {
  register_now?: string
  register_now_description?: string
}

export interface LoginSettings {
  enable_pdp_blur?: boolean
  enable_blur_project_content?: boolean
  enable_srp_blur?: boolean
  enable_forced_login_to_send_enquiry?: boolean
}

export interface Menu {
  name?: string
  path?: string
  key?: string
}

export interface OpportunityButton {
  icon?: string
  ariaLabel?: string
}

export interface Sidebar {
  action?: string
  icon?: string
  aria_label?: string
  content_text?: string
  content_image?: string
}

export interface SocialProfiles {
  facebook?: URLSocialProfile
  youtube?: URLSocialProfile
  linkedin?: URLSocialProfile
  twitter?: URLSocialProfile
  instagram?: URLSocialProfile
  weechat?: ImageSocialProfile
  'mini-program'?: ImageSocialProfile
}

export interface URLSocialProfile {
  url?: string
}

export interface ImageSocialProfile {
  image?: Image
}

export interface WelcomeTexts {
  register_or_login?: string
  access_more_content?: string
  access_more_content_description?: string
  login?: string
  register?: string
  by_continuing?: string
  privacy_policy?: string
  more?: string
  partner_sites?: string
}
