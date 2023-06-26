import { QueryClient } from '@tanstack/react-query'
// @ts-ignore
import { cache } from 'react'

const getQueryClient = cache(() => new QueryClient())
export default getQueryClient
