import Api from '@/services/Api'

export default {
  getCategories() {
    return Api().get("/get_categories");
  }
}