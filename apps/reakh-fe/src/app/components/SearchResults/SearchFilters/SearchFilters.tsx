'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { usePrevious } from 'react-use'
import { DevTool } from '@hookform/devtools'
import { useOnSubmitFilter } from '@src/hooks/useOnSubmitFilter'
import { ISearchResults, SearchFormInputsType } from 'types'

import FilterGroups from './components/FiltersGroup'
import SearchForm from './components/SearchForm'

const SearchFilters: React.FC<{
  searchParams: SearchFormInputsType
  listingData: ISearchResults
  searchType: 'sale' | 'rent'
}> = ({ searchParams, listingData, searchType }) => {
  const { onSubmit } = useOnSubmitFilter()

  const methods = useForm<SearchFormInputsType>({
    mode: 'onChange',
    defaultValues: {
      ...searchParams,
      active_tab: 'popularLocations' || searchParams?.active_tab,
      search_type: searchType,
      order_by: 'relevance' || searchParams?.order_by,
      property_type: 'residential' || searchParams?.property_type
    }
  })

  const { search_form: searchForm, texts } = listingData
  const [isLoading, setIsLoading] = React.useState(false)
  const prevSearchForm = usePrevious(searchForm)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = methods

  React.useEffect(() => {
    if (searchForm.results !== prevSearchForm?.results) {
      setIsLoading(false)
    }
  }, [prevSearchForm, searchForm])

  React.useEffect(() => {
    register('search_type')
  }, [register])

  const [isDevToolEnabled, setIsDevToolEnabled] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsDevToolEnabled(true)
  }, [])

  return (
    <div className="container max-w-[1200px] px-6 pt-3 mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchForm
            setValue={setValue}
            register={register}
            searchForm={searchForm}
            isLoading={isLoading}
          />
          <FilterGroups searchType={searchType} searchForm={searchForm} texts={texts} />
        </form>
      </FormProvider>
      {isDevToolEnabled && <DevTool control={control} />}
    </div>
  )
}

export default SearchFilters
