import { formatTimeToStr } from '@/utils/date'

export const formatDate = (time) => {
  if (time !== null && time !== '') {
    var date = new Date(time) - 1
    return formatTimeToStr(date, 'yyyy年MM月dd日 hh:mm:ss')
  } else {
    return ''
  }
}
