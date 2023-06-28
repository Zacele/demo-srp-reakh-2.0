'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

import BedSvg from '../shared/svgs/Bed.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Bed = (props: Props) => {
  // @ts-ignore
  return (
    <Image priority src={BedSvg} alt="Bed" width={30} height={30} {...props} />
  )
}

export default Bed
