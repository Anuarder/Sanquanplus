import ProductServices from "../services/Products"

const state = {
  products: null,
  product: null
}
const getters = {
  products: (state) => (state.products),
  product: (state) => (state.product),
}
const mutations = {
  setProducts(state, products){
    state.products = products;
  },
  setProduct(state, product){
    state.product = product;
  }
}
const actions = {
  async getProducts({ commit }){
    try{
      const response = await ProductServices.getProducts();
      commit('setProducts', response.data.products);
    }catch(err){
      console.log(err);
    }
  },
  async getProductsByCategory({ commit }, id){
    try{
      const response = await ProductServices.getProductsByCategory(id);
      commit('setProducts', response.data.products);
    }catch(err){
      console.log(err);
    }
  },
  async getProductById({ commit }, id){
    try{
      const response = await ProductServices.getProductById(id);
      commit('setProduct', response.data.product);
    }catch(err){
      console.log(err);
    }
  },
}
export default {
  state, getters, mutations, actions
}