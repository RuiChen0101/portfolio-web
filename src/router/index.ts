import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Terminal from '../views/Terminal.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Terminal',
        component: Terminal
    },
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/Resume.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
