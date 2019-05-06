export default {
  firstDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    let firstDay = new Date(year, month, 1)
    return firstDay
  },
  lastDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    let lastDay = new Date(year, month + 1, 0)
    return lastDay
  },
  // [begin, end)
  range (begin, end) {
    let array = []
    for (let i = begin; i < end; i++) {
      array.push(i)
    }
    return array
  },
  getYearMonthDate,
}

function getYearMonthDate (date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [ year, month, day ]
}