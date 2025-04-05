import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SistemasView from '../views/SistemasView.vue'
import SecretariadoView from '../views/SecretariadoView.vue'
import ContabilidadView from '../views/ContabilidadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
    path: '/sistemas',
  	name: 'sistemas',
  	component: SistemasView,
	},
	{
  	path: '/secretariado',
  	name: 'secretariado',
  	component: SecretariadoView,
	},
	{
  	path: '/contabilidad',
  	name: 'contabilidad',
  	component: ContabilidadView,
	},


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
