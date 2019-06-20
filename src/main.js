import Vue from 'vue'
import App from './App.vue'
import CoreUI from '@coreui/coreui/dist/css/coreui.min.css'
//import CoreUIJS from '@coreui/coreui/dist/js/coreui.min.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
