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
    path: '/category/:action',
    name: 'create-category',
    component: () => import('../views/Create/Category.vue'),
  },
  {
    path: '/product/:action',
    name: 'product',
    component: () => import('../views/Create/Product.vue'),
    props: true
  },
  {
    path: '/product-view/:id',
    name: 'product-view',
    component: () => import('../views/Product.vue'),
    props: true
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
