<template>
  <div>
    <input type="text" @focus="onFocusInput" @blur="onBlurInput">
    <div v-if="popVisible" class="magua-date-picker-pop">
      <div class="magua-date-picker-nav">
        <span>icon1</span>
        <span>icon2</span>
        <span>2019年</span>
        <span>5月</span>
        <span>icon3</span>
        <span>icon4</span>
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
import GIcon from '../gua-icon.'
export default {
  name: 'MaGuaDatePicker',
  data () {
    return {
      popVisible: false,
      // mode: 'days' | 'months' | 'yaers'
      mode: 'days',
    }
  },
  methods: {
    onFocusInput () {
      this.popVisible = true
    },
    onBlurInput () {
      this.popVisible = false
    }
  }
}
</script>

<style>

</style>
