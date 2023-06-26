'use client'
import { Container } from '@mui/material'
import { getAppEssentialData } from '@src/apis/shared'
import { useQuery } from '@tanstack/react-query'
import * as React from 'react'

const Header = () => {
  const { data } = useQuery({
    queryKey: ['essential_data'],
    queryFn: getAppEssentialData
  })

  return (
    <>
      <Container maxWidth="lg">This is the layout</Container>
    </>
  )
}

export default Header
