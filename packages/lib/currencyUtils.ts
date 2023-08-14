import getSymbolFromCurrency from 'currency-symbol-map'
import upperCase from 'lodash/upperCase'
import numeral from 'numeral'

const processCurrency = (currency: string) => {
  return currency.toLowerCase() !== 'aud'
    ? getSymbolFromCurrency(currency)
    : `A${getSymbolFromCurrency(currency)}`
}

const getSymbol = (currency: string) => upperCase(processCurrency(currency))

export const makeCurrencyFormat =
  (currency: string, simple: boolean = false) =>
  (value: number) => {
    return numeral(value)
      .format(simple ? '($ 0a)' : '$ 0,0')
      .replace('$', getSymbol(currency))
  }

export const makeCurrencyRangeFormat = (currency: string) => {
  const format = makeCurrencyFormat(currency, true)
  return (min: number, max: number) => {
    if (min + max === 0) return null
    if (min === null) return `< ${format(max)}`
    if (max === null) return `${format(min)}+`
    return `${format(min)} – ${numeral(max).format('0a')}`
  }
}
