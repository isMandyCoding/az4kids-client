import Vue from 'vue';
import Router from 'vue-router';
import Visit from './views/Visit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'visit',
      component: Visit,
    },
    {
      path: '/agency',
      name: 'agency',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Agency.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Analytics.vue'),
    },
  ],
});
