import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Terminal from '../views/Terminal.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Terminal',
        component: Terminal
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
