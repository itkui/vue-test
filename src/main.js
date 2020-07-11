import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import webPlugin from 'vue-web-plugin';
import testPlugins from '@/plugins/testPlugins';
Vue.config.productionTip = false;
Vue.use(testPlugins);
Vue.use(webPlugin)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
