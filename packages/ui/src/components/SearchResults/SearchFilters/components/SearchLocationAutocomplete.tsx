'use client'

import * as React from 'react'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import { styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { convertLocations } from 'lib'
import { GetListingsTypes, GetPopularLocationsTypes } from 'types'

const StyledDropdownSelect = styled(DropdownTreeSelect)`
  font-size: 17.892px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  :is(:not(details)) .dropdown-content {
    /* visibility: visible;
    opacity: 1; */
    --tw-scale-x: unset;
    --tw-scale-y: unset;
  }

  .dropdown-content {
    width: 700px;
    z-index: 10;
    border-radius: 15px;
    background: #fff;
    padding: 8px 40px;

    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    .node-label {
      padding-left: 12px;
    }
    .toggle {
      &.expanded {
        display: none;
      }
    }
  }
  .search {
    width: 700px;
    height: 40px;
    &:focus {
      outline: none;
    }
  }
  .dropdown {
    .tag-list {
      display: flex;
      border-radius: 13.164px;
      border: 0.878px solid #e8e8e8;
      background: #fff;
      padding: 8px;
    }
  }

  .checkbox-item {
    position: relative;
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    vertical-align: middle;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      border: 2px solid #aaa;
      transition: all 0.3s ease-in-out;
    }
    &:checked {
      &:before {
        height: 50%;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        border-top-style: none;
        border-right-style: none;
        border-color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`

const SearchLocationAutocomplete: React.FC<{
  popularLocations: GetPopularLocationsTypes.PopularLocations
  texts: GetListingsTypes.SearchForm['texts']
}> = ({ popularLocations, texts }) => {
  const data = convertLocations(popularLocations)
  const theme = useTheme()

  return (
    <StyledDropdownSelect
      theme={theme}
      data={data}
      showDropdown="always"
      texts={{ placeholder: texts.searchPlaceholder }}
    />
  )
}

export default SearchLocationAutocomplete
