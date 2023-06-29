'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

import BathSvg from '../../shared/svgs/Bath.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Bath = (props: Props) => {
  // @ts-ignore
  return (
    <Image
      priority
      src={BathSvg}
      alt="Bath"
      width={25}
      height={25}
      {...props}
    />
  )
}

export default Bath
