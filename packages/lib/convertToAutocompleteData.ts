import { GetSuggestionTypes } from 'types'

export interface AutocompleteOption {
  value: string
  name: string
  type: string
  group?: string
}

const convertToAutocompleteData = (
  suggestions: GetSuggestionTypes.Suggestions
): AutocompleteOption[] => {
  const { keywords, locations, landmarks, projects, condos, offices, listings } = suggestions
  const autocompleteData: AutocompleteOption[] = []

  // Convert keywords to autocomplete options
  const keywordOptions: AutocompleteOption[] = keywords.map((keyword) => ({
    value: keyword.query,
    name: keyword.query,
    type: 'keyword',
    group: 'Keywords'
  }))
  autocompleteData.push(...keywordOptions)

  // Convert locations, landmarks, projects, condos, offices, and listings to autocomplete options
  const convertToOptions = (items: any[], type: string, group: string) => {
    if (items && items.length) {
      return items.map((item) => ({
        value: item.redirect_url || item.url || item.pathname_value || '',
        name: item.name || item.full_name || '',
        type,
        group
      }))
    }
    return []
  }

  autocompleteData.push(
    ...convertToOptions(locations, 'location', 'Locations'),
    ...convertToOptions(landmarks, 'landmark', 'Landmarks'),
    ...convertToOptions(projects, 'project', 'Projects'),
    ...convertToOptions(condos, 'condo', 'Condos'),
    ...convertToOptions(offices, 'office', 'Offices'),
    ...convertToOptions(listings, 'listing', 'Listings')
  )

  return autocompleteData
}

export default convertToAutocompleteData
