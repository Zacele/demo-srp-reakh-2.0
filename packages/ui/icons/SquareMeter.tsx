import React from 'react'
import Image, { ImageProps } from 'next/image'

import SqmSvg from '../shared/svgs/SquareMeter.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const SquareMeter = (props: Props) => {
    // @ts-ignore
    return <Image priority src={SqmSvg} alt="Sqm" width={20} height={20} {...props} />
}

export default SquareMeter
