'use client'
import React from 'react'
import Image, { ImageProps } from 'next/image'

import RedHeartSvg from '../../shared/svgs/RedHeart.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Area = (props: Props) => {
  // @ts-ignore
  return (
    <Image
      priority
      src={RedHeartSvg}
      alt="RedHeart"
      width={25}
      height={25}
      {...props}
    />
  )
}

export default Area
