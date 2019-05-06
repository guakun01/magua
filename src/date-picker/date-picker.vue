<template>
  <div style="border: 1px solid red;">
    <input type="text" @focus="onFocusInput" @blur="onBlurInput">
    <div v-if="popVisible" class="magua-date-picker-pop">
      <div class="magua-date-picker-nav">
        <span>
          <g-icon name="jiantou_shangyiye_o" />
        </span>
        <span>
          <g-icon name="left" />
        </span>
        <span @click="onClickYear">2019年</span>
        <span @click="onClickMonth">5月</span>
        <span>
          <g-icon name="right" />
        </span>
        <span>
          <g-icon name="jiantou_xiayiye_o" />
        </span>
      </div>
      <div class="magua-date-picker-panels">
        <div v-if="mode==='years'" class="magua-date-picker-content">年</div>
        <div v-else-if="mode==='months'" class="magua-date-picker-content">月</div>
        <div v-else class="magua-date-picker-content">
          <div :class="c('weekDays')">
            <span v-for="i in helper.range(0, 7)" :key="`d${i}`">
              {{weekDays[i]}}
            </span>
          </div>
          <div v-for="i in helper.range(1, 42/7 + 1)" :class="c('row')" :key="`r${i}`">
            <span v-for="j in helper.range(1, 7 + 1)" :class="c('col')" :key="`c${j}`">
              {{visibleDays[(i - 1) * 7 + j - 1].getDate()}}
            </span>
          </div>
        </div>
      </div>
      <div class="magua-date-picker-actions">
        <button>清除</button>
      </div>
    </div>
  </div>
</template>

<script>
import GIcon from '../icon'
import helper from './helper'

export default {
  name: 'MaGuaDatePicker',
  components: {
    GIcon,
  },
  data () {
    return {
      popVisible: true,
      // mode: 'days' | 'months' | 'yaers'
      mode: 'days',
      value: new Date(),
      helper,
      weekDays: [ '日', '一', '二',  '三',  '四',  '五',  '六',]
    }
  },
  computed: {
    visibleDays () {
      let date = this.value
      let first = helper.firstDayOfMonth(date)
      let last = helper.lastDayOfMonth(date)
      let [year, month, day] = helper.getYearMonthDate(date)
      let weekdayOfFirst = first.getDay()
      // 一天是 86400s
      let x = first - weekdayOfFirst * 3600 * 24 * 1000
      let array = []
      for (let i = 0; i < 42; i++) {
        array.push(new Date(x + i * 3600 * 24 * 1000))
      }
      return array
    }
  },
  mounted () {
  },
  methods: {
    c (className) {
      return `magua-date-picke-${className}`
    },
    onFocusInput () {
      this.popVisible = true
    },
    onBlurInput () {
      // 使用 v-click-outside 改造
      // 然后又使用 popover 优化
      // this.popVisible = false
    },
    onClickYear () {
      this.mode = 'years'
    },
    onClickMonth () {
      this.mode = 'months'
    },
  }
}
</script>

<style>

</style>
