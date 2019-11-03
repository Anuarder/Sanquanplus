import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'
import category from './category'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_link: 'http://192.168.1.38:3000'
  },
  modules: {
    request,
    category,
    product
  }
})
