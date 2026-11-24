
import { createRouter, createWebHistory } from 'vue-router'

import DolaresPesos from '../components/DolaresPesos.vue'
import PesosDolares from '../components/PesosDolares.vue'
import EurosPesos from '../components/EurosPesos.vue'
import PesosEuros from '../components/PesosEuros.vue'
import RealesPesos from '../components/RealesPesos.vue'

const routes = [
  { path: '/', redirect: '/dolares-pesos' },
  { path: '/dolares-pesos', component: DolaresPesos },
  { path: '/pesos-dolares', component: PesosDolares },
  { path: '/euros-pesos', component: EurosPesos },
  { path: '/pesos-euros', component: PesosEuros },
  { path: '/reales-pesos', component: RealesPesos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
