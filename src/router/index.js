import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import news from '../views/news'
import Fome from '../views/Fome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Fome',
    name: 'Fome',
    component: Fome
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
]

const router = new VueRouter({
  routes
})

export default router
