import Api from '@/services/Api'

export default {
  getProducts(){
    return Api().get('get_products');
  },
  getProductsByCategory(id){
    return Api().get(`get_products_by_category/${id}`);
  },
  getProductById(id){
    return Api().get(`get_product_by_id/${id}`);
  },
  createProduct(payload){
    return Api().get('create_product', payload);
  }
}