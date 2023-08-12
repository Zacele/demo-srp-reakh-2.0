'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { usePrevious } from 'react-use'
import { DevTool } from '@hookform/devtools'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { ISearchForm, SearchFormInputsType } from 'types'

import SearchForm from './components/SearchForm'

const SearchFilters = ({ searchForm }: { searchForm: ISearchForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    control,
    formState: { errors }
  } = useForm<SearchFormInputsType>({
    mode: 'onSubmit',
    defaultValues: {
      active_tab: 'popularLocations',
      order_by: 'relevance',
      property_type: 'residential',
      search_type: 'sale',
      page_size: 20
    }
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()
  const prevSearchForm = usePrevious(searchForm)

  const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => {
    const routerString = queryString.stringify(data)
    setIsLoading(true)
    router.push(`/?${routerString}`)
  }

  React.useEffect(() => {
    if (searchForm.results !== prevSearchForm?.results) {
      setIsLoading(false)
    }
  }, [prevSearchForm, searchForm])

  const [isDevToolEnabled, setIsDevToolEnabled] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsDevToolEnabled(true)
  }, [])

  return (
    <div className="pt-3 mx-auto xl:container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchForm
          setValue={setValue}
          register={register}
          searchForm={searchForm}
          isLoading={isLoading}
        />
      </form>
      {isDevToolEnabled && <DevTool control={control} />}
    </div>
  )
}

export default SearchFilters
