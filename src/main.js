import Vue from 'vue'
import Board from './board'

Vue.config.productionTip = false

new Vue({
  render: h => h(Board)
}).$mount('#app')
