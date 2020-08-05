import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import webPlugin from 'vue-web-plugin';
import testPlugins from '@/plugins/testPlugins';
import VueCompositionAPI from '@vue/composition-api';
import Vant from 'vant';
import 'vant/lib/index.css'
import './registerServiceWorker'

Vue.config.productionTip = false;


Vue.use(Vant)
Vue.use(testPlugins);
Vue.use(webPlugin);
Vue.use(VueCompositionAPI)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
