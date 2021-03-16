import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/Index.vue'),
        // redirect: "home",
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('./views/Home.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('./views/About.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
