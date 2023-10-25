import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/PokemonsView.vue'
import PokemonsDetailView from  '../views/PokemonsDetailView.vue'
import StadisticasView from  '../views/StadisticasView.vue'
import HabilidadesView from '../views/HabilidadesView.vue'
import MovimientoView from '../views/MovimientoView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonsView
  },
  {
    path: '/pokemon-detail/:name',
    component: PokemonsDetailView,
    children: [
      {
        path: 'staditicas',
        name: 'estaditica',
        component: StadisticasView
      },
      {
        path: 'habilidades',
        name: 'habilidades',
        component: HabilidadesView
      },
      {
        path: 'movimiento',
        name:'movimiento',
        component: MovimientoView
      }
    ]

  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
