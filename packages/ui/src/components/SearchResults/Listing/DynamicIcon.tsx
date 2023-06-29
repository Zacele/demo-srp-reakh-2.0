'use client'
import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { ImageProps } from 'next/image'

type IconProps = React.ComponentType<Omit<ImageProps, 'src' | 'alt'>>
type selector = Omit<ImageProps, 'src' | 'alt'> & {
    name: string
}

export default function DynamicIcon(props: selector) {
    const Icon: IconProps = useMemo(() => dynamic(() => import(`../../../icons/${props?.name}`)), [props?.name])
    return <Icon {...props} />
}
