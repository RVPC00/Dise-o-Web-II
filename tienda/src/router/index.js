import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import ProductoView from '../views/ProductoView.vue'
import VerProductoView from '../views/VerProductoView.vue'
import ClienteView from '../views/ClienteView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrincipalView,
    },
    {
      path: '/principal',
      name: 'principal',
      component: PrincipalView,
    },
    {
      path: '/producto',
      name: 'producto',
      component: ProductoView ,
    },
    {
      path: '/verproducto',
      name: 'verproducto',
      component: VerProductoView ,
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: ClienteView ,
    },

  ],
})

export default router
