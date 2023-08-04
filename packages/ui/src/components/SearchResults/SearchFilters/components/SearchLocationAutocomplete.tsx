'use client'

import * as React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import { selectNextLocation } from 'lib'
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

  const existing = (location: GetListingsTypes.PopularLocation) => selectLocations.length > 0 && selectLocations[0].id === location.id

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: GetListingsTypes.PopularLocation,
    { selected }: { selected: boolean }
  ) => {
    const numberOfParents = countCharacterOccurrences(' > ', option.id)
    return (
      <li {...props} key={option.slug + option.id}>
        <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8, paddingLeft: numberOfParents * 32 }} checked={selected} />
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
      onChange={(event, newValue) => {
        setSelectLocations(selectNextLocation(newValue[0], selectLocations, searchForm?.popular_locations))
      }}
      options={searchForm?.popular_locations}
      getOptionLabel={(option) => option?.name || ''}
      renderOption={renderOption}
      renderInput={(params) => <TextField {...params} placeholder={searchForm.texts.searchPlaceholder} />}
    />
  )
}

export default SearchLocationAutocomplete
