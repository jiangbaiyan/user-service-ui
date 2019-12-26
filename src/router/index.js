import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // 登录页
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login')
    },
    // 用户列表
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/User/List')
    },
    // 资源节点列表
    {
        path: '/resource',
        name: 'resource',
        component: () => import('../views/Resource/List')
    },
    // 权限列表
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth/List')
    },
    // 临时
    {
        path: '/present',
        name: 'present',
        component: () => import('../views/Present')
    }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router
