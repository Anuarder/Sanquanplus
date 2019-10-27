<template>
  <div class="create-product">
    <div class="jumbotron">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="display-4">
          {{ title }} товар 
        </h1>
        <div>
          <button 
            type="submit"
            v-if="isEdit"
            class="btn btn-danger btn-lg">
            Удалить
          </button>
        </div>
      </div>
      <hr class="my-4">
      <form>
      <div class="form-group">
        <label>Название</label>
        <input 
          type="text" 
          class="form-control  form-control-lg" 
          placeholder="Введите название на английском" />
        <input 
          type="text" 
          class="form-control  form-control-lg mt-2" 
          placeholder="Введите название на русском" />
      </div>
      <div class="form-group">
        <label>Описание</label>
        <textarea 
          type="text" 
          class="form-control  form-control-lg" 
          placeholder="Введите описание на английском" />
        <textarea 
          type="text" 
          class="form-control  form-control-lg mt-2" 
          placeholder="Введите описание на русском" />
      </div>
      <div class="form-group">
        <label>Фотографии</label>
        <input type="file" multiple class="form-control-file">
      </div>
      <div class="form-group">
        <label>Категория</label>
        <select class="form-control" v-model="category">
          <option value="">
            Выберите категорию
          </option>
          <option  
            v-for="item in categories"
            :key="item._id"
            :value="item">
            {{item.name.ru}}
          </option>
        </select>
      </div>
      <div class="form-group" v-if="!isEmpty(category.subcategories)">
        <label>Суб. Категория</label>
        <select class="form-control">
          <option  
            v-for="item in category.subcategories"
            :key="item._id">
            {{item.name.ru}}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Характеристики</label>
        <textarea 
          type="text" 
          class="form-control  form-control-lg" 
          placeholder="Введите характеристики (JSON)" />
      </div>
      <div class="checkbox-container">
        <input type="checkbox" class="checkbox">
        <span class="ml-3">
          Скрыть
        </span>
      </div>
      <div class="mt-3" v-if="!isEdit">
        <button 
          type="submit"
          class="btn btn-info btn-lg">
          Создать
        </button>
      </div>
      <div class="mt-3" v-else>
        <button 
          type="submit"
          class="btn btn-success btn-lg">
          Сохранить
        </button>
        <button 
          type="submit"
          class="btn btn-danger btn-lg ml-3">
          Отмена
        </button>
      </div>
    </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
export default {
  props: ['action'],
  data(){
    return{
      category: ""
    }
  },
  computed: {
    ...mapGetters(['categories']),
    title() {
      return this.action === 'create' ? 'Добавить' : 'Редактировать';
    },
    isEdit() {
      return this.action === 'edit'
    }
  },
  methods: {
    ...mapActions([]),
    isEmpty(value){
      return isEmpty(value)
    }
  }
}
</script>