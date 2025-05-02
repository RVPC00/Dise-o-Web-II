import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import AnimalesView from '@/views/AnimalesView.vue'
import DomadoresView from '@/views/DomadoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/animales',
      name: 'animales',
      component:AnimalesView ,
    },
    {
      path: '/domadores',
      name: 'domadores',
      component:DomadoresView ,
    },
  ],
})

export default router
