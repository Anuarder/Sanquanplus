import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'
import category from './category'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    request,
    category,
    product
  }
})
