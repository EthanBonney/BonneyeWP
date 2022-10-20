import { createRouter, createWebHistory } from 'vue-router'
import WorkoutsUserView from '@/views/WorkoutsUserView.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import statsView from '../views/StatsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WorkoutsView
    },
    {
      path: '/user',
      name: 'user',
      component: WorkoutsUserView
    },
    {
      path: '/stats',
      name: 'stats',
      component: statsView
    }
  ]
})

export default router
