import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './plugins/element.js'

import nos from 'nos-ui-common/dist/nos';
Vue.use(nos);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
