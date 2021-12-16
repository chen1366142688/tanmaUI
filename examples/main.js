import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from  '../components/lib/demo/index'
import Card from '../components/lib/card/index'
// import 'tanma-ui/dist/css/demo.css'
// import { Demo } from 'tanma-ui'

Vue.use(Demo) 
Vue.use(Card) 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
