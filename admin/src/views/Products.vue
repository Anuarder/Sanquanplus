<template>
  <div class="products">
    <router-link class="btn btn-success btn-lg" to="/create-product">Добавить</router-link>
    <div class="products__container mt-3">
      <div class="product">
        <div class="card" style="width: 18rem;">
          <img 
            src="../assets/image.png" 
            class="card-img-top" 
            alt="...">
          <div class="card-body">
            <h5 class="card-title">HDPE Tarpaulin Extrusion Tape Line</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info">Редактировать</button>
              <button type="button" class="btn btn-danger">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <v-pagination></v-pagination> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  }
}
</script>
<style lang="scss" scoped>
.products{
  &__container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
  }
}
</style>