'use client'

import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const FacebookIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 8 14">
      <path
        d="M7.01242 7.48945L7.40131 5.09332H4.96847V3.53837C4.96847 2.88283 5.30831 2.24386 6.39799 2.24386H7.50413V0.203904C7.50413 0.203904 6.50026 0.0419922 5.54055 0.0419922C3.53683 0.0419922 2.22726 1.18955 2.22726 3.26708V5.09332H0V7.48945H2.22726V13.282C2.67385 13.3482 3.13159 13.3827 3.59788 13.3827C4.06416 13.3827 4.5219 13.3482 4.96847 13.282V7.48945H7.01242Z"
        fill="#77C232"
      />
    </SvgIcon>
  )
}

export default FacebookIcon
