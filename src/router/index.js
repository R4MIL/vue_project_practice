import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import BasketPage from '@/views/BasketPage.vue'
import MainDescriptionPage from '@/views/DescriptionPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  },
  {
    path: '/description/:id',
    name: 'description',
    component: MainDescriptionPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
