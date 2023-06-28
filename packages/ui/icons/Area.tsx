'use client'
import React from 'react'
import Image, { ImageProps } from 'next/image'

import AreaSvg from '../shared/svgs/Area.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Area = (props: Props) => {
  // @ts-ignore
  return (
    <Image
      priority
      src={AreaSvg}
      alt="Area"
      width={25}
      height={25}
      {...props}
    />
  )
}

export default Area
