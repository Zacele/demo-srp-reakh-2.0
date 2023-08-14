'use client'
import { SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { SearchFormInputsType } from 'types'

export const useOnSubmitFilter = () => {
  const router = useRouter()
  const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => {
    const routerString = queryString.stringify(data)
    router.push(`/?${routerString}`)
  }

  return { onSubmit }
}
