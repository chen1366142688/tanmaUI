import Vue from 'vue'
import App from './App.vue'
import 'tanma-ui/dist/css/index.css';
import TUI from 'tanma-ui';
Vue.use(TUI);
import Table from '../components/lib/table'
import '../components/css/table.scss'

Vue.config.productionTip = false
Vue.use(Table)
new Vue({
  render: h => h(App),
}).$mount('#app')
