import getSymbolFromCurrency from 'currency-symbol-map'
import upperCase from 'lodash/upperCase'
import numeral from 'numeral'

const composeFunctions =
  <T extends (...args: any[]) => any>(
    init: T,
    ...rest: T[]
  ): ((...args: Parameters<T>) => ReturnType<T>) =>
  (...args: Parameters<T>): ReturnType<T> =>
    rest.reduce((acc, next) => next(acc), init(...args))

const processCurrency = (currency: string) =>
  currency.toLowerCase() !== 'aud'
    ? getSymbolFromCurrency(currency)
    : `A${getSymbolFromCurrency(currency)}`

const getSymbol = composeFunctions(upperCase, processCurrency)

export const makeCurrencyFormat =
  (currency: string, simple: boolean = false) =>
  (value: string) => {
    return (
      numeral(value)
        .format(simple ? '($ 0a)' : '$ 0,0')
        // @ts-ignore
        .replace('$', getSymbol(currency))
    )
  }

export const makeCurrencyRangeFormat = (currency: string) => {
  const format = makeCurrencyFormat(currency, true)
  return (min: string, max: string) => {
    if (Number(min) + Number(max) === 0) return null
    if (min === null) return `< ${format(max)}`
    if (max === null) return `${format(min)}+`
    return `${format(min)} – ${numeral(max).format('0a')}`
  }
}
