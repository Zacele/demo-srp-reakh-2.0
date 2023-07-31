'use client'

import React from 'react'

const AppLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}) => {
  return <React.Fragment>{children}</React.Fragment>
}

export default AppLayout
