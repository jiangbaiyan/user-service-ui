import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/User')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add')
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router
