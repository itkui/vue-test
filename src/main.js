import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import testPlugins from '@/plugins/testPlugins';
Vue.config.productionTip = false;
Vue.use(testPlugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
