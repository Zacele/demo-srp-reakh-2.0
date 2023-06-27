import React, { Suspense } from 'react'
import Image, { ImageProps, } from 'next/image';

import SquareMeter from '../../../icons/SquareMeter';
import { BathIcon, BedIcon, CarIcon } from '../../..';

import ListingImage from './ListingImage'
import AmenityIcon from './AmenityIcon';




type Props = {
  data: ListingData
  alt?: string
}

export function ListingCard({ data, alt }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden rounded-none shadow-xl sm:rounded-2xl bg-base-100 card-compact card sm:flex-row">
      <div className="w-full bg-gray-100 sm:w-[30%] min-w-[250px] h-64">
        <div className="grid w-full h-full grid-cols-3 sm:grid-cols-3 grid-rows-3 gap-[1px]">
          {data.images.map((image, idx) => (
            <div key={image.id} className={`relative 'w-full h-full ${idx === 0 ? 'sm:row-span-2 sm:col-span-3 row-span-3 col-span-2' : 'row-span-1 col-span-1'}`}>
              <Image
                src={image.thumbnails[2].url}
                alt={alt || ''}
                fill
                sizes='(max-width: 640px) 100vw,(min-width: 768px) 50vw'
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>
      {/* <ListingImage key={image.id} {...image.thumbnails[2]} /> */}
      <div className="flex-1 p-5">
        {/* TITLE */}
        <div>
          <h1 className="text-xl font-bold text-secondary">{data.headline}</h1>
          <h2 className='font-bold text-md text-primary'>{`${data.category_name} | ${data.address}`}</h2>
        </div>
        {/* PRICE */}
        <div className='flex items-baseline '>
          <h1 className='text-4xl font-bold text-secondary'>{`${data.display_price}`}</h1>
          {data?.display_price_per_sqm && data.display_price_per_sqm_with_unit && (
            <p className='pl-2 text-lg font-semibold text-gray-500'>{data?.display_price_per_sqm_with_unit}</p>
          )}
        </div>
        <div className='flex flex-wrap'>
          <AmenityIcon value='test' type='Bath' />
          <AmenityIcon value='test' type='Bed' />
          <AmenityIcon value='test' type='Car' />
          <AmenityIcon value='test' type='SquareMeter' />
          <AmenityIcon value='test' type='Area' />
          <AmenityIcon value='test' type='Bath' />
          <AmenityIcon value='test' type='Bed' />
          <AmenityIcon value='test' type='Car' />
          <AmenityIcon value='test' type='SquareMeter' />
          <AmenityIcon value='test' type='Area' />
        </div>
        {/* TYPE */}
        <div className='flex flex-wrap items-center flex-1 gap-2 pb-3'>
          <h1 className='text-xl font-bold text-secondary'>
            {`${data.listing_type === 'rent' ? 'For Rent' : data.listing_type === 'sale' ? 'For Sale' : 'For sale or rent'}`}
          </h1>
          <div className="font-semibold badge badge-primary badge-outline">Under Offer</div>
          <div className="font-semibold badge badge-error badge-outline">Save 27%</div>
          <div className="font-semibold badge badge-info badge-outline">City View</div>
        </div>
        {/* AMENITIES */}
        {/*DATES */}
        <div className='flex items-center justify-between '>
          <div className='flex-col flex-1 hidden sm:flex'>
            <p className='text-gray-500'>Listed: {data.listed_date}</p>
            <p className='text-gray-500'>Updated: {data.display_date}</p>
          </div>
          <div className="flex justify-end flex-1 gap-3">
            <button className="flex-auto sm:flex-none font-bold text-white btn btn-sm btn-primary w-[120px] text-lg normal-case">Call</button>
            <button className="flex-auto sm:flex-none font-bold text-white btn btn-sm btn-primary w-[120px] text-lg normal-case">Email</button>
          </div>
        </div>
      </div>
    </div>
  )
}
