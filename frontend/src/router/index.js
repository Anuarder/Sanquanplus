import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/information",
    name: "information",
    component: () => import("../views/Information.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
