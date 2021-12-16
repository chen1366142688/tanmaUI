import Vue from 'vue'
import App from './App.vue'
import 'tanma-ui/dist/css/index.css';
import TUI from 'tanma-ui';
Vue.use(TUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
