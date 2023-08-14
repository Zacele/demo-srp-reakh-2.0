import React from 'react'

export const getOptions = (data: any[]) =>
  data.map(({ label, value }: { label: string; value: number }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))

export const defaultOption = (data: { value: number; label: string }) => {
  if (!data) return null
  return <option value="">{data.label}</option>
}

export const fixMinMax = (min: number, max: number) => {
  if (min && max) {
    return {
      max: Math.max(min, max),
      min: Math.min(min, max)
    }
  }
  return { min, max }
}

export const defaultLabelsFormat = ({ from, to, labelFrom, labelTo }) => ({
  fromLabel: from === null ? { labelFrom } : `${labelFrom} ${from}`,
  toLabel: to === null ? { labelTo } : `${labelTo} ${to}`
})
