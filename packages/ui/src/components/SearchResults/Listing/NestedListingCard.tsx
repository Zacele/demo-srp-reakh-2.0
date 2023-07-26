'use client'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image'

import AmenityIcon from './AmenityIcon';

type ListingProps = {
    data: NestedListing
    isLast: boolean
}
function NestedListingCard({ data, isLast }: ListingProps): React.ReactNode {
    return (
        <div className={`flex-row flex items-center justify-center w-full mt-[2px] overflow-hidden transition-shadow duration-300 rounded-none shadow-lg hover:shadow-primary bg-slate-50 card-compact card h-32 ${isLast ? 'sm:rounded-b-2xl' : ''}`}>
            <div className="relative w-[180px] h-full cursor-pointer">
                <Image
                    priority
                    src={data.images[0].thumbnails[0].url}
                    alt={data.headline}
                    fill
                    sizes='(max-width: 640px) 100vw,(min-width: 768px) 50vw'
                    className='object-cover'
                />
            </div>
            <div className="flex flex-col justify-between flex-1 w-full h-full px-5 py-2">
                <div className='flex items-baseline'>
                    <h1 className='text-2xl font-bold text-secondary'>{`${data.display_price}`}</h1>
                    {data?.display_price_per_sqm && data.display_price_per_sqm_with_unit && (
                        <p className='pl-2 text-lg font-semibold text-gray-400'>{data?.display_price_per_sqm_with_unit}</p>
                    )}
                </div>
                <div className="">
                    <h1 className="font-bold truncate max-w-[230px] sm:max-w-[390px] text-md text-secondary">{data.headline}</h1>
                </div>
                <div className='flex items-center flex-1 gap-2'>
                    <div className="font-semibold badge badge-primary badge-sm badge-outline">Under Offer</div>
                    <div className="font-semibold badge badge-error badge-sm badge-outline">Save 27%</div>
                    <div className="font-semibold badge badge-info badge-sm badge-outline">City View</div>
                </div>
                <div className='flex flex-wrap'>
                    {data.specifications.detail.map(amenity => (
                        <AmenityIcon key={amenity.label} value={amenity.short_label} type='Area' size={4} />
                    ))}
                </div>
            </div>
            <div className="cursor-pointer sm:p-2 text-primary">
                {/* this icon forced us to use `use client` for some reason */}
                <ArrowForwardIosIcon fontSize='small' />
            </div>
        </div >
    )
}

export default NestedListingCard

