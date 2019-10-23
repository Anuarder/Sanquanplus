import ProductServices from "../services/Products"

const state = {
  products: null
}
const getters = {
  products: (state) => (state.products)
}
const mutations = {
  setProducts(state, products){
    state.products = products;
  }
}
const actions = {
  async getProducts({ commit }, id){
    try{
      const response = await ProductServices.getProducts(id);
      commit('setProducts', response.data.products);
    }catch(err){
      console.log(err);
    }
  }
}
export default {
  state, getters, mutations, actions
}