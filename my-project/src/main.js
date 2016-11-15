import Vue from 'vue'
import Element from 'element-ui'
import App from './App'

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-default/index.css'

/* eslint-disable no-new */

Vue.use(Element)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
