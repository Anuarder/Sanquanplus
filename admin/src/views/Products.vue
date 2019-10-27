<template>
  <div class="products">
    <router-link 
      class="btn btn-success btn-lg" 
      to="/product/create">
      Добавить
    </router-link>
    <div class="products__container mt-3">
      <div class="product" v-for="item in products" :key="item._id">
        <router-link :to="`/product-view/${item._id}`" class="card-link text-dark">
          <div class="card" style="width: 18rem;">
            <img 
              :src="`http://localhost:3000/static/${item.images[0]}`" 
              class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">
                {{item.name.en}}
              </h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['products'])
  },
  created() {
    this.getProducts(this.$route.params.id)
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