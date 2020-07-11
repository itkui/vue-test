import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/html2',
    name: 'html2',
    component: () => import('../views/Html2Canvas.vue'),
  },
  {
    path: '/lodash',
    name: 'lodash',
    component: () => import('../views/Lodash.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
