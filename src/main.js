import Vue from 'vue'
import Board from './board'

import GButton from './gua-button'

Vue.component('gua-button', GButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(Board)
}).$mount('#app')
