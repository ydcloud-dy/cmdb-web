export function AgeFormat(value) {
  if (value == null) {
    return ''
  }
  const begin = new Date(value)
  const end = new Date()
  const dateDiff = end.getTime() - begin.getTime()
  const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) // 计算出相差天数
  let result = ''
  if (dayDiff > 0) {
    result = result + dayDiff + ' days'
    return result
  }
  const leave1 = dateDiff % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000)) // 计算出小时数
  if (hours > 0) {
    result = result + hours + ' hours'
    return result
  }
  const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000)) // 计算相差分钟
  if (minutes > 0) {
    result = result + minutes + ' mins'
    return result
  }
  // 计算相差秒数
  const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000)
  if (seconds > 0) {
    result = result + seconds + ' secs'
    return result
  }
  return result
}
