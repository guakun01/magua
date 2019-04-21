import Vue from 'vue'
import Board from './board'

import GButton from './gua-button'
import GIcon from './gua-icon'

Vue.component('gua-button', GButton)
Vue.component('gua-icon', GIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(Board)
}).$mount('#app')
