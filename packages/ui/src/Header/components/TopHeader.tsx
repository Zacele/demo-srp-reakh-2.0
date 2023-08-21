'use client'

import * as React from 'react'
import CallEndTwoToneIcon from '@mui/icons-material/CallEndTwoTone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Select, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import { flagPath, processCurrency } from 'lib'
import Image from 'next/image'
import { IGetEssentials } from 'types/getEssentials.types'

const StyledMuiContainer = styled(Container)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 'auto',
    color: '#203C3E',
    gap: 30,
    '.MuiSvgIcon-root': {
      fill: `${theme.palette.primary.main}`
    },

    '.MuiSelect-iconStandard': {
      fill: '#203C3E',
      marginBottom: '2px'
    }
  }
})

const CurrencyIcon = styled('div')(({ theme }) => {
  return {
    backgroundColor: `${theme.palette.primary.main}`,
    color: '#fff',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: '700',
    marginRight: '8px'
  }
})

const CurrencySelectButton = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #203c3e;
  font-size: 16px;
`

const CountrySelectButton = styled(CurrencySelectButton)`
  text-transform: none;
`

const CurrencyIconSmall = styled('div')(({ theme }) => {
  return {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: '700',
    marginRight: '8px'
  }
})

const TopHeader: React.FC<{ essentialsData: IGetEssentials }> = ({ essentialsData }) => {
  const [currencyOpen, setCurrencyOpen] = React.useState(false)
  const [currency, setCurrency] = React.useState('usd')
  const [country, setCountry] = React.useState('en')

  return (
    <Box sx={{ height: '32px', backgroundColor: '#E8E8E8' }}>
      <StyledMuiContainer>
        <Button
          sx={{ height: '32px', color: '#203C3E', fontSize: '16px', fontWeight: '700' }}
          startIcon={<CallEndTwoToneIcon sx={{ fill: 'primary' }} />}
          variant="text"
        >
          {essentialsData.phone_number}
        </Button>
        <FormControl sx={{ height: '32px' }}>
          <Select
            value={currency}
            sx={{ height: '32px', minWidth: '80px' }}
            onChange={(e) => setCurrency(e.target.value as string)}
            displayEmpty
            inputProps={{ 'aria-label': 'currency-picker' }}
            size="small"
            variant="standard"
            disableUnderline={true}
            IconComponent={ExpandMoreIcon}
            renderValue={(selected) => {
              return (
                <CurrencySelectButton>
                  <CurrencyIconSmall>{processCurrency(selected as string)}</CurrencyIconSmall>
                  {selected}
                </CurrencySelectButton>
              )
            }}
          >
            {essentialsData.currencies.map((currency) => {
              return (
                <MenuItem key={currency.code} value={currency.code}>
                  <CurrencyIcon>{processCurrency(currency.code)}</CurrencyIcon>
                  <ListItemText primary={currency.name} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ height: '32px' }}>
          <Select
            value={country}
            sx={{ height: '32px', minWidth: '100px' }}
            onChange={(e) => setCountry(e.target.value as string)}
            displayEmpty
            inputProps={{ 'aria-label': 'currency-picker' }}
            size="small"
            variant="standard"
            disableUnderline={true}
            IconComponent={ExpandMoreIcon}
            renderValue={(selected) => {
              return (
                <CountrySelectButton>
                  <Image
                    src={flagPath(
                      essentialsData.languages.find((country) => country.language_code === selected)
                        ?.country_code || 'en'
                    )}
                    width={13}
                    height={13}
                    alt={'country-flag'}
                    style={{ marginRight: '16px' }}
                  />
                  {
                    essentialsData.languages.find((country) => country.language_code === selected)
                      ?.name
                  }
                </CountrySelectButton>
              )
            }}
          >
            {essentialsData.languages.map((language) => {
              return (
                <MenuItem key={language.language_code} value={language.language_code}>
                  <Image
                    src={flagPath(language.country_code)}
                    width={30}
                    height={18}
                    alt={language.country_code}
                    style={{ marginRight: '16px' }}
                  />
                  <ListItemText
                    sx={{ fontWeight: 700, color: '#203C3E', textTransform: 'none' }}
                    primary={language.name}
                  />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </StyledMuiContainer>
    </Box>
  )
}

export default TopHeader
