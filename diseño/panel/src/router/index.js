import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import UnoView from '@/views/UnoView.vue'
import DosView from '@/views/DosView.vue'
import TresView from '@/views/TresView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
  	path: '/',
  	name: 'app',
  	component: App,
	},
	{
  	path: '/uno',
  	name: 'uno',
  	component:UnoView ,
	},
	{
  	path: '/dos',
  	name: 'dos',
  	component:DosView ,
	},
  {
  	path: '/tres',
  	name: 'tres',
  	component:TresView ,
	},
  ], } )
 export default router
