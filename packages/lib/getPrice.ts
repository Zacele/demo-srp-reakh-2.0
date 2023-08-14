import { ISearchForm } from 'types'

const getPrice = ({
  search_type,
  price_sell_total,
  price_rent_per_month
}: {
  search_type: ISearchForm['search_type']
  price_sell_total: ISearchForm['price_sell_total']
  price_rent_per_month: ISearchForm['price_rent_per_month']
}) => {
  if (search_type === 'sale') return price_sell_total
  if (search_type === 'rent') return price_rent_per_month
  return []
}

export default getPrice
