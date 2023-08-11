'use client'

import React, { Fragment, MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BadgeIcon from '@mui/icons-material/Badge'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import ConstructionIcon from '@mui/icons-material/Construction'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PinDropIcon from '@mui/icons-material/PinDrop'
import SearchIcon from '@mui/icons-material/Search'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VillaIcon from '@mui/icons-material/Villa'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Checkbox } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { getSuggestions } from 'api'
import clsx from 'clsx'
import { selectNextLocation, selectTopLevelLocations } from 'lib'
import { GetListingsTexts2, GetSuggestionTypes, ISearchForm, PopularLocation } from 'types'
import { SearchFormInputsType } from 'types'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const IconHeader: React.FC<{ type: keyof GetListingsTexts2 }> = ({ type }) => {
  if (type === 'keywords') {
    return <SearchIcon />
  }
  if (type === 'locations') {
    return <LocationOnIcon />
  }
  if (type === 'landmarks') {
    return <PinDropIcon />
  }
  if (type === 'projects') {
    return <ConstructionIcon />
  }
  if (type === 'condos') return <ApartmentIcon />
  if (type === 'borey') return <VillaIcon />
  if (type === 'agents') return <BadgeIcon />
  return <StorefrontIcon />
}

const SearchFormTab = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`search-from-tabpanel-${index}`}
      aria-labelledby={`search-from-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
  font-size: 14px;
`
)

const BoxSearchForm = styled(Box)({
  position: 'absolute',
  width: '700px',
  overflow: 'auto',
  backgroundColor: '#fff',
  maxHeight: '450px',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 999
})

const HeaderBox = styled(Box)({
  backgroundColor: 'rgb(234, 234, 234)',
  fontSize: '14px',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Listbox = styled('ul')(
  ({ theme }) => `
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  max-height: 450px;
  border-radius: 4px;
  z-index: 999;

  & li {
    padding: 4px 0px;
    display: flex;
    width: 100%;
    align-items: center;
  }
`
)

const ListboxOption = styled(Button)({
  justifyContent: 'unset',
  color: '#000',
  textTransform: 'unset',
  fontSize: '16px',
  cursor: 'pointer'
})

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 700px;
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid #E8E8E8;  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: #fff;
    color: rgba(0,0,0,.85);
    height: 40px;
    border-radius: 14px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;

  }
`
)

interface TagProps {
  label: string
  onDelete: MouseEventHandler<SVGSVGElement>
}

const Tag: React.FC<TagProps> = ({ label, onDelete }) => {
  return (
    <div>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  )
}

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
)

const SuggestionButton = styled(Button)(
  ({ theme }) => `
  justify-content: unset;
  color: #000;
  text-transform: unset;
  font-size: 16px;
  padding-left: 16px;

  &.focused {
    background-color: rgb(214, 232, 207)
  }
  `
)

const SearchForm: React.FC<{
  searchForm: ISearchForm
  register: UseFormRegister<SearchFormInputsType>
  setValue: UseFormSetValue<SearchFormInputsType>
}> = ({ searchForm, register, setValue }) => {
  const icon = <CheckCircleIcon fontSize="small" color="disabled" />
  const checkedIcon = <CheckCircleIcon fontSize="small" />
  const [isFocusing, setIsFocusing] = useState(false)
  const [searchFormOpen, setSearchFormOpen] = useState(true)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [searchFormValue, setSearchFormValue] = useState<GetSuggestionTypes.Suggestions | null>(
    null
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const totalSuggestions = useMemo(() => countValues(searchFormValue), [searchFormValue])

  const [currentTab, setCurrentTab] = React.useState(0)

  useEffect(() => {
    const inputCurrent = inputRef.current
    const handleInputChange = () => {
      if (inputCurrent) {
        const inputValue = inputCurrent.value
        if (inputValue.length > 2) {
          setSearchFormOpen(false)
          getSuggestions(inputValue)?.then((data) => setSearchFormValue(data))
        } else {
          setSearchFormOpen(true)
          setSearchFormValue(null)
        }
      }
    }

    if (inputCurrent) {
      inputCurrent.addEventListener('input', handleInputChange)
    }

    return () => {
      if (inputCurrent) {
        inputCurrent.removeEventListener('input', handleInputChange)
      }
    }
  }, [])

  const handleTabChanges = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  const [selectedLocations, setSelectedLocations] = React.useState<PopularLocation[]>([])

  useEffect(() => {
    if (selectedLocations) {
      setValue(
        'q',
        selectTopLevelLocations(searchForm?.popular_locations, selectedLocations)
          .map((item) => 'location: ' + item.id + ';')
          .join('')
      )
    }
  }, [searchForm?.popular_locations, selectedLocations, setValue])

  const toggleLocation = (option: PopularLocation) => {
    setSelectedLocations(
      selectNextLocation(option, selectedLocations, searchForm?.popular_locations)
    )
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      rootRef.current &&
      !rootRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsFocusing(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleFocus = () => setIsFocusing(true)

  const countCharacterOccurrences = (char: string, str?: string): number => {
    const regex = new RegExp(char, 'g')
    const matches = str && str.match(regex)
    return matches ? matches.length + 1 : 1
  }

  function countValues(obj: any): number {
    let count = 0
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key].length > 0) {
        count += obj[key].length
      }
    }
    return count
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault() // Prevent default scroll behavior
        setFocusedIndex((prevIndex) => (prevIndex >= totalSuggestions ? 0 : prevIndex + 1))
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault() // Prevent default scroll behavior
        setFocusedIndex((prevIndex) => (prevIndex <= 0 ? totalSuggestions : prevIndex - 1))
      }
      if (event.key === 'Escape') {
        setIsFocusing(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown) // Attach keydown event listener

    return () => {
      window.removeEventListener('keydown', handleKeyDown) // Clean up event listener on unmount
    }
  }, [totalSuggestions])

  const topTagsLevelLocations = React.useMemo(
    () => selectTopLevelLocations(searchForm?.popular_locations, selectedLocations),
    [searchForm?.popular_locations, selectedLocations]
  )

  let lastIndex = -1

  return (
    <Root>
      <div>
        <InputWrapper className={isFocusing ? 'focused' : ''}>
          {topTagsLevelLocations.map((option: PopularLocation) => (
            <StyledTag
              key={option.name}
              label={option.name}
              onDelete={() => toggleLocation(option)}
            />
          ))}
          <LoadingButton type="submit">
            <SearchIcon />
          </LoadingButton>
          <input
            {...register('q')}
            ref={inputRef}
            onFocus={handleFocus}
            placeholder={searchForm.texts.searchPlaceholder}
            onKeyDown={(event: any) => {
              if (event.key === 'Backspace' && selectedLocations && selectedLocations?.length > 0) {
                const topLevelLocations = selectTopLevelLocations(
                  searchForm?.popular_locations,
                  selectedLocations
                )
                toggleLocation(topLevelLocations[topLevelLocations.length - 1])
              }
            }}
          />
        </InputWrapper>
      </div>
      {searchFormOpen && isFocusing && (
        <BoxSearchForm ref={rootRef}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChanges}
              aria-label="search-form"
              variant="fullWidth"
              centered
            >
              <Tab label={searchForm.texts.popularLocations} {...a11yProps(0)} />
              <Tab label={searchForm.texts.landmarks} {...a11yProps(1)} />
              <Tab label={searchForm.texts.recent} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <SearchFormTab value={currentTab} index={0}>
            <Listbox>
              {searchForm.popular_locations.map((option, index) => {
                const numberOfParents = countCharacterOccurrences(' > ', option.id)
                return (
                  <li key={option.slug + option.id + option.name}>
                    <ListboxOption
                      onClick={() => {
                        setIsFocusing(true)
                        toggleLocation(option)
                      }}
                      style={{ paddingLeft: numberOfParents * 24 }}
                      fullWidth
                    >
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selectedLocations.includes(option)}
                      />
                      {option.name}
                    </ListboxOption>
                  </li>
                )
              })}
            </Listbox>
          </SearchFormTab>
        </BoxSearchForm>
      )}
      {!searchFormOpen && searchFormValue !== null && (
        <BoxSearchForm>
          {Object.keys(searchFormValue).length > 0 &&
            Object.entries(searchFormValue).map(([type, payload]) => {
              if (payload.length === 0) {
                return null
              }
              return (
                <Fragment key={`${type}-${payload}`}>
                  <HeaderBox>
                    {/* @ts-ignore */}
                    <h2>{searchForm.texts[type]}</h2>
                    <IconHeader type={type} />
                  </HeaderBox>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {payload.map(
                      (
                        option: GetSuggestionTypes.Condo &
                          GetSuggestionTypes.Keyword &
                          GetSuggestionTypes.Landmark &
                          GetSuggestionTypes.Listing &
                          GetSuggestionTypes.Office &
                          GetSuggestionTypes.Location
                      ) => {
                        lastIndex += 1
                        const displayName =
                          type !== 'keywords' ? option.full_name || option.name : option.query
                        return (
                          <SuggestionButton
                            className={clsx({
                              focused: lastIndex === focusedIndex
                            })}
                            key={`${type}-${displayName}`}
                          >
                            <Highlighter
                              autoEscape
                              highlightStyle={{ background: '#FFD54F' }}
                              searchWords={inputRef.current?.value.split(' ') || []}
                              textToHighlight={displayName}
                            />
                          </SuggestionButton>
                        )
                      }
                    )}
                  </Box>
                </Fragment>
              )
            })}
        </BoxSearchForm>
      )}
    </Root>
  )
}

export default SearchForm
