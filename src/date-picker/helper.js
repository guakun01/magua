export default {
  firstDayOfMonth: function (date) {
    let [year, month] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth (date) {
    let [year, month] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
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
