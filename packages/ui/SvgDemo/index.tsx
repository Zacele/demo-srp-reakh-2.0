'use client'

import React from 'react'
import Image from 'next/image'

import BathSvg from '../shared/svgs/Bath.svg'

const SvgDemo: React.FC = () => {
  // @ts-ignore
  return <Image priority src={BathSvg} alt="Bath" />
}

export default SvgDemo
