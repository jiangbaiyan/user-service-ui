import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/User/List')
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router
