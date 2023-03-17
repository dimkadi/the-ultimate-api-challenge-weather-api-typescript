export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'NE'
  if (deg > 76 && deg <= 105) return 'E'
  if (deg > 105 && deg <= 165) return 'SE'
  if (deg > 166 && deg <= 195) return 'S'
  if (deg > 195 && deg <= 255) return 'SW'
  if (deg > 255 && deg <= 285) return 'W'
  if (deg > 285 && deg <= 345) return 'NW'
  return 'N'
}


export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Dry'
  if (level <= 65) return 'A bit humid'
  return 'Very humid'
}


export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return 'Dangerously foggy'
  if (number <= 500) return 'Foggy'
  if (number <= 2000) return 'Hazy'
  return 'Clear'
}

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}


export const getPop = (value: number): string => {
  if (value <= 0.33) return 'Low'
  if (value <= 0.66) return 'Moderate'
  return 'High'
}

