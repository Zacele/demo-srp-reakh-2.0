import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { ImageProps } from 'next/image'

type AmenityIconProps = {
    value: string | number
    // type: keyof typeof Amenities
    type: 'Area' | 'Bath' | 'Bed' | 'Car' | 'SquareMeter'
}
// enum Amenities {
//     Area,
//     Bath,
//     Bed,
//     Car,
//     SquareMeter,
// }

type IconProps = React.ComponentType<Omit<ImageProps, 'src' | 'alt'>>

const AmenityIcon = (props: AmenityIconProps) => {
    const Icon: IconProps = useMemo(() => dynamic(() => import(`../../../icons/${props.type}`)), [props.type])
    return (
        <div className='flex items-center gap-1 mr-2'>
            <Icon className='mb-3' />
            <p className='font-semibold'>{props?.value}</p>
        </div>
    )
}

export default AmenityIcon
