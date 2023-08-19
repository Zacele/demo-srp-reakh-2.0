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
}> = ({ searchParams, listingData }) => {
  const { onSubmit } = useOnSubmitFilter()

  const methods = useForm<SearchFormInputsType>({
    mode: 'onChange',
    defaultValues: {
      ...searchParams
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
  const searchTypeInParams = searchParams?.search_type

  React.useEffect(() => {
    register('search_type')
  }, [register])

  React.useEffect(() => {
    if (searchTypeInParams) {
      setValue('search_type', searchTypeInParams)
      return
    }
    setValue('search_type', 'sale')
  }, [searchTypeInParams, setValue])

  const [isDevToolEnabled, setIsDevToolEnabled] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsDevToolEnabled(true)
  }, [])

  return (
    <div className="pt-3 mx-auto xl:container">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchForm
            setValue={setValue}
            register={register}
            searchForm={searchForm}
            isLoading={isLoading}
          />
          <FilterGroups searchForm={searchForm} texts={texts} />
        </form>
      </FormProvider>
      {isDevToolEnabled && <DevTool control={control} />}
    </div>
  )
}

export default SearchFilters
