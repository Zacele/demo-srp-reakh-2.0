import formatRange from './formatRange'

export const NUMBER_SELECT__MIN = 1
export const NUMBER_SELECT__MAX = 5

const formatBedsRange = (bedroomsGte: number, bedroomsLte: number) => {
  const safeMax = typeof bedroomsGte === 'number' ? bedroomsLte || NUMBER_SELECT__MAX : bedroomsLte
  const tail = bedroomsGte === NUMBER_SELECT__MAX || safeMax === NUMBER_SELECT__MAX ? '+' : ''
  const body = formatRange(bedroomsGte, safeMax)
  return body && `${body}${tail}`
}

export default formatBedsRange
