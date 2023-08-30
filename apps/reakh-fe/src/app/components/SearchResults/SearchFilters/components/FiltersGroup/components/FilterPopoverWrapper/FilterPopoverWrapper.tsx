'use client'

import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, styled, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import { ISearchForm } from 'types'

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
  filterStatus?: string
  searchFormTexts?: ISearchForm['texts']
}> = ({ filterId, children, buttonText, filterStatus, searchFormTexts }) => {
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
        onClick={handleClick}
        endIcon={
          open ? (
            <ExpandLessIcon sx={{ color: '#203C3E' }} />
          ) : (
            <ExpandMoreIcon sx={{ color: '#203C3E' }} />
          )
        }
      >
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 400, color: '#203C3E', lineHeight: 1 }}>
            {buttonText}
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#3249C2', lineHeight: 1 }}>
            {filterStatus ?? searchFormTexts.any}
          </Typography>
        </Box>
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
