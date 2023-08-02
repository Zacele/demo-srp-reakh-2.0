'use client'

import * as React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import { GetListingsTypes, GetPopularLocationsTypes } from 'types'

const SearchLocationAutocomplete: React.FC<{
  popularLocations: GetPopularLocationsTypes.PopularLocations
  searchForm: GetListingsTypes.SearchForm
}> = ({ popularLocations, searchForm }) => {
  console.log('searchForm', searchForm)

  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />
  return (
    <Autocomplete
      multiple
      limitTags={2}
      disableCloseOnSelect
      options={searchForm?.popular_locations}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => {
        return (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={searchForm.texts.searchPlaceholder}
        />
      )}
    />
  )
}

export default SearchLocationAutocomplete
