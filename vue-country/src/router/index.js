import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Home.vue'
import Country from '../components/Country'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Countries
  },

  {
    path:'/country/:id',
    name:'country',
    component:Country,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
