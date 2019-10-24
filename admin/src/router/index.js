import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'products'
  },
  {
    path: '/products/:id',
    name: 'products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/create-category',
    name: 'create-category',
    component: () => import('../views/Create/Category.vue'),
  },
  {
    path: '/create-product',
    name: 'create-product',
    component: () => import('../views/Create/Product.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
