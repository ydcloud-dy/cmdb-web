// Helper to convert memory from units Ki, Mi, Gi, Ti, Pi to bytes and vise versa
const base = 1024
const suffixes = ['K', 'M', 'G', 'T', 'P', 'E'] // Equivalents: Ki, Mi, Gi, Ti, Pi, Ei
export function unitsToBytes(value) {
  if (!suffixes.some((suffix) => value.includes(suffix))) {
    return parseFloat(value)
  }
  const suffix = value.replace(/[0-9]|i|\./g, '')
  const index = suffixes.indexOf(suffix)
  return parseInt((parseFloat(value) * Math.pow(base, index + 1)).toFixed(1))
}
export function bytesToUnits(bytes, precision = 1) {
  return (bytes / 1073741824).toFixed(2)
}

export function MemorybytesToUnits(bytes, precision = 1) {
  return (bytes / (1024 * 1024)).toFixed(2)
}

export function NetworkbytesToUnits(bytes, precision = 1) {
  return (bytes / 1024).toFixed(2)
}
