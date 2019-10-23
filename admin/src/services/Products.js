import Api from '@/services/Api'

export default {
  getProducts(){
    return Api().get('get_products');
  },
  createProduct(payload){
    return Api().get('create_product', payload);
  }
}