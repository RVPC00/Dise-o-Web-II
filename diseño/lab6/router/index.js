import { createRouter, createWebHistory } from 'vue-router'
import vec from './components/CompVector.vue'
import UnoView from '../views/UnoView.vue'
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
name: 'UnoView',
component: UnoView,
},
{
path:'/vec',
name:'vec',
component: vec
},
],
})
export default router