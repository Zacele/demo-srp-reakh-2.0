'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const useCreateQuery = () => {
  const searchParams = useSearchParams()!

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return { createQueryString }
}

export default useCreateQuery
