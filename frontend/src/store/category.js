import CategoryServices from '../services/Categories.js'

const state = {
  categories: null
}
const getters = {
  categories: (state) => (state.categories)
}
const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}
const actions = {
  async getCategories({ commit }) {
    try {
      const response = await CategoryServices.getCategories();
      commit('setCategories', response.data.categories);
    }catch(err){
      console.log(err);
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}