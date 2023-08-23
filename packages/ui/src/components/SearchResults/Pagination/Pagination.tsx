'use client'

import React from 'react'
import MUIPagination from '@mui/material/Pagination'
import useCreateQuery from 'hooks/useCreateQuery'
import { usePathname, useRouter } from 'next/navigation'

type PaginationProps = {
  totalCount: number
  currentPage: string
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, currentPage }) => {
  const { createQueryString } = useCreateQuery()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <MUIPagination
      onChange={(_, page: number) =>
        router.push(pathname + '?' + createQueryString('page', page.toString()))
      }
      page={Number(currentPage)}
      hidePrevButton={currentPage === '1'}
      hideNextButton={currentPage === totalCount.toString()}
      count={totalCount}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default Pagination
