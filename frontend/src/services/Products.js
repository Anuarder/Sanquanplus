import Api from '@/services/Api'

export default {
  getProductsByCategory(id) {
    return Api().get(`/get_products_by_category/${id}`);
  },
  getProductById(id) {
    return Api().get(`/get_product_by_id/${id}`);
  },
  getSearchProducts(text) {
    return Api().get(`/get_search_products/${text}`);
  }
}