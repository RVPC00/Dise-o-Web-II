import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '@/views/PrincipalView.vue'
import GaleriaView from '@/views/GaleriaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
  	path: '/',
  	name: 'principal',
  	component: PrincipalView,
	},
	{
  	path: '/galeria',
  	name: 'galeria',
  	component:GaleriaView ,
	},
	{
  	path: '/noticias',
  	name: 'noticias',
  	component:NoticiasView ,
	},
  ], } )
  export default router
