import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import WorkPage from '@/pages/WorkPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsPage
        },
        {
          path: 'work-experience',
          name: 'work',
          component: WorkPage
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactPage
        }
      ]
    }
  ]
})

export default router
