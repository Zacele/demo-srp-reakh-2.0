'use client'
import { StyledComponent } from '@emotion/styled' // Import the required type
import MuiButton, { ButtonProps } from '@mui/material/Button'
import styled from '@mui/material/styles/styled'

const SolidButton: StyledComponent<ButtonProps> = styled(MuiButton)({
  color: '#fff',
  backgroundColor: '#77C232',
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 700,
  height: 40,
  // Generate other state for these buttons
  '&:hover': {
    backgroundColor: '#77C232',
    opacity: 0.8,
    color: '#fff'
  },
  '&:active': {
    backgroundColor: '#77C232',
    opacity: 0.8,
    color: '#fff'
  }
})

const HollowButton: StyledComponent<ButtonProps> = styled(MuiButton)({
  color: '#77C232',
  backgroundColor: 'transparent',
  border: '1px solid #77C232',
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 700,
  height: 40,

  '&:hover': {
    backgroundColor: '#77C232',
    opacity: 0.8,
    color: '#fff'
  },
  '&:active': {
    backgroundColor: '#77C232',
    opacity: 0.8,
    color: '#fff'
  }
})

const StrongButton: StyledComponent<ButtonProps> = styled(MuiButton)({
  color: '#203C3E',
  backgroundColor: 'transparent',
  border: '1px solid #203C3E',
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 700,
  height: 40,

  '&:hover': {
    backgroundColor: '#203C3E',
    opacity: 0.8,
    color: '#fff'
  },
  '&:active': {
    backgroundColor: '#203C3E',
    opacity: 0.8,
    color: '#fff'
  }
})

export { HollowButton, SolidButton, StrongButton }
