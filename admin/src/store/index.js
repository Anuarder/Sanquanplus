import Vue from 'vue'
import Vuex from 'vuex'
import categories from "./categories"
import products from "./products"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    products
  }
})
