import { createRouter, createWebHistory } from 'vue-router'
import WorkoutsUserView from '@/views/WorkoutsUserView.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import statsView from '../views/StatsView.vue'
import UsersView from '../views/UsersView.vue'
import session from '@/stores/Users'

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
      component: WorkoutsUserView,
      beforeEnter: (to, from) => {
        if(session.user?.firstName)
          return true;
      return false;
      }    
    },
    {
      path: '/stats',
      name: 'stats',
      component: statsView
    },
    {
      path: '/usersview',
      name: 'usersview',
      component: UsersView,
      beforeEnter: (to, from) => {
        if(session.user?.firstName)
          return true;
      return false;
      }    
    }
  ]
})

export default router
