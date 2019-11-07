import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_link: 'https://apisanquan.tella.kz',
    lang_val: 'en'
  },
  mutations: {
    setLang(state, lang) {
      state.lang_val = lang
    }
  }
})
