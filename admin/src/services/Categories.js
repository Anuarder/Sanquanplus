import Api from '@/services/Api'

export default {
  getCategories(){
    return Api().get('get_categories');
  },
  createCategory(payload){
    return Api().post('create_category', payload);
  }
}