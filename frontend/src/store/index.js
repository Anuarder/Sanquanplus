import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_link: 'http://192.168.1.38:3000',
    lang_val: 'en'
  },
  mutations: {
    setLang(state, lang) {
      state.lang_val = lang
    }
  }
})
