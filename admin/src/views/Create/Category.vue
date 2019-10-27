<template>
  <div class="create-category">
    <div class="jumbotron">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="display-4">
          {{ title }} категорию 
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
export default {
  data(){
    return{
      title: "Создать",
      isEdit: false
    }
  },

}
</script>