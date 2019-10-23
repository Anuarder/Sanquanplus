<template>
  <div id="app">
    <form class="input-group p-3">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Search">
      <div class="input-group-append">
        <button 
          class="btn btn-outline-dark" 
          type="submit">
          Search
        </button>
      </div>
    </form>
    <div class="content p-3">
      <div class="content__categories">
        <v-categories></v-categories>
      </div>
      <div class="content__container ml-3">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import VCategories from "./components/Categories"
export default {
  components: {
    VCategories
  }
}
</script>
<style lang="scss" scoped>
.content{
  display: flex;
  &__categories{
    width: 30%;
  }
  &__container{
    width: 70%;
  }
}
</style>