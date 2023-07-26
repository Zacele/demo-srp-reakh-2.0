'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

import CarSvg from '../../shared/svgs/Car.svg'

type Props = Omit<ImageProps, 'src' | 'alt'>
const Car = (props: Props) => {
  // @ts-ignore
  return (
    <Image priority src={CarSvg} alt="Car" width={30} height={30} {...props} />
  )
}

export default Car
