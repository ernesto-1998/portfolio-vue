import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import HomePage from '@/components/main-content/frames/HomePage.vue'
import ProjectsPage from '@/components/main-content/frames/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsPage,
        },
      ]
    }
  ]
})

export default router
