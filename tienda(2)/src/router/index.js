import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import PagPrin from '../views/PagPrin.vue'
import Mostrar from '../views/Mostrar.vue'
import Guardar from '../views/Guardar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
  	path: '/',
  	name: 'app',
  	component: App,
	},
	{
  	path: '/prin',
  	name: 'prin',
  	component:PagPrin,
	},
	{
  	path: '/guardar',
  	name: 'guardar',
  	component:Guardar ,
	},
  {
  	path: '/mostrar',
  	name: 'mostrar',
  	component:Mostrar ,
	},
  ], } )
 export default router
