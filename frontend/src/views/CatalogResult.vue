<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="catalog-result page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="container">
          <div class="catalog-result__products">
            <v-product-card 
              v-for="product in products"
              :key="product._id"
              :product="product">
            </v-product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsServices from '../services/Products';
export default {
  data() {
    return {
      products: []
    }
  },
  computed: {
    filterProducts: (el) => (el.name)
  },
  created() {
    this.getProductsByCategory(this.$route.params.id);
  },
  methods: {
    async getProductsByCategory(id) {
       try {
         const response = await ProductsServices.getProductsByCategory(id);
         this.products = response.data.products;
       }catch(err) {
         console.log(err);
       }
    }
  }
}
</script>
<style lang="scss" scoped>
.catalog-result {
  &__products {
    padding: 0 2rem;
    margin-top: 5rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
  }
}
</style>