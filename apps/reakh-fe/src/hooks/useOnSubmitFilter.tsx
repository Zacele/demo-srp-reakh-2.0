'use client'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { SearchFormInputsType } from 'types'

export const useOnSubmitFilter = () => {
  const [isPending, startTransition] = React.useTransition()
  const router = useRouter()
  const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => {
    const routerString = queryString.stringify(data, { skipEmptyString: true, skipNull: true })
    router.prefetch(`/?${routerString}`)
    startTransition(() => router.push(`/?${routerString}`))
  }

  return { onSubmit, isPending }
}
