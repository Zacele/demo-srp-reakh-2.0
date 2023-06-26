import axios from '../axios'

interface IResultQuery {
  active_tab?: string
  order_by?: string
  page_size?: number
  pathname?: '/buy' | '/rent'
  property_type?: string
  // search_languages: 'en,km,zh-hans,fr,th',
  search_type?: 'sale' | 'rent'
}

const getResults = async (query: IResultQuery) => {
  const res = await axios.get('/api/portal/pages/results/', {
    params: { page_size: 10, ...query }
  })
  return res.data
}

export { getResults }
