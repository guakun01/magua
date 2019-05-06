<template>
  <div style="border: 1px solid red;">
    <input type="text" @focus="onFocusInput" @blur="onBlurInput">
    <div v-if="popVisible" class="magua-date-picker-pop">
      <div class="magua-date-picker-nav">
        <span>
          <g-icon name="left" />
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
          <g-icon name="right" />
        </span>
      </div>
      <div class="magua-date-picker-panels">
        <div v-if="mode==='years'" class="magua-date-picker-content">年</div>
        <div v-else-if="mode==='months'" class="magua-date-picker-content">月</div>
        <div v-else class="magua-date-picker-content">日</div>
      </div>
      <div class="magua-date-picker-actions"></div>
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
      popVisible: false,
      // mode: 'days' | 'months' | 'yaers'
      mode: 'days',
      value: new Date(),
    }
  },
  computed: {
    VisibleDays () {
    }
  },
  mounted () {
    let date = this.value
    
    let first = helper.firstDayOfMonth(date)
    let last = helper.lastDayOfMonth(date)

    console.log(first)
    console.log(last)
    // let firstDay = date.setDate(1)
    // console.log(firstDay)
    // date.setDate(1)
    // date.setMonth(date.getMonth() + 1)
    // let lastDay = date.setDate(0)
    // console.log(new Date(lastDay))
  },
  methods: {
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
