'use client'

import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'

const PopoverButton = styled(Button)`
  background-color: #f0f0f0;
  height: 40px;
  border-radius: 10px;
  text-transform: unset;
  box-shadow: none;
  margin-right: 10px;
  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #f0f0f0;
  }
`

const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }
`

const FilterPopoverWrapper: React.FC<{
  filterId: string
  children: JSX.Element | JSX.Element[]
  buttonText: string
}> = ({ filterId, children, buttonText }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? filterId : undefined

  return (
    <React.Fragment>
      <PopoverButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        {buttonText}
      </PopoverButton>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {children}
      </StyledPopover>
    </React.Fragment>
  )
}

export default FilterPopoverWrapper
