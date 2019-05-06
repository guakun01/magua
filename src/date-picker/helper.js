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
  }
}

function getYearMonthDate (date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [ year, month, day ]
}