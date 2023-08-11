'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { ISearchForm, SearchFormInputsType } from 'types'

import SearchForm from './components/SearchForm'

const SearchFilters = ({ searchForm }: { searchForm: ISearchForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<SearchFormInputsType>({
    defaultValues: {
      active_tab: 'popularLocations',
      order_by: 'relevance',
      property_type: 'residential',
      search_type: 'sale'
    }
  })
  const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => console.log(data)

  return (
    <div className="pt-3 mx-auto xl:container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchForm setValue={setValue} register={register} searchForm={searchForm} />
      </form>
    </div>
  )
}

export default SearchFilters
