'use client'
import React from 'react'
import Image, { ImageProps } from 'next/image'

import HeatSvg from '../../shared/svgs/Heart.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Area = (props: Props) => {
  // @ts-ignore
  return (
    <Image
      priority
      src={HeatSvg}
      alt="Heart"
      width={25}
      height={25}
      {...props}
    />
  )
}

export default Area
