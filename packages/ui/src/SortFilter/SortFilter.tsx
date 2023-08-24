'use client'

import React from 'react'
import Select, { components, type ControlProps, type DropdownIndicatorProps } from 'react-select'
import useCreateQuery from 'hooks/useCreateQuery'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ISearchForm } from 'types'

import SortIcon from './SortIcon'

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="w-4 h-4">
        <SortIcon />
      </div>
    </components.DropdownIndicator>
  )
}

const Control = ({ children, ...props }: ControlProps) => {
  // @ts-ignore
  const { sortText } = props.selectProps
  return (
    <components.Control {...props}>
      {sortText}: {children}
    </components.Control>
  )
}

const SortFilter: React.FC<{ searchForm: ISearchForm }> = ({ searchForm }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const orderByParams = searchParams.get('order_by') || 'relevance'

  const { createQueryString } = useCreateQuery()

  return (
    <Select
      instanceId={'sort-filter'}
      onChange={(option) =>
        // @ts-ignore
        router.push(pathname + '?' + createQueryString('order_by', option?.value || 'relevance'))
      }
      options={searchForm.sort_options}
      value={
        searchForm.sort_options.find((option) => option.value === orderByParams) ||
        searchForm.sort_options[0]
      }
      isSearchable={false}
      // @ts-ignore
      sortText={searchForm.sort_text || 'Sort'}
      components={{
        // @ts-ignore
        DropdownIndicator,
        // @ts-ignore
        Control
      }}
      styles={{
        indicatorSeparator: () => ({ display: 'none' }),
        control: (provided) => ({
          ...provided,
          height: '30px',
          minHeight: '30px',
          border: '1px solid #E8E8E8',
          fontSize: '18px',
          paddingLeft: '12px'
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#77C232',
          fontWeight: 700,
          marginLeft: 6
        }),
        dropdownIndicator: (styles) => ({
          ...styles,
          paddingTop: 0,
          paddingBottom: 0
        }),
        clearIndicator: (styles) => ({
          ...styles,
          paddingTop: 0,
          paddingBottom: 0
        })
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        height: 30,
        colors: {
          ...theme.colors,
          primary25: '#90b072',
          primary: '#77C232',
          primary50: '#90b072'
        }
      })}
    />
  )
}

export default SortFilter
