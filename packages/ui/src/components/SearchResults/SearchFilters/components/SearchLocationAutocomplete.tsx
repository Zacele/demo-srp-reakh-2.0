'use client'

import * as React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Autocomplete, Checkbox, Chip, TextField } from '@mui/material'
import { selectNextLocation, selectTopLevelLocations } from 'lib'
import { GetListingsTypes } from 'types'

const SearchLocationAutocomplete: React.FC<{
  searchForm: GetListingsTypes.SearchForm
}> = ({ searchForm }) => {
  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />

  const [selectLocations, setSelectLocations] = React.useState<GetListingsTypes.PopularLocation[]>([])

  const countCharacterOccurrences = (char: string, str?: string): number => {
    const regex = new RegExp(char, 'g')
    const matches = str && str.match(regex)
    return matches ? matches.length + 1 : 1
  }

  const toggleLocation = (option: GetListingsTypes.PopularLocation) => {
    setSelectLocations(selectNextLocation(option, selectLocations, searchForm?.popular_locations))
  }

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: GetListingsTypes.PopularLocation,
    { selected }: { selected: boolean }
  ) => {
    const numberOfParents = countCharacterOccurrences(' > ', option.id)
    return (
      <li {...props} key={option.slug + option.id} onClick={() => toggleLocation(option)}>
        <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8, paddingLeft: numberOfParents * 24 }} checked={selected} />
        {option.name}
      </li>
    )
  }

  return (
    <Autocomplete
      multiple
      limitTags={1}
      disableCloseOnSelect
      value={selectLocations}
      options={searchForm?.popular_locations}
      getOptionLabel={(option) => option?.name || ''}
      renderOption={renderOption}
      renderTags={(tagValue, getTagProps) => {
        const topLevelLocations = selectTopLevelLocations(searchForm?.popular_locations, tagValue)
        return topLevelLocations.map((option, index) => (
          <Chip {...getTagProps({ index })} label={option.name} onDelete={() => toggleLocation(option)} key={option.id} />
        ))
      }}
      renderInput={(params) => <TextField {...params} placeholder={searchForm.texts.searchPlaceholder} />}
    />
  )
}

export default SearchLocationAutocomplete
