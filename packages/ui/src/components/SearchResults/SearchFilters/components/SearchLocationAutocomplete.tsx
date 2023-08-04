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

  const [selectLocations, setSelectLocations] = React.useState<(string | GetListingsTypes.PopularLocation)[] | undefined>()

  const countCharacterOccurrences = (char: string, str?: string): number => {
    const regex = new RegExp(char, 'g')
    const matches = str && str.match(regex)
    return matches ? matches.length + 1 : 1
  }

  const toggleLocation = (option: GetListingsTypes.PopularLocation) => {
    // @ts-ignore
    setSelectLocations(selectNextLocation(option, selectLocations, searchForm?.popular_locations))
  }

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: GetListingsTypes.PopularLocation,
    { selected }: { selected: boolean }
  ) => {
    const numberOfParents = countCharacterOccurrences(' > ', option.id)
    // @ts-ignore
    if (selectLocations && typeof selectLocations === 'string' && selectLocations.length > 1) {
      return null
    }
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
      freeSolo
      value={selectLocations}
      options={searchForm?.popular_locations}
      // @ts-ignore
      getOptionLabel={(option) => option?.name || ''}
      renderOption={renderOption}
      renderTags={(tagValue, getTagProps) => {
        const topLevelLocations = selectTopLevelLocations(searchForm?.popular_locations, tagValue)
        return topLevelLocations.map((option, index) => (
          <Chip {...getTagProps({ index })} label={option.name} onDelete={() => toggleLocation(option)} key={option.id} />
        ))
      }}
      renderInput={(params) => (
        // @ts-ignore
        <TextField {...params} placeholder={searchForm.texts.searchPlaceholder} onChange={(e) => setSelectLocations(e.target.value)} />
      )}
    />
  )
}

export default SearchLocationAutocomplete
