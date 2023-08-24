'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const useCreateQuery = () => {
  const searchParams = useSearchParams()!

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (params.has('page')) {
        params.set('page', '1')
      }
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return { createQueryString }
}

export default useCreateQuery
