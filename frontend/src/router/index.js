import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/catalog_result/:id',
    name: 'catalog_result',
    component: () => import('../views/CatalogResult.vue')
  },
  {
    path: '/search/:text',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
