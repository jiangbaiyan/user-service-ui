import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // 用户列表
    {
        path: '/',
        name: 'list',
        component: () => import('../views/User/List')
    },
    // 登录页
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login')
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
    }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router
