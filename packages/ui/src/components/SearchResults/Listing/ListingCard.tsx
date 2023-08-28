import clsx from 'clsx'
import { Result, Texts } from 'types'

import AmenityIcon from './AmenityIcon'
import ListingImages from './ListingImages'
import NestedListing from './NestedListing'
// import NestedListingCard from "./NestedListingCard";

type Props = {
  data: Result
  texts: Texts
  alt?: string
}

export function ListingCard({ data, alt, texts }: Props) {
  const hasNested = data.nested.length > 0

  const returnListingType = () => {
    if (data.listing_type === 'rent') {
      return 'For Rent'
    }
    if (data.listing_type === 'sale') {
      return 'For Sale'
    }
    return 'For sale or rent'
  }

  const priceValueDisplay = () => {
    if (data.display_price !== 'POA' && data.display_price !== '') {
      return data.display_price
    }
    if (data.display_rent !== 'POA' && data.display_price === '' && data.display_rent !== '') {
      return data.display_rent
    }
    return 'POA'
  }

  return (
    <div className="relative mb-6">
      {data.labels.length > 0 && (
        <div className="bg-info before:border-r-[#263996] before:border-t-[#263996] ribbon top-5">
          {data.labels[0].label === 'Featured' && data.labels[0].label}
        </div>
      )}

      <div
        className={clsx(
          'h-[256px] items-center justify-center w-full overflow-hidden transition-shadow duration-300 shadow-lg hover:shadow-primary bg-slate-50 rounded-none sm:rounded-2xl card-compact card sm:flex-row',
          {
            'sm:rounded-b-none': hasNested
          }
        )}
      >
        <ListingImages data={data?.images} alt={alt} onHeartClick={(val) => alert(val)} />
        <div className="flex flex-col justify-between w-full h-full p-5">
          {/* TITLE */}
          <div className="flex-1">
            <h1
              className={clsx('font-bold text-secondary', {
                'text-base': data.headline.length > 70,
                'text-xl': data.headline.length <= 70
              })}
            >
              {data.headline}
            </h1>
            <h2 className="font-bold text-md text-primary">{`${data.category_name} | ${data.address}`}</h2>
          </div>
          {/* PRICE */}
          <div className="flex items-baseline flex-1">
            <h1 className="text-4xl font-bold text-secondary">{priceValueDisplay()}</h1>
            {data?.display_price_per_sqm && data.display_price_per_sqm_with_unit && (
              <p className="pl-2 text-lg font-semibold text-gray-500">
                {data?.display_price_per_sqm_with_unit}
              </p>
            )}
          </div>
          {/* TYPE */}
          <div className="flex flex-wrap items-center flex-1 gap-2 pb-3 ">
            <h1 className="text-xl font-bold text-secondary">{returnListingType()}</h1>
            {data.ribbon && (
              <div className="font-semibold badge badge-info badge-outline">{data.ribbon}</div>
            )}
            {/* {data.labels.length > 0 && data.labels.filter((label) => label.kind !== 'featured').map((item) => {
              return (
                <div key={item.kind} className={clsx('font-semibold badge badge-primary badge-outline')}>Under Offer</div>
              )
            })} */}
            {/* <div className="font-semibold badge badge-error badge-outline">Save 27%</div> */}
            {/* <div className="font-semibold badge badge-info badge-outline">City View</div> */}
          </div>
          {/* AMENITIES */}
          <div className="flex flex-wrap pb-3">
            {data.specifications.detail.map((amenity) => (
              <AmenityIcon key={amenity.label} value={amenity.short_label} type="Area" />
            ))}
          </div>
          {/*DATES */}
          <div className="flex items-center justify-between">
            <div className="flex-col flex-1 hidden sm:flex">
              <p className="text-base leading-4 text-gray-500 truncate">
                {texts.listed}: {data.display_date}
              </p>
              <p className="text-base leading-4 text-gray-500 truncate">
                {texts.updated}: {data.display_date}
              </p>
            </div>
            <div className="flex justify-end flex-1 gap-3">
              <button className="btn-primary-reakh">Call</button>
              <button className="btn-primary-reakh">{texts.email}</button>
            </div>
          </div>
        </div>
        {/* NESTED LISTINGS */}
      </div>
      {hasNested && (
        <NestedListing
          displayRent={data.listing_type === 'rent' || data.listing_type === 'sale/rent'}
          data={data.nested}
        />
      )}
    </div>
  )
}
