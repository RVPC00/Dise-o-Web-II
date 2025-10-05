
import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import NosotrosView from '../views/NosotroView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import SoporteView from '../views/SoporteView.vue'
import PagoView from '../views/PagoView.vue'
import PerfilView from '../views/PerfilView.vue'
import CrearCuentaView from '../views/CrearCuentaView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PrincipalView
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: NosotrosView
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: CatalogoView
  },
  {
    path: '/soporte',
    name: 'Soporte',
    component: SoporteView
  },
  {
    path: '/pago',
    name: 'Pago',
    component: PagoView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView
  },
  {
    path: '/crearcuenta',
    name: 'CrearCuenta',
    component: CrearCuentaView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
