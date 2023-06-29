import AmenityIcon from "./AmenityIcon"
import ListingImages from "./ListingImages";

type Props = {
  data: ListingData
  alt?: string
}


export function ListingCard({ data, alt }: Props) {
  return (
    <div className="relative mb-5 sm:h-64">
      <div className="bg-info before:border-r-[#263996] before:border-t-[#263996] ribbon top-5">
        Featured
      </div>
      <div className="items-center justify-center w-full h-full overflow-hidden transition-shadow duration-300 rounded-none shadow-lg hover:shadow-primary bg-slate-50 sm:rounded-2xl card-compact card sm:flex-row">
        <ListingImages data={data?.images} alt={alt} onHeartClick={val => alert(val)} />
        <div className="flex flex-col justify-between w-full h-full p-5">
          {/* TITLE */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-secondary">{data.headline}</h1>
            <h2 className='font-bold text-md text-primary'>{`${data.category_name} | ${data.address}`}</h2>
          </div>
          {/* PRICE */}
          <div className='flex items-baseline flex-1'>
            <h1 className='text-4xl font-bold text-secondary'>{`${data.display_price}`}</h1>
            {data?.display_price_per_sqm && data.display_price_per_sqm_with_unit && (
              <p className='pl-2 text-lg font-semibold text-gray-500'>{data?.display_price_per_sqm_with_unit}</p>
            )}
          </div>
          {/* TYPE */}
          <div className='flex flex-wrap items-center flex-1 gap-2 pb-3 '>
            <h1 className='text-xl font-bold text-secondary'>
              {`${data.listing_type === 'rent' ? 'For Rent' : data.listing_type === 'sale' ? 'For Sale' : 'For sale or rent'}`}
            </h1>
            <div className="font-semibold badge badge-primary badge-outline">Under Offer</div>
            <div className="font-semibold badge badge-error badge-outline">Save 27%</div>
            <div className="font-semibold badge badge-info badge-outline">City View</div>
          </div>
          {/* AMENITIES */}
          <div className='flex flex-wrap pb-3'>
            <AmenityIcon value='1' type='Bath' />
            <AmenityIcon value='2' type='Bed' />
            <AmenityIcon value='3' type='Car' />
            <AmenityIcon value='4' type='Area' />
            <AmenityIcon value='5' type='SquareMeter' />
          </div>
          {/*DATES */}
          <div className='flex items-center justify-between'>
            <div className='flex-col flex-1 hidden sm:flex'>
              <p className='text-gray-500 truncate'>Listed: {data.listed_date}</p>
              <p className='text-gray-500 truncate'>Updated: {data.display_date}</p>
            </div>
            <div className="flex justify-end flex-1 gap-3">
              <button className="flex-auto sm:flex-none font-bold text-white btn btn-sm btn-primary w-[120px] text-lg normal-case">Call</button>
              <button className="flex-auto sm:flex-none font-bold text-white btn btn-sm btn-primary w-[120px] text-lg normal-case">Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
