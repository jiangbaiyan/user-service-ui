import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './plugins/element.js'
import './plugins/nos.js'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.directive('title', {
    inserted: function (el) {
        document.title = el.dataset.title
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
