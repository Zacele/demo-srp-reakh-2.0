const formatRange = (min: number, max: number) => {
  if (min && max && min !== max) return `${min} – ${max}`
  if (min) return `${min}`
  if (max) return `${max}`
  return null
}

export default formatRange
