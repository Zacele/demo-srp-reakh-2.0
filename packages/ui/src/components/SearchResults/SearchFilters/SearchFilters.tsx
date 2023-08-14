'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { usePrevious } from 'react-use'
import { DevTool } from '@hookform/devtools'
import { useOnSubmitFilter } from 'hooks/useOnSubmitFilter'
import { useSearchParams } from 'next/navigation'
import { ISearchForm, ISearchResults, SearchFormInputsType } from 'types'

import OtherFilters from './components/OtherFilters'
import SearchForm from './components/SearchForm'

const SearchFilters = ({
  searchForm,
  texts
}: {
  searchForm: ISearchForm
  texts: ISearchResults['texts']
}) => {
  const searchParams = useSearchParams()
  const { onSubmit } = useOnSubmitFilter()
  const priceMinInParams = searchParams.get('price_min__gte')
  const priceMaxInParams = searchParams.get('price_min__lte')
  const q = searchParams.get('q')
  const methods = useForm<SearchFormInputsType>({
    mode: 'onChange',
    defaultValues: {
      active_tab: 'popularLocations',
      order_by: 'relevance',
      property_type: 'residential',
      search_type: 'sale',
      price_min__gte: priceMinInParams || '',
      price_min__lte: priceMaxInParams || '',
      page_size: 20,
      q: q || ''
    }
  })
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
          <OtherFilters searchForm={searchForm} texts={texts} />
        </form>
      </FormProvider>
      {isDevToolEnabled && <DevTool control={control} />}
    </div>
  )
}

export default SearchFilters
