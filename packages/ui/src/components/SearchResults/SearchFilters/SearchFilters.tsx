'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { ISearchForm, SearchFormInputsType } from 'types'

import SearchForm from './components/SearchForm'

const SearchFilters = ({ searchForm }: { searchForm: ISearchForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors }
  } = useForm<SearchFormInputsType>({
    mode: 'onChange',
    defaultValues: {
      active_tab: 'popularLocations',
      order_by: 'relevance',
      property_type: 'residential',
      search_type: 'sale'
    }
  })
  const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => console.log(data)

  const [isDevToolEnabled, setIsDevToolEnabled] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsDevToolEnabled(true)
  }, [])

  return (
    <div className="pt-3 mx-auto xl:container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchForm setValue={setValue} register={register} searchForm={searchForm} />
      </form>
      {isDevToolEnabled && <DevTool control={control} />}
    </div>
  )
}

export default SearchFilters
